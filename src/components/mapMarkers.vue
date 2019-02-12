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
  created(){
    this.geocode();
  },
  methods: {
    geocode(){
      for(let place in this.locations){
        let address = this.locations[place].address.replace(/ /g, "+")
        console.log(address);
      }
    }
  }
}

</script>

<style lang="scss">

</style>