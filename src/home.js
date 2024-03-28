export { home }; 
 
const home = function(){
    
    let content = document.querySelector(".content");
    let h1 = document.createElement("h1");
    let span = document.createElement("span");

    h1.textContent = "Welcome to our restaurant!";
    span.textContent = "The best food in town!";

    content.appendChild(h1);
    content.appendChild(span);
}

