var Player = (function() {

	var Player = function(textStates) {
		this.health = 100;
		this.currentState = 0;
		this.textStates = textStates;
	};

	Player.prototype.constructor = Player;

	Player.prototype.setTextState = function(i) {
		var self = this,
			state = self.textStates[i];

		if (!state) {
			console.warn('textStates[' + i + '] does not exist');
			return;
		}

		for (var s in state) {
			var children = state[s],
				section = $('#' + s);

			for (var c in children) {
				var text = children[c];

				$('#' + c).html(text);
			}
		}

		self.currentState = i;		
	};

	return Player;
})();