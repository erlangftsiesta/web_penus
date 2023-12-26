const btn = document.querySelector('button.mobile-menu-button') //seleksi semua tag button yang mempunyai class = mobile-menu-button
const menu = document.querySelector('.mobile-menu') // seleksi class = mobile-menu


// add event listeners
btn.addEventListener('click', ()=>{ // => lakukan fungsi "addEventListener" bertipe click
  menu.classList.toggle('hidden') //setelah fungsi "addEventListener" terpanggil, maka tambahkan 'hidden' kedalam class dari tag yang terseleksi. Jika 'hidden' sudah ada, maka hilangkan class 'hidden'
})


const links = document.querySelectorAll('[data-scroll]'); //Seleksi query bertipe 'data-scroll' di tiap tiap tag yang ingin ditambahkan fitur scrolling

for (const link of links) {
  link.addEventListener("click", clickHandler); //Buat penanganan ketika client melakukan 'click', maka lakukan fungsi clickHandler()
}

//PENJELASAN FUNCTION clickHandler() dibawah!!
//fungsi clickHandler itu adalah fungsi scroll smooth, dia akan menseleksi tiap 'href' dalam query tipe 'data-scroll'
//jadi bisa dibilang, dalam navbar kan ada href untuk home, berita, dll (liat di page navbar). lalu dalam page navbar
//Developer membuat query custom bernama 'data-scroll="scroll"' (cara ini dibuat juga untuk dark mode / dark theme)
//nah logikanya adalah, sistem akan cari tag berkueri 'data-scroll' dan memiliki atribut 'href', jika kondisi terpenuhi, maka
//sistem bakal mengeksekusi function clickHandler() atau fungsi untuk melakukan scroll smooth 

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function switch_icon_theme(){ // => Buat function baru bernama 'switch_icon_theme()'
    var img_id = document.getElementById('buttonTheme'); // => buat variabel bernama img_id yang dimana dia akan menseleksi tag ber-id 'buttonTheme'
    if (img_id.src.match("/public/sun.svg")){ // => lakukan pengkondisian, jika tag tsb adalah 'img' dan source / src nya = "/public/sun.svg"
        img_id.src = "/public/moon.svg"; // => maka ubah value dari src = "/public/sun.svg" ke src = /public/moon.svg"
    }
    else {
        img_id.src = "/public/sun.svg"; // => ini sebenernya logika buat ngebalikin dia ke mode light aja, pahami sendiri
    }
}