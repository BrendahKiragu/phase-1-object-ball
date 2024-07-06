//gameObject creates info abbout a basketball game
function gameObject(){
    let game = {

        home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players:
                    {
                        "Alan Anderson": {
                            number: "0",
                            shoe: "16",
                            points: "22",
                            rebounds: "12",
                            assists: "12",
                            steals: "3",
                            blocks: "1",
                            slamDunks: "1" 
                        },
                        "Reggie Evans": {
                            number: "30",
                            shoe: "14",
                            points: "12",
                            rebounds: "12",
                            assists: "12",
                            steals: "12",
                            blocks: "12",
                            slamDunks: "7"
                        },
                        "Brook Lopez": {
                            number: "11",
                            shoe: "17",
                            points: "17",
                            rebounds: "19",
                            assists: "10",
                            steals: "3",
                            blocks: "1",
                            slamDunks: "15" 
                        },
                        "Mason Plumlee": {
                            number: "1",
                            shoe: "19",
                            points: "26",
                            rebounds: "12",
                            assists: "6",
                            steals: "3",
                            blocks: "8",
                            slamDunks: "5" 
                        },
                        "Jason Terry": {
                            number: "31",
                            shoe: "15",
                            points: "19",
                            rebounds: "2",
                            assists: "2",
                            steals: "4",
                            blocks: "11",
                            slamDunks: "1"
                        }
                    }
            },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:
                {
                    "Jeff Adrien": {
                        number: "4",
                        shoe: "18",
                        points: "10",
                        rebounds: "1",
                        assists: "1",
                        steals: "2",
                        blocks: "7",
                        slamDunks: "2"
                    },
                    "Bismak Biyombo": {
                        number: "0",
                        shoe: "16",
                        points: "12",
                        rebounds: "4",
                        assists: "7",
                        steals: "7",
                        blocks: "15",
                        slamDunks: "10" 
                    },
                    "DeSagna Diop": {
                        number: "2",
                        shoe: "14",
                        points: "24",
                        rebounds: "12",
                        assists: "12",
                        steals: "4",
                        blocks: "5",
                        slamDunks: "5" 
                    },
                    "Ben Gordon": {
                        number: "8",
                        shoe: "15",
                        points: "33",
                        rebounds: "3",
                        assists: "2",
                        steals: "1",
                        blocks: "1",
                        slamDunks: "0"
                    },
                    "Brendan Haywood": {
                        number: "33",
                        shoe: "13",
                        points: "6",
                        rebounds: "12",
                        assists: "12",
                        steals: "22",
                        blocks: "5",
                        slamDunks: "12"
                    }
                }
            }
    }

    return(game);
}

//creates a variable that holds home team(Brooklyn Nets) players info
let homeTeamPlayers = gameObject()["home"]["players"];

//creates a variable that holds away team(Charlotte Hornets) players info
let awayTeamPlayers = gameObject()["away"]["players"];

//this functions accesses details of the gameObject key:value 
function homeTeamName(){
    let object = gameObject();
    return object["home"]["teamName"];
}

 //returns the number of points scored by a player
 // console.log("numPointsScored: ", numPointsScored("Jason Terry"))
function numPointsScored(playerName){
    let pointsScored = 0;
    for(let currentName in homeTeamPlayers){

        if (currentName === playerName){
            return homeTeamPlayers[currentName].points;
        }
    }
    for(let currentName in awayTeamPlayers){
        if (currentName === playerName){
            return awayTeamPlayers[currentName].points;
        }
    }
}

//console.log("shoeSize: ", shoeSize("Jason Terry"))
function shoeSize(playerName){
    let pointsScored = 0;
    for(let currentName in homeTeamPlayers){

        if (currentName === playerName){
            return homeTeamPlayers[currentName].shoe;
        }
    }
    for(let currentName in awayTeamPlayers){
        if (currentName === playerName){
            return awayTeamPlayers[currentName].shoe;
        }
    }
}

//console.log("teamColors: ", teamColors("Brooklyn Nets"))
function teamColors(targetTeam){
    let game = gameObject();
    for(let team in game){

        if(targetTeam === game[team].teamName){
            return game[team].colors;
        }
    }
}

//console.log("teamNames: ", teamNames())
function teamNames(){
    let game = gameObject()
    let teamNameArray = []
    for(let team in gameObject()){
        teamNameArray.push(game[team]["teamName"])
    }
    return teamNameArray;
}

//console.log("playerNumbers: ", playerNumbers("Brooklyn Nets"))
function playerNumbers(targetTeam){
    let game = gameObject();
    let playerNumbersArray = [];

    for(let team in game){
        if(targetTeam === game[team].teamName){

            for(let player in game[team].players){
                console.log(player)
                playerNumbersArray.push(game[team].players[player].number)
            }
        }
    }
    return playerNumbersArray;
}

//console.log(playerStats("Jason Terry"))
function playerStats(playerName){
    let game = gameObject();
    let playerStatsObj = {};
    for(let team in game){
            for(let player in game[team].players){
                if(player === playerName){
                    playerStatsObj = {...game[team].players[player]}
                }
        }
    }
    return playerStatsObj;
}

//console.log("bigShoeRebounds: ", bigShoeRebounds())
function bigShoeRebounds(){
    let game = gameObject();
    let biggestShoe = 0;
    let biggestShoePlayerRebounds = 0;

    for(let team in game){
        for(let player in game[team].players){
            if(game[team].players[player].shoe > biggestShoe){
                biggestShoe = game[team].players[player].shoe;
                biggestShoePlayerRebounds = game[team].players[player].rebounds;
                biggestShoePlayerName = player
            }
        }
    }
    console.log(biggestShoePlayerName)
    console.log("Shoe size: ", biggestShoe)
    return biggestShoePlayerRebounds;
}

