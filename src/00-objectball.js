const gameObject  = () => {
    return {
            home:{
                teamName : "Brooklyn Nets",
                colors : "Black, White",
                players:{
                    "Alan Anderson":{
                        number : 0,
                        shoe : 16,
                        points : 22,
                        rebounds : 12,
                        assists : 12,
                        steals : 3,
                        blocks: 1,
                        slamDunks :1
                    },
                    "Reggie Evans" :{
                        number : 30,
                        shoe : 14,
                        points : 12,
                        rebounds : 12,
                        assists : 12,
                        steals : 12,
                        blocks: 12,
                        slamDunks : 7
                    },
                    "Brook Lopez":{
                        number : 11,
                        shoe : 17,
                        points : 17,
                        rebounds : 19,
                        assists : 10,
                        steals : 3,
                        blocks: 1,
                        slamDunks : 15
                    },
                    "Mason Plumlee":{
                        number : 1,
                        shoe : 19,
                        points : 26,
                        rebounds : 12,
                        assists : 6,
                        steals : 3,
                        blocks: 8,
                        slamDunks :5
                    },
                    "Jason Terry":{
                        number : 31,
                        shoe : 15,
                        points : 19,
                        rebounds : 2,
                        assists : 2,
                        steals : 4,
                        blocks: 11,
                        slamDunks : 1
                    }
                    }
        
                },
            away : {
                teamName : "Charlotte Hornets",
                colors : "Turqoise, Purple",
                players:{
                    "Jeff Adrien":{
                        number : 4,
                        shoe : 18,
                        points : 10,
                        rebounds : 1,
                        assists : 1,
                        steals : 2,
                        blocks: 7,
                        slamDunks : 2
                    },
                    "Bismak Biyombo":{
                        number : 0,
                        shoe : 16,
                        points : 12,
                        rebounds : 4,
                        assists : 7,
                        steals : 7,
                        blocks: 15,
                        slamDunks : 10
                    },
                    "DeSagna Diop":{
                        number : 2,
                        shoe : 14,
                        points : 24,
                        rebounds : 12,
                        assists : 12,
                        steals : 4,
                        blocks: 5,
                        slamDunks : 5
                    },
                    "Ben Gordon":{
                        number : 8,
                        shoe : 15,
                        points : 33,
                        rebounds : 3,
                        assists : 2,
                        steals : 1,
                        blocks: 1,
                        slamDunks : 0
                    },
                    "Brendan Haywood" :{
                        number : 33,
                        shoe : 15,
                        points : 6,
                        rebounds : 12,
                        assists : 12,
                        steals : 22,
                        blocks: 5,
                        slamDunks : 12
                    }
        
                }
                
            }
        
    }
}

const players = {...gameObject().home.players, ...gameObject().away.players};

// console.log(players);

const numPointsScored = (playerName) => {
    for (let player in players){
        if (player === playerName){
            points = players[player].points;
        }
    }
    return points;
}
// console.log(numPointsScored("Brendan Haywood"));

const shoeSize = (playerName) => {
    for (let player in players){
        if (player === playerName){
            return players[player].shoe;
        }
    }
}
// console.log(shoeSize("Brendan Haywood"))

const teamColors = (teamName) => {
    return gameObject().home.teamName === teamName ? gameObject().home.colors : gameObject().away.colors;
}
// console.log(teamColors("Charlotte Hornets"))

const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName];
}
// console.log(teamNames());

const playerNumbers = (team) => {
    const teams = gameObject().home.teamName === team ? gameObject().home.players : gameObject().away.players;
    const playerNumbers = [];

    for (let player in teams){
        playerNumbers.push(teams[player].number);
    }
    return playerNumbers;
}
// console.log(playerNumbers())

const playerStats = (playerName) => {
    for (let player in players) {
        if (player === playerName) {
                return players[player];
        }
    }
}
// console.log(playerStats("Alan Anderson"))

const bigShoeRebounds = () => {
    let biggestShoeSize = 0;
    let biggestShoeRebounds = 0;
    for (let player in players) {
        if (players[player].shoe > biggestShoeSize) {
                biggestShoeSize = players[player].shoe;
                biggestShoeRebounds = players[player].rebounds;
        }
    }
    console.log(biggestShoeSize);
    return biggestShoeRebounds;
}

// console.log(bigShoeRebounds());




