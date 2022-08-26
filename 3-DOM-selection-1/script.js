// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Adiansyah Putra';

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];

// h1[0].style.fontSize = '50px';
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollections

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah pakai javascript';
