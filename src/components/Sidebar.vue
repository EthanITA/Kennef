<template>
	<v-navigation-drawer
		:class="{
			'!tw-w-[50%]': $vuetify.breakpoint.sm,
			'!tw-w-full': $vuetify.breakpoint.xs
		}"
		:value="headerStore.showNavigationDrawer && $vuetify.breakpoint.smAndDown"
		class="grey lighten-4"
		fixed
		temporary
		@click="headerStore.showNavigationDrawer = false"
		@input="headerStore.showNavigationDrawer = $event"
	>
		<v-app-bar app class="px-2" elevation="0" height="80">
			<v-app-bar-nav-icon class="tw-mr-4" @click="headerStore.showNavigationDrawer = false">
				<v-icon large>mdi-menu</v-icon>
			</v-app-bar-nav-icon>
			<a class="d-flex align-center" @click="$router.push('/')">
				<v-img
					:src="
						$vuetify.breakpoint.smAndDown
							? require('../assets/mobile/Logo.svg')
							: require('../assets/logotype.svg')
					"
					alt="Kennef Logotype"
					contain
					width="125"
				/>
			</a>
		</v-app-bar>
		<div class="px-4 tw-mt-[80px] tw-grid tw-divide-y-[1px] tw-divide-primary">
			<v-list>
				<v-list-item
					v-for="item in headerStore.navigationDrawer.general"
					:key="item.title"
					ripple
					@click="$router.push(item.link)"
				>
					<v-list-item-avatar>
						<v-icon v-if="item.icon">{{ item.icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
			<div>
				<v-list-group v-for="category in store.topLevelCategories" color="secodary">
					<template #prependIcon>
						<v-icon class="tw-pl-2">mdi-fruit-cherries</v-icon>
					</template>
					<template #activator>
						<v-list-item>
							<v-list-item-title>{{ category.name }}</v-list-item-title>
						</v-list-item>
					</template>
					<v-list-item
						v-for="subCategory in store.parentCategories[category.id]"
						ripple
						@click="$router.push(`/shop?category=${subCategory.id}`)"
					>
						<v-list-item-avatar />
						<v-list-item-title>
							{{ subCategory.name }}
						</v-list-item-title>
					</v-list-item>
				</v-list-group>
			</div>
			<v-list-group color="secodary">
				<template #prependIcon>
					<v-icon class="tw-pl-2">mdi-alpha-r-circle-outline</v-icon>
				</template>
				<template #activator>
					<v-list-item>
						<v-list-item-title>Brands</v-list-item-title>
					</v-list-item>
				</template>
				<v-list-item
					v-for="brand in headerStore.navigationDrawer.brands"
					ripple
					@click="$router.push(brand.link)"
				>
					<v-list-item-avatar />
					<v-list-item-title>
						{{ brand.title }}
					</v-list-item-title>
				</v-list-item>
			</v-list-group>
			<v-list>
				<v-list-item
					v-for="item in headerStore.navigationDrawer.info"
					:key="item.title"
					ripple
					@click="$router.push(item.link)"
				>
					<v-list-item-avatar>
						<v-icon v-if="item.icon">{{ item.icon }}</v-icon>
						<v-img v-else-if="item.img" :src="item.img" max-height="24" max-width="24" />
					</v-list-item-avatar>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</div>
	</v-navigation-drawer>
</template>
<script lang="ts" setup>
import { useHeader } from '@/store/header'
import { categoriesStore } from '@/store/categories'

const headerStore = useHeader()
const store = categoriesStore()
</script>

<style scoped>
.v-list-item,
.v-list-group >>> .v-list-group__header.v-list-item {
	padding-left: 0 !important;
}

.v-list-item__title {
	@apply tw-text-secondary tw-select-none;
}

i.v-icon {
	@apply tw-text-secondary !important;
}
</style>
