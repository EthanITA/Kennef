<template>
  <v-footer app absolute color="secondary">
    <v-container>
      <v-row no-gutters class="px-16 pt-12 pb-14">
        <v-col col="12" md="4" lg="4" xl="4">
          <h3 class="white--text text-h5 font-weight-semibold">
            Iscriviti alla nostra newsletter per rimanere aggiornato su offerte e promozioni.
          </h3>
        </v-col>
        <v-spacer></v-spacer>
        <v-col col="12" md="3" lg="3" xl="3">
          <div class="d-flex align-baseline">
            <v-text-field class="rounded-0" solo v-model="emailInput" label="Email" color="primary" outlined
              clearable></v-text-field>
            <v-btn class="ml-5 rounded-0 " x-large outlined color="white">Iscriviti</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <v-row no-gutters class="px-16 py-8">
        <v-col cols="12" md="4" lg="4" xl="4">
          <h5 class="white--text text-h5 font-weight-semibold">
            Link Utili
          </h5>
          <v-list dark color="secondary">
            <v-list-item v-for="item in usefulLinks" :key="item.name" link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-thin white--text">{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4">
          <h5 class="white--text text-h5 font-weight-semibold">
            L'Azienda
          </h5>
          <v-list dark color="secondary">
            <v-list-item v-for="item in agencyLinks" :key="item.name" link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-thin white--text">{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <v-row no-gutters class="px-16 py-8">
        <v-col cols="12" md="4" lg="4" xl="4">
          <h5 class="white--text text-subtitle-1 font-weight-regular">
            Spedizioni
          </h5>
          <div class="d-flex mt-5">
            <v-sheet color="secondary" v-for="item in shippingMethods" :key="item.name">
              <v-img :src="item.src" width="100" class="mr-5">
              </v-img>
            </v-sheet>
          </div>

        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4">
          <h5 class="white--text text-subtitle-1 font-weight-regular">
            Metodi di Pagamento
          </h5>
          <div class="d-flex mt-5">
            <v-sheet color="secondary" v-for="item in paymentsMethods" :key="item.name">
              <v-img :src="item.src" width="100" class="mr-5">
              </v-img>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <v-row no-gutters class="py-8 px-16">
        <v-toolbar height="100" color="secondary" dark elevation="0" >
          <div>
            <v-img alt="Kennef Logotype" class="hidden-sm-and-down" contain src="@/assets/logotype-white.svg"
              width="131" />
          </div>

          <div class="btns-l ml-16">
            <v-btn class="mr-6" v-for="link in links" :key="link.title" :href="link.link" target="_blank" text
              color="white">
              <span>{{ link.title }}</span>
            </v-btn>
          </div>

          <v-spacer></v-spacer>

          <div class="btns-r">
            <v-btn x-small text color="white">
              <v-icon>$ig</v-icon>
            </v-btn>

            <v-btn x-small text color="white">
              <v-icon color="transparent">$fb</v-icon>
            </v-btn>
          </div>

        </v-toolbar>

      </v-row>

    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'VFooterComponent',
  data() {
    return {
      emailInput: "",
      usefulLinks: [
        {
          name: "Contatti",
          link: "#"
        },
        {
          name: "Termini e Condizioni",
          link: "#"
        },
        {
          name: "Spedizioni e Resi",
          link: "#"
        },
        {
          name: "FAQ",
          link: "#"
        },
      ],
      agencyLinks: [
        {
          name: "Chi Siamo",
          link: "#"
        },
        {
          name: "Store",
          link: "#"
        },
      ],
      paymentsMethods: [
        {
          name: "visa",
          src: require("@/assets/payment/Visa.svg"),
        },
        {
          name: "paypal",
          src: require("@/assets/payment/Paypal.svg"),
        },
        {
          name: "mastercard",
          src: require("@/assets/payment/Mastercard.svg"),
        },
        {
          name: "klarna",
          src: require("@/assets/payment/Klarna.svg"),
        }
      ],
      shippingMethods: [
        {
          name: "dhl",
          src: require("@/assets/dhl.svg"),
        },
      ],
      links: [
        {
          link: "#",
          title: "IMPRINT",
        },
        {
          link: "#",
          title: "DATA PROTECTION",
        },
        {
          link: "#",
          title: "COOKIES",
        },
        {
          link: "#",
          title: "TAKE BACKS",
        }
      ]
    }
  }
}
</script>

