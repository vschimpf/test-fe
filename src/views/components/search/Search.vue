<template>
  <div class="search">
    <div class="search-toolbar yellow-background-color topnav">
      <div class="search-box">
        <img srcset="../../../assets/Logo_ML.png 1x, ../../../assets/Logo_ML@2x.png.png 2x" alt="..."/>
        <form>
          <input type="search" placeholder="Nunca dejes de buscar" v-model="searchTerm" @change="applySearch"
              class="normal-font-size black-color" />
          <button type="submit" class="normal-font-size black-color">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchTerm: ''
    }
  },
  methods: {
    applySearch(){
      this.$router.push({name: 'Results', query: { search: this.searchTerm }})
    }
  }
}
</script>

<style lang="scss">
.search {
  .search-toolbar {
    height: 80px;
    .search-box {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      margin: 0 15%;
    }
    form {
      display: flex;
      width: 100%;
      margin-left: 50px;
    }
    input {
      height: 50px;
      width: 100%;
      border: none;
      border-radius: 5px 0 0 5px;
      outline: none;
    }
    input::placeholder {
      color: #999999;
    }
    input[type=search]{
      padding-left: 20px !important;
    }
    button {
      background-color: #EEEEEE;
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      width: 50px;
      height: 50px;
      outline: none;
      .fa {
        font-size: 24px;
      }
    }
  }
}
</style>
