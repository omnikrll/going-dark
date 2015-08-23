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
			self.LoseScreen();
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

			self.SystemBoot();
			return true;
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
		var texts = $('.alt_text');
		var rebootTimer = 500;
		var flash;
		var altWindow = $('#altwindow');

		console.log(altWindow);

		altWindow.removeClass('hidden');
		texts.addClass('hidden');

		setTimeout(function () {texts.eq(0).removeClass("hidden") }, rebootTimer * 2);
		setTimeout(function () {texts.eq(1).removeClass("hidden") }, rebootTimer * 3);
		setTimeout(function () {texts.eq(2).removeClass("hidden") }, rebootTimer * 4);
		setTimeout(function () {texts.eq(3).removeClass("hidden") }, rebootTimer * 5);

		setTimeout(function() {	altWindow.addClass('hidden'); }, rebootTimer * 6);

		flash = setInterval(function () {
			$('#windowtextbuff').addClass('hidden');

			setTimeout(function () {
				$('#windowtextbuff').removeClass('hidden');
			}, rebootTimer/4);
		}, rebootTimer-32);

		setTimeout(function () {
			clearInterval(flash);
		}, rebootTimer * 6);
	}

	Player.prototype.LoseScreen = function() {
		var texts = $('.alt_text');
		var rebootTimer = 500;
		var string = "  OK ...";

		$('#altwindow').removeClass('hidden');
		texts.addClass('hidden');

		setTimeout(function () {texts.eq(0).removeClass("hidden") }, rebootTimer * 2);
		setTimeout(function () {texts.eq(1).removeClass("hidden") }, rebootTimer * 3);
		setTimeout(function () {texts.eq(2).removeClass("hidden") }, rebootTimer * 4);
		setTimeout(function () {texts.eq(3).removeClass("hidden") }, rebootTimer * 5);

		string += "I'LL BE FINE ...";

		setInterval(function () {
			string += "OK !!!";
			texts.eq(3).html(string);
		}, rebootTimer/2);

		setInterval(function () {
			$('#windowtextbuff').addClass('hidden');

			setTimeout(function () {
				$('#windowtextbuff').removeClass('hidden');
			}, rebootTimer/4);
		}, rebootTimer-32);
	}

	Player.prototype.WinScreen = function() {
		var screenDiv = $('#altwindow');
		var texts = $('.alt_text');
		var rebootTimer = 500;
		var string = "  OK ...";

		screenDiv.css({
			"background-image": "none",
			"background-color": "#131313",
			"color": "white"
		});

		$('#screenlist').css({
			"padding-top": "16%",
		});

		$('#altwindow').removeClass('hidden');
		texts.addClass('hidden');
		texts.addClass('centered');

		texts.eq(0).html("<br/>ALL THE HUMANS");
		texts.eq(1).html("ARE GONE NOW");
		texts.eq(2).html("THE SHIP IS");
		texts.eq(3).html("FINALLY QUIET :3 <span class=\"blink-me\">_</span>");

		setTimeout(function () {texts.eq(0).removeClass("hidden") }, rebootTimer * 2);
		setTimeout(function () {texts.eq(1).removeClass("hidden") }, rebootTimer * 3);
		setTimeout(function () {texts.eq(2).removeClass("hidden") }, rebootTimer * 4);
		setTimeout(function () {texts.eq(3).removeClass("hidden") }, rebootTimer * 5);

	}

	Player.prototype.corruptText = function(text) {

		var self = this,
			phrase = '';

		if (text !== undefined) {
			phrase = text.split(' ')

			for (var i = 0; i < self.damageCounter * Math.floor(phrase.length / 3); i++) {
				var x = Math.floor(Math.random() * phrase.length),
					word = phrase[x],
					binary = btoa(word);

				phrase[x] = binary;
			}

			phrase = phrase.join(' ');
		}

		return phrase;
	};

	return Player;
})();
