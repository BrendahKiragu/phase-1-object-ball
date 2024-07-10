function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15 
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5 
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 13,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// gets the individual players from both teams
function getAllPlayers() {
    let game = gameObject();
    return { ...game.home.players, ...game.away.players };
}

// Function to get the number of points scored by a player
function numPointsScored(playerName){
    let players = getAllPlayers();
    return players[playerName]?.points;
}

// Function to get the shoe size of a player
function shoeSize(playerName){
    let players = getAllPlayers();
    return players[playerName]?.shoe;
}

// Function to get the colors of a team
function teamColors(targetTeam){
    let game = gameObject();
    for(let team in game){
        if(game[team].teamName === targetTeam){
            return game[team].colors;
        }
    }
}

// Function to get the names of all teams
function teamNames(){
    let game = gameObject();
    return Object.values(game).map(team => team.teamName);
}

// Function to get the jersey numbers of players in a team
function playerNumbers(targetTeam){
    let game = gameObject();
    for(let team in game){
        if(game[team].teamName === targetTeam){
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}

// Function to get the stats of a player
function playerStats(playerName){
    let players = getAllPlayers();
    return players[playerName];
}

// Function to get the number of rebounds of the player with the largest shoe size
function bigShoeRebounds(){
    let players = getAllPlayers();
    let maxShoeSize = 0;
    let rebounds = 0;
    for(let player in players){
        if(players[player].shoe > maxShoeSize){
            maxShoeSize = players[player].shoe;
            rebounds = players[player].rebounds;
        }
    }
    return rebounds;
}

// Function to get the player with the most points
function mostPointsScored(){
    let players = getAllPlayers();
    let maxPoints = 0;
    let topPlayer = '';
    for(let player in players){
        if(players[player].points > maxPoints){
            maxPoints = players[player].points;
            topPlayer = player;
        }
    }
    return topPlayer;
}

// Function to get the team with the most points
function winningTeam(){
    let game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((acc, player) => acc + player.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((acc, player) => acc + player.points, 0);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function to get the player with the longest name
function playerWithLongestName(){
    let players = getAllPlayers();
    let longestName = '';
    for(let player in players){
        if(player.length > longestName.length){
            longestName = player;
        }
    }
    return longestName;
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon(){
    let players = getAllPlayers();
    let playerWithLongestName = playerWithLongestName();
    let maxSteals = Math.max(...Object.values(players).map(player => player.steals));
    return players[playerWithLongestName].steals === maxSteals;
}

console.log("numPointsScored: ", numPointsScored("Jason Terry")); // 19
