// Array of your comic page image paths.
// Ensure your images are in a folder named 'Chapter 1' in the same directory as your HTML.
const comicPages = [
    'Chapter 1/Chapter 1_001.jpg',
    'Chapter 1/Chapter 1_002.jpg',
    'Chapter 1/Chapter 1_003.jpg',
    'Chapter 1/Chapter 1_004.jpg',
    'Chapter 1/Chapter 1_005.jpg',
    'Chapter 1/Chapter 1_006.jpg',
    'Chapter 1/Chapter 1_007.jpg',
    'Chapter 1/Chapter 1_008.jpg',
    'Chapter 1/Chapter 1_009.jpg',
    'Chapter 1/Chapter 1_010.jpg',
    'Chapter 1/Chapter 1_011.jpg',
    'Chapter 1/Chapter 1_012.jpg',
    'Chapter 1/Chapter 1_013.jpg',
    'Chapter 1/Chapter 1_014.jpg',
    'Chapter 1/Chapter 1_015.jpg',
    'Chapter 1/Chapter 1_016.jpg',
    'Chapter 1/Chapter 1_017.jpg',
    'Chapter 1/Chapter 1_018.jpg',
    'Chapter 1/Chapter 1_019.jpg',
    'Chapter 1/Chapter 1_020.jpg',
    'Chapter 1/Chapter 1_021.jpg',
    'Chapter 1/Chapter 1_022.jpg',
    'Chapter 1/Chapter 1_023.jpg',
    'Chapter 1/Chapter 1_024.jpg',
    'Chapter 1/Chapter 1_025.jpg',
    'Chapter 1/Chapter 1_026.jpg',
    'Chapter 1/Chapter 1_027.jpg',
    'Chapter 1/Chapter 1_028.jpg',
    'Chapter 1/Chapter 1_029.jpg',
    'Chapter 1/Chapter 1_030.jpg',
    'Chapter 1/Chapter 1_031.jpg',
    'Chapter 1/Chapter 1_032.jpg',
    'Chapter 1/Chapter 1_033.jpg',
    'Chapter 1/Chapter 1_034.jpg',
    'Chapter 1/Chapter 1_035.jpg',
    'Chapter 1/Chapter 1_036.jpg',
    'Chapter 1/Chapter 1_037.jpg',
    'Chapter 1/Chapter 1_038.jpg',
    'Chapter 1/Chapter 1_039.jpg',
    'Chapter 1/Chapter 1_040.jpg',
    'Chapter 1/Chapter 1_041.jpg',
    'Chapter 1/Chapter 1_042.jpg',
  ];

let currentPageIndex = 0; // Start at the first page (index 0)
const totalPages = comicPages.length;

// Get DOM elements
const comicImage = document.getElementById('comic-page');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageCounter = document.getElementById('page-counter');

// Function to update the displayed page and controls
function updateReader() {
    // 1. Update the image source
    comicImage.src = comicPages[currentPageIndex];
    comicImage.alt = `Comic Page ${currentPageIndex + 1}`;

    // 2. Update the page counter text
    pageCounter.textContent = `Page ${currentPageIndex + 1} of ${totalPages}`;

    // 3. Disable/Enable buttons as needed
    prevButton.disabled = currentPageIndex === 0;
    nextButton.disabled = currentPageIndex === totalPages - 1;
}

// Event listeners for navigation
prevButton.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        updateReader();
    }
});

// Initialize the reader when the page loads
updateReader();