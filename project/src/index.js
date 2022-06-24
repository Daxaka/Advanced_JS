import './style.css';
import './components/BasketItems';
import './components/BasketBox';
import './components/CustomBatton';
import './components/CustomInput';
import './components/Good';
import './components/SnackBar';
import { BASE_URL, GOODS_NO_JSON, GOODS, CARTS, BASKET } from './constant';
import { service, serviceWithBody } from './servises';



let app = null

window.onload = () => {
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
					<carts v-if="basketGoodsItems" v-for="item in basketGoodsItems" :item="item" @add="addGood" @delet="deletGood"></carts>
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
			},
			deletGood(id) {
				serviceWithBody(BASKET, "DELETE", {
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
