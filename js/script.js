let counter = 5
setInterval(() => {
		if(counter>0){
			counter--
		}
        else if(counter == 0) {
            counter = 5
        }
    document.getElementById('seconds').style.setProperty('--value', counter)
}, 1000)