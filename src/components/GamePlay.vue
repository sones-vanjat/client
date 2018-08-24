<template>
    <div class="template">
        <div class="row">
            
            <!-- Player1 -->
            <div class="col s6">
                <img class="tiang" src="https://www.clker.com/cliparts/t/x/W/A/E/8/telephone-pole-md.png" style="height: 650px">
                <div>
                    <img v-if="!saucage.state" class='saucage' src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b2b0579fb33aec966172/1488368304471/Dad_Climb.gif?format=1000w" :style="{margin: saucage.position}">
                    <img v-else class='saucage' src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b280cd0f6894d861844e/1488368257110/Dad-Jump.gif?format=2500w" :style="{margin: saucage.position}">
                </div>
                <div>
                    <a v-if="saucage.finished" class="waves-effect waves-light btn-large" @click="moveTop" disabled>Player 1</a>
                    <a v-else class="waves-effect waves-light btn-large" @click="moveTop">Player 1</a>
                    <audio id="engah">
                        <source src="@/assets/engahpajar.mp3" type="audio/ogg">
                    </audio>
                </div>
            </div>

            <!-- Player2 -->
            <div class="col s6">
                <img class="tiang" src="https://www.clker.com/cliparts/t/x/W/A/E/8/telephone-pole-md.png" style="height: 650px">
                <div>
                    <img v-if="!saucage.state2" class='saucage' src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b2b0579fb33aec966172/1488368304471/Dad_Climb.gif?format=1000w" :style="{margin: saucage.position2}">
                    <img v-else class='saucage' src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b280cd0f6894d861844e/1488368257110/Dad-Jump.gif?format=2500w" :style="{margin: saucage.position2}">
                       <div>
                    <img src="https://media1.giphy.com/media/HUkOv6BNWc1HO/giphy.gif" alt="" v-if="saucage.movePos >= -500 && saucage.movePos < -600" style="width:200px; margin: -650px -300px 0 0px;">
                </div>
                </div>
                <div>
                    <a v-if="saucage.finished" class="waves-effect waves-light btn-large" @click="moveTop2" disabled>Player 2</a>
                    <a v-else class="waves-effect waves-light btn-large" @click="moveTop2">Player 2</a>
                    <audio id="engah2">
                        <source src="@/assets/engahHelmi.mp3" type="audio/ogg">
                    </audio>
                </div>
                         
            </div>
        </div>
    </div>
</template>

<script>
import swal from "sweetalert";
import { mapState, mapActions } from "vuex";
import db from "../firebase.js";
import { functions } from "firebase";

export default {
  data() {
    var room = localStorage.getItem("room");
    return {
      saucage: {
        room: room,
        player: "player1",
        position: "-190px 0 0 -50px",
        position2: "-190px 0 0 -50px",
        movePos: "",
        state: true,
        state2: true,
        finished: false
      }
    };
  },
  methods: {
    ...mapActions(["updatePosition"]),
    moveTop() {
      var room = localStorage.getItem("room");
      let roomName = room;
      let player = "player1";
      let self = this;
      this.engah();
      db
        .ref("rooms/" + `${roomName}/${player}`)
        .once("value")
        .then(function(snapshoot) {
          self.saucage.position = snapshoot.val().position;
          let topPos = self.saucage.position.split(" ");
          let changeTopPos = Number(topPos[0].slice(0, 4));
          changeTopPos -= 10;
          self.saucage.movePos = changeTopPos;
          if (self.saucage.movePos !== "") {
            self.saucage.state = false;
          }

          let strTopPos = changeTopPos + "px";
          topPos[0] = strTopPos;
          self.saucage.position = topPos.join(" ");
          let updateDataUser = {
            room: roomName,
            player: player,
            position: self.saucage.position
          };
          self.updatePosition(updateDataUser);
          if (self.saucage.movePos == -600) {
            swal({
              title: "EDAAAN MANTAP LUUURRRRR!!!",
              text: "Congratulations for beating that noob!",
              icon: "https://media.giphy.com/media/TfKfqjt2i4GIM/giphy.gif",
              closeOnClickOutside: false
            });
            self.saucage.finished = true;
          }
        });
    },
    moveTop2() {
      this.engah2();
      var room = localStorage.getItem("room");
      let roomName = room;
      let player = "player2";
      let self = this;
      this.engah();
      db
        .ref("rooms/" + `${roomName}/${player}`)
        .once("value")
        .then(function(snapshoot) {
          self.saucage.position = snapshoot.val().position;
          let topPos = self.saucage.position2.split(" ")
          let changeTopPos = Number(topPos[0].slice(0, 4));
          changeTopPos -= 10;
          self.saucage.movePos = changeTopPos;
          if (self.saucage.movePos !== "") {
            self.saucage.state2 = false;
          }

          let strTopPos = changeTopPos + "px";
          topPos[0] = strTopPos;
          self.saucage.position2 = topPos.join(" ");
          let updateDataUser = {
            room: roomName,
            player: player,
            position: self.saucage.position2
          };
          self.updatePosition(updateDataUser);
          if (self.saucage.movePos == -600) {
            swal({
              title: "EDAAAN MANTAP LUUURRRRR!!!",
              text: "Congratulations for beating that noob!",
              icon: "https://media.giphy.com/media/TfKfqjt2i4GIM/giphy.gif",
              closeOnClickOutside: false
            });
            self.saucage.finished = true;
          }
        })
    },
    engah() {
      document.getElementById("engah").play();
    },
    engah2() {
      document.getElementById("engah2").play();
    }
  },
  computed: {
    ...mapState(["roomName", "player"])
  },
  created() {
    // console.log(room);
    var room = localStorage.getItem("room");
    var self = this;
    db
      .ref("rooms/" + room)
      .once("value")
      .then(function(snapshoot) {
        let newData = snapshoot.val();
        // let player1 = newData.player
        console.log(newData.player1.position);
        self.saucage.position = newData.player1.position;
        self.saucage.position2 = newData.player2.position;
      });
    let updateDataUser = {
      room: room,
      player: this.saucage.player,
      position: this.saucage.position
    };
    this.updatePosition(updateDataUser);
  }
};
</script>


<style>
.imgBorder {
  border-radius: 50%;
}

.tiang {
  position: relative;
}

.saucage {
  width: 100px;
  position: fixed;
}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: #111;
}

.right {
  right: 0;
  background-color: red;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.centered img {
  width: 150px;
  border-radius: 50%;
}

.template {
  background-image: url("https://media.giphy.com/media/3ov9jCYBYtLNI3Qqbu/giphy.gif");
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
</style>
