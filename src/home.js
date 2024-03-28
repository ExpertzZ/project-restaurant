import './styles/normalize.css';
import './styles/home.css';

export { home }; 
 
const home = function(){
    
    let content = document.querySelector(".content");

    let div = document.createElement("div");
    div.className = "home";

    let h1 = document.createElement("h1");
    h1.className = "h1";

    let story = document.createElement("span");
    story.className = "story";

    h1.textContent = "OUR STORY";
     story.textContent = "Known as the last bastion in the Fiat World of classically rich cuisine The Ace of Space has become a galactic institution, recognised for its culinary excellence and unparalleled attention to detail. When it opened two centuries ago, there was an overwhelming desire for zero-calorie, organic, ethically produced fiat foods. Today, we are an industry leader located in a melting pot of technological and culinary talents. Our proprietary technologies enables you to experience traditional culinary delights without sacrificing your hard-earned social credit rating. We look forward to providing you a wholly ethical and organic experience.";

    div.appendChild(h1);
    div.appendChild(story);

    content.appendChild(div);

}