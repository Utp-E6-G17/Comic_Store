<template>
<div class="d-flex justify-lg-start">
  <v-card
    class="white--text mx-auto"
    max-width="250"
    color="transparent"  
  >
    
    <v-card-title>{{infocard.titleNews}}</v-card-title>
    

  
    <v-card-text class="white--text">
      <div>{{infocard.textNews}}</div>
    </v-card-text>
       <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Ir al sitio
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            
            {{infocard.linkNews}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
</template>
<script>
  export default {
        name:'Card',
         data: () => ({
            show: false,
        }),
        props:[
          'infocard',
        ]
  }
</script>