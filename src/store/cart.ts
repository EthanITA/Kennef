import { defineStore } from 'pinia'
import { usePreference } from '@/store/preference'
import { reactive, ref, watch } from 'vue'
import { kennef_axios } from '@/store/api'
import { groupBy, mapValues } from 'lodash'
import { AddToCartPayload, Cart, CartAddress, CartItem, CartTotal } from '@/types/cart'
import { Product } from '@/types/product'
import { productsStore } from '@/store/products'

export const useCart = defineStore('cart', () => {
	const { setWatcher } = usePreference('cart')
	const prodStore = productsStore()

	const cartId = ref<Cart['id']>()
	const cart = ref<Cart>()
	const total = ref<CartTotal>()
	const checkout = reactive<{
		shippingAddress: CartAddress
		billingAddress: CartAddress
		shippingMethod: any
		paymentMethod: any
	}>({
		// @ts-ignore
		shippingAddress: {
			street: []
		},
		// @ts-ignore
		billingAddress: {
			street: []
		},
		shippingMethod: {},
		paymentMethod: {}
	})

	const getCart = () => {
		if (cartId.value)
			return Promise.allSettled([
				kennef_axios.get<Cart>(`guest-carts/${cartId.value}`).then((res) => (cart.value = res.data)),
				getTotal(),
				getBillingAddress()
			])
	}

	const getBillingAddress = () =>
		kennef_axios
			.get<CartAddress>(`guest-carts/${cartId.value}/billing-address`)
			.then((res) => (checkout.billingAddress = res.data))

	const setBillingAddress = () => {
		checkout.billingAddress.id = undefined
		return kennef_axios
			.post(`guest-carts/${cartId.value}/billing-address`, {
				address: checkout.billingAddress
			})
			.then(getBillingAddress)
	}

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
		createCart,
		getCart,
		addToCart,
		setBillingAddress,
		removeItem,
		updateItem
	}
})
