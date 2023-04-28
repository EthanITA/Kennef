<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap');

$font-family: 'Nunito Sans';
$primary: #ea5734;
$secondary: #003f4b;

@mixin textColor($color: $primary) {
	color: $color;
}

.v-application {
	[class*='text-'] {
		@include textColor($color: $secondary);
		font-family: $font-family, sans-serif !important;
	}

	font-family: $font-family, sans-serif !important;
}
</style>
<script lang="ts" setup></script>
