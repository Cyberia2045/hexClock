var clock = document.getElementsByClassName("clock")[0];

	function hexClock() {
	
		var d = new Date(); // Date Object
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
	
		if (h <= 9) {
			h = "0" + h;
		}
		if (m <= 9) {
			m = "0" + m;
		}
		if (s <= 9) {
			s = "0" + s;
		}

		var color = "#" + h + m + s
		document.body.style.background = color;
		clock.innerHTML = color;

		- // setTimeout is needed for the clock to work continuously without a refresh. This refreshes the clock once every second.
		
	}; // closes hexClock

	hexClock();
