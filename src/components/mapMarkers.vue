<template>
<div>
 <GmapMarker
  v-for="place in this.places"
  :position="{lat:parseFloat(place.lat), lng:parseFloat(place.lng)}"
  :clickable="true"
  :draggable="true"
  @click="center=m.position"
  />
</div>
</template>

<script>
import axios from 'axios';
import tourneys from '@/services/tourneys';
export default{
  name: 'mapMarkers',
  props: ['locations'],
  data(){
  	return{
  	  msg: 'loaded',
  	  centerlat: 47.6062,
  	  centerlong: -122.3321,
  	  places: this.locations,
  	}
  },
  watch: {
    'locations': {
      handler(){
        console.log(this.tourneys);
        this.places = this.locations;
      }
      
    }
  },
  created(){

  },
  methods: {
    
  }
}

</script>

<style lang="scss">

</style>