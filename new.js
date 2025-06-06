// 1.mengatur Defaul value Parameter 
// nilai yang digunkan saat fungsi dipanggil tapi tidak diberi nilai
// argumen yang di perlukan

function lemparDadu(sisi = 6) {
    return Math.floor(Math.random() * sisi) + 1;
}

function sapa(name, msg = 'selamat ngoding bestie') {
    console.log(`${name}, ${msg}`);
};

// 2.Mengubah array atau obejct menjadi deret value argument funtion
// spread operatorr
// - mengubah  suatu array atau object atau bahkan string menjadi deret parameter untuk function

const angka = [1, 2, 3, 4, 5];
Math.max(angka); // NaN

// bagaimana kita akan mengubah nilai angka ini bisa cocok dengan sebagai parameter?
// nah spread operator ini bisa digunakan dengan :
Math.max(...angka); // output: 5
// dengan menggunkan ...namaArray 

// 3.Menggabungkan nilai array dengan array lagi
// merge array dengan spread operator
// menggabungkan array satu dengan yang lainya dengan spread operator
// Contoh:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nama = ['zilong', 'alucard', 'miya', 'nana', 'saber'];

const campuaran = [...number, ...nama]
// kita bisa membuat array baru lagi dengan gabungan suatu array lama dengan menambahkan nilai selanjutnya dengan koma (,) atau
// dengan menggunakan spread operator ini kita bisa memanipulasi suatu array tanpa mengubah nilai orginalnya 

// 4. Menggabungkan property object dengan object lainya

const user = {
    nama: 'zilong',
    email: 'ziolong123@gmail.com'
};

const credential = {
    password: 'Password',
    token: 'hjdfmdsjsfnvsmnv'
}

const userDb = {...user, ...credential};

// yang membedakan nya yaitu, kalau array menggunakan [], tapi kalo object menggunakan {}.

// 5. Malas bikin Parameter banyak? bisa pakai rest param
// rest param
// nah  bagaimana kita definisikan sebuah parameter yang mungkin tidak terhingga.

const sumall = (...nums) => {
    return nums.reduce((total, el) => total + el);
}

// const nama = ['zilong', 'alucard', 'miya', 'nana', 'saber'];
// misal nya kita memanggil 1 atau 2 nilai awal itu bisa banget.
// kita akan menggunakan var nama. kemuadian saya akan membuat:

const pemenang = (gold, silver, broze, ...sisa) => {
    console.log(`pemenang mendali gold diraih oleh: ${gold}`)
    console.log(`pemenang mendali silver diraih oleh: ${silver}`)
    console.log(`pemenang mendali bronze diraih oleh: ${broze}`)
    // bagaimana kalau sisa nya kita panggill secara otomatis 
    console.log(`Peserta lainnya: ${sisa} `) // nah bagaimana ccara definisikan si sisa ini? dengan ...sisa di parameter.
}

// memanggil pemenang(...nama);

// 6.bongakar element array ke masing masing variable dengan mudah.
// Destructing, unboxing versi array dan object. 

const [gold, silver, bronze, ...peserta] = nama;
// jadi yang ngga masuk ke gold, silver, bronze akan masuk ke variable peserta yang nilai nya array lagi

// 7. Bongkar juga property object ke masing maasing variable

const User = {
    Nama: 'User',
    Email: 'User@gmail.com',
    role: 'admin'
};

const { Nama:Nama, email, role, phone = '085676434'} = User;

// nah bagaimana kalau kita ingin menambhakan object phone, bagaimana kita membuat default value dengan menggunkan =
// yang jelas cara nya itu harus definisikan property dengan variable yang kita definiskan 

// 8. Bongkar Propeti object bisa dilakukan didalm function
// Destructing lainnya itu terdapat di suatu function lebih tepat nya ada didalam parameter

// jadi kalau kita ingin mengambil suatu property yang dimiliki suatu object yang kita jadikan sebuah argument 
 const userAndRole = ({Nama, role}) => { // nama dan role ini kita dapat kan dari peroperty object user
    return `${Nama} - ${role}`
 };
 userAndRole(user);

 // nah sekarang bagaimana kalau object nya ada berada di dalam array?

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

 const anime = animes.map(({title, rating}) => {
    return `${title} Rating: ${rating}`;
 })

