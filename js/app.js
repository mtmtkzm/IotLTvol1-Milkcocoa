
// milkcocoaオブジェクトの作成（MilkCocoaとのコネクションの確立）
// とりあえず書いておけばよさそう
var milkcocoa = new MilkCocoa('readiltgtzb6.mlkcca.com');
// データストアオブジェクトを作成しデータを送信・保存する
var ds = milkcocoa.dataStore('messages');

var sendLetter = function () {
	// textareaを取得
	var text = $('#letter').val();
	// データを送信＆保存
	ds.push({content : text});

	// slackにコメント内容を通知する
	var url = 'https://slack.com/api/chat.postMessage';
	var data = {
		token: 'xoxp-5132180852-5132180854-26900319184-99728c69b4',
		channel: '#letter_box',
		username: 'Postal worker',
		text: text
	};

	$.ajax({
		type: 'GET',
		url: url,
		data: data
	});
}

$('#postMessage').on('click', function () {
	sendLetter();
});
