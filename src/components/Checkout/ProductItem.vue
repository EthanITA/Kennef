<template>
	<v-container class="my-6 mx-6">
		<v-row no-gutters>
			<v-col cols="1" lg="1" md="1" xl="1">
				<!-- img -->
				<v-sheet color="grey lighten-2" style="width: 100px; height: 100px"></v-sheet>
			</v-col>
			<v-spacer></v-spacer>
			<v-col cols="10" lg="10" md="10" xl="10">
				<!-- title sku -->
				<div class="title-sku">
					<p class="secondary--text text-h6 font-weight-semibold">{{ product.name }}</p>
					<span class="grey--text text-secondary text-caption font-weight-regular">{{ product.sku }}</span>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="2" lg="2" md="2" xl="2">
				<!-- qty -->
				<v-btn disabled elevation="0" fab tile x-small>
					<v-icon small>mdi-minus</v-icon>
				</v-btn>
				<span class="mx-3 secondary-text text-subtitle-1 font-weight-semibold">{{ product.qty }}</span>
				<v-btn color="secondary" elevation="0" fab tile x-small>
					<v-icon small> mdi-plus</v-icon>
				</v-btn>
			</v-col>
			<v-col class="text-end" cols="9" lg="9" md="9" xl="9">
				<!-- price -->
				<span class="text-decoration-underline text-subtitle-1 secondary--text font-weight-regular"
					>{{ product.price }} €</span
				>
			</v-col>
			<v-spacer></v-spacer>
		</v-row>
		<v-row>
			<v-col>
				<!-- remove btn -->
				<v-btn color="primary" depressed small text>
					<v-icon color="primary" left>mdi-trash-can-outline</v-icon>
					<span class="text-secondary text-subtitle-2 text-capitalize secondary--text">Rimuovi</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const product = ref({
	name: 'Nome prodotto',
	sku: 'SKU',
	qty: 1,
	price: 10
})
</script>
