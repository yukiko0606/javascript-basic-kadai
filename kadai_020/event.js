const elmBtn = document.getElementById('btn');
elmBtn.addEventListener('click', () => {
    let elmH2 = document.getElementById('test');
    elmH2.textContent = 'ボタンをクリックしました';
});