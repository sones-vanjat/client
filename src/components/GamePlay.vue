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
                    <img v-if="!saucage.state" class='saucage' src="https://static1.squarespace.com/static/511ac3b9e4b0dcc6d89b137f/58b6a70015d5db7e996c956e/58b6b2b0579fb33aec966172/1488368304471/Dad_Climb.gif?format=1000w" :style="{margin: saucage.position2}">
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
    import swal from 'sweetalert';
    
    export default {
        data() {
            return {
                saucage: {
                    position: '-190px 0 0 -50px',
                    position2: '-190px 0 0 -50px',
                    movePos: '',
                    state: true,
                    finished: false
                }
            }
        },
        methods: {
            moveTop() {
                this.engah()
                let topPos = this.saucage.position.split(' ')
                let changeTopPos = Number(topPos[0].slice(0, 4))
                changeTopPos -= 10
                this.saucage.movePos = changeTopPos
                console.log('player1', this.saucage.movePos)
    
                if (this.saucage.movePos !== '') {
                    this.saucage.state = false
                }
    
                let strTopPos = changeTopPos + 'px'
                topPos[0] = strTopPos
                this.saucage.position = topPos.join(' ')
    
                if (this.saucage.movePos == -600) {
                    swal({
                        title: "EDAAAN MANTAP LUUURRRRR!!!",
                        text: "Congratulations for beating that noob!",
                        icon: "https://media.giphy.com/media/TfKfqjt2i4GIM/giphy.gif",
                    });
                    this.saucage.finished = true
                }
            },
            moveTop2() {
                this.engah2()
                let topPos = this.saucage.position2.split(' ')
                let changeTopPos = Number(topPos[0].slice(0, 4))
                changeTopPos -= 10
                this.saucage.movePos = changeTopPos
                console.log('player2', this.saucage.movePos)
    
                if (this.saucage.movePos !== '') {
                    this.saucage.state = false
                }
    
                if (this.saucage.movePos == -600) {
                    swal({
                        title: "EDAAAN MANTAP LUUURRRRR!!!",
                        text: "Congratulations for beating that noob!",
                        icon: "https://media.giphy.com/media/l0HU6veQiH1wCR91C/giphy.gif",
                    });
                    this.saucage.finished = true
                }
                let strTopPos = changeTopPos + 'px'
                topPos[0] = strTopPos
                this.saucage.position2 = topPos.join(' ')
            },
            engah() {
                document.getElementById('engah').play();
            },
            engah2() {
                document.getElementById('engah2').play()
            }
        },
        mounted() {
    
        },
    }
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
        background-image: url('https://media.giphy.com/media/3ov9jCYBYtLNI3Qqbu/giphy.gif');
        height: 100%;
        width: 100%;
        background-size: cover;
        position: absolute;
    }
</style>
