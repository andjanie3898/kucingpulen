const namaPelanggan = 'Jordan'
const umur = 32
const sudahMenikah = true
const barangOrderan = ['baju','celana', 'sepatu']
const alamatPelanggan = {
    namaJalan: 'jl. setiabudi',
    nomorJalan: 5
}
console.log(`Nama: ${namaPelanggan}`);
console.log(`Umur: ${umur}`);
console.log(`Sudah Menikah: ${sudahMenikah}`);
console.log(`Barang Orderan: ${barangOrderan}`);
console.log(`Alamat Pelanggan: ${JSON.stringify(alamatPelanggan, null, 22)}`);
