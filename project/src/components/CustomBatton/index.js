Vue.component('custom_button', {
	template: `
	<button class="cart-button" type="button" @click="$emit('click')">
		<slot></slot>
	</button>
	`
})