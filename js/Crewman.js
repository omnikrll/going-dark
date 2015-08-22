var Crewman = (function() {
	var Crewman = function(name, id) {
		this.name = name;
		this.id = id;
		this.health = 100;
		this.position = 0;
	};

	Crewman.prototype.constructor = Crewman;

	Crewman.prototype.doRandomAction = function() {
		var action = Math.floor(Math.random() * 2);
		if (action) this.advance();
	};

	Crewman.prototype.advance = function() {
		while (this.position < 4) this.position++;
		return this.position;
	};

	Crewman.prototype.getHealth = function() {
		return this.health;
	};

	Crewman.prototype.setHealth = function(health) {
		this.health += health;
		$('#crewman_' + this.id + ' .health').html(this.health);
	};

	return Crewman;
})();