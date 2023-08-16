<template>
	<v-form v-model="valid" class="mx-auto flex-col gap-1" @submit.prevent>
		<Textfield
			v-model="store.checkout.billingAddress.street[0]"
			:rules="[(v) => !!v]"
			label="Indirizzo *"
			outlined
		/>
		<Textfield v-model="store.checkout.billingAddress.city" :rules="[(v) => !!v]" label="Città *" outlined />
		<div class="tw-relative" tabindex="-1" @blur="regionMenu = false" @click="regionMenu = true">
			<Textfield
				v-model="regionField"
				:rules="[(v) => !!v && region?.name === v]"
				label="Provincia *"
				outlined
				@input="regionMenu = true"
			/>

			<div class="tw-absolute tw-top-0 tw-right-0 tw-h-full tw-flex tw-items-center tw-pr-3">
				<v-icon :class="{ 'tw-rotate-180': regionMenu }" class="transition-all">mdi-chevron-down</v-icon>
			</div>
			<div
				v-if="regionMenu"
				class="tw-absolute tw-left-0 tw-w-full tw-z-[9999] white tw-shadow-md tw-border tw-border-gray-300 tw-overflow-y-auto tw-max-h-60"
				style="border-color: #9e9e9e !important"
			>
				<div
					v-for="reg in regionsList"
					:key="reg.id"
					v-ripple
					class="tw-p-3 tw-py-3 tw-cursor-pointer tw-border-b tw-border-gray-300 tw-bg-white tw-text-body-1"
					@click.stop="store.checkout.billingAddress.region_id = toNumber(reg.id)"
				>
					<p class="ma-0">{{ reg.name }}</p>
				</div>
			</div>
		</div>

		<Textfield
			v-model="store.checkout.billingAddress.postcode"
			:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length === 5]"
			label="CAP *"
			outlined
		/>
		<Textfield v-model="store.checkout.billingAddress.vat_id" label="Partita IVA" outlined />
		<Textfield
			v-if="false"
			v-model="store.checkout.billingAddress.custom_attributes"
			label="Codice Fiscale"
			outlined
		/>
		<!-- no fields on magento -->
		<Textfield
			v-model="store.checkout.billingAddress.telephone"
			:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length >= 8 && v?.length <= 10]"
			label="Telefono *"
			outlined
		/>
		<v-checkbox v-model="shippingSameAsBilling" class="ma-0" hide-details label="Stesso indirizzo di spedizione" />

		<template v-if="!shippingSameAsBilling">
			<Textfield
				v-model="store.checkout.shippingAddress.street[0]"
				:rules="[(v) => !!v]"
				label="Indirizzo *"
				outlined
			/>
			<Textfield v-model="store.checkout.shippingAddress.city" :rules="[(v) => !!v]" label="Città *" outlined />
			<div
				class="tw-relative"
				tabindex="-1"
				@blur="regionMenuShipping = false"
				@click="regionMenuShipping = true"
			>
				<Textfield
					v-model="regionFieldShipping"
					:rules="[(v) => !!v && regionShipping?.name === v]"
					label="Provincia *"
					outlined
					@input="regionMenuShipping = true"
				/>

				<div class="tw-absolute tw-top-0 tw-right-0 tw-h-full tw-flex tw-items-center tw-pr-3">
					<v-icon :class="{ 'tw-rotate-180': regionMenuShipping }" class="transition-all"
						>mdi-chevron-down
					</v-icon>
				</div>
				<div
					v-if="regionMenuShipping"
					class="tw-absolute tw-left-0 tw-w-full tw-z-[9999] white tw-shadow-md tw-border tw-border-gray-300 tw-overflow-y-auto tw-max-h-60"
					style="border-color: #9e9e9e !important"
				>
					<div
						v-for="reg in regionsListShipping"
						:key="reg.id"
						v-ripple
						class="tw-p-3 tw-py-3 tw-cursor-pointer tw-border-b tw-border-gray-300 tw-bg-white tw-text-body-1"
						@click.stop="store.checkout.shippingAddress.region_id = toNumber(reg.id)"
					>
						<p class="ma-0">{{ reg.name }}</p>
					</div>
				</div>
			</div>

			<Textfield
				v-model="store.checkout.shippingAddress.postcode"
				:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length === 5]"
				label="CAP *"
				outlined
			/>
			<Textfield v-model="store.checkout.shippingAddress.vat_id" label="Partita IVA" outlined />
			<Textfield
				v-if="false"
				v-model="store.checkout.shippingAddress.custom_attributes"
				label="Codice Fiscale"
				outlined
			/>
			<!-- no fields on magento -->
			<Textfield
				v-model="store.checkout.shippingAddress.telephone"
				:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length >= 8 && v?.length <= 10]"
				label="Telefono *"
				outlined
			/>
		</template>
		<StepperActions :valid="valid" class="mt-8" @next="validate" @prev="$emit('prev')" />
	</v-form>
</template>
<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useCart } from '@/store/cart'
import { Country, useCountries } from '@/store/countries'
import { toNumber } from 'lodash'

const emit = defineEmits<{
	next: void
	prev: void
	isBilling?: boolean
}>()

const store = useCart()
const countriesStore = useCountries()
const valid = ref(false)
const regionField = ref('')
const regionMenu = ref(false)
const regionFieldShipping = ref('')
const regionMenuShipping = ref(false)
const shippingSameAsBilling = ref(true)

const italy = computed<Country | undefined>(() => countriesStore.idCountry['IT'])
const region = computed<Country['available_regions'][number] | undefined>(() =>
	(italy.value?.available_regions || []).find((r) => toNumber(r.id) === store.checkout.billingAddress.region_id)
)
const regionsList = computed(() =>
	(italy.value?.available_regions || []).filter((r) => r.name.toLowerCase().includes(regionField.value.toLowerCase()))
)
const regionShipping = computed<Country['available_regions'][number] | undefined>(() =>
	(italy.value?.available_regions || []).find((r) => toNumber(r.id) === store.checkout.shippingAddress.region_id)
)
const regionsListShipping = computed(() =>
	(italy.value?.available_regions || []).filter((r) =>
		r.name.toLowerCase().includes(regionFieldShipping.value.toLowerCase())
	)
)

watch(region, () => {
	regionField.value = region.value?.name ?? ''
	store.checkout.billingAddress = {
		...store.checkout.billingAddress,
		region_id: toNumber(region.value?.id),
		region: region.value?.name,
		region_code: region.value?.code
	}
	regionMenu.value = false
})

watch(regionShipping, () => {
	regionFieldShipping.value = regionShipping.value?.name ?? ''
	store.checkout.shippingAddress = {
		...store.checkout.shippingAddress,
		region_id: toNumber(regionShipping.value?.id),
		region: regionShipping.value?.name,
		region_code: regionShipping.value?.code
	}
	regionMenuShipping.value = false
})
const validate = async () => {
	if (valid.value) {
		if (shippingSameAsBilling.value) store.checkout.shippingAddress = store.checkout.billingAddress
		await store.setBillingAddress()
		await store.getShippingMethods()
		if (!store.checkout.shippingMethods.length) {
			await store.setShippingInformation()
			await store.getPaymentMethods()
			// @ts-ignore
			emit('next')
		}
		// @ts-ignore
		emit('next')
	}
}
onMounted(countriesStore.getCountries)
</script>
<style scoped></style>
