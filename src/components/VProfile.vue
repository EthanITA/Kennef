<template>
  <v-container class="py-16">
    <h2 class="text-h4 secondar--text font-weight-semibold mt-4 mb-8">Profilo</h2>
    <v-row no-gutters align="center" justify="start">
      <v-col cols="12" md="6" lg="6" xl="6">
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
                      <v-list-item-title class="secondary--text font-weight-semibold text-subtitle-1"
                        v-html="item.name"></v-list-item-title>
                      <a><span class="font-weight-semibold primary--text text-subtitle-2">Cambia avatar</span></a>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>
      </v-col>
      <v-col align="start" cols="12" md="4" lg="4" xl="4">
        <v-list>
          <template>
            <v-list-item>
              <v-list-item-content>
                <v-row justify="end">
                  <v-col cols="6" md="6" lg="6" xl="6">
                    <div class="text-right">
                      <v-list-item-title class="grey--text mb-1">francesco.morleoo@gmil.com</v-list-item-title>
                      <a>Exit</a>
                    </div>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>

    <h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Personali</h3>
    <v-row>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>

    </v-row>

    <h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Aziendali</h3>
    <v-row>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>

    </v-row>
    <h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Indirizzo di fatturazione</h3>
    <v-row>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'VProfile',
  data() {
    return {
      profileInfo: [
        {
          name: "Francesco Morleo",
          avatar: "mdi-account-circle",
          email: "francesco.morleoo@gmail.com",
        },
      ],

    }
  }
}
</script>