// 抓取所有下載按鈕
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const link = this.getAttribute('href');

        // 如果按鈕還沒填入雲端連結
        if (link === '#' || link === '') {
            event.preventDefault(); // 阻擋預設跳轉
            alert('⚠️ 該章節補丁檔案仍在準備中，請稍後再試！');
        } else {
            // 讀取按鈕上的文字（例如：下載 Epic - 第 5 章補丁 (.zip)）
            const buttonText = this.innerText;
            
            // 跳出自訂的清楚提示，不再顯示一串亂碼或簡單的謝謝
            alert(`🎮 準備為您開啟【${buttonText}】的檔案下載頁面，請在開啟的雲端頁面點擊下載！`);
        }
    });
});