import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="info-value">${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="info-value">${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${downloads}</span>
            </p>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
  
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('visible');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('visible');
  }
}

export function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('hidden');
  }
}

export function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('hidden');
  }
}

export function smoothScrollToNewImages() {
  const galleryContainer = document.querySelector('.gallery');
  if (!galleryContainer || galleryContainer.children.length === 0) return;
  
  const cardHeight = galleryContainer.firstElementChild.getBoundingClientRect().height;
  
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}