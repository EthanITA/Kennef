<template>
  <v-container>
    <v-row align="start" class="my-16">
      <v-col cols="12" md="6" lg="6" xl="6">
        <h2 class="text-h4 secondar--text font-weight-semibold mt-4 mb-8">Profilo</h2>
      </v-col>
      <v-col cols="12" md="3" lg="3" xl="3" offset-md="3" offset-lg="3" offset-xl="3" >
        <v-select class="rounded-0" outlined filled :items="filters" filters-text="text" filters-value="value" label="Filtra" color="secondary"
          return-object single-line></v-select>
      </v-col>
    </v-row>
    <v-row align="center">
      <!-- ITEM OF THE ORDER -->
      <v-col cols="12" md="8" lg="8" xl="8" >
        <!-- ITEM  -->
        <v-row>
          <v-col cols="12" md="1" lg="1" xl="1">
            <!-- IMG -->
            <v-sheet color="grey lighten-2" height="100" width="100">
            </v-sheet>
          </v-col>
          <v-col class="ml-8" cols="12" md="10" lg="10" xl="10">
            <!-- NAME / DATE / BUTTONS   -->
            <span class="secondary--text text-subtitle-1 font-weight-regular">Nome</span>
            <p class="secondary--text text-caption font-weight-thin">Ordinato il 12 Ottobre 2022</p>
            <v-btn depressed color="primary" class="rounded-0 mr-2">Ordina di nuovo</v-btn>
            <v-btn depressed outlined color="white" class=" secondary--text rounded-0">Visualizza Ordine</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="ml-auto" cols="12" md="3" lg="3" xl="3">
        <!-- UTILITY BUTTONS -->
        <v-btn class="mb-2 rounded-0" block depressed outlined color="secondary">
          Ricevi assistenza
        </v-btn>
        <v-btn class="mb-2 rounded-0" block depressed outlined color="secondary">
          Restituisci articoli
        </v-btn>
        <v-btn class="rounded-0" block depressed outlined color="secondary">
          Scarica Fattura
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VOrders',
  data() {
    return {
      filters: [
        {
          text: 'Ultime 24 ore',
          value: 24,
        },
        {
          text: 'Ultimi 3 giorni',
          value: 3,
        },
        {
          text: 'Ultimi 7 giorni',
          value: 7,
        },
        {
          text: 'Ultimi 30 giorni',
          value: 30,
        },


      ]
    }
  }
}
</script>

