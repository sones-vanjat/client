import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomName: '',
    player: ''
  },
  mutations: {
    addPlayerName (state, payload) {
      state.playerName = payload
    }
  },
  actions: {
    createRoom (context, data) {
      let player = data.player
        let room = data.room
        db.ref('rooms/' + room).once('value').then(function(snapshot){
            // console.log(snapshot.val());
            let cek = snapshot.val()
            if (cek == null) {
                db.ref('rooms/' + room + '/player1').set({
                    player: player,
                    position: '-190px 0 0 -40px',
                })
                this.$route.push('/room')
            }else if (!cek.player2 && cek.player1 !== '') {
                db.ref('rooms/' + room + '/player2').set({
                    player: player,
                    position: '-190px 0 0 -40px'
                })
                this.$route.push('/room')
            }
        });
    },
    updatePosition () {

    }
  }
})
