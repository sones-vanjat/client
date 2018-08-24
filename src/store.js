import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomName: '',
    player: '',
    readyRoom : ''
  },
  mutations: {
    ADD_PLAYER (state, payload) {
      state.playerName = payload
    },
    CHANGE(state, payload){
      state.readyRoom = payload
      console.log('iue state',state.readyRoom);
      
    }
  },
  actions: {
    createRoom (context, data) {

      let player = data.player
        let room = data.room
        context.commit('CHANGE', room)
        context.commit('ADD_PALYER',player)
        db.ref('rooms/' + room).once('value').then(function(snapshot){
            // console.log(snapshot.val());
            let cek = snapshot.val()
            if (cek == null) {
                db.ref('rooms/' + room + '/player1').set({
                    player: player,
                    position: '-190px 0 0 -40px',
                    token : room
                })
                let token = room
                localStorage.setItem('room', room)
                // localStorage.setItem('token1', token)
                window.location.href = '/room'
            }else if (!cek.player2 && cek.player1 !== '') {
                db.ref('rooms/' + room + '/player2').set({
                    player: player,
                    position: '-190px 0 0 -40px',
                    token : room
                })
                let token = room
                localStorage.setItem('room', room)
                // localStorage.setItem('token2', token)
                window.location.href = '/room'
            }
        });
    },
    updatePosition (context, dataPlayer) {
      db.ref(`rooms/${dataPlayer.room}/${dataPlayer.player}`).set({
        player: dataPlayer.player,
        position: dataPlayer.position
      })
    }
  }
})
