let selectTag = document.getElementById('selectTag');
let optionTag = document.getElementById('optionTag');
let categories = document.querySelector('.container');
let category;
let price = document.getElementById('price');

// dualshock
let dualshockBlack = document.getElementById('dualshock');
let dualshockSilver = document.getElementById('dualshockSilver');
let dualshockViolet = document.getElementById('dualshockViolet');

let chosenColor;
let quantity = document.getElementById('quantity');
let buyBtn = document.getElementById('buyBtn');

//buying result variables
let buyResultDiv = document.querySelector('.buyResult');
let successDiv = document.querySelector('.success');
let declineDiv = document.querySelector('.decline');


let deliveryDiv = document.getElementById('delivery');

let stock = {
    black: 4,
    silver: 8,
    violet: 1
}


//colors
let colors = document.getElementById('colors');

selectTag.addEventListener('click', function() {
    
    if(selectTag.classList.value === 'opened') {
        categories.style.display = 'none';  
    } else {
        categories.style.display = 'flex';  
    }
    
    selectTag.classList.toggle('opened');
});



let chooseCategory = () => {
    for(let i in categories.children) {
        categories.children[i].onclick = () => {
    
        category = categories.children[i].innerHTML;
        optionTag.innerHTML = category;
        categories.style.display = 'none';
        }
    }    
}



let buyProcess = () => {
    for(let i in colors.children) {
        colors.children[i].onclick = () => {
            
            if(colors.children[i].id === 'black') {
                chosenColor = stock.black;
                dualshockBlack.style.display = 'block';
                dualshockSilver.style.display = 'none';
                dualshockViolet.style.display = 'none';
                
            } else if(colors.children[i].id === 'silver') {
                chosenColor = stock.silver;
                dualshockBlack.style.display = 'none';
                dualshockSilver.style.display = 'block';
                dualshockViolet.style.display = 'none';
    
            } else if(colors.children[i].id === 'violet') {
                chosenColor = stock.violet;
                dualshockBlack.style.display = 'none';
                dualshockSilver.style.display = 'none';
                dualshockViolet.style.display = 'block';
            }
    
        
             
            
        }
    
        buyBtn.onclick = () => {
            if(quantity.value <= chosenColor) {
                buyResultDiv.style.display = 'flex';
                successDiv.style.display = 'block';
            } else {
                buyResultDiv.style.display = 'flex';
                declineDiv.style.display = 'block';
            }
        }
    
    }
   
}

const addDate = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let addToday = document.createElement('span');
    addToday.innerHTML = `Arrives by ${date}`;

    deliveryDiv.appendChild(addToday);

}


const updatePrice = (val) => {
    price.innerHTML = `Price: $ ${Math.round(49.99 * val)}`;
}


//choose category from navbar
chooseCategory();

//choose item, color, quantity and buy
buyProcess();

//add date
addDate();