<template>
  <v-expansion-panels>
    <v-expansion-panel >
      <v-expansion-panel-header color="black" class="white--text" expand-icon="mdi-menu-down">
        <template v-slot:default="" >
          
          <v-row no-gutters>
            <v-col cols="4">
              Precio
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="black">
        <v-btn text class="white--text">20000 - 50000</v-btn>
        <v-btn text class="white--text">50000 - 100000</v-btn>
        
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header color="black" class="white--text">
        <v-row no-gutters>
          <v-col cols="4">
            Genero
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="black">
    <v-list
      flat
      subheader
      three-line
      color="black"
    >
      <v-list-item-group
        v-model="settings"
        multiple
        active-class="" 
      >
        <v-list-item >
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" background-color="grey"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content class="white--text">
              <v-list-item-title>Accion</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" background-color="grey"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content class="white--text">
              <v-list-item-title>Aventura</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action >
              <v-checkbox :input-value="active" background-color="grey" ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content class="white--text">
              <v-list-item-title>Suspenso</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  
      </v-expansion-panel-content>
    </v-expansion-panel>

    
  </v-expansion-panels>
</template>
<script>
  export default {
    data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
    }),
  }
</script>