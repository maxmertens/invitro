
var animation = bodymovin.loadAnimation({
    container: document.getElementById('pulse'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/data.json'
})


// heartrate number
window.setInterval(function() {
	$('#heartbeat-number').html(randomIntFromInterval(160,170));	
}, 1000)

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}