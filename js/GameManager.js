var game;

var GameManager = (function() {
	var GameManager = function() {
		this.crew;
		this.player;
		this.rooms = {
			'Power_Room': 2,
			'Crew_Room': 0,
			'ShipSystems_Room': 1
		};

		this.init();
	};

	GameManager.prototype.constructor = GameManager;

	GameManager.prototype.init = function() {
		var self = this;

		self.crew = [
			new Crewman('Patry Garcia', 0),
			new Crewman('Arymo Watson', 1),
			new Crewman('Vidy Grichy', 2)
		];

		self.player = new Player(textStates);
		self.player.setTextState(0);
		self.setRoomState(0);
	}

	GameManager.prototype.setRoomState = function(i) {
		var self = this,
			state = roomStates[i];

		if (!state) {
			console.log('roomState[' + i + '] does not exist');
			return;
		}

		for (var r in state) {
			var children = state[r],
				room = $('#' + r);

			for (var c in children) {
				var text = children[c];

				room.find('.' + c).html(text);
			}
		}
	}

	return GameManager;
})();

(function() {
	game = new GameManager();

	$('.room_action').click(function() {
		var id = $(this).parents('.View').data('crewman'),
			crewman = game.crew[id],
			attack = $(this).data('action'),
			hit = attack == Math.floor(Math.random() * 3),
			damaged = crewman.health > 0 ? crewman.attack() : false;

		if (hit) {
			console.log('Player hits');
			crewman.takeDamage();

			if (game.crew[0].health == 0 && game.crew[1].health == 0 && game.crew[2].health == 0) {
				alert('THE HUMANS ARE DEAD');
			}
		} else {
			console.log('Player took no damage');
		}

		if (damaged) {
			console.log('Crewman hits');
			game.player.takeDamage();
		} else {
			console.log('Crewman took no damage');
		}
	});
})();