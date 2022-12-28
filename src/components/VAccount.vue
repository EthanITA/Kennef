<template>
  <v-container fluid>
    <v-row  no-gutters align="center" justify="center">
      <v-col cols="12" md="6"  lg="6" xl="6">
        <v-container fluid>
          <v-list>
            <template>
              <v-list-item v-for="item in profileInfo" :key="item.name">
                <v-list-item-avatar>
                  <v-icon x-large>
                    {{ item.avatar }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-row>
                    <v-col cols="6" md="4" lg="4" xl="4">
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.email"></v-list-item-subtitle>
                    </v-col>
                    <v-col cols="6" md="2" lg="2" xl="2">
                      <v-btn color="primary" icon elevation="0">
                        <v-icon>mdi-logout</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>
      </v-col>
      <v-col align="start" cols="12" md="3" lg="3" xl="3">
          <v-btn color="primary" class="text-subtitle-1 font-weight-semibold" x-large text>
            <v-icon class="mr-8" x-large left>mdi-face-agent</v-icon>
            Hai bisogno di assistenza ?
          </v-btn>
      </v-col>
    </v-row>

    <v-row  justify="center" class="my-16">
      <v-col v-for="item in cards" :key="item.title" cols="12" md="3" lg="3" xl="3">
        <!-- TO DO : INSERT HOVER BEHAVIOUR  -->
        <v-sheet class="ml-4" elevation="0">
          <v-row align="baseline">
            <v-col class="ml-4 mt-3" cols="12" md="1" lg="1" xl="1">
              <v-icon color="secondary">{{item.icon}}</v-icon>
            </v-col>
            <v-col cols="12" md="9" lg="9" xl="9">
              <span class="font-weight-semibold text-subtitle-1">{{item.title}}</span>
              <div class="font-weight-regular text-subtitle-2 grey--text">{{item.description}}</div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VProfile",
  data() {
    return {
      profileInfo: [
        {
          name: "Francesco Morleo",
          avatar: "mdi-account-circle",
          email: "francesco.morleoo@gmail.com",
        },
      ],
      cards: [
        {
          title: "I miei ordini",
          description: "Restituisci o acquista nuovamente degli articoli.",
          icon: "mdi-phone-outline",
        },
        {
          title: "Profilo",
          description: "Modifica i tuoi dati personali.",
          icon: "mdi-account-outline",
        },
        {
          title: "Sicurezza",
          description: "Modifica la tua password",
          icon: "mdi-lock-outline",
        },
      ]
    }
  }
}
</script>

<style>

</style>