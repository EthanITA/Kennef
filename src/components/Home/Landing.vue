<template>
	<v-container class="pt-10 px-16" style="width: 80%">
		<v-row>
			<v-col class="d-flex pt-16">
				<LandingCardAction>
					<template #title> Dal bullone in su </template>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam adipiscing ac congue.</p>
					<template #action>
						<Button> Vai allo shop </Button>
					</template>
				</LandingCardAction>
			</v-col>
			<v-col :cols="8" class="d-flex justify-end">
				<v-img max-width="700" src="@/assets/BigClaw.png" />
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
import LandingCardAction from '@/components/LandingCardAction.vue'
</script>
