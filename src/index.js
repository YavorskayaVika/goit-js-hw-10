import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.selectBreed.addEventListener('change', onSelectChange);

refs.loader.classList.add('loader');
refs.selectBreed.classList.add('visually-hidden');
refs.error.classList.add('visually-hidden');

fetchBreeds()
  .then(data => {
    const dataMarkup = selectMarkUp(data);
    new SlimSelect({
      select: refs.selectBreed,
      data: dataMarkup,
    });
    setTimeout(() => {
      refs.selectBreed.classList.remove('visually-hidden');
    }, 1000);
  })
  .catch(error => {
    errorShow();
  })
  .finally(() => {
    refs.loader.classList.replace('loader', 'visually-hidden');
  });

function selectMarkUp(arr) {
  const markUp = arr
    .map(
      ({ name, reference_image_id }) =>
        `<option value="${reference_image_id}">${name}</option>`
    )
    .join('');
  return refs.selectBreed.insertAdjacentHTML('beforeend', markUp);
}

function onSelectChange() {
  refs.loader.classList.remove('visually-hidden');
  refs.catInfo.classList.add('visually-hidden');

  fetchCatByBreed(refs.selectBreed.value)
    .then(data => {
      renderCat(data);
      setTimeout(() => {
        refs.catInfo.classList.remove('visually-hidden');
      }, 500);
    })
    .catch(err => {
      errorShow();
    })
    .finally(() => {
      refs.loader.classList.add('visually-hidden');
    });
}

function renderCat({ url, breeds }) {
  const markUp = `<img  class="image" src="${url}" alt="${breeds[0].name} width="640" height="440">
    <div class="content">
    <h2 class="title">${breeds[0].name}</h2>
    <p class="description">${breeds[0].description}</p>
    <p class="temperament">${breeds[0].temperament}</p></div>`;
  return (refs.catInfo.innerHTML = markUp);
}

function errorShow() {
  refs.loader.classList.add('visually-hidden');

  Notiflix.Notify.failure(refs.error.textContent, {
    position: 'center-top',
    timeout: 3000,
  });
}