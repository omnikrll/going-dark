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
			crewman = game.crew[id];

		if ($(this).hasClass('player_damage')) {
			console.log(crewman.name + ' damaged you');
		}

		if ($(this).hasClass('crewman_damage')) {
			console.log(crewman.name + ' took damage');
		}

		if ($(this).hasClass('no_damage')) {
			console.log('neither you nor ' + crewman.name + ' took any damage');
		}
	});
})();