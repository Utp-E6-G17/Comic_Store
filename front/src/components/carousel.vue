<template>
  <v-carousel >
    <v-carousel-item
      v-for="item, i in infonews"
      :key="i"
      :src="items[i]"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    >
      <div class="d-flex flex-wrap justify-lg-start"><Card :infocard=infonews[i] /></div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  import Card from '../components/nonvcard.vue'
  export default {
    name:'carousel',
    data: () => ({
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        infonews:[
          {titleNews:"Old man logan",
           textNews:"El factor curativo del mutante se ha realentizado un poco",
           linkNews:"https://www.diariodelnorte.net/"},
          {titleNews:"Old man",
           textNews:"El factor curativo del mutante se ha realentizado un pocova aadasfafadfaddagdgadgdagagadgad",
           linkNews:"https://www.diariodelnorte.net/"},
           {titleNews:"Old mans",
           textNews:"El factor curativo del mutante se ha realentizado un pocova aadasfafadfaddagdgadgdagagadgad",
           linkNews:"https://www.diariodelnorte.net/"}
        ]
      
    }),
   props:['infonew'],
   components:{Card}
  }
</script>
