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
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo nome." label="Nome"></v-text-field>
      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome." label="Cognome"></v-text-field>
      </v-col>
    </v-row>

    <h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Aziendali</h3>
    <v-row>
      <v-col cols="12" md="12" lg="6" xl="6">
        <v-text-field filled outlined class="rounded-0"
          hint="La ragione sociale costituisce il nome nelle società di persone e può corrispondere anche ad un nome di fantasia."
          label="Ragione Sociale"></v-text-field>

      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
        <v-text-field filled outlined class="rounded-0"
          hint="Se si ha una partita IVA inserire quella altrimenti inserire il proprio codice fiscale."
          label="Partita IVA/Codice Fiscale"></v-text-field>
      </v-col>

    </v-row>
    <h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Indirizzo di fatturazione</h3>
    <v-row>
      <v-col cols="12" md="12" lg="6" xl="6">
        <v-text-field filled outlined class="rounded-0" hint="Inserire il proprio indirizzo."
          label="Indirizzo"></v-text-field>
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome." label="CAP"></v-text-field>
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome." label="Paese"></v-text-field>
        <v-btn depressed class="rounded-0" color="primary">Modifica</v-btn>
      </v-col>
      <v-col cols="12" md="12" lg="6" xl="6">
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome."
          label="Provincia"></v-text-field>
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome." label="Città"></v-text-field>
        <v-text-field filled outlined class="rounded-0" hint="Inserisci il tuo cognome."
          label="Telefono"></v-text-field>
      </v-col>
    </v-row>
    <h2 class="text-h4 secondar--text font-weight-semibold mt-11 mb-8">Sicurezza</h2>
    <v-row>
      <v-col cols="12" md="5" lg="5" xl="5">
        <v-text-field disabled outlined class="rounded-0" value="emaildiprova@gmail.com" hint="La tua email"
          label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" md="5" lg="5" xl="5">
        <v-text-field type="password" value="password" disabled outlined class="rounded-0" hint="La tua password"
          label="Password"></v-text-field>
      </v-col>
      <v-col cols="12" md="2" lg="2" xl="2">
        <v-btn depressed class="rounded-0" color="primary">
          Modifica
        </v-btn>
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