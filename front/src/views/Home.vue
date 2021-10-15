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
        <v-btn  to ="/login" class="white--text" text>sing in</v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
            <v-col>
            <v-sheet
              min-height="30vh"
              rounded="lg"
            >
            <Carousel />
            
            </v-sheet>
            </v-col>
        </v-row>

        <v-row>
                      
          <v-col color="black">
            <v-sheet
              color="black"
              min-height="20vh"
              rounded="1g"
              elevation="3"
            >
            <v-banner class="font-weight-medium white--text" color="black" >Productos populares</v-banner>
            
             <div class="d-flex flex-wrap justify-lg-start mb-6 black">
              <div class="pa-4 black" v-for="item, i in 4" :key="i"> <Cards :infocard=results[i] /></div>
            </div>

            </v-sheet>
          </v-col>
        </v-row>
        
      </v-container>
      
    <FooterP/>
    </v-main>
  </v-app>
</template>

<script>

    import FooterP from '../components/FooterP.vue'
    import Carousel from '../components/carousel.vue'
    //import Text from '../components/text.vue'
    import Dropdown from '../components/dropdown.vue'
//    import Icaview from '../views/icarview.vue'
    import Cards from '../components/cards.vue'
    import {getAllComics} from '../services/comicservices'
    export default {
        name:'Home',
        data: () => ({
        results: null,
        links: [
            'Inicio',
            'Perfil',
            'Sobre nosotros',
        ],
      
        }),
        created(){
           getAllComics().then((response) => {
             this.results = response.data
          });
        },
        components: { Carousel, FooterP, Dropdown, Cards},
        comments:{
            Carousel,
            FooterP,
            Dropdown,
            Cards,
            
        },
    }
</script>