<template>
	<v-form v-model="valid" class="mx-auto flex-col gap-1" @submit.prevent>
		<Textfield
			v-model="store.checkout.billingAddress.street[0]"
			:rules="[(v) => !!v]"
			label="Indirizzo *"
			outlined
		/>
		<Textfield v-model="store.checkout.billingAddress.city" :rules="[(v) => !!v]" label="Città *" outlined />
		<div class="tw-relative" tabindex="2" @click="regionMenu = !regionMenu">
			<Textfield :rules="[(v) => !!v && region?.name === v]" :value="regionField" label="Provincia *" outlined />

			<div class="tw-absolute tw-top-0 tw-right-0 tw-h-full tw-flex tw-items-center tw-pr-3">
				<v-icon :class="{ 'tw-rotate-180': regionMenu }" class="transition-all">mdi-chevron-down</v-icon>
			</div>
			<div
				v-if="regionMenu"
				class="tw-absolute tw-left-0 tw-w-full tw-z-[9999] white tw-shadow-md tw-border tw-border-gray-300 tw-overflow-y-auto tw-max-h-60"
				style="border-color: #9e9e9e !important"
			>
				<div
					v-for="reg in italy?.available_regions || []"
					:key="reg.id"
					v-ripple
					class="tw-p-3 tw-py-3 tw-cursor-pointer tw-border-b tw-border-gray-300 tw-bg-white tw-text-body-1"
					@click="store.checkout.billingAddress.region_id = toNumber(reg.id)"
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

const italy = computed<Country | undefined>(() => countriesStore.idCountry['IT'])
const region = computed<Country['available_regions'][number] | undefined>(() =>
	(italy.value?.available_regions || []).find((r) => toNumber(r.id) === store.checkout.billingAddress.region_id)
)
watch(region, () => {
	regionField.value = region.value?.name ?? ''
	store.checkout.billingAddress = {
		...store.checkout.billingAddress,
		region_id: toNumber(region.value?.id),
		region: region.value?.name,
		region_code: region.value?.code
	}
})

const validate = async () => {
	if (valid.value) {
		await store.setBillingAddress()
		await store.getShippingMethods()
		// @ts-ignore
		emit('next')
		if (!store.checkout.shippingMethods.length) {
			// @ts-ignore
			emit('next')
		}
	}
}
onMounted(countriesStore.getCountries)
</script>
<style scoped></style>
