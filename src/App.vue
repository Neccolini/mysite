<template>
  <div>
    <v-app>
      <Header/>
      <v-content>
        <v-container >
          <v-row justify="center" align-content="center">
            <router-view></router-view>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  components:{
    Header
  }
}
</script>