function getPilihanKomputer () {
    let kom = Math.random();
    if (kom <0.32) return 'gajah';
    if (kom >0.32 && kom <0.65) return 'orang';
    if (kom >0.65) return 'semut';
}

function getHasil (kom, p) {

    if (p == kom) return "seri";
    if (p == 'gajah') return (kom == 'orang') ? 'menang' : 'kalah';
    if (p == 'orang') return (kom == 'semut') ? 'menang' : 'kalah';
    if (p == 'semut') return (kom == 'gajah') ? 'menang' : 'kalah';
}

function putar() {
    const gambarkom = document.querySelector('.player img');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if ( new Date().getTime() - waktuMulai > 1000 ){
			clearInterval;
			return
        }
        gambarkom.setAttribute('src', `./img/${gambar[i++]}.png`);
        if (i == gambar.length) i=0;
    }, 100)
}

const score = document.querySelector('.score h1');
const pilihan = document.querySelectorAll('.komputer img');

pilihan.forEach(function(pil) {
    pil.addEventListener('click', function (){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
        
        putar();
        
        setTimeout(function() {
            const gambarkom = document.querySelector('.player img');
            gambarkom.setAttribute('src', `./img/${pilihanKomputer}.png`);
            score.innerHTML = hasil;
        },1000);
    })
})