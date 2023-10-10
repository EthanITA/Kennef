<template>
	<v-parallax src="@/assets/categoriesBackground.png">
		<v-row>
			<v-col align-self="center" cols="12" lg="6" offset-md="1" xl="6">
				<LandingCardAction class="transparent">
					<template #title> <p class="white--text">I nostri prodotti</p></template>
					<p class="white--text">
						Lorem ipsum dolor sit amet, consectetur elit. Elit tristique habitasse consequat nisi, sit
						aenean cursus purus bibendum.
					</p>
					<template #action>
						<Button @click="$router.push('/shop?top_seller=true')">scopri di piu </Button></template
					>
				</LandingCardAction>
			</v-col>
		</v-row>
	</v-parallax>
</template>

<script lang="ts" setup>
import LandingCardAction from '@/components/LandingCardAction.vue'
import Button from '@/components/kennef/Button.vue'
</script>
