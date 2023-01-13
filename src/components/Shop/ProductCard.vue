<template>
    <v-col cols="12" md="4" lg="4" xl="4">
      <v-img contain :alt="product.alt" aspect-ratio="0,95" :src="product.img"></v-img>
      <p class="secondary-text text-h6 font-weight-semibold">{{ product.name }}</p>
      <div class="">
        <span class="secondary-text text-h6 font-weight-semibold">{{ product.category }}</span>
        <span class="secondary-text text-h6 font-weight-semibold">{{ product.price }}</span>
      </div>
    </v-col>
</template>

<script>
export default {
  name: "ProductCard",
  props : { 
    product: { 
      type: Object, 
      required : true
    }
  },
  data() {
    return { 

    }
  }
}
</script>