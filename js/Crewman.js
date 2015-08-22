var Crewman = (function() {
	var Crewman = function(name, id) {
		this.name = name;
		this.id = id;
		this.health = 100;
		this.position = 0;
	};

	Crewman.prototype.constructor = Crewman;

	Crewman.prototype.attack = function() {
		var hit = Math.floor(Math.random() * 2) == 1;
		return hit;
	};

	Crewman.prototype.takeDamage = function() {
		if (!this.health) return;

		this.health -= 20;
		var li = $('#crewman_' + this.id),
			span = li.find('.health');

		if (!this.health) {
			span.html('<strong>Vital signs unavailable.</strong>');
			li.addClass('dead');
		} else {
			span.html(this.health + '%');
		}
	};

	return Crewman;
})();