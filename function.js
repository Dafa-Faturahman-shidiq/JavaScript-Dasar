function lemparDadu() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

// Define function
   function namaFungsi() {
        //lakukan proses
     }

 // Run menamnngil nya dengan namaFungsi()



function nyanyi() {
    console.log("Cek.....");
    console.log("well ahhh...");
}

nyanyi();

// Parameter &  argument
// argument/parameter adalah input yang dimiliki sebuah function, dan function ini juga bisa menerima nilai saat function ini di panggil

function selamatPagi(name) { // name di sini sebagai parameter
    console.log(`Halo, ${name}. Selamat pagi`);
}

selamatPagi('wahyu'); // nilai wahyu ini sebuah argument

// multiple argument & parameters
// function jumlahkan(a = 0, b = 0) {
//     const total = a + b ;
//     console.log(total)
// }

// statement return 
/* statement return akan mengakhiri proses di dalam fungsi dan akan memberikan nilai yang didefinisikan pada saat fungsi
di panggil */

function jumlahkan(a = 0, b = 0) {
  if(typeof a !== 'number' || b !== 'number'){ // jika parameter a dan b bukan sama dengan number
    return 'kudu angka ai maneh'; // kita akan munculkan return atau munculkkan false atau tidak akan menampilkan apapun
  };
  return a + b ; // kalau selain itu maka kita akan memunculkan penjumlahan a + b
}

// visibilitas variable sesuai scope atau ruang lingkup
// scope ini membahas tentang vibilitas variable, suatu varible ini memiliki nilai, atau dapat di akses variblenya
// sesuain dengan lokasi yang di miliki atau yang dideklarasikan apakah di luar function atau tidak

// scope 
let linux = 'redhat';

function easyLinux() {
  let linux = 'Debian';
  linux; // Debian 
}

linux; // redhat

let programming = 'JavaScript';
// Ketika seseorang mendefinisikan varible di luar function, dan saya akan memanggil variable programing
// yang hanya di deklarasikan di luar function terssebut, maka akan berhasil terpanggil output: Javascript.
// karena var programing ini lebih tinggi maka jika ada suatu function yang memanggil nama variable yang sudah
// di deklarasikan di luar function tersebut, tapi tidak dibuat ulang di dalam functionnya, maka dia akan mendapatkan
// nilai yang di luar function tersebut, kecuali kalau dideklarasikan ulang.

function typesafe(){
  // let programming = 'Typescript' 
  console.log(programming); 
  // typesafe()
  // Dan ketika kita memanggil nama function, Maka output: "typescript"
  // karena dia akan memanggil sesuai dengan scope nya
}

console.log(programming); // output: "Javascript,", why? karena kita mengambil nilai programing yang di luar function
// karena ruang lingkup nya berbeda

// Blocked Scope Variable

let tinggi = 8;
if (tinggi > 5 ) {
  let lebar = 10;
  //console.log(lebar); // output: 10
};

//console.log(tinggi); // output: 8

// bagaimana jika kita memanggil variable lebar yang ada di pengondisian, maka yang terjadi akan eror.
// tapi ketika kita memanggilnya di dalam if nya itu akan berhasil. 

// di dalam js, pada kita mendeklarasikan sebuah variable, didalam kondisi sekali pun, maka dia tidak bisa kita panggil 
// di luar dari scopenya atau kurung kurawal.

for(let index = 0; index < 10 ; index++) {
  const indexNumber = index;
  //console.log(indexNumber);
}

//console.log(indexNumber);

// bagaimana jika kita mendeklarasi kan sebuah variable dengan menggunakan var

let jangkung = 8 
if(jangkung > 5){
  var gede = 11;
  //console.log(gede);
}

console.log(gede); // output: 11 , dan bisa terpanggil

// kenapa bisa terpanggil?

// karena keywordnya, pada saat saya mendefinisikan sebuah variable dengan menggunakan let atau const, mereka berdua
// tidak bisa di panggil, yang berarti const dan let memiliki block scope atau memiliki scope nya masing-masing sesuai
// dengan dimana dia diletakkan. 

// Dan kalau misalkan var, mereka akan secara otomatis akan di definisikan secara top level, jadi entah itu yang didalam
// kurawal{}, atau diluar {} milik function, maka dia bisa kita panggil di luar funtion tersebut, atau diluar dimana dia
// di deffinisikan. jeleknya var itu tidak memiliki blocking scope. 

//kecuali kita ingin menggunakan variable itu secara global


//  LEXICAL SCOPE

// kita mendifinisikan sebuah function, dan ada function didalam funtion tersebut, dan di dalam masing-masing function 
//ini kiita mendefinisikan variable dan kita memanggil variable" tersebut

function funcLuar() {
  const nilaiLuar = "ini adalah nilai luar";

  function funcDalam() {
    let nilaiDalam = `di dalam mengambil ${nilaiLuar}`
    console.log(nilaiDalam);
  }; // funcdalam

  funcDalam()
}; // funcluar

// contoh:

