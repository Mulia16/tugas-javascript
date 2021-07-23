// 1
let jabatan = "CEO";
if (jabatan == "CEO") {
    console.log("Tugas saya memastikan perusahaan pendapatkan laba dan pangsa pasarnya terus berkembang");
} else if (jabatan == "CTO"){
    console.log("Tugas saya menjamin agar teknologi selalu update, aman, dan disenangi oleh user");
} else if (jabatan == "HR"){
    console.log("Tugas saya amelakukan rekrutmen untuk calon pegawai baru");
} else if (jabatan == "programmer"){
    console.log("Tugas saya membuat software dan aplikasi");
}

// 2
const a = 20;
const b = 20;
if (a > b){
    console.log('a lebih besar dari b');
} else if (a < b) {
    console.log('a lebih kecil dari b');
} else if (a === b) {
    console.log('a sama dengan b');
}

// 3
const hari = 1;
switch(hari) {
    case 1:
      console.log('Minggu');
      break;
    case 2:
      console.log('Senin')
      break;
    case 3:
        console.log('Selasa')
        break;
    case 4:
        console.log('Rabu');
        break;
    case 5:
        console.log('Kamis');
        break;
    case 6:
        console.log('Jumat');
        break;
    case 7:
        console.log('Sabtu');
}

// 4
const gerak = 'DOWN';
switch(gerak) {
    case 'UP':
        console.log('Karakter berjalan keatas');
        break;
    case 'DOWN':
        console.log('Karakter berjalan kebawah');
        break;
    case 'RIGHT':
        console.log('Karakter berjalan kekanan');
        break;
    case 'LEFT':
        console.log('Karakter berjalan kekiri');
        break;
}