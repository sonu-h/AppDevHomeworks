const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    cardContent.textContent = showingTerm ? 
        flashcards[currentIndex].term : 
        flashcards[currentIndex].definition;
}

// Event Listeners
//needed help on this so I had to look it up
document.addEventListener('DOMContentLoaded', function() {
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const addCardBtn = document.getElementById('add-card-btn');
    const newTerm = document.getElementById('new-term');
    const newDefinition = document.getElementById('new-definition');

    // Display front of card
    displayCard();

    // Flip card
    flashcard.addEventListener('click', () => {
        showingTerm = !showingTerm;
        displayCard();
    });

    // Previous
    prevBtn.addEventListener('click', () => {
	//using flashcards.length to get length of the array (needed help with the logic, but figured it out in the end)
        currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
        showingTerm = true;
        displayCard();
    });

    // Next
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        showingTerm = true;
        displayCard();
    });

    // Add new card
    addCardBtn.addEventListener('click', () => {
//looked up .trim
        const term = newTerm.value.trim();
        const definition = newDefinition.value.trim();
        
        if (term && definition) {
            flashcards.push({ term, definition });
            newTerm.value = '';
            newDefinition.value = '';
            // Optional: Switch to the new card
            currentIndex = flashcards.length - 1;
            showingTerm = true;
            displayCard();
        }
    });
});

// This line will display the card when the page is refreshed
window.onload = displayCard;