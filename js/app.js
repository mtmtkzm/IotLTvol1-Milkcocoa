// milkcocoaオブジェクトの作成（MilkCocoaとのコネクションの確立）
// とりあえず書いておけばよさそう
var milkcocoa = new MilkCocoa('readiltgtzb6.mlkcca.com');

// データストアオブジェクトを作成しデータを送信・保存する
var ds = milkcocoa.dataStore('messages');


var sendComment = function () {
	// textareaを取得
	var text = $('#letter').val();
	// データを送信＆保存
	ds.push({content : text});
}

$('#sendButton').on('click', function () {
	sendComment();
});