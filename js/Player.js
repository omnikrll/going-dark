var Player = (function() {

	var Player = function(textStates) {
		this.states = textStates;
		this.stateCounter = 0;
		this.state = this.states[this.stateCounter];
		this.damageCounter = 0;
	};

	Player.prototype.constructor = Player;

	Player.prototype.setTextState = function(i) {
		var self = this;
		self.currentState = self.states[i];

		if (!self.currentState) {
			alert('Congratulations! You are now dead.');
			return;
		}

		for (var s in self.currentState) {
			var children = self.currentState[s],
				section = $('#' + s);

			for (var c in children) {
				var text = children[c];

				$('#' + c).html(text);
			}
		}
	};

	Player.prototype.takeDamage = function() {
		var self = this;

		self.damageCounter++;

		if (self.damageCounter > 3) {
			self.damageCounter = 0;
			self.stateCounter++;
			self.setTextState(self.stateCounter);
			return;
		}

		for (var s in self.currentState) {
			var children = self.currentState[s],
				section = $('#' + s);

			console.log(children);
			for (var c in children) {
				console.log(c);
				var text = $('#' + c).html();
				console.log(text);
				var corrupted = self.corruptText(text);

				$('#' + c).html(corrupted);
			}
		}
	};

	Player.prototype.corruptText = function(text) {
		var self = this,
			phrase = text.split(' ');

		for (var i = 0; i < self.damageCounter * Math.floor(phrase.length / 3); i++) {
			var x = Math.floor(Math.random() * phrase.length),
				word = phrase[x],
				binary = btoa(word);

			phrase[x] = binary;
		}

		return phrase.join(' ');
	};

	return Player;
})();