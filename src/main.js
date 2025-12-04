import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  smoothScrollToNewImages,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
let currentPage;
let currentQuery = '';
const perPage = 15;
let totalHits = 0;

searchForm.addEventListener('submit', handleSearchSubmit);


document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', handleLoadMore);
  }
});

function handleSearchSubmit(event) {
  event.preventDefault();

  const searchInput = event.target.elements.searchQuery;
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }


  clearGallery();
  currentPage = 1;
  currentQuery = searchQuery;
  hideLoadMoreButton(); 

  showLoader();

  getImagesByQuery(searchQuery, currentPage)
    .then(handleSearchResponse)
    .catch(handleError)
    .finally(hideLoader);
}

async function  handleLoadMore() {
    try {
        currentPage++;
        showLoader();
        hideLoadMoreButton();

        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);
      
        const maxPage = Math.ceil(totalHits / perPage);

        if (currentPage < maxPage) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }
    } catch (error) {
        console.error("error loading more images:", error);
        currentPage--;
        showLoadMoreButton();
    } finally {
        console.log("We're sorry, but you've reached the end of search results.");
        hideLoader();
    }
}

function handleSearchResponse(data) {
  const images = data.hits;
  totalHits = Math.ceil(data.totalHits / perPage); 

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  createGallery(images);

  if (totalHits > perPage) {
    showLoadMoreButton(); 
  }

  iziToast.success({
    title: 'Success',
    message: `Hooray! We found ${totalHits} images.`,
    position: 'topRight',
  });
}

function handleError(error) {
  console.error('Error:', error);
  
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later!',
    position: 'topRight',
  });
}