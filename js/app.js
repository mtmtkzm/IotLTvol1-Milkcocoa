var milkcocoa = new MilkCocoa('eggilux0cfy.mlkcca.com');
var ds = milkcocoa.dataStore('direction');

ds.on('send', function(sended) {
	var dir = sended.value.operate;
	operate(dir);
});

function operate(dir) {
	if (dir == 'next') {
		$('.iot-slides').slick('slickNext');
	} else if (dir = 'prev') {
		$('.iot-slides').slick('slickPrev');
	}
}
$('.iot-slides').slick({
	infinite: false,
	speed: 0,
	fade: true,
	arrows: false
});