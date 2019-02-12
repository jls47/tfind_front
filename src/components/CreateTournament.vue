<template>
  <div class="tournaments">
  <form @submit.prevent="handleSubmit">
    <label>
      <input type="text" v-model="form.name"/>
      <input type="text" v-model="form.region"/>
      <input type="text" v-model="form.address"/>
      <input type="text" v-model="form.torg"/>
      <input type="text" v-model="form.size"/>
      <input type="text" v-model="form.entrycond"/>
      <input type="text" v-model="form.games"/>
      <input type="text" v-model="form.series"/>
    </label>
    <button type="submit">Create</button>
  </form>
    <ul v-if="form.name.length > 0">
      <p>Does this look right?</p>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import tourneys from '@/services/tourneys';
export default {
  name: 'tournaments',
  data () {
    return {
      form: {
        name: '',
        region: '',
        address: '',
        torg: '',
        size: '',
        entrycond: '',
        games: [],
        series: [],
        lat: 0,
        lng: 0,
        formatted: ""
      },
      forminput: 'form tournaments',
    	tournaments: []
    }
  },
  methods: {
    handleSubmit(){
      let games1 = this.form.games.split(', ')
      let series1 = this.form.series.split(', ')
      this.form.series = [];
      this.form.games = [];
      for(var game in games1){
      	this.form.games.push('"' + games1[game] + '"');
      }
      for(var game in series1){
      	this.form.series.push('"' + series1[game] + '"');
      }
      console.log(this.form);
  	  if(this.form){
        console.log(this.address);
        let address = this.form.address.replace(/ /g, "+");
        tourneys.getCoords(address)
          .then(data => {
            this.form.lat = data.coords.lat;
            this.form.lng = data.coords.lng;
            this.form.address = data.formatted;
            tourneys.createTournament(this.form)
              .then(Ts => {
                this.tournaments = Ts
              })
          })
      }
    }
  }

}
</script>

<style lang="scss">
	li{
		list-style-type: none;
	}
</style>