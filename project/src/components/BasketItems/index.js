export default Vue.component('carts', {
	props: [
		'item'
	],
	template: `
		<div class="carts-item">
			<h3>{{ item.product_name }}</h3>
			<p>{{ item.price }}</p>
			<div class="count">
			<custom_button @click="$emit('add',item.id)">+</custom_button>
				<p>{{ item.count }} шт</p>
				<custom_button @click="$emit('delet',item.id)">-</custom_button>
			</div>
		</div>
		`
})