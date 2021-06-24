# teamStats-Codecademy
JAVASCRIPT: ARRAYS, LOOPS, AND OBJECTS
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Tasks
9/9 Complete
Mark the tasks as complete by checking them off
Team Stats
1.
We want a data structure to store the information about our team. Create an empty team object.


Stuck? Get a hint
2.
Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.


Stuck? Get a hint
3.
Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:

{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}
You should put each player on a new line to prevent the line from getting too long.


Stuck? Get a hint
4.
Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:

{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}

Stuck? Get a hint
5.
Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.


Stuck? Get a hint
6.
We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.


Stuck? Get a hint
7.
Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.

Print out the team‘s players to check they were all properly added.


Stuck? Get a hint
8.
The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:

takes in an opponent’s name,
your team’s points,
the opponent’s points,
creates a game object,
adds the game object to your team‘s games array.

Stuck? Get a hint
9.
Invoke your addGame method on three games and print the team‘s updated games array.
