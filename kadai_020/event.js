// HTML要素を取得、定数に代入する
const button = document.getElementById('btn');
const clickedText = document.getElementById('text');

// ボタンがクリックされたときのイベント処理を実行
button.addEventListener('click', () => {
  clickedText.textContent = 'ボタンをクリックしました';

});