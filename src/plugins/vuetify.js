import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import IconCamion from "@/components/IconCamion.vue";
import IconKennef from "@/components/IconKennef.vue";
import IconKey from "@/components/IconKey.vue";
import IconShield from "@/components/IconShield.vue";
import IconCart from "@/components/IconCart.vue";
import IconInstagram from "@/components/IconInstagram.vue";
import IconFacebook from "@/components/IconFacebook.vue";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {

      kennef:{
        component: IconKennef,
        props : {
          name : 'kennef'
        }
      },
      camion: {
        component : IconCamion,
        props : {
          name : 'camion',
        }
      },
      cart: {
        component : IconCart,
        props : {
          name : 'cart',
        }
      },
      key: {
        component : IconKey,
        props : {
          name : 'key',
        }
      },
      shield: {
        component : IconShield,
        props : {
          name : 'shield',
        }
      },
      fb: {
        component : IconFacebook,
        props : {
          name : 'facebook',
        }
      },
      ig: {
        component : IconInstagram,
        props : {
          name : 'instagram',
        }
      }
    },
  },
  theme: {
    themes: {
      light: {
        primary: "#EA5734",
        secondary: "#003F4B",
      },
    },
  },
});
