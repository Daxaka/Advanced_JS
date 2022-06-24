export default Vue.component('snackbar', {
	props: [
		'error',
		'snack'
	],
	template: `
	<div class="bug">
		<div class="error">{{error}}</div>
		<custom_button @click="snack">Close</custom_button>
	</div>
		`
})