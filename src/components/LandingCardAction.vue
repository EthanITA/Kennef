<template>
	<v-sheet class="justify-start" color="white" elevation="0">
		<h1 class="text-h3 font-weight-regular">
			<slot name="title" />
		</h1>
		<p class="font-weight-bold mt-6">
			<slot />
		</p>
		<slot name="action" />
	</v-sheet>
</template>
