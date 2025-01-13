// 現時点では特別な機能はありませんが、後で機能を追加できます。
// 例：ボタンがクリックされた時にアニメーションを追加するなど。

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        console.log('ボタンがクリックされました: ' + this.innerText);
    });
});
