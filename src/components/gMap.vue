<template>
<GmapMap
  :center="{lat:0, lng:0}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
  ref="mapRef"
  @idle="updateBounds()"
 >
 <markers :locations="this.touse"></markers>
 </GmapMap>
</template>

<script>
import mapMarkers from '@/components/mapMarkers';
import {gmapApi} from 'vue2-google-maps';
export default{
  name: 'gMap',
  props: ['tourneys'],
  computed: {
    google: gmapApi,

  },
  data(){
  	return{
  	  msg: 'loaded',
  	  touse: this.tourneys

  	}
  },
  mounted(){
    this.getFirstCenter();
  },
  //Use watchers to update values on prop change.
  watch: {
    'tourneys': {
      handler(){
        console.log(this.tourneys);
        this.touse = this.tourneys;
      }
      
    }
  },
  methods: {
    //touse is not changing with results
    getFirstCenter(){
      this.$refs.mapRef.$mapPromise.then((map) => {
        let avgLat = 0.0;
        let avgLng = 0.0;
        let totLat = 0.0;
        let totLng = 0.0;
        let lats = [];
        let lngs = [];
        let boundCoords = {'SW': {'lat': 0, 'lng': 0}, 'NE': {'lat': 0, 'lng': 0}};
        for(let i = 0; i < this.touse.length; i++){
          totLat += parseFloat(this.touse[i].lat);
          totLng += parseFloat(this.touse[i].lng);
          lats.push(parseFloat(this.touse[i].lat));
          lngs.push(parseFloat(this.touse[i].lng));
        }
        boundCoords['SW']['lat'] = Math.min(...lats);
        boundCoords['SW']['lng'] = Math.min(...lngs);
        boundCoords['NE']['lat'] = Math.max(...lats);
        boundCoords['NE']['lng'] = Math.max(...lngs);
        let SW = new google.maps.LatLng(boundCoords['SW']['lat'], boundCoords['SW']['lng']);
        let NE = new google.maps.LatLng(boundCoords['NE']['lat'], boundCoords['NE']['lng']);
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(SW);
        bounds.extend(NE);
        avgLat = totLat/this.touse.length;
        avgLng = totLng/this.touse.length;

        map.panTo({lat: avgLat, lng: avgLng})
        map.fitBounds(bounds);
      })
    },
    updateBounds(){
      this.$refs.mapRef.$mapPromise.then((map) => {
        this.$emit('moved', map.getBounds());
      });
    }
  },
  components: {
  	markers: mapMarkers
  }
}

</script>

<style lang="scss">

</style>