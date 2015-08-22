var crew;
var player;

(function() {
	// create crew members
	crew = [
		new Crewman('Patry Garcia', 0),
		new Crewman('Arymo Watson', 1),
		new Crewman('Vidy Grichy', 2)
	];

	player = new Player(textStates);
	player.setTextState(0);
})();