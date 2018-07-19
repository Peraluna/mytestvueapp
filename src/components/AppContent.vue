<template>
<div>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">fluid</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-xl text-xs-center>
    <v-layout>
      <v-flex v-for="article in articles" :key="article.title" xs3>
        <v-card>
            <v-card-media
              :src="article.link"
              height="200px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{ article.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <!-- <h3 class="headline mb-0">{{ article.title }}</h3> -->
                <div><small>{{ article.description }}</small> </div>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn flat color="orange" @click= "showDialog" >Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
            <app-ok-dialog v-model="myDialogVisible" :dialogVisible="myDialogVisible"
                @close="myDialogClose">
            </app-ok-dialog>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    myDialogVisible: false,
    articles: [
      {title: 'Bunaken Diving Paradise', description: 'Surrounded by colorful coral reefs just off the coast of Manado in North Sulawesi is the island of Bunaken. It’s a divers paradise.', link: 'https://i2.wp.com/discoveryourindonesia.com/wp-content/uploads/2016/12/Bunaken-Island.jpg?fit=1150%2C500'},
      {title: 'Kangaroo Valley Safari', description: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...', link: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
      {title: 'Tana Toraja', description: 'At the centre of the archipelago of Indonesia is the sprawling island of Sulawesi....', link: 'https://i0.wp.com/discoveryourindonesia.com/wp-content/uploads/2016/08/Sulawesi-Guide.jpg?resize=1140%2C550'},
      {title: 'THE BALIEM VALLEY', description: 'Papua is Indonesia’s final frontier. The province sits on the island of New Guinea, which Indonesia shares with Papua New Guinea....', link: 'https://i1.wp.com/discoveryourindonesia.com/wp-content/uploads/2017/05/Trekking-in-the-Baliem-Valley.jpg?resize=1140%2C550'}
    ]
  }),
  computed: {
    binding () {
      const binding = {}
      // if device size is medium and up, display in columns
      if (this.$vuetify.breakpoint.lgAndUp) {
        binding.column = false
      }
      return binding
    }
  },
  methods: {
    myDialogClose () {
      this.myDialogVisible = false
      // other code
    },
    showDialog () {
      this.myDialogVisible = true
    }

  }

}
</script>

<style scoped>
  .resultContainer {
    height: 200px;
  }

  .item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
</style>
