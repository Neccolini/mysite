<template>
  <div>
    <PageTitle title="About me"/>
    <v-img src="https://avatars.githubusercontent.com/u/62463660?s=400&u=55252abf739a849116e1bc0697647d1b21ed143e&v=4"
     max-height="350" max-width="500" />
    <div>
      <section id="about" class="about-wrapper">
        <v-container fluid>
          <v-row justify="center" align="center" fluid>
            <table class="headline">
              <tbody>
                <tr v-for="(contact, index) in contacts" :key="index">
                  <th>{{contact.key}}</th>
                  <td v-if="contact.url" class="last-td">
                    <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                      {{contact.value}}
                    </a>
                  </td>
                  <td v-else class="last-td">
                    {{contact.value}}
                  </td>
                </tr>
              </tbody>
            </table>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row justify="center">
            <v-col>
              <v-btn text :href="github_link" target="_blank">
                <v-icon color="#211F1F">mdi-github</v-icon>
                <span>Github</span>
              </v-btn>
            </v-col>
            <v-col >
              <v-btn text :href="twitter_link" target="_blank">
                <v-icon color="#1DA1F2">mdi-twitter</v-icon>
                <span>Twitter</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </div>
</template>
<script>
import PageTitle from './PageTitle'
export default {
    name:"Top",
    components:{
        PageTitle
    },
    data() {
        return{
            contacts:[
                {key:"Name", value:"Neccolini", url:""},
                {key:"University", value:"東京大学", url:"https://www.u-tokyo.ac.jp/ja/index.html"},
                {key:"Faculty", value :"工学部", url:"https://www.t.u-tokyo.ac.jp/foe/index.html"},
                {key:"Department", value: "電子情報工学科", url:"https://www.ee.t.u-tokyo.ac.jp/j/"},
                {key: "Year", value:"3年"},
                {key: "Laboratory", value: "Coming soon...", url:""}
            ],
            twitter_link: "https://twitter.com/AyaKomichi_0915",
            github_link: "https://github.com/Neccolini"
        }
    }
}
</script>

<style scoped>
</style>
