<template>
	<v-container class="d-flex">
		<v-spacer />
		<v-sheet class="pa-4 flex-col gap-0.5 d-flex grow">
			<v-img
				alt="Kennef Logotype"
				class="mt-3 hidden-sm-and-down mx-auto"
				contain
				src="../assets/logotype.svg"
				width="125"
			/>
			<div class="my-8 d-flex flex-column">
				<p class="ma-0 mx-auto font-weight-regular text-h5">Ciao!</p>
				<p class="mx-auto">Accedi per continuare.</p>
			</div>
			<div class="flex-col gap-0.5">
				<div class="flex-col gap-0.5 pa-4">
					<Textfield label="Email" type="email" />
					<Textfield label="Password" type="password" />
					<a class="ml-auto" href="#">Password dimenticata?</a>
					<Button class="mt-6" medium>accedi</Button>
				</div>
				<div class="d-flex align-center mt-8">
					<v-divider />
					<p class="my-0 mx-2">Oppure accedi con</p>
					<v-divider />
				</div>
				<div class="mx-auto d-flex gap-1 my-8">
					<Button class="rounded-circle" icon>
						<svg fill="none" height="48" viewBox="0 0 32 32" width="48" xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" fill="white" r="15.5" stroke="#F6F6F6" />
							<path
								d="M26.1107 15.967C26.1107 15.1643 26.0458 14.5809 25.9062 13.9727H16.7471V17.5924H22.1219C22.0122 18.4899 21.4289 19.8461 20.1275 20.7535L20.1076 20.8732L22.9994 23.1169L23.1989 23.1368C25.0487 21.4366 26.1107 18.9337 26.1107 15.967Z"
								fill="#4285F4"
							/>
							<path
								d="M16.7475 25.4987C19.3801 25.4987 21.5889 24.6312 23.2043 23.1354L20.128 20.7521C19.3053 21.3255 18.1984 21.7293 16.7475 21.7293C14.1698 21.7293 11.981 20.0291 11.2032 17.6758L11.0885 17.6858L8.077 20.0142L8.03711 20.1239C9.64258 23.3099 12.9383 25.4987 16.7475 25.4987Z"
								fill="#34A853"
							/>
							<path
								d="M11.2031 17.6774C10.9987 17.0691 10.8791 16.4209 10.8791 15.7478C10.8791 15.0747 10.9987 14.4266 11.1932 13.8183L11.1882 13.6886L8.14178 11.3203L8.04206 11.3702C7.37893 12.6964 7 14.1773 7 15.7478C7 17.3184 7.37893 18.8042 8.04206 20.1255L11.2031 17.6774Z"
								fill="#FBBC05"
							/>
							<path
								d="M16.7474 9.76937C18.5773 9.76937 19.8138 10.5621 20.5168 11.2203L23.269 8.53286C21.5838 6.96229 19.38 6 16.7474 6C12.9382 6 9.64248 8.18883 8.04199 11.3748L11.1931 13.8229C11.9809 11.4696 14.1697 9.76937 16.7474 9.76937Z"
								fill="#EB4335"
							/>
						</svg>
					</Button>
					<Button class="rounded-circle" icon>
						<svg fill="none" height="48" viewBox="0 0 32 32" width="48" xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" fill="white" r="15.5" stroke="#F6F6F6" />
							<path
								d="M21.5172 15.5555C21.5078 13.957 22.232 12.7523 23.6945 11.8641C22.8766 10.6922 21.6391 10.0477 20.0078 9.92344C18.4633 9.80156 16.7734 10.8234 16.1547 10.8234C15.5008 10.8234 14.0055 9.96563 12.8289 9.96563C10.4008 10.0031 7.82031 11.9016 7.82031 15.7641C7.82031 16.9055 8.02891 18.0844 8.44609 19.2984C9.00391 20.8969 11.0148 24.8133 13.1125 24.75C14.2094 24.7242 14.9852 23.9719 16.4125 23.9719C17.7977 23.9719 18.5148 24.75 19.7383 24.75C21.8547 24.7195 23.6734 21.1594 24.2031 19.5563C21.3648 18.218 21.5172 15.6375 21.5172 15.5555V15.5555ZM19.0539 8.40703C20.2422 6.99609 20.1344 5.71172 20.0992 5.25C19.0492 5.31094 17.8352 5.96484 17.1437 6.76875C16.382 7.63125 15.9344 8.69766 16.0305 9.9C17.1648 9.98672 18.2008 9.40313 19.0539 8.40703V8.40703Z"
								fill="black"
							/>
						</svg>
					</Button>
				</div>
				<div class="d-flex font-weight-bold mx-auto">
					<p>Non hai un account?</p>
					<a class="ml-1" href="#">Registrati</a>
				</div>
			</div>
		</v-sheet>
		<v-spacer />
	</v-container>
</template>

<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import Button from '@/components/kennef/Button.vue'
</script>

<style scoped></style>
