<template>
<div>
    <h1 style="font-family: 'Kosugi Maru', sans-serif;" >Let's Do It</h1>
    <img src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b28c2e69cfbf3eb81b2c/1488368268866/Dad_Walk.gif?format=1000w" alt="">
</div>

</template>

<script>
import db from '../firebase.js'
import { mapState } from 'vuex';
export default {
  data() {
    return {
        token1 : '',
        token2 : ''
    };
  },
  computed: {
        ...mapState([
            'readyRoom'
        ])
    },
  mounted() {
    //   this.$store.state.readyRoom
    //   console.log('iueueueu',this.readyRoom);
      let room = localStorage.getItem('room')
    
    
    db.ref('rooms/').on('value', function (snapshot) {
                var roomArray = []
                var result = snapshot.val()
                console.log(result); // object
                let countPlayer = 0
                // console.log(.length);
                for(let count in result[room]) {
                    countPlayer++
                    if(countPlayer === 2) {
                        window.location.href = '/gamePlay'
                    }
                }
            })
    },
    

};
</script>

<style>
</style>