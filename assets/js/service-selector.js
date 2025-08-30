const buttons = document.querySelectorAll('.button-container-inner input[type="radio"]');
const serviceLists = document.querySelectorAll('.service-list');
const imageContainer = document.querySelector('.service-image-container');
const videoTag = document.querySelector('.service-animation-container video');
const priceContainer = document.querySelector('.price-container');

// Helper to update image/video based on selected service item
function updateMedia(serviceItem) {
  const service = serviceItem.getAttribute('data-service');
  if (service && imageContainer && videoTag) {
    imageContainer.style.backgroundImage = `url('/assets/images/services/${service}/image.webp')`;
    videoTag.poster = `/assets/images/services/${service}/thumb.webp`;
    videoTag.src = `/assets/images/services/${service}/animation.mp4`;
    videoTag.load();
    priceContainer.style.backgroundImage = `url('/assets/images/services/${service}/price.webp')`;
  }
}

// Show only the selected list and set first item as selected
function showList(idx) {
  serviceLists.forEach((list, i) => {
    list.style.display = i === idx ? 'block' : 'none';
    if (i === idx) {
      list.querySelectorAll('.service-selector-item').forEach(item => item.classList.remove('show-selected'));
      const firstItem = list.querySelector('.service-selector-item');
      if (firstItem) {
        firstItem.classList.add('show-selected');
        updateMedia(firstItem);
      }
    }
  });
}

// Initial state: show first checked radio's list
let initialIdx = Array.from(buttons).findIndex(btn => btn.checked);
showList(initialIdx);

// Listen for radio change
buttons.forEach((button, idx) => {
  button.addEventListener('change', () => {
    if (button.checked) {
      showList(idx);
    }
  });
});

// Service item click logic
serviceLists.forEach(list => {
  list.querySelectorAll('.service-selector-item').forEach(item => {
    item.addEventListener('click', () => {
      list.querySelectorAll('.service-selector-item').forEach(itm => itm.classList.remove('show-selected'));
      item.classList.add('show-selected');
      updateMedia(item);
    });
  });
});
