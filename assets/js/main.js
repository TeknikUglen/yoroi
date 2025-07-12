// function to initialize page
function initializePage() {
    setupEventListeners();
}

// function to setup event listeners
function setupEventListeners() {
    // find the elements to add a listener to
    const clickableCards = document.querySelectorAll('.article-card');

    // add the listener to the cards
    clickableCards.forEach(card => {
        card.classList.add('article-card-click')
        card.addEventListener('click', clickCard);
        card.addEventListener('keydown', handleCardKeydown);
    });
}

// function for linking the card to the single post
function clickCard(event) {
    // get the data-url value
    const url = event.currentTarget.getAttribute('data-url');
    
    // navigate to url
    if (url) {
        window.location.href = url;
    }
}

function handleCardKeydown(event) {
    const card = event.currentTarget;
    if (event.key === 'Enter' || event.key === ' ') {
        const url = card.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }
}

// run initializePage after DOM has loaded
document.addEventListener('DOMContentLoaded', initializePage);