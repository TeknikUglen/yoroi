// function to initialize page
function initializePage() {
    setupEventListeners();
}

// function to setup event listeners
function setupEventListeners() {
    // find the elements to add a listener to
    const clickableCards = document.querySelectorAll('.article-card');

    // add the listener to the cards
    clickableCards.forEach(element => {
        element.classList.add('article-card-click')
        element.addEventListener('click', clickCard);
    });
}

// function for linking the card to the single post
function clickCard(event) {
    // get the data-url value
    const url = this.getAttribute('data-url');
    
    // navigate to url
    if (url) {
        window.location.href = url;
    }
}

// run initializePage after DOM has loaded
document.addEventListener('DOMContentLoaded', initializePage);