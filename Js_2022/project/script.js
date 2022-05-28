const goods = [
  { title: 'Shirt', price: 250 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({ title = "", price = "" }) {
    this.title = title;
    this.price = price;
    this.summ = summ;
  }
  render() {
    return `
		     <div class="goods-item">
		 		<h3>Название: ${this.title}</h3>
		    	<p>Цена: ${this.price}</p>
		     </div>
		`
  }
}

class GoodsList {
  fetchData() {
    this.list = goods;
  }

  getCount() {
    return this.list.reduce((prev, { price }) => {
      return prev + price;

    }, 0)

  }



  render() {
    const goodsList = this.list.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render()

    }).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;

  }
}

const renderGoodsItem = (summ) => {
  return `
    <div class="goods-item">
		<h3>Общая сумма заказа ${summ}</h3>
    </div>
  `;
}




const goodsList = new GoodsList(goods);
goodsList.fetchData()
const summ = goodsList.getCount()
goodsList.render()

console.log(summ);
const foot = renderGoodsItem(summ);
document.querySelector('.summ').innerHTML = foot;