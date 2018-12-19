
var animation = bodymovin.loadAnimation({
    container: document.getElementById('heartbeat'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/data.json'
})


var animation = bodymovin.loadAnimation({
    container: document.getElementById('heartrate'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/heartrate.json'
})

window.setInterval(function() {
	$('#heartbeat-number').html(parseInt(Math.random() *200));	
}, 1000)
