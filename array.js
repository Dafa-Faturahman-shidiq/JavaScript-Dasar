// Struktur data Array

// Membuat array
// membuat array kosong
let peserta = [];

// kumpulan string
let warna = ['hijau', 'kuning', 'biru', 'merah'];

// kumpulan angka
let angka = [1,4,6,7,8,9];

// kumpulan tipe campuran
let sesuatu = [true, 1, 'cat', null];

// contoh playlist lagu

let playlist = ['about you', 'nina', 'aku dah lupa']

/* output kita juga bisa memanggil salah satu nilai dari array tersebut
    seperti index() di tipe data string, kalau di array kita panggil nama array nya contoh:

    playlist[0]
    maka output yang di hasilkan adalah about you

    struktur data array juga sama, urutan nya di mulai dari angka 0, kalau dilihat dari contoh

    playlist = [0] = about you
                [1] = nina
                [2] = aku dah lupa 

    
*/

/* 
    Didalam array juga bisa mengubah nilai yang sudah ada, dengan cara kita panggil nilai index nya 
    dan kita akan ubah nilai nya, maka nilai dari array tersebut akan berubah.
*/

// contoh
let color = ['pink', 'ungu', 'hitam', 'putih']; // mau mengubah nilai pink menjadi biru

color[0] = biru // maka nilai dari color = ['biru', 'ungu', 'hitam', 'putih']

/* dan tidak bergantung ke tipe data
    misal nya kita ingin mengubah dari string menjadi number itu tidak masalah
*/

// Dan misal kita ingin memberikan nilai ke index ke 9  

color[9] = 'orange'

/* Maka output nya akan seperti :
    color = ['', '', '', '', <5 empty slots> 'orange'];

    array ini akan secara otomatis membuat sebuah kotak" yang sudah ada tapi belum ada nilai nya.

    dan kita juga bisa mengisi n=kotak kosng tadi dengan nilai, contoh:
    color[4] = 'kuning'
 */

// Method Array Push dan Pop


