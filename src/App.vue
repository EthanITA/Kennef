<template>
  <v-app>
    <v-app-bar height="100" app color="white" dark elevation="0" class="px-16">
      <div class="d-flex align-center">
        <v-img alt="Kennef Logotype" class="mt-3 hidden-sm-and-down" contain src="./assets/logotype.svg" width="150" />
      </div>

      <div class="btns-l ml-16">
        <v-btn class="mr-2" v-for="link in links" :key="link.title" @click="shopPanel = !shopPanel" text
          color="secondary">
          <span>{{ link.title }}</span>
        </v-btn>
        <v-btn text color="secondary">
          <v-icon>mdi-magnify</v-icon>

        </v-btn>

      </div>

      <v-spacer></v-spacer>

      <div class="btns-r">
        <v-btn text color="secondary">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>

        <v-btn text color="secondary">
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <!-- <Categories /> -->
      <!-- <Home /> -->
      <!-- <Account /> -->
      <!-- <Profile /> -->
      <!-- <Orders /> -->
      <!-- <Products /> -->
      <!-- <Cart /> -->
      <Shop />
    </v-main>
    <VFooterComponent />
  </v-app>
</template>

<script>
import VFooterComponent from "./components/General/VFooterComponent.vue";
// import Categories from "./components/VCategories.vue"
// import Home from "./components/Home/VHome.vue"
// import Account  from "./components/VAccount.vue"
// import Profile  from "./components/VProfile.vue"
// import Orders from "./components/VOrders.vue"
// import Products from "./components/VProducts.vue";
// import Cart from "./components/VCart.vue";
import Shop from "./components/Shop/VShop.vue";

export default {
  name: 'App',

  components: {
    // Home,
    // Categories,
    // Account,
    // Profile,
    // Orders,
    // Products,
    // Cart,
    Shop,
    VFooterComponent
  },

  data() {
    return {
      shopPanel: false,
      links: [
        {
          link: "#",
          title: "Shop",
        },
        {
          link: "#",
          title: "Chi Siamo",
        },
        {
          link: "#",
          title: "COntattaci",
        }
      ]
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap');

$font-family: "Nunito Sans";
$primary : #EA5734;
$secondary : #003F4B;

@mixin textColor($color: $primary) {
  color: $color;
}

.v-application {
  [class*='text-'] {
    @include textColor($color : $secondary);
    font-family: $font-family, sans-serif !important;
  }

  font-family: $font-family,
  sans-serif !important;
}
</style>