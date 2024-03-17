
class teeTime {
    time;
    player1;
    player2;
    player3;
    player4;
    constructor(time, player1, player2, player3, player4) {
        this.time = time
        this.player1 = player1
        this.player2 = player2
        this.player3 = player3
        this.player4 = player4

    }
    getTime() {
        return time;
    }
    getPlayer1() {
        return player1;
    }
    getPlayer2() {
        return player2;
    }
    getPlayer3() {
        return player3;
    }
    getPlayer4() {
        return player4;
    }
    setTime(time) {
        this.time = time;
    }
    setPlayer1(player1) {
        this.player1 = player1;
    }
    setPlayer2(player2) {
        this.player1 = player2;
    }
    setPlayer3(player3) {
        this.player3 = player3;
    }
    setPlayer4(player4) {
        this.player4 = player4;
    }


}