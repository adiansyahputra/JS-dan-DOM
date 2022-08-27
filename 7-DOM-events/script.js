// addEventListener()
// membuat item baru ketika pencet paragraf 4
// pertama ambil element paragraf 4
const p4 = document.querySelector('#b p');
// tambahkan event
p4.addEventListener('click', function () {
  // ambil parent
  const ul = document.querySelector('#b ul');
  // buat elemen baru
  const liBaru = document.createElement('li');
  // buat isi elemen baru
  const textLiBaru = document.createTextNode('ITEM BARU');
  // masukkan isi kedalam elemen baru
  liBaru.appendChild(textLiBaru);
  // tambahkan libaru ke web
  ul.appendChild(liBaru);
});

// mengubah background color paragraf 3
const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
  p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function () {
  p3.style.backgroundColor = 'lightgreen';
});
