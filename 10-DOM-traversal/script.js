const tutup = document.body.querySelectorAll('.close');
const card = document.body.querySelectorAll('.card');

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener('click', function () {
//     card[i].style.display = 'none';
//   });
// }

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener('click', function () {
//     tutup[i].parentElement.style.display = 'none';
//   });
// }

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener('click', function (e) {
//     // tutup[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

tutup.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none';
  });
});
