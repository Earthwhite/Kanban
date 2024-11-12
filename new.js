/*alert("hello")*/
const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlanes = Math.floor(Math.random() * swimlanes.length);
    swimlanes[randomSwimlanes].appendChild(card);
}
const createCard = (index) =>{
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerText = `card #${index}`;
    cardElement.draggable = 'true';

    cardElement.addEventListener('dragstart', (e)=>{
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', (e)=>{
        e.target.id = 'undefined';
    });

    pasteCard(cardElement);
}

const createCards = (amount) =>{
    for(let i = 0; i < amount; i++){
        createCard(i)
    }
}

addEventListenerToSwimlanes = () =>{
    const swimlanes = document.querySelectorAll('.swimlane');
    for (let i=0; i < swimlanes.length; i++){
        swimlanes[i].addEventListener('dragover', (e) =>{
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop', (e) =>{
            e.preventDefault();

            const dragedCared = document.querySelector('#dragged');
            dragedCared.parentNode.removeChild(dragedCared);
            e.currentTarget.appendChild(dragedCared);
        });
    }
}

createCards(10);
addEventListenerToSwimlanes();