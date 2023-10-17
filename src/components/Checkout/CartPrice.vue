<template>
	<v-container>
		<v-sheet color="white" style="width: 100%">
			<v-row class="px-4">
				<v-col class="mt-4 mb-2 flex-col">
					<!-- PRICE COL -->
					<div>
						<div class="tw-flex tw-justify-between">
							<p class="text-h6 secondary--text font-weight-semibold text-uppercase">subtotale</p>
							<Price :price="price" class="text-h6" />
						</div>
						<v-row v-if="discount" no-gutters>
							<v-col cols="3" lg="3" md="3" xl="3">
								<p class="text-h6 secondary--text font-weight-semibold text-uppercase">sconto</p>
							</v-col>
							<v-spacer></v-spacer>
							<v-col class="text-end" cols="8" lg="8" md="8" xl="8">
								<Price :price="discount" class="text-h6" />
							</v-col>
						</v-row>
					</div>
					<p class="text-end text--secondary font-weigth-regular text-caption">
						Iva inclusa + costi di spedizione
					</p>
					<template v-if="false">
						<v-spacer />
						<div class="mt-16 mb-0">
							<p class="secondary-text font-weigth-semibold text-h6">Hai un codice sconto?</p>
							<v-row align="center">
								<v-col>
									<v-text-field
										class="flex-grow-1"
										color="secondary"
										filled
										hide-details
										label="Codice Sconto"
										outlined
										single-line
									></v-text-field>
								</v-col>
								<v-col class="flex-grow-0 pa-0">
									<v-btn color="primary" depressed tile x-large>
										<v-icon x-large>mdi-arrow-right</v-icon>
									</v-btn>
								</v-col>
							</v-row>
						</div>
					</template>
				</v-col>
			</v-row>
		</v-sheet>
	</v-container>
</template>
<script lang="ts" setup>
import Price from '@/components/kennef/Price.vue'

const props = defineProps<{
	price: number
	discount?: number
}>()
</script>
<style scoped></style>
