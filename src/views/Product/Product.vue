<template>
  <div>
     
    <bread-crumb></bread-crumb>
    <product-detail></product-detail>
    <relate-product></relate-product>
    
  </div>
</template>

<script>
import breadCrumb from '@/components/Product/BreadCrumb.vue'
import productDetail from '@/components/Product/ProductDetail.vue'
import relateProduct from '@/components/Product/RelateProduct.vue'
export default {
  components: {
    breadCrumb,
    productDetail,
    relateProduct
  },
  created() {
    var vm = this
      fetch('http://localhost:8082/products/' + vm.$route.params.productId)
      .then(response=>{
        return response.json()
      })
    .then(data=>{
      let product = data.product
      vm.$store.commit('setItemSelected', product)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style>

</style>