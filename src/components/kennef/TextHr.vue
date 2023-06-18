<template>
	<div class="d-flex align-center">
		<v-divider />
		<div v-if="$slots.default" class="mx-2">
			<slot />
		</div>
		<v-divider />
	</div>
</template>
