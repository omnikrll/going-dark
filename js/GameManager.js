var crew;

(function() {

	// create crew members
	crew = [
		new Human('Patry Garcia', 0),
		new Human('Arymo Watson', 1),
		new Human('Vidy Grichy', 2)
	];

	// render them to the dom
	for (var i=0,ii=crew.length; i<ii; i++) {
		var human = crew[i];
		console.log(human.name);
		var list_item = $('<li></li>').attr('id', 'human-' + human.id);

		var name = $('<span></span>').addClass('name').html(human.name);
		list_item.append(name);

		var health = $('<span></span>').addClass('health').html(human.health);
		list_item.append(health);

		$('#crew-roster').append(list_item);
	}
})();