<template>
    <div class="container">
        <h1>sones vanjat</h1>
      <div class="row">
        <div class="input-field col s6">
            <input  v-model="playerName" id="first_name2" type="text" class="validate">
            <label class="active">Player Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
            <input v-model="room" id="first_name2" type="text" class="validate">
            <label class="active">Room Name</label>
        </div>
       </div>
       <a class="waves-effect waves-light btn" @click="addRoom">submit</a>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            room: '',
            playerName: ''
        }
    },
    methods: {
        ...mapActions([
            'createRoom'
        ]),
        addRoom: function () {
            // this.$store.dispatch('createRoom', {
            //     player: this.playerName,
            //     room: this.room
            // })
            let new_room = {
                room: this.room,
                player: this.playerName
            }
            this.createRoom(new_room)
        }

    }
}
</script>

<style scoped>
    
</style>
