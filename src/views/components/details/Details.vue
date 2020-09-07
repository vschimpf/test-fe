<template>
  <div class="details">
    <div class="short-information">
      <img :src="item.picture" alt="..." />
      <div class="short-details">
        <span class="conditon small-font-size">{{item.condition === 'new'?'Nuevo':'Usado'}} - {{item.sold_quantity}} vendidos</span>
        <h2 class="big-font-size big-bottom-padding">{{item.title}}</h2>
        <span class="price big-bottom-padding">{{item.price.currency === 'ARS' ? '$':item.price.currency}} {{item.price.amount}}</span>
        <button class="comprar blue-bacground-color">Comprar</button>
      </div>
    </div>
    <h1 class="black-color">Descripción del producto</h1>
    <p class="gray-color">{{item.description}}</p>
  </div>
</template>

<script>
import service from '../../../apis/service.js'

export default {
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      item: null
    }
  },
  async beforeMount () {
    this.item = await service.getFromApi('/' + this.id)
  }
}
</script>

<style lang="scss">
.details {
  display: flex;
  flex-direction: column;
  margin: 0 15%;
  height: 100%;
  background-color: #FFFFFF;
  padding: 32px;
  .short-information {
    display: flex;
    img {
      width: 680px;
    }
    .short-details {
      display: flex;
      flex-direction: column;
      margin-left: 32px;
      .price {
        font-size: 46px;
      }
      .comprar {
        color: #FFFFFF;
        font-size: 18px;
        border: none;
        height: 50px;
        border-radius: 10px;
        margin-top: 32px;
      }
    }
  }
  p {
    white-space: pre-line;
  }
}
</style>
