// 定数btnに要素'btn'を代入する
const btn = document.getElementById('btn');
// 定数textに要素'text'を代入する
const text = document.getElementById('text');

// クリックされたら2秒後に、定数btnにテキスト'ボタンをクリックしました'を再代入する
btn.addEventListener('click', () =>{
    setTimeout(()=>{
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});