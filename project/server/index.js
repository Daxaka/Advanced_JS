import { writeFile, readFile } from 'fs/promises'
import express from "express";
import cors from "cors";

const BASKET = './public/basket_goods.json'
const GOODS = './public/goods.json'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const readBasket = () => readFile(BASKET, 'utf-8')
	.then((basketFile) => {
		return JSON.parse(basketFile)
	})
const readGoods = () => readFile(GOODS, 'utf-8')
	.then((basketFile) => {
		return JSON.parse(basketFile)
	})

function getReformBasket() {
	return Promise.all([
		readBasket(),
		readGoods()
	]).then(([basketList, goodsList]) => {
		const result = basketList.map((basketItem) => {
			const { id: _basketId } = basketItem
			const goodsItem = goodsList.find(({ id: _goodsId }) => {
				return _goodsId === basketItem.id
			});
			return {
				...basketItem,
				...goodsItem
			}
		})
		return result
	})
}

app.post('/basket', (res, reg) => {
	readBasket().then((basket) => {
		const basketItem = basket.find(({ id: _id }) => _id === res.body.id)
		if (!basketItem) {
			basket.push({
				id: res.body.id,
				count: 1,
			})
		} else {
			basket = basket.map((basketItem) => {
				if (basketItem.id === res.body.id) {
					return {
						...basketItem,
						count: basketItem.count + 1
					}
				} else {
					return basketItem
				}
			})
		}
		return writeFile(BASKET, JSON.stringify(basket)).then(() => {
			return getReformBasket()
		}).then((result) => {
			reg.send(result)
		})
	})
})

app.delete('/basket', (req, res) => {
	readBasket().then((basket) => {
		const basketItem = basket.find(({ id: _id }) => _id === req.body.id)
		if (basketItem.count === 1) {
			basket.splice(basket.indexOf(basketItem), 1)
		} else {
			basket = basket.map((basketItem) => {
				if (basketItem.id === req.body.id) {
					return {
						...basketItem,
						count: basketItem.count - 1
					}
				} else {
					return basketItem
				}
			})
		}
		return writeFile(BASKET, JSON.stringify(basket)).then(() => {
			return getReformBasket()
		}).then((result) => {
			res.send(result)
		})
	})
});

app.get('/basket', (req, res) => {
	readBasket().then((basketList) => {
		console.log(basketList)
	})
	readGoods().then((goodsList) => {
		console.log(goodsList)
	})

	getReformBasket().then((result) => {
		res.send(JSON.stringify(result))
	})
});


app.listen('8000', () => {
	console.log('server is starting!');
});