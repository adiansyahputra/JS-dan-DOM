const tUbahWarna = document.getElementById('btn-ubah-warna');
tUbahWarna.addEventListener('click', function () {
  document.body.classList.toggle('light-blue');
});

const tAcakWarna = document.createElement('button');
const isiTeksAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(isiTeksAcakWarna);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

const sliderMerah = document.getElementById('warnaMerah');
const sliderBiru = document.getElementById('warnaBiru');
const sliderHijau = document.getElementById('warnaHijau');
sliderMerah.addEventListener('input', function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sliderHijau.addEventListener('input', function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sliderBiru.addEventListener('input', function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  // Posisi Mouse
  // event.clientX / Y
  // ukuran browser
  // window.innerWidth / Height
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});
