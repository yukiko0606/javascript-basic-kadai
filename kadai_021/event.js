const elmBtn = document.getElementById('btn');

elmBtn.addEventListener('click', () => {
    setTimeout(() => {
        let elmH2 = document.getElementById('h2-text');
        elmH2.textContent = 'ボタンをクリックしました';
        console.log('2秒後');
    },2000);
});

