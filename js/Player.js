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

	Player.prototype.SystemReboot = function() {
		var rebootScreen = document.getElementsById('reboot');
		var checkText = document.getElementsById('check');
		var imageLocText = document.getElementsById('imageLoc');
		var scanText = document.getElementsById('scan');
		var okText = document.getElementsById('ok');
		var rebootTimer = 1000;

		rebootScreen.style.opacity = "1";

		setInterval(function () {checkText.style.opacity = "1";}, rebootTimer);
		setInterval(function () {imageLocText.style.opacity = "1";}, rebootTimer);
		setInterval(function () {scanText.style.opacity = "1";}, rebootTimer);
		setInterval(function () {okText.style.opacity = "1";}, rebootTimer);

		setInterval(function () {
				checkText.style.opacity = "0";
				imageLocText.style.opacity = "0";
				scanText.style.opacity = "0";
				okText.style.opacity = "0";
				rebootScreen.style.opacity = "0";
			}, rebootTimer);
	}

	Player.prototype.LoseScreen = function() {
		var rebootScreen = document.getElementsById('reboot');
		var checkText = document.getElementsById('check');
		var imageLocText = document.getElementsById('imageLoc');
		var scanText = document.getElementsById('scan');
		var okText = document.getElementsById('ok');
		var rebootTimer = 1000;

		var string = "OK...";

		rebootScreen.style.opacity = "1";
		rebootScreen.style.pointer-events = "all";

		setTimeout(function () {
			checkText.style.opacity = "1";
			imageLocText.style.opacity = "1";
			scanText.style.opacity = "1";
			okText.style.opacity = "1";
		}, rebootTimer);

		setInterval(function () {
			string += "OK..."$("okText").(str);
		}, rebootTimer);
	}

	Player.prototype.WinScreen = function() {
		var rebootScreen = document.getElementsById('reboot');
		var checkText = document.getElementsById('check');
		var imageLocText = document.getElementsById('imageLoc');
		var scanText = document.getElementsById('scan');
		var okText = document.getElementsById('ok');
		var rebootTimer = 1000;

		var string = "OK...";

		rebootScreen.style.opacity = "1";
		rebootScreen.style.pointer-events = "all";

		setTimeout(function () {
			checkText.style.opacity = "1";
			imageLocText.style.opacity = "1";
			scanText.style.opacity = "1";
			okText.style.opacity = "1";
		}, rebootTimer);

		setInterval(function () {
			string += "OK..."$("okText").(str);
		}, rebootTimer);
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
