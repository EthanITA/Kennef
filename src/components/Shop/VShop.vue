<template>
  <v-container>
    <v-row>
      <ProductCard v-for="product in productList" :key="product.id" />
    </v-row>  
  </v-container>
</template>

<script>
  export default { 
    name : "VShop",
    props: {
      productList : { 
        type : Array, 
        required : true,
      }
    },
    data() { 
      return { 

      }
    }
  }
</script>