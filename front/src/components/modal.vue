<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="orange"
        class="ma-2"
        text
        dark
        @click="dialog = true"
      >
        comprar
      </v-btn>
          
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar
            flat
            dark
            color="black"
            max-height="11vh"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Pestaña de compra</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                
            </v-toolbar-items>
            
          </v-toolbar>
          <v-card-text>

            <v-divider></v-divider>
            <v-list
              three-line
              subheader
              class="d-flex wrap justify-md-start"
            >
            
            <v-card class="col-7" elevation="2">
                <v-card-title>
                    Metodo de pago
                </v-card-title>
                <v-card-text>
                
                    <v-select
                    :items="select"
                    hide-selected
                    label="metodo de pago"
                    item-value="text"
                    @mousedown="bot = !bot"
                    id="select"
                    >
                    
                    
                    </v-select>
                    
                </v-card-text>
               
                <v-card-actions>
                    
                </v-card-actions>
            </v-card>
            <v-card class="col-5" elevation="2">
                <v-card-title>Factura</v-card-title>
                <v-card-text>Producto: {{infoModal.titulo}}</v-card-text>
                <v-card-text>Precio: {{infoModal.precio}}</v-card-text>
               
                  
            <v-card-actions>
                        
            <v-btn
                
                color="orange"
                dark
                text
                class="ma-2"
                @click="dialog3 = !dialog3"
            >
                confirmar compra
            </v-btn>
            
            </v-card-actions>
            </v-card>            
            
               
              
            </v-list>
            <v-banner>Opcion no disponible por el momento</v-banner>
             

            </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
      
          
        
    
      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card color="black">
          <v-card-title class="white--text">
            <span>Esta seguro de realizar la accion</span>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              left
            >  
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              @click="dialog3 = false"
              
            >
              cancelar
            </v-btn>
             <v-btn
              color="orange"
              text
              @click="dialog3 = false, dialog=false"
            >
              confirmar
            </v-btn>
            
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        bot: false,
        items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],
        select: [
          { text: 'Paypal' },
          { text: 'Visa' },
          { text: 'Master Card' },
         
        ],
      }
    },
    props:[
        'infoModal',
    ]
  }
 
</script>