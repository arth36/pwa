<template>
  <div class="hello white--text" style="margin-top:8%">
  
 
  
     <h1 v-if="this.getDetail.matchStarted===false" class="white--text">Match is not started yet!</h1>
    <h1 v-if="this.getDetail.stat.includes('abandoned') || this.getDetail.stat.includes('tied') " class="white--text">{{this.getDetail.stat}}</h1>
    <v-layout v-if="this.getDetail.matchStarted===true && !this.getDetail.stat.includes('abandoned')" row justify-center>
    <v-flex xs10 lg8 md8 xl8 sm10>
    <v-card  style="margin-top:18%;" class="cardBorder py-3" dark>
    <center>
    <v-card-text>
    {{this.getDetail.score}}
    </v-card-text>
    <p class="pt-4">{{this.getDetail.stat}}</p>
    </center>
    </v-card>
    </v-flex>
    </v-layout>

  </div>
</template>

<script>
import axios from "axios";
import router from '../router'
export default {
  name: "T20Score",
  data() {
      return {
          score:undefined
      }
  },
  asyncComputed:{
      async getDetail(){
         let score;
         return score;
      }

  },
  methods: {
    async getData() {

        let matchId= this.$route.params.matchId
        let finalData;
         let data = await axios({
        url: "http://localhost:3000/score/" + matchId,
        method: "post"
      });
      this.getDetail=data.data.data;
    },
     timer:async function(){
          let matchId= this.$route.params.matchId
          let finalData
            setInterval(async()=>{

        
           // console.log(matchId);
                let newData;
               console.log('hi')
        
        newData = await axios({
            url: "http://localhost:3000/score/" + matchId,
            method: "post"
        })
           // console.log(data)
             finalData=newData.data.data
            //  finalData.stat="hmm"
              
            this.getDetail=finalData
        
        },5000)
          console.log(this.getDetail)
         }
  }
  ,
  async created() {
    await this.getData();
    if(!this.getDetail.stat.includes('abandoned') && !this.getDetail.stat.includes('tied') && !this.getDetail.stat.includes('won')){
    await this.timer();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cardBorder {
  border-radius: 12px;
}
</style>
