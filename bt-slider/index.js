$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$("#ex2").slider({});

$("#ex16b").slider({ min: 0, max: 40, value: [0, 10, 20, 40], focus: true });