<template>
  <div v-if="$router.currentRoute.name.includes('t20Score')===false" id="show-t20">
    <div v-if="loading" class="ma-0">
      <loading
        :active.sync="loading"
        background-color="#050505"
        color="#007bff"
        loader="dots"
        transition="fade"
        height="150"
        width="150"
        is-full-page
      ></loading>
    </div>
    <h1 class="header my-2 white--text">T20I</h1>
    <v-layout v-for="(match,index) in matches" :key="index" class="my-4" row justify-center>
      <v-flex xs12 sm10 md10 lg10 xl10>
        <v-card data-aos="zoom-in-up" data-offset="0" hover @click="toMatch(match.unique_id)" dark class="py-3 mx-3 cardBorder">
          <v-card-text>
            <h1 class="my-2">{{match.team_1}}</h1>
            <h3 class="my-2">vs</h3>
            <h1 class="my-2">{{match.team_2}}</h1>
            <p v-if="match.matchStarted==false">Match is not started yet</p>
             <p v-else>Tap to view</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
  <div v-else-if="$router.currentRoute.name.includes('t20Score')">
    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      matches: [],
      loading: false
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let data = await axios({
        url: "http://localhost:3000/matches/t20",
        method: "GET"
      });
      console.log(data.data.data);
      this.matches = data.data.data;
      this.loading = false;
    },
     toMatch(index) {
      this.$router.push({
        name: "t20Score",
        params: { matchId: index }
      });
      window.location.reload();
      //alert(this.$router.currentRoute.name);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
#show-odi {
  max-width: 800px;
  margin: 0 auto;
}
.single-odi {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
.cardBorder {
  border-radius: 12px;
}
</style>


