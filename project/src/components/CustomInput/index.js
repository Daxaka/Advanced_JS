export default Vue.component('custom_input', {
	model: {
		prop: 'entry',
		event: 'change'
	},
	props: {
		entry: String
	},
	template: `
	<input
		type="text" 
		class="goods-search"
		v-bind:entry="entry"
		v-on:change="$emit('change', $event.target.value)"
	/>
	`
})