var iterateTextState = function(i) {
	var state = textStates[i];

	for (var s in state) {
		var children = state[s],
			section = $('#' + s);

		for (var c in children) {
			var text = children[c];

			$('#' + c).html(text);
		}
	}
}