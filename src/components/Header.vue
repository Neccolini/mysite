<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title gray--text text--darken-2">
              MENU
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="list in nv_lists" :key="list.name" :to="list.url" @click="changeDrawer()">
            <v-list-item-content>
              <v-list-item-title>{{list.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app color="black" dark clipped-left>
        <v-app-bar-nav-icon v-on:click="changeDrawer()"/>
        <v-toolbar-title class="ml-0 pl-4">
          <span class="hidden-sm-and-down">Neccolini's site</span>
        </v-toolbar-title>
        <v-spacer/>
        <v-form >
          <v-text-field hide-details v-model="keyword" placeholder="サイト内を検索" dense />
        </v-form>
        <v-btn icon @click="Search()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-menu left bottom>
          <template v-slot:activator="{on}">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </template>
          <v-list>
            <v-list-item v-for="n in 3" :key="n" @click="() =>{on}">
              <v-list-item-title>{{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      keyword:"",
      drawer: false,
      nv_lists:[
        {name: "About me", url:"/"},
        {name: "Posts", url: "/posts"},
        {name: "Works", url: "Works"},
      ]
    }
  },
  methods:{
    changeDrawer(){
      this.drawer = !this.drawer;
      console.log("clicked");
    },
    Search(){
      
    }
  }
}
</script>