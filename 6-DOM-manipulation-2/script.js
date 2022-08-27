// DOM Manipulation

// appenchild
// buat element baru
const pBaru = document.createElement('p');
// buat text baru
const textBaru = document.createTextNode('Ini paragraf Baru eheheh');

// masukin text baru ke element baru
pBaru.appendChild(textBaru);

// munculin ke web di akhir dari parent, tapi tangkap dulu parentnya
const parentpBaru = document.getElementById('a');
parentpBaru.appendChild(pBaru);

// warnain biar keren dikit
pBaru.style.backgroundColor = 'lightgreen';

// insertbefore
// buat elemen baru
const liBaru = document.createElement('li');
// buat text li elemen baru
const textliBaru = document.createTextNode('item baru hehe ');
// masukin textlibaru ke li baru
liBaru.appendChild(textliBaru);

// tangkap parentnya
const parentLi = document.querySelector('#b ul');
// tangkap setelahnya
const liSetelahnya = parentLi.querySelector('li:nth-child(2)');

parentLi.insertBefore(liBaru, liSetelahnya);
// warnain biar keren dikit hehe
liBaru.style.backgroundColor = 'lightgreen';

// replace
// membuat element baru & isi elemen baru
const judulBaru = document.createElement('h1');
const isiJudulBaru = document.createTextNode('Judul BARU HEHE');

// memasukkan isi elemen ke dalam elemen
judulBaru.appendChild(isiJudulBaru);

// menangkap elemen yang akan diganti
const p4 = document.querySelector('#b p');

// menangkap parent elemen yang akan diganti
const b = document.querySelector('#b');

// replace element
b.replaceChild(judulBaru, p4);

// warnain judul baru
judulBaru.style.backgroundColor = 'lightgreen';

// remove link ig
// ambil parentnya
const a = document.querySelector('#a');
// ambil yang mau di remove
const link = document.querySelector('#a a');

a.removeChild(link);
