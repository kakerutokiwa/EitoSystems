// すべてのリンクボタンにイベントを設定
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url'); // ボタンのdata-url属性からリンクを取得
        if (url) {
            window.open(url, '_blank'); // 新しいタブでリンクを開く
        } else {
            console.error('URLが設定されていません');
        }
    });
});
