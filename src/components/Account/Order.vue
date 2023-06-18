<template>
	<v-row>
		<v-col class="flex-grow-0">
			<v-img
				:alt="product.name"
				:aspect-ratio="1"
				:src="product.image"
				:style="{ 'display: none': !product.image }"
				height="128"
				style="background-color: #f6f6f6"
				width="128"
			/>
		</v-col>
		<v-col class="flex-col justify-space-between">
			<div>
				<span class="secondary--text text-subtitle-1 font-weight-regular">Nome</span>
				<p class="secondary--text text-caption font-weight-thin">Ordinato il 12 Ottobre 2022</p>
			</div>
			<div class="d-flex gap-0.5">
				<Button medium> Ordina di nuovo</Button>
				<Button color="secondary" medium outlined> Visualizza Ordine</Button>
			</div>
		</v-col>
		<v-spacer />
		<v-col class="my-auto flex-col gap-0.5">
			<Button color="secondary" medium outlined> Ricevi assistenza</Button>
			<Button color="secondary" medium outlined> Restituisci articoli</Button>
			<Button color="secondary" medium outlined> Scarica Fattura</Button>
		</v-col>
	</v-row>
</template>
<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'
import Product from '@/models/Product'

const product = Product.getRandomProducts()[0]
</script>
<style scoped></style>
