import './styles/normalize.css';
import './styles/menu.css';
import { burgers, sides, drinks, dessert} from './assets/items';

export { menu };

const menu = function(){

    const content = document.querySelector(".content");

    const div = document.createElement("div");
    div.className = "div";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "MENU";

    const buttonRow = document.createElement("div");
    buttonRow.className = "button-row";

    const buttons = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button")
    ];

    buttons[0].textContent = "Burgers";
    buttons[1].textContent = "Sides";
    buttons[2].textContent = "Drinks";
    buttons[3].textContent = "Dessert";

    buttonRow.append(...buttons);

    buttons[0].addEventListener("click", function(){
        itemsBox.innerHTML = "";
        displayItems(burgers);
    });

    buttons[1].addEventListener("click", function(){
        itemsBox.innerHTML = "";
        displayItems(sides);
    });

    buttons[2].addEventListener("click", function(){
        itemsBox.innerHTML = "";
        displayItems(drinks);
    });

    buttons[3].addEventListener("click", function(){
        itemsBox.innerHTML = "";
        displayItems(dessert);
    });

    const itemsBox = document.createElement("div");
    itemsBox.className = "itemsBox";
    const centercenter = document.createElement("div");
    centercenter.className = "centercenter";

    function displayItems(items){
        
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "itemDiv";
            const itemName = document.createElement("div");
            itemName.className = "item-name";
            itemName.textContent = item.name;
            const itemDesc = document.createElement("div");
            itemDesc.className = "item-desc";
            itemDesc.textContent = item.desc;
            const itemPrice = document.createElement("div");
            itemPrice.className = "item-price";
            itemPrice.textContent = item.price;
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemDesc);
            itemDiv.appendChild(itemPrice);
            itemsBox.appendChild(itemDiv);
        });
    }

    

    div.appendChild(title);
    div.appendChild(buttonRow);
    centercenter.appendChild(itemsBox);
    div.appendChild(centercenter);
    
    


    content.appendChild(div);
}