const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGalleryEl = document.querySelector('.gallery');

const arrayOfImgEl = images.map(elem => {
  const imgElem = document.createElement('img');
  imgElem.src = elem.url;
  imgElem.alt = elem.alt;
  imgElem.width = 400;
  imgElem.classList.add('image');
  return imgElem;
});

const arrayItemEl = [...arrayOfImgEl]
  .map(elem => `<li class= "item">${elem.outerHTML}</li>`)
  .join('');

listGalleryEl.insertAdjacentHTML('beforeend', arrayItemEl);