function lamarKerja() {
  const jabatan = "programer";
  // kalo kita memanggil function lamarKerja(), output:undifined, kenapa? itu karena dia hanya mendeklarasikan sebuah variable jabatan saja


  function orangDalam() { // dan function di dalam ini tidak akan di eksekusi, karena kita cuma memanggil function lamarKerja() saja.
    let kenalan = ` Orang dalam bisa memasukan ${jabatan}`;
    console.log(kenalan);
  }

  // kecuali kalau kita panggil 
  orangDalam(); // output: Orang dalam bisa memasukan programer.

}


// FUNCTION EXPRESIONS

//function perpangkatan(nilai1) { 
//  return nilai1 * nilai1;
//}

// let hasil = perpangkatan(5); // output:25 , didapatkan dari proses perpangkatan 5 * 5.

// bagaimana jika ingin memanggil 1 kali saja, di function nya dan kita akan simpan disebuah variable.

// bagaimana kalau kita persingkat dengan function expresions.

const hasilPerpangkatan = function (nilai) { // dimana isi dari variable ini, akan menjalankan suatu proses dari suatu nilai didalam parameter, sebagai argumen
  return nilai * nilai; // dan hasil perkalian nilai * nilai ini akan disimpan di variable hasilPerpangkatan.
};

// jadi secara otomatis, saat kita memanggil hasilPerpangkatan kita memanggilnya sebagai function. kenapa?
hasilPerpangkatan(5) // karena isinya adalah function

// apalagi di dalam function itu kita menambahkkan sebuah parameter, jadi kkita harus menambhkan argumennya, suatu nilai yang akan di proses didalamnya.

// jadi variable hasil perpanggkatan ini memiliki nilai hasil proses dari sebuah function yaitu mengkalikan nilai dengan nilai, dimana itu dedapatkan dari sebuah parameter.



// FUNCTION SEBAGAI ARGUMENT FUNCTION LAIN
function duakali(func) {
  func();
  func();
};

function lemparDadu2() {
  const nilai3 = Math.floor(Math.random() * 6 ) + 1;
  console.log(nilai3);
}

duakali(lemparDadu2); // tidak perlu menambahkan (), karena sifatnya itu argument, kalau di dalam argument anggap saja buka suatu proses function

// bagaimana kita membuat argument atau sebuah parameter, di suatu function dan parameter ini akan menerima function lagi


// FUNCTION BERNILAI BALIK FUNCTION

// jika kita return suatu function di dalam suatu variable dan variable ini akan diaggap suatu function

function hasilnyaFunction(){
  const rand = Math.random();
  if(rand > 5) {
    return function(){
      console.log('selamat angka lebih besar');
    } 
  } else {
    return function() {
      console.log('kecil bet lu');
    }
  }
}

// bagaimana supaya ini bisa dijalankan?, kita sign suatu variable untuk menyimpan hasilnya dari hasil eksekusi suatu fucntion

 const result = hasilnyaFunction()

// Dan karena output result nya ini sudah di sign dengan suatu function, maka kita juga harus memanggilnya sebagai function

// DEFINISI SEBUAH METHOD

//  METHOD: ketika menambah function pada suatu object property
//  Sama seperti hal nya function, bedanya Method pada saat kita menyebut function itu sebagai method adlah function itu
// di deffinisikan di suatu object, atau kita letakan milik properti di suatu object. 
 
// contoh :

const aritmatika = {
  perkalian: function (x, y) { // aritmatika.perkalian(x, y)
    return x * y
  },
  pembagi: function (x, y) { // aritmatika.pembagi(x, y)
    return x / y
  },
  pangkat: function (x) { // aritmatika.pangkat(x)
    return x * x
  }
};

// THIS ADALAH KEYWORD SAKTI

// "this" adalah keyword untuk memanggil suatu property pada oabject yang sama. tujuan nya untuk mendapatkan nilai nya.

// CONTOH:
const saya = {
  nama: 'Dafa',
  hobi: 'Maen emel',
  //kenalan: function() {
    // return `saya ${this.nama}. Hobi saya ${this.hobi}` // untuk memanggil suatu property yang dimiliki object
  }
// }

// jika didalam suatu obejct kita ingin melakukan suatu proses atau ada method yang didefinisikan, tapi nilai nya,
// kita akan memanfaatkan suatu properti yang di miliki oleh object

// TRY AND CATCH ADALAH PENYELAMAT

// ini kita sering gunakan untuk membuat suatu proses, pada saat memanggil suatu function. tujuan nya untuk menhandle 
// suatu eror, jadi pada saat ada suatu eror maka dia tidak akan melakuka blocking atau proses itu gagal, dia akan
// mengecek apakah ada kode yang bisa di eksekusi, kalo ada maka akan di eksekusi kalau tidak dia akan berhenti

// try {} adalah proses untuk mencoba melakukan suatu program logic, dan maka kalau ada kesalahan dia akan mengeksekusi dibagian catch

// catch {} itu untuk menangkap eror nya

//contoh:

try {
  saya.kenalan();
} catch {
  console.log("eror woi") // kenapa eror? karena object saya.kenalan() itu tidak dan
};

// kenapa disaran kan untuk menggunakan try and catch karena dia tidak akan merusak program

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log('eror woi');
    console.log('kudu make hurup kapital di argumen teriak');
  }
}