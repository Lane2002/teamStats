const team = {
    _players: [
      {
        firstName: "John", 
        lastName: "Doe", 
        age: 40,
        firstName: "Jack", 
        lastName: "Box", 
        age: 38,
        firstName: "Larry", 
        lastName: "Carry", 
        age: 50}
    ],
    _games: [
      {opponent:"Broncos", teamPoints: 30, opponentPoints: 23},
      {opponent:"Wolves", teamPoints: 19,opponentPoints: 43},
      {opponent:"Lions", teamPoints: 51, opponentPoints: 33},
  ],
  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
    addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  
  addGame(oppName, points,oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }
  }
  team.addPlayer("Mickey", "Mouse", 50);
  team.addPlayer("Donald", "Duck", 47);
  team.addPlayer("Daffy", "Duck", 70);
  
  console.log(team.players);
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolves", 50, 90);
  team.addGame("Tigers", 70, 35);
  
  console.log(team.games);