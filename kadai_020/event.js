// 変数addBtnに要素id"btn"を代入
const addBtn = document.getElementById('btn')

// 変数addTextにtextを代入する
const addText = document.getElementById('text')

// ボタンがクリックされたときに、textの中身をボタンをクリックしましたに変更する
addBtn.addEventListener('click', () => {
    //　addTextにテキストを再代入する
    addText.textContent = 'ボタンをクリックしました'
});