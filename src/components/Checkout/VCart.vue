<template>
  <v-container fluid class="grey lighten-2">
    <v-row class="mx-16">
      <v-col cols="12" md="12" lg="12" xl="12">
        <v-breadcrumbs :items="items" divider=">">
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row class="mx-16">
      <v-col cols="12" md="8" lg="8" xl="8">
        <!-- LEFT COL -->
        <v-container>
          <v-sheet color="white" style="width: 100%; height: 100%;">
            <v-row>
              <v-col cols="12" md="12" lg="12" xl="12">
                <ProductItem v-for="product in products" :key="product.name" :product="product" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </v-col>
      <v-col cols="12" md="4" lg="4" xl="4">
        <!-- RIGHT COL -->
        <v-container>
          <v-sheet color="white" style="width: 100%; height: 100%;">
            <v-row class="px-4 py-6">
              <v-col cols="12" md="12" lg="12" xl="12">
                <!-- PRICE COL -->
                <v-row no-gutters>
                  <v-col cols="3" md="3" lg="3" xl="3">
                    <p class="text-h6 secondary--text font-weight-semibold text-uppercase">subtotale</p>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="text-end" cols="8" md="8" lg="8" xl="8">
                    <p class="text-h6 secondary--text font-weight-semibold text-uppercase text-decoration-underline">
                      14.44 €</p>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="3" md="3" lg="3" xl="3">
                    <p class="text-h6 secondary--text font-weight-semibold text-uppercase">sconto</p>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="text-end" cols="8" md="8" lg="8" xl="8">
                    <p class="text-h6 secondary--text font-weight-semibold text-uppercase text-decoration-underline">
                      0.00 €
                    </p>
                    <p class="text-end text--secondary font-weigth-regular text-caption">Iva inclusa + costi di spedizione</p>
                  </v-col>
                </v-row>
                <v-row align="end" class="mt-16 mb-0" no-gutters>
                  <v-col cols="8" md="8" lg="8" xl="8">
                    <p class="secondary-text font-weigth-semibold text-h6">Hai un codice sconto?</p>
                    <v-text-field single-line outlined filled color="secondary" label="Codice Sconto"></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="3" md="3" lg="3" xl="3">
                    <v-btn tile depressed color="primary" x-large>
                      <v-icon x-large>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <!-- <v-col cols="12" md="12" lg="12" xl="12">
                BUTTONS COL 
              </v-col> -->
            </v-row>
          </v-sheet>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from "./ProductItem.vue"

export default {
  name: "VCart",
  components: {
    ProductItem
  },
  data() {
    return {
      items: [
        {
          text: 'Carrello',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Informazioni',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Pagamento',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },

        {
          text: 'Spedizione',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      products: [
        {
          name: "Cacciavite a croce FF Group",
          sku: "SKU: FG 22/S6",
          qty: 1,
          price: 12.34,
        },
        {
          name: "Cacciavite a croce Generico",
          sku: "SKU: FG 22/S6",
          qty: 1,
          price: 13.34,
        }
      ]
    }
  }
}
</script>