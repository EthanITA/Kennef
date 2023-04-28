<template>
	<v-container class="pt-10 px-16">
		<v-row>
			<v-col class="d-flex">
				<v-sheet class="justify-start px-16" color="white" elevation="0">
					<h1 class="text-h3 font-weight-regular">Dal bullone in su</h1>
					<p class="font-weight-bold ml-1 mt-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam adipiscing ac congue.
					</p>
					<Button> Vai allo shop </Button>
				</v-sheet>
			</v-col>
			<v-col class="d-flex justify-end">
				<v-img class="" max-width="700" src="@/assets/BigClaw.png"></v-img>
			</v-col>
		</v-row>

		<v-lazy>
			<KennefCharacteristics />
		</v-lazy>

		<v-lazy>
			<Brands />
		</v-lazy>
	</v-container>
</template>

<script lang="ts" setup>
import Brands from '@/components/Home/Brands.vue'
import KennefCharacteristics from '@/components/Home/KennefCharacteristics.vue'
import Button from '@/components/kennef/Button.vue'
</script>
