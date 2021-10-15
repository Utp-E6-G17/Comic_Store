<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="white"
          size="44"
        ></v-avatar>
        
        <div
          v-for="link in links"
          :key="link"
          
        >
        <div v-if="link==='Inicio'">
            <v-btn to ="/" class="white--text" text>Inicio</v-btn>
        </div>
          
        </div>
        <Dropdown/>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-2">
    <v-container>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Username"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Entrar
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            to="/"
            >
            cancelar
            </v-btn>

           
        </v-form>
    </v-container>
      
    
    </v-main>
    <FooterP/>
  </v-app>
</template>

<script>

    import FooterP from '../components/FooterP.vue'
    
    //import Icaview from '../views/icarview.vue'
    //import cards from '../components/cards.vue'
    import Dropdown from '../components/dropdown.vue'
  
    
    export default {
        name:'Comics',
        
        data: () => ({
        links: [
            'Inicio',
            'Perfil',
            'Sobre nosotros',
            
        ],
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
  
        }),
       
        components: {  FooterP, Dropdown},
        comments:{
            
            FooterP,
            Dropdown,
            
            
        },
        methods: {
        
    },
    }
    
</script>
