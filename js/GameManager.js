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

var string;

var makeRandomString = function() {
	var str = '';
	var individual_excludes = [91,93,45];

	for (var i=0; i<30; i++) {
		var charCode = Math.floor(Math.random() * 80) + 33;
		if (charCode >= 58) charCode += 6;
		if (individual_excludes.indexOf(charCode) > -1) charCode += 1;

		str += String.fromCharCode(charCode);
	}

	return str;
};

var secs = 30;

var interval;

(function() {
	game = new GameManager();

	$('.room_action').click(function() {
		resetTextChallenge();
		$('.View.room').addClass('hidden');
		$('.room_action').removeClass('selected');
		$(this).addClass('selected');

		var room = $(this).data('room');

		$('#' + room).removeClass('hidden');
		$('.text-prompt-button').removeClass('hidden');
	});

	$('.text-prompt-button').click(function() {
		$(this).addClass('hidden');
		$('.View.room').addClass('hidden');
		$('#text-prompt').removeClass('hidden');

		string = makeRandomString();
		$('#target-string').html(string);

		secs = 30;
		$('#text-area').on('focus', onTextAreaFocus).on('keypress', onTextAreaKeyPress);
	});

	var checkText = function() {
		$('#text-area').off('focus').off('keypress');
		clearInterval(interval);
		var keyed = $('#text-area').val();

		$('#time').html('').addClass('hidden');

		var success = keyed == string,
			message = '&#60;RESPONSE ',
			crewman_id = $('.room_action.selected').data('crewman');

		if (success) {
			game.crew[crewman_id].takeDamage();
			message += 'VALID&#62;';
		} else {
			game.player.takeDamage();
			message += 'INVALID&#62;';
		}

		$('#result').html(message).removeClass('hidden');
	};

	var countdown = function() {
		secs--;
		console.log(secs);

		$('#time').html(secs);
		if (secs == 0) {
			clearInterval(interval);
			checkText();
		}
	};

	var onTextAreaFocus = function() {
		if (secs !== 30) return;
		$('#time').html(secs).removeClass('hidden');
		interval = setInterval(countdown, 1000);
	};

	var onTextAreaKeyPress = function(event) {
		if (event.keyCode == 13) checkText();
	};

	var resetTextChallenge = function() {
		clearInterval(interval);
		$('#text-prompt').addClass('hidden');
		$('#result').html('');
		$('#text-area').val('');
		$('.room_action.selected').removeClass('selected');
	};

	$('#result').click(resetTextChallenge);

})();