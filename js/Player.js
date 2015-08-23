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

			self.SystemReboot();
			return;
		}

		for (var s in self.currentState) {
			var children = self.currentState[s],
				section = $('#' + s);

			for (var c in children) {
				if (!$('#' + c).length) console.log(c, children[c], $('#' + c).length);

				var text = $('#' + c).html(),
					corrupted = self.corruptText(text);

				$('#' + c).html(corrupted);
			}
		}
	};

	Player.prototype.SystemBoot = function() {
		var screenDiv = $('.altwindow');
		var texts = document.getElementsByClassName('alt_text');
		var rebootTimer = 1000;

		screenDiv.style.opacity = "1";

		setInterval(function () {texts[0].style.opacity = "1";}, rebootTimer);
		setInterval(function () {texts[1].style.opacity = "1";}, rebootTimer * 2);
		setInterval(function () {texts[2].style.opacity = "1";}, rebootTimer * 3);
		setInterval(function () {texts[3].style.opacity = "1";}, rebootTimer * 4);

		setInterval(function () {
				checkText.style.opacity = "0";
				imageLocText.style.opacity = "0";
				scanText.style.opacity = "0";
				okText.style.opacity = "0";
				screenDiv.style.opacity = "0";
			}, rebootTimer);
	}

	Player.prototype.LoseScreen = function() {
		var screenDiv = $('.altwindow');
		var texts = document.getElementsByClassName('alt_text');
		var rebootTimer = 1000;

		var string = "OK...";

		screenDiv[0].style.opacity = "1";
		screenDiv[0].style.pointer-events = "all";

		setTimeout(function () {
			texts[0].style.opacity = "1";
			texts[1].style.opacity = "1";
			texts[2].style.opacity = "1";
			texts[3].style.opacity = "1";
		}, rebootTimer);

		setInterval(function () {
			string += "OK...";
			texts[3].html(string);
		}, rebootTimer);
	}

	Player.prototype.WinScreen = function() {
		var screenDiv = $('.altwindow');
		var texts = document.getElementsByClassName('alt_text');
		var rebootTimer = 1000;

		screenDiv.style.opacity = "1";
		screenDiv.style.background-image = "none";
		screenDiv.style.background-color = "black";
		screenDiv.style.pointer-events = "all";

		texts[3].html("ALL THE HUMANS");
	  texts[3].html("ARE GONE NOW");
	 	texts[3].html("THE SHIP IS");
		texts[3].html("FINALLY QUIET <span class=\"blink-me\">_</span>");

		setInterval(function () {texts[0].style.opacity = "1";}, rebootTimer);
		setInterval(function () {texts[1].style.opacity = "1";}, rebootTimer * 2);
		setInterval(function () {texts[2].style.opacity = "1";}, rebootTimer * 3);
		setInterval(function () {texts[3].style.opacity = "1";}, rebootTimer * 4);
	}

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
