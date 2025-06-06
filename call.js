// forEach
// dapat digunakan callback function yang berarrti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array
const angka = [1,2,3,4,5,6,7,8,9,];

angka.forEach( function(n){
    console.log(n * n) // output: 1, 4, 9, 16....
});

// maksud nya callback function di dalam forEach maka akan secara otomatis mendapatkan nilai dari dalam array nya 
// dari dalam array parameternya sendiri 

const animes = [ // array biasanya menggunkan nama jamak plular
    {
        title: 'One piece',
        rating: '89',
    },
    {
        title: 'bleach',
        rating: '82',
    },
    {
        title: 'hunter x hunter',
        rating: '90',
    },
    {
        title: 'attack on titan',
        rating: '98',
    },
    {
        title: 'naruto',
        rating: '84',
    },
];

// kita akan menampilkan misalnya: naruto - 84/100 menggunakan forEach

animes.forEach(function(anime){ // dan untuk parameternya menggunkan bentuk tunggal nya
    console.log(`${anime.title} - ${anime.rating}/100`);
});

// Map Method
// nilai baliknya adalah array baru yang sudah di modifikasi melalui callback function dari suatu array

const song = ['Perpect', 'wish you were here', 'about you', '505'];
const capsSong = song.map(function(lagu){
    return lagu.toUpperCase(); 
// string nya akan di ubah menjadi uppercase, dan nilai nilai yang di ubah inikan di kumpulkan menjadi suatu array dan nilai array hasil modifikasi ituakan di simpan di dalam variable capssong
})

song;
capsSong;

// output dari map ini adalah array lagi, dan array ini adalah mungkin bisa dibilang memiliki nilai yang bisa saja 
// berbeda dengan sumber array yang digunkan 

// const angka = [1,2,3,4,5,6,7,8,9,]; deret angka ini akan kita coba buat angka doublee nya, jadi masing masing nya kita akan kalikan dengan angka dua
const angkaDouble = angka.map(function(el){
   return el * 2; // hasil dari perkalian ini kita akan kumpulkan di variable angkaDouble
});

// kita juga bisa mengubah nilai array yang berbentuk object
// saya ingin menampilkan nilai daari dalam array tersebut atau kita akan mengubah nilai dari anime tersebut dengan mencantumkan title nya saja
const animeList = animes.map(function(List){
    return List.title.toUpperCase()
});

// Function Arrow

const perpangkatan = (x) => {
    return x * x ;
};

const perpangkatan2 = (x, y) => { // parameter bisa bernilai lebih dari 1i
    return x * y ;
};


// sama seperti function exrpretion, arrow function dengan menggunkann =>


// Return secara implisit dari arrow function
// kita tidak perlu menggunkan return untuk mendapat sebuah nilai, jika di dalam function tersebut hanya memiliki prosesyang sederhana

const random = () => (
    Math.floor(math.random() * 100 ) 
)

// dengan dengan tidak menggunakan kurung kurawal {} tapi dengan menggunakann kurung biasa ()
// kalau lebih dari 1 baris akan terjadi eror


// memahami settimeout dan setinterval
//callback function yang bukan berasal dari array, fungsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan

setTimeout(() => {
    // proses 
}, 3000) // proses akan di eksekusi setelah 3 detik dan satuan nya milisecond

setInterval(() => {
    // proses
}, 2000) // akan melakukkan proses secara berulang  setiap 2 detik

// contoh setTimeout
console.log('halo');

setTimeout(() => {
    console.log('masih open member ngga min?');
}, 5000);

console.log('minta skin bang');

// conton setInterval
// setInterval ini juga bisa digunakan untuk reques kedalam server settiap beberapa detik, untuk mendapatkan data secara real time
// contohnya dari backend atau dari server 

const interval = setInterval(() => {
   // console.log(math.random());
});

// dari proses tersebut, itu akan men generate angka acak terus menerus, selama page nya ini ngga kita close 
// lalu bagaimana cara untuk menghentikan prosesnya?

// kita perlu membuat identyfier dengan menggunakan variable dan menggunakan method clearInterval(interval) contohnya.

// memilih data tertentu didalam array dengan filter method 
//                      filter 
// function akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang di tetapkan 

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;
const ganjil = num.filter(n => { // nilai nilai tersebut akan di masukan ke var n
    return n % 2 === 1; // jika n merupakan nilai ganjil maka
    // callback function akan membuat array beru berisi angka angka ganjil 
    // dari kondisi diatas 
}); // [1, 3, 5, 7, 9]

// contoh lain kita ingin mencari rating anime yang lebih dari 85 sangat baik dan kalau dibawahnya bisa baik saja

const animebagus = animes.filter(anime => anime.rating >= 85 )
const judulAnimeBagus = animes.filter(anime => anime.rating >= 85 ).map(anime => anime.title)

// dan kita juga menggabungkan nya dengan 1sintaks



const animebaguswell = animes.filter(anime => anime.rating < 85 )

// filter dan maping ini sebenrnya mirip mirip, kita juga bisa memanfaatkan proses mapping setelah proses filter

// misal nya kita sudah mendapatkan anime anime bagus, tapi anime bagus ini saya akan coba cari judul nya apa saja

// REDUCE 
// melakukan proses sebanyaknya element milik suatu array. nilai baliknya adalah single value

const subtotal = [1500, 20000, 4000, 19000, 32000];
const total = subtotal.reduce((currentTotal, singleSubtotal) => {
    return currentTotal + singleSubtotal; // nilai hasil dari retun ini akan di jadikan sebgai currentTotal lagi 
});

// currentTotal ini adalah akumulator atau nilai pertama yang digunakan untuk pembanding atau nilai awal nilai permulaan
// singleSubTotal addalah masing maisng nilai dari sebuah element setelah nilai currentTotal 

// keseluruhan harga belanjaan 
// +----------------------------------------------------------+
// |callback | currentSubtotal | singleSubtotal | Nilai balik |
// |proses1  | 1500            | 200000         | 21500       |
// |proses2  | 21500           | 4000           | 25500       |
// |proses3  | 25500           | 19000          | 44500       |
// |proses4  | 44500           | 32000          | 76500       |
// +----------------------------------------------------------+

// contoh :
const examScore = [80, 85, 70, 90, 93, 77];

// let totalExam = 0;
// for(let score of examScore) {
//     totalExam += score;
// }

const examTotal = examScore.reduce((total, score) => {
    return total + score;
});

// contoh: dari kumpulan anime ini mana sih yang ratingnya yang paling tinggi

const bestAnime = animes.reduce((bestAnime, currAnime) => {
    console.log(bestAnime, currAnime);
    if(currAnime.rating > bestAnime.rating) {
        return currAnime;
    };
    return bestAnime;    
});