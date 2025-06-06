//sintaks loop
// for (let i = 1; i <= 10; i++){
//     console.log("woi poke")
//     console.log(i)
// }

// let i = 1; sebagai initial
// i <= 10; sebagai condition
// i ++ sebagai incr atau menambahkan nilainya sendiri /decr atau mengurangi nilainya sendiri
// dan di dalam kurung kurawal akan di eksekusi

// for (let i = 1; i <= 10; i += 2){
//     console.log(i)
// }

// for (let i = 20; i >= 0; i -= 2){
//     console.log(i)
// }

// for (let i = 10; i <= 100000; i *= 10){
//     console.log(i)
// }

// mendapatkan data dari array dengan loop 

// const animals = ['cat', 'chicken', 'dog', 'koala', 'zebra'];

// for(let i = 0; i < animals.length; i++){
//     console.log(i + 1, animals[i])
// }

// Nested loop

// const Ganda = 'ABCD';
// for(let i = 1; i <= 10; i++) {
//     console.log(`${i}. soal nomor ${i}:`);
//     for(let j = 0; j < Ganda.length; j++){
//         console.log(`       ${Ganda[j]}. Pilihan Jawaban`);
//     }
// }

// Mendapatkan data dari nested array dengan nested loop

const studentRow = [
    ['zilong', 'wan wan', 'ling', 'baxia'],
    ['layla', 'bruno', 'digie', 'nolan'],
    ['freya', 'franco', 'masya', 'zaki'],
];

for( let i = 0; i < studentRow.length; i++) { 
    const Row = studentRow[i]; // jadi setiap barisnnya, dan kita sudah bisa dapat nialai darii row sesuai dengan index i nya 
    console.log(`seat Row #${i + 1}`); // ini akan menampilkan index dengan urutan row Dari array(studentRow)(012), dan i + 1 ini karena kita mau mengurtkan data dari angka 1

    // kita bisa mendapatkan data satu persatu dari data tersebut

    for (let j = 0; j < Row.length;  j++) { // dimana nilai j selama nilai j ini lebih kecil dari nilai masing" row, dalam hal ini ada 4 nama 
        console.log(` ${j + 1}. ${Row[j]}`);
    }
}

