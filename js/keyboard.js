// SP用（キーボード） -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var milkcocoa = new MilkCocoa('eggilux0cfy.mlkcca.com');
// var ds = milkcocoa.dataStore('direction');
var ds = milkcocoa.dataStore('direction');


$(window).on('touchstart', onTouchStart); //指が触れたか検知
$(window).on('touchmove', onTouchMove); //指が動いたか検知
$(window).on('touchend', onTouchEnd); //指が離れたか検知
var direction, position;

//スワイプ開始時の横方向の座標を格納
function onTouchStart(event) {
	position = getPosition(event);
	direction = ''; //一度リセットする
}

//スワイプの方向（left／right）を取得
function onTouchMove(event) {
	if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
		direction = 'next'; //左と検知
	} else if (position - getPosition(event) < -70) { // 70px以上移動しなければスワイプと判断しない
		direction = 'prev'; //右と検知
	}
}

function onTouchEnd(event) {
	if (direction == 'next') {
		ds.send({ operate: direction });
	} else if (direction == 'prev') {
		ds.send({ operate: direction });
	}
}

//横方向の座標を取得
function getPosition(event) {
	return event.originalEvent.touches[0].pageX;
}