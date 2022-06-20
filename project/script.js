


const BASE_URL = "http://localhost:8000/";
const GOODS_NO_JSON = `${BASE_URL}goods`
const GOODS = `${BASE_URL}goods.json`
const CARTS = `${BASE_URL}basket_goods.json`
const BASKET = `${BASE_URL}basket`

function service(url) {
	return fetch(url).then((res) => res.json())
}
function serviceWithBody(url = "", method = "POST", body = {}) {
	return fetch(
		url,
		{
			method,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(body)
		}
	).then((res) => res.json())
}
let app = null

window.onload = () => {
	Vue.component('custom_input', {
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
	Vue.component('custom_button', {
		template: `
		<button class="cart-button" type="button" @click="$emit('click')">
			<slot></slot>
		</button>
		`
	})
	Vue.component('good', {
		props: [
			'item'
		],
		template: `
			<div class="goods-item">
				<h3>{{ item.product_name }}</h3>
				<p>{{ item.price }}</p>
				<div class="button-item">
					<custom_button @click="addGood">Добавить</custom_button>
				</div>
			</div>
			`,
		methods: {
			addGood() {
				serviceWithBody(BASKET, "POST", {
					id: this.item.id
				})
			}
		}
	})
	Vue.component('carts', {
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
					<custom_button>-</custom_button>
				</div>
			</div>
			`
	})
	Vue.component('box-carts', {
		data() {
			return {
				basketGoodsItems: []
			}
		},
		props: [
			'visib',
			'itemsCarts',
			'calculatePrice'
		],
		template: `
			<div class="carts-block">
				<custom_button @click="visib">Close</custom_button>
				<div class="carts">
					<h2>Корзина</h2>
					<carts v-if="basketGoodsItems" v-for="item in basketGoodsItems" :item="item" @add="addGood"></carts>
					<div class="plug" v-else="basketGoodsItems">
						<h2>Корзина пуста</h2>
					</div>
				</div>
				<div class="summa">Итого: <slot></slot> </div>
			</div>
		`,
		methods: {
			addGood(id) {
				serviceWithBody(BASKET, "POST", {
					id
				}).then((data) => {
					this.basketGoodsItems = data;
				})
			}
		},
		mounted() {
			service(BASKET).then((data) => {
				this.basketGoodsItems = data
			})
		}
	})
	Vue.component('snackbar', {
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



	app = new Vue({
		el: '#root',
		data: {
			items: [],
			itemsCarts: [],
			searchValue: '',
			isVisibleCart: false,
			snackbar: false,
			errorMessage: '',
			basketGoodsItems: []
		},
		methods: {
			fetchGoods() {
				service(GOODS).then((data) => {
					this.items = data;
				});
			},
			// fetchCarts() {
			// 	service(CARTS).then((data) => {
			// 		this.itemsCarts = data;
			// 	});
			// },
			visiblCart() {
				if (this.isVisibleCart == true) {
					this.isVisibleCart = false;
				}
				else {
					this.isVisibleCart = true;
				}
			},
			visiblBug() {
				this.snackbar = !this.snackbar
			},
			timeVisiblBug() {
				this.snackbar = !this.snackbar;
				setTimeout(() => {
					this.snackbar = false;
				}, "3000")
			}
		},
		computed: {
			calculatePrice() {
				return this.filteredItems.reduce((prev, { price }) => {
					return prev + price;
				}, 0)
			},
			filteredItems() {
				return this.items.filter(({ product_name }) => {
					return product_name.match(new RegExp(this.searchValue, 'gui'))
				})
			}
		},
		mounted() {
			this.fetchGoods();
			// this.fetchCarts()
		},

		created() {
			fetch("https://api.npms.io/v2/invalid-url")
				.then(async response => {
					const data = await response.json();
					if (!response.ok) {
						const error = (data && data.message + response.status) || response.statusText;
						return Promise.reject(error);
					}
					this.totalVuePackages = data.total;
				})
				.catch(error => {
					this.errorMessage = error;
					this.timeVisiblBug();
				});
		}
	})
}
