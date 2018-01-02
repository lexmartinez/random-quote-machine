<template>
  <div>
    <blockquote :style="{color: color}">
      <span v-html="quote.content"></span>
      <footer>{{quote.title}}</footer>
      <a @click="getQuote"><i class="fa fa-random"></i> <span class="atext">New Quote</span></a> &nbsp; <a @click="getQuote"><i class="fa fa-twitter"></i> <span class="atext">Tweet</span></a>
    </blockquote>
  </div>
</template>

<script>
import QuotesService from '@/services/QuotesService'

export default {
  name: 'RandomQuote',
  data () {
    return {
      quote: {},
      color: '#CCC'
    }
  },
  beforeMount () {
    this.getQuote()
  },
  methods: {
    getQuote () {
      QuotesService.fetchQuote().then((response) => {
        this.quote = response.data[0]
        this.getColor()
      })
    },
    getColor () {
      const colors = ['#FFFFCC', '#CCE5FF', '#E5FFCC', '#FFFFFF']
      const index = Math.floor(Math.random() * 3)
      this.color = colors[index]
    }
  }
}
</script>

<style>
  body {
    background: #454545;
  }

  blockquote {
    font-family: 'Open Sans Condensed', sans-serif;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    font-size: 40px;
  }

  blockquote:before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -70px;
    top: 70px;
    position: relative;
    font-size: 3em;
  }

  footer {
    font-family: 'Slabo 27px', serif;
    font-size: 20px;
    text-align: right;
    width:100%;
  }

  blockquote a{
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 18px;
  }

  blockquote a:hover{
    text-decoration: underline;
  }

</style>
