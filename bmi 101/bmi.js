
let lastClickedIndex = -1; // Variable to keep track of the last clicked index

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.images img');
  images.forEach(image => {
    image.style.display = 'none';
  });
});

function showImage(index) {
  const images = document.querySelectorAll('.images img');
  
  // If lastClickedIndex is the same as the current index, hide the image
  if (lastClickedIndex === index) {
    images[index - 1].style.display = 'none';
    lastClickedIndex = -1; // Reset lastClickedIndex
  } else {
    // Hide all images
    images.forEach(image => {
      image.style.display = 'none';
    });

    // Show the selected image
    images[index - 1].style.display = 'block';
    lastClickedIndex = index; // Update lastClickedIndex
  }
}

  