document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen yang ingin diubah tema
    var body = document.body;

    // Fungsi untuk mengganti tema
    function toggleTheme() {
        // Toggle kelas 'dark' pada elemen body
        body.classList.toggle('bg-slate-900');

        // Menggunakan attribute selector untuk mencari elemen dengan data-theme-toggle
        var themeElements = document.querySelectorAll('[data-theme-toggle]');
        themeElements.forEach(function (element) {
            element.classList.toggle('text-slate-200');
        });

        var themeElementBackground = document.querySelectorAll('[data-theme-bg]');
        themeElementBackground.forEach(function(elementBg){
            elementBg.classList.toggle('bg-gray-800');
        });

        var contentSpan = document.getElementById('span_NamaSekolah');
        if (contentSpan){
            contentSpan.classList.toggle('text-red-600')
        } 

        var contentSVG = document.getElementById('svg');
        if (contentSVG){
            contentSVG.classList.toggle('text-white')
        } 

        var buttonTheme = document.getElementById('buttonTheme');
        if (buttonTheme){
            buttonTheme.classList.toggle('text-white')
        } 

        // Simpan status tema di localStorage
        var isDarkMode = body.classList.contains('dark');
        localStorage.setItem('darkMode', isDarkMode);
    }
    // function checked(){

    // }

    // Cek status tema di localStorage saat halaman dimuat
    var isDarkModeStored = localStorage.getItem('darkMode');
    if (isDarkModeStored === 'true') {
        body.classList.add('dark');
    }

    // Tambahkan event listener pada elemen yang akan diklik untuk mengganti tema
    var themeButton = document.getElementById('themeToggleBtn');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
});
