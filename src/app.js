//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManagerArray(managerName, managerAge, currentTeam, trophiesWon) {
  let managerArray = [managerName, managerAge, currentTeam, trophiesWon];
  return managerArray;
}
let managerArray = createManagerArray(managerName,managerAge,currentTeam,trophiesWon) ;
console.log(managerArray);
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationArray) {
  let formationObject = {
      defender: formationArray[0],
      midfield: formationArray[1],
      forward: formationArray[2]
  };
  return formationObject;
}
let formationObj = createFormation(formation);
console.log(formationObj);

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterPlayersByDebutYear(year) {
  return players.filter(player => player.debutYear === year);
}
let playersDebutedIn2000 = filterPlayersByDebutYear(1997);
console.log(playersDebutedIn2000);
//Progression 4 - Filter players that play at the position _______
function filterPlayersbyPosition(def,mid,fwd){
  return players.filter(player => player.defender == def && player.midfield) == mid && player.forward == fwd)
}
//Progression 5 - Filter players that have won ______ award
function filterPlayersByAward() {
  return players.filter(player => player.award == True);
}
//Progression 6 - Filter players that won ______ award ____ times
function filterPlayersByAwardTimes(num) {
  return players.filter(player => player.award == True && player.num == num );
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterPlayersByAwardTimes(num,country) {
  return players.filter(player => player.award == True && player.country == country );
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterPlayersByCriteria(minAwards, team, maxAge) {
  return players.filter(player => 
      player.awards.length >= minAwards &&
      player.team === team &&
      player.age < maxAge
  );
}
//Progression 9 - Sort players in descending order of their age
function sortPlayersByAgeDescending() {
  return players.sort((a, b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortPlayersByAwardsDescending(team) {
  return players.filter(player => player.team === team)
                .sort((a, b) => b.awards.length - a.awards.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortPlayersByAwardAndTimesAndCountry(award, times, country) {
  return players.filter(player => 
      player.awards.filter(a => a === award).length === times &&
      player.country === country
  ).sort((a, b) => a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortPlayersOlderThanAndAwardsReverseChronological(age) {
  return players.filter(player => player.age > age)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(player => {
                    player.awards.sort((x, y) => {
                        return new Date(y.date) - new Date(x.date);
                    });
                    return player;
                });
}