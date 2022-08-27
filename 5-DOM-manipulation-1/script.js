// element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Adiansyah Putra</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>ini paragraf</p></div>';

// element.style.<propertiesCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'adiansyah putra');
// const a = document.querySelector('section#a a');

// a.setAttribute('id', 'link');

// element.getAttribute()
// a.getAttribute('href');
// judul.getAttribute('id');

// element.removeAttribute()
// a.removeAttribute('href');

// element.classList.add()
const p2 = document.querySelector('.p2');
// p2.classList.add('label');
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

// element.classList.remove()
// p2.classList.remove('label');

// element.classList.toggle()
// p2.classList.toggle('label');
// p2.classList.toggle('biru-muda');

// element.classList.item()
console.log(p2.classList.item(2));

// element.classList.contains()
console.log(p2.classList.contains('dua'));

// element.classList.replace()
p2.classList.replace('tiga', 'empat');
