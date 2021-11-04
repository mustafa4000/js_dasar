// if statement
// let usia = 17;

// if (usia > 15) {
//     console.log('Usia anda diatas 15 tahun')
// }

// const hobi = ['membaca', 'traveling', 'makan-makan', 'tidur'];

// if (hobi.length > 3) {
//     console.log()
// }

let password = 'password12!';
// logicall operator AND -> &&
// OR -> ||
if (password.length >= 12 && password.includes('!')) {
    console.log('password anda super kuat sekali');
} else if (password.length > 8 || password.includes('!')) {
    console.log('password tersebut sudah cukup panjang bro');
} else {
    // kode ini berjalan ketika kondisi if nya false
    console.log('password anda sangat pendek, coba lagi bro');
}