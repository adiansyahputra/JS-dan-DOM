const thumb = document.body.querySelectorAll('.thumb');
const jumbo = document.body.querySelector('.jumbo');
const container = document.body.querySelector('.container');

// thumb.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     jumbo.setAttribute('src', e.target.src);
//     jumbo.classList.add('fade');
//     setTimeout(() => {
//       jumbo.classList.remove('fade');
//     }, 500);
//     element.classList.add('active');
//     if (element.classList.contains('active')) {
//       element.classList.remove('active');
//     }
//   });
// });

container.addEventListener('click', (e) => {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(() => {
      jumbo.classList.remove('fade');
    }, 500);
    thumb.forEach((element) => {
      if (element.classList.contains('active')) {
        element.className = 'thumb';
      }
    });
    e.target.classList.add('active');
  }
});
