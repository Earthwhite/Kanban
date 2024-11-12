const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlane = 0;
    swimlanes[randomSwimlane].appendChild(card);
}
const addCardToFirstLane = () => {
    const firstLane = document.querySelector('.swimlane.first');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerText = `New`;
    newCard.draggable = 'true';

    
    newCard.addEventListener('dragstart', (e) => {
        e.target.id = 'dragged';
    });

    newCard.addEventListener('dragend', (e) => {
        e.target.removeAttribute('id');
    });

    firstLane.appendChild(newCard);
};

const createCard = (index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerText = `card #${index}`;
    cardElement.draggable = 'true';

    cardElement.addEventListener('dragstart', (e) => {
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', (e) => {
        e.target.removeAttribute('id');
    });

    pasteCard(cardElement);
}

const createCards = (amount) => {
    for(let i = 0; i < amount; i++) {
        createCard(i);
    }
}

const addEventListenerToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane');
    swimlanes.forEach((swimlane) => {
        swimlane.contentEditable = false;
    

        
        swimlane.addEventListener('dblclick', () => {
            swimlane.contentEditable = "true";
            swimlane.focus();
        });

       
        swimlane.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                swimlane.contentEditable = "false";
            }
        });

        swimlane.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        swimlane.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedCard = document.querySelector('#dragged');
            if (draggedCard) {
                draggedCard.parentNode.removeChild(draggedCard);
                e.currentTarget.appendChild(draggedCard);
            }
        });
    });
};


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('bt1').addEventListener('click', addCardToFirstLane);

    
    addEventListenerToSwimlanes();
});

createCards(5);
addEventListenerToSwimlanes();