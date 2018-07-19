<template>
  <div>
    <v-content :class="selectedBackground">
      <v-container fill-height>
        <v-layout row justify-center align-center>
          <v-flex xs6 sm6>
            <v-card  class="full-width" style="min-height: 250px;">
              
              <div class="progress-linear-holder absolute">
                <v-progress-linear 
                  v-show="loader"
                  :indeterminate="true">
                </v-progress-linear> 
              </div>
              <transition name="fade">
              <div  v-if="quote">
              <v-btn
                absolute
                dark
                fab
                top
                right
                :class="selectedBackground"
                @click.stop="refreshQuote"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <v-card-text class="grey--text">
                <v-icon large class="block center">format_quote</v-icon> 
                <div class="quote-content" v-html="quote.quote"></div>
                <div class="subheading right-align mb-0" v-html="'- ' + quote.author"></div>
              </v-card-text>
              <v-card-actions class="align-start">
                <v-btn flat icon color="light-blue darken-1" @click.stop="window.open('https://twitter.com/intent/tweet/?text='+quote.quote+'&hashtags=quotes,taha_azzabi');">
                  <v-icon>fab fa-twitter</v-icon>
                </v-btn>
                <v-switch
                  label="Auto-Refreshing Quote"
                  v-model="random"
                ></v-switch>
              </v-card-actions>
            </div>
          </transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        color="error"
        v-model="snackbar"
      >
        {{ errorMessage }}
        <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quote: '',
      random: true,
      loader: false,
      errorMessage: '',
      randomQuote: '',
      snackbar: false,
      backgrounds: [
        'blue-yellow',
        'orange-yellow',
        'purple-blue',
        'sky-bleu',
        'green-blue',
        'pink'
      ],
      selectedBackground: 'pink'
    }
  },
  // data: () => ({
  //   quote: '',
  //   random: false,
  //   loader: false,
  //   errorMessage: '',
  //   randomQuote: '',
  //   snackbar: false,
  //   backgrounds: [
  //     'blue-yellow',
  //     'orange-yellow',
  //     'purple-blue',
  //     'sky-bleu',
  //     'green-blue',
  //     'pink'
  //   ],
  //   selectedBackground: 'pink'
  // }),
  methods: {
    refreshQuote () {
      this.quote = ''
      this.randomBackground()
      this.loader = true
      // must import vue-resource for $hhtp method
      this.$http.get('https://talaikis.com/api/quotes/random')
      .then(response => {
        this.quote = response.body
        this.loader = false
      })
      .catch(error => {
        console.log(error)
        this.errorMessage = 'Sorry, we can\'t get new quote right now'
        this.snackbar = true
      })
    },
    randomBackground () {
      this.selectedBackground = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
    },
    clearRandomQuote () {
      this.random = false
      clearInterval(this.randomQuote)
    }
  },
  created () {
    this.refreshQuote()
  },
  watch: {
    random (val) {
      if (val) {
        this.sliderTime = true
        this.refreshQuote()
        this.randomQuote = setInterval(this.refreshQuote, 20000)
      } else {
        this.clearRandomQuote()
      }
    }
  }
}
</script>



<style scoped>
.blue-yellow{
        background-color: #52ACFF;
        background-image: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);
      }
      .orange-yellow{
        background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
      }
      .purple-blue{
        background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
      }
      .sky-bleu{
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
      }
      .green-blue{
        background-color: #FA8BFF;
        background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
      }
      .pink{
        background-color: #FFDEE9;
        color: #FFDEE9;
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
      }
     .full-width{
       width: 100%
     }
     .progress-linear{
       margin-top: 0
     }
     .progress-linear-holder{
      top: 0px;
      width: 100%;
     }
     .quote-content{
       font-family: 'Pacifico', Arial, sans-serif;
       font-size: 2rem 
     }
     .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
</style>
