import { defineStore } from 'pinia'
import { usePreference } from '@/store/preference'
import { reactive, ref, watch } from 'vue'
import { kennef_axios } from '@/store/api'
import { groupBy, mapValues } from 'lodash'
import { AddToCartPayload, Cart, CartAddress, CartItem, CartTotal, PaymentMethod, ShippingMethod } from '@/types/cart'
import { Product } from '@/types/product'
import { productsStore } from '@/store/products'

export const useCart = defineStore('cart', () => {
	const { setWatcher } = usePreference('cart')
	const prodStore = productsStore()

	const cartId = ref<Cart['id']>()
	const cart = ref<Cart>()
	const total = ref<CartTotal>()
	const shippingMethod = ref<ShippingMethod>()
	const paymentMethod = ref<PaymentMethod>()
	const checkout = reactive<{
		shippingAddress: CartAddress
		billingAddress: CartAddress
		shippingMethods: ShippingMethod[]
		paymentMethods: PaymentMethod[]
	}>({
		// @ts-ignore
		shippingAddress: {
			street: [],
			country_id: 'IT'
		},
		// @ts-ignore
		billingAddress: {
			street: [],
			country_id: 'IT'
		},
		shippingMethods: [],
		paymentMethods: []
	})

	const getCart = () => {
		if (cartId.value)
			return Promise.allSettled([
				kennef_axios.get<Cart>(`guest-carts/${cartId.value}`).then((res) => {
					if (res.data.is_active) cart.value = res.data
					else cartId.value = undefined
				}),
				getTotal(),
				getBillingAddress()
			])
	}

	const getShippingMethods = () =>
		kennef_axios
			.post(`guest-carts/${cartId.value}/estimate-shipping-methods`, {
				address: checkout.billingAddress
			})
			.then((res) => (checkout.shippingMethods = res.data))
	const getBillingAddress = () => {
		kennef_axios
			.get<CartAddress>(`guest-carts/${cartId.value}/billing-address`)
			.then((res) => (checkout.billingAddress = { ...res.data, country_id: res.data.country_id ?? 'IT' }))
	}

	const setShippingInformation = () => {
		return kennef_axios
			.post(`guest-carts/${cartId.value}/shipping-information`, {
				addressInformation: {
					shipping_address: checkout.billingAddress,
					billing_address: checkout.billingAddress,
					shipping_method_code: shippingMethod.value?.method_code,
					shipping_carrier_code: shippingMethod.value?.carrier_code
				}
			})
			.then(getCart)
	}

	const placeOrder = () =>
		kennef_axios.put(`guest-carts/${cartId.value}/order`, {
			paymentMethod: {
				method: paymentMethod.value?.code
			}
		})

	const setBillingAddress = () => {
		checkout.billingAddress.id = undefined
		return kennef_axios
			.post(`guest-carts/${cartId.value}/billing-address`, {
				address: checkout.billingAddress,
				useForShipping: true
			})
			.then(getBillingAddress)
	}

	const getPaymentMethods = () =>
		kennef_axios
			.get(`guest-carts/${cartId.value}/payment-methods`)
			.then((res) => (checkout.paymentMethods = res.data))

	const createCart = () => kennef_axios.post<string>('guest-carts').then((res) => (cartId.value = res.data))
	const medias = ref<Record<Product['sku'], string[]>>({})

	const getMedias = async (items: CartItem[]) => {
		const skus = items.map((item) => item.sku)
		const mediaEntries = await Promise.allSettled(skus.map((sku) => prodStore.getMedias(sku)))
		const skuMedia = skus.map((sku, idx) => {
			const medias = mediaEntries[idx].status === 'fulfilled' ? (mediaEntries[idx] as any).value : []
			return {
				sku,
				media: prodStore.getImgUrl({ media_gallery_entries: medias } as Product)
			}
		})
		medias.value = mapValues(groupBy(skuMedia, 'sku'), (value) => value[0]?.media || [])
	}

	const getTotal = async () =>
		kennef_axios.get<CartTotal>(`guest-carts/${cartId.value}/totals`).then((res) => (total.value = res.data))

	const addToCart = async ({ sku, qty }: AddToCartPayload) => {
		if (!cartId.value) await createCart()
		return await kennef_axios
			.post<CartItem>(`guest-carts/${cartId.value}/items`, {
				cartItem: {
					sku,
					qty,
					quote_id: cartId.value
				}
			})
			.then(getCart)
	}
	const removeItem = async (itemId: CartItem['item_id']) =>
		kennef_axios.delete(`guest-carts/${cartId.value}/items/${itemId}`).then(getCart)

	const updateItem = async (itemId: CartItem['item_id'], qty: number) =>
		kennef_axios
			.put(`guest-carts/${cartId.value}/items/${itemId}`, {
				cartItem: {
					qty,
					quote_id: cartId.value
				}
			})
			.then(getCart)

	watch(cartId, getCart)
	watch(
		() => [cart.value?.items, cartId.value],
		() => cart.value?.items && getMedias(cart.value.items)
	)

	setWatcher({ cartId })
	return {
		cartId,
		cart,
		checkout,
		total,
		medias,
		shippingMethod,
		paymentMethod,
		createCart,
		placeOrder,
		getCart,
		addToCart,
		setShippingInformation,
		setBillingAddress,
		getShippingMethods,
		getPaymentMethods,
		removeItem,
		updateItem
	}
})
