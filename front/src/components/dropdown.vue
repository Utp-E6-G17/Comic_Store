<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="white--text"
            text
            v-bind="attrs"
            v-on="on"
        >
          Productos
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          
          <v-list-item-title>
            
             <div v-if="item.title === 'Comics'">
              <v-btn to="/comics" text> Comics</v-btn>
              </div>
              
              
            
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Comics' },
        { title: 'Ropa' },
        { title: 'Accesorios' },
       
      ],
    }),
  }
</script>
