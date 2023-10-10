<template>
	<v-sheet class="justify-start" color="transparent" elevation="0">
		<div class="tw-flex tw-h-full tw-flex-col">
			<div class="tw-my-auto tw-ml-16">
				<h1 class="text-h3 font-weight-regular">
					<slot name="title" />
				</h1>
				<p class="font-weight-bold mt-6">
					<slot />
				</p>
				<slot name="action" />
			</div>
		</div>
	</v-sheet>
</template>
