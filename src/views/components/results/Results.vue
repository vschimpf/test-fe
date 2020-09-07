<template>
  <div class="results">
    <brief-item :item="item" v-for="item in results" :key="item.id" />
  </div>
</template>

<script>
import BriefItem from './BriefItem'
import service from '../../../apis/service.js'

export default {
  props: {
    search: { type: String, required: true }
  },
  data () {
    return {
      results: []
    }
  },
  beforeMount () {
    const promise = service.getFromApi('?search=' + this.search)
    promise.then((r) => {
      this.results = r.items.slice(1, Math.min(5, r.items.length))
    })
  },
  components: {
    BriefItem
  }
}
</script>

<style lang="scss">
.results {
  margin: 0 15%;
  background-color: #FFFFFF;
  height: 100vh;
}
</style>
