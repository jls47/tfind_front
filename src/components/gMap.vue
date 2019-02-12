<template>
<GmapMap
  :center="{lat:this.centerlat, lng:this.centerlong}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
 >
 <markers :locations="this.touse"></markers>
 </GmapMap>
</template>

<script>
import mapMarkers from '@/components/mapMarkers';
export default{
  name: 'gMap',
  props: ['tourneys'],
  data(){
  	return{
  	  msg: 'loaded',
  	  centerlat: 47.6062,
  	  centerlong: -122.3321,
  	  touse: this.tourneys,

  	}
  },
  mounted(){

  },
  components: {
  	markers: mapMarkers
  }
}

</script>

<style lang="scss">

</style>