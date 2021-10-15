
<template>
  <v-card
    class="mx-auto"
    max-width="250"
    
  >
    <v-img
      class="white--text align-end"
      height="180px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >

      <v-card-title>{{infocard.titulo}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
     volumen: {{infocard.volumen}}  
    </v-card-subtitle>
   
      
    
  
    <v-card-subtitle>
      
        precio: {{infocard.precio}}
      <div>
        Genero: {{infocard.genero}}
      </div>
    </v-card-subtitle>
    <v-card-actions>
      <Modal :infoModal=infocard />
      
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
            
            {{infocard.descripcion}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
 import Modal from '../components/modal.vue'
  export default {
  
        name:'Card',
        data:()=>({show:false,}),
        props:[
          'infocard',
        ],
  components:{Modal}
  }
</script>