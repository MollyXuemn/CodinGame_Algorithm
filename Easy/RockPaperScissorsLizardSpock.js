const rules = ['CP', 'PR', 'RL', 'LS', 'SC', 'CL', 'LP', 'PS', 'SR', 'RC'];

const N = parseInt(readline());
var players = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    var player = {
        num: NUMPLAYER,
        sign: SIGNPLAYER,
        adv: []
    }
    players.push(player);
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


//loop runs all the players line for line
while (players.length != 1) round();

console.error(players);
console.log(players[0].num);
console.log(players[0].adv.join(' '));

function round() {
    for (let i = 0; i < players.length; i++) {
        match(i, i + 1); //we will compare row i and i+1, and delete the bigger one line 
    }
}


function match(indexA, indexB) {
    var playerA = players[indexA];
    var playerB = players[indexB];
    // determine who will win the round => create an array to determine
    var playerAWin = rules.includes(playerA.sign + playerB.sign) ? true : rules.includes(playerB.sign + playerA.sign) ? false : playerA.num < playerB.num;//if playerA Win return true
    //if playerA Wins, then add the adversies to the list adv
    if (playerAWin) {
        playerA.adv.push(playerB.num);
        //delete the playerB (ennemy of playerA) in the players list
        players.splice(indexB, 1);
    } else {
        playerB.adv.push(playerA.num);
        players.splice(indexA, 1);
    }

}

