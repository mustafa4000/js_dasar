// template strings
let judulBuku = '7th habbits';
let pengarang = 'Steven covey';
let totalPenjualan = 1000;

// cara lama menambahkan string dan variabel
// let hasil = 'Buku kesukaan saya adalah' + judulBuku + ' yang di tulis oleh' + pengarang + ', buku ini sudah tidak terjual ' + totalPenjualan + 'eksemplar';
// console.log(hasil);

// menggunakan template string untuk menambahkan string dan variavel
// let hasil = `Buku kesukaan saya adalah ${judulBuku} yang di tulis oleh ${pengarang} buku ini sudah terjual ${totalPenjualan} eksemplar`;
// console.log(hasil);

// template html
let template = `
    <h1>${judulBuku}</h1>
    <p>${pengarang}</p>
    <p>${totalPenjualan}</p>
`;

console.log(template);