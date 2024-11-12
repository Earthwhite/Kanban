/*const b1 = document.getElementById('bt2');
const b2 = document.getElementById('bt3');

b1.addEventListener('click',but1);
function but1(){
    b1.parentNode.removeChild(b1);
    b2.innerText = 'Button 2';
}*/

const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane'); /* เลือกทุก swimlane */
    const randomSwimlane = 0; /* เลือก swimlane แรก */
    swimlanes[randomSwimlane].appendChild(card); /* เพิ่มการ์ดใน swimlane ที่เลือก */
}

const addCardToFirstLane = () => {
    const firstLane = document.querySelector('.swimlane.first');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerText = `New`;
    newCard.draggable = 'true';

    // เพิ่มปุ่มลบ
    const deleteButton = document.createElement('bottom');
    deleteButton.innerText = 'ลบ';
    deleteButton.className = 'bottom';
    
    // เพิ่มฟังก์ชันในการลบการ์ด
    deleteButton.addEventListener('click', () => {
        newCard.remove(); // ลบการ์ดที่ถูกคลิก
    });

    // เพิ่มปุ่มลบในการ์ด
    newCard.appendChild(deleteButton);

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

    // เพิ่มปุ่มลบ
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteButton';
    
    // เพิ่มฟังก์ชันในการลบการ์ด
    deleteButton.addEventListener('click', () => {
        cardElement.remove(); // ลบการ์ดที่ถูกคลิก
    });

    // เพิ่มปุ่มลบในการ์ด
    cardElement.appendChild(deleteButton);

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

createCards(0);
addEventListenerToSwimlanes();

