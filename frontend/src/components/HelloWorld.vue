<template>
  <div class="hello" style="margin-top:6%">
    <center>
      <v-layout row justify-center>
        <v-flex xs8 xl6 lg6 sm8 md6>
          <v-card to="/t20" class="cardBorder py-5 my-2" dark>
            <v-card-text>
              <h2>T20I</h2>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs8 xl6 lg6 sm8 md6>
          <v-card to="/odi" class="cardBorder py-5 my-2" dark>
            <v-card-text>
              <h2>ODI</h2>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </center>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
