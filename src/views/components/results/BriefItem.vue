<template>
  <div class="brief-item" @click="itemSelected">
    <img :src="item.picture" alt="..." class="x-padding y-padding"/>
    <div class="item-information">
      <div class="title big-bottom-padding big-font-size">
        <h2>{{item.price.currency === 'ARS' ? '$':item.price.currency}} {{item.price.amount}}</h2>
        <i v-if="item.free_shipping" class="fa fa-truck" aria-hidden="true"/>
      </div>
      <h3>{{item.title}}</h3>
    </div>
    <span class="state extra-small-font-size y-padding">{{item.state}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    itemSelected () {
      this.$router.push({ name: 'Details', params: { id: this.item.id } })
    }
  }
}
</script>

<style lang="scss">
.brief-item {
  display: flex;
  border-bottom: 1px solid #999999;
  cursor: pointer;
  img {
    height: 180px;
    width: 180px;
    border-radius: 4px;
  }
  .item-information {
    display: flex;
    flex-direction: column;
    width: 60%;
    .title {
      display: flex;
    }
    .fa-truck {
      margin-left: 5px;
      background-color: lightgreen;
      align-self: center;
      border-radius: 50%;
      padding: 5px;
      height: 15px;
      width: 15px;
      font-size: 14px;
    }
  }
}
</style>
