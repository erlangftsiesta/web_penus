// grab every element we need
const btn = document.querySelector('button.mobile-menu-button')
const menu = document.querySelector('.mobile-menu')


// add event listeners
// btn.addEventListener('click', ()=>{
//   menu.classList.toggle('hidden')
// })

// var home_scroll = document.getElementById('home_scroll');
// home_scroll.scrollIntoView({behavior: 'smooth', block: 'center'});

const links = document.querySelectorAll('[data-scroll]'); //Seleksi query bertipe 'data-scroll' di tiap tiap tag yang ingin ditambahkan fitur scrolling

for (const link of links) {
  link.addEventListener("click", clickHandler); //Buat penanganan ketika client melakukan 'click', maka lakukan fungsi clickHandler()
}

//fungsi clickHandler itu adalah fungsi scroll smooth, dia akan menseleksi tiap 'href' dalam query tipe 'data-scroll'
//jadi bisa dibilang, dalam navbar kan ada href untuk home, berita, dll (liat di page navbar). Trus dalam page navbar
//aku buat query custom bernama 'data-scroll="scroll"' (cara ini dibuat juga untuk dark mode / dark theme)
//nah logika nya adalah, sistem cari tag berkueri 'data-scroll' dan memiliki atribut 'href', jika kondisi terpenuhi, maka
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