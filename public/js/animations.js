
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

window.setInterval(function() {
	$('#vital-monitor-stats-main-01').html((Math.random() * (39 - 38) + 38).toFixed(1));	
}, 5000)

window.setInterval(function() {
	$('#vital-monitor-stats-main-02').html((Math.random() * (26 - 17) + 17).toFixed(1));	
}, 600)

window.setInterval(function() {
	$('#vital-monitor-stats-main-03').html(randomIntFromInterval(84,99) + '%');	
}, 2500)

window.setInterval(function() {
	$('#vital-monitor-stats-main-04').html(randomIntFromInterval(20,30));	
}, 1500)

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}