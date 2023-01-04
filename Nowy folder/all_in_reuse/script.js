
function btn(){
window.location = "../all_in_reuse/second.html";
}


let Events =[{
    id: 1,
    title_name:"2010's",
    day: "poniedziałek",
    url:"../img(1).jpg",
},{
    id: 2,
    title_name:"2000's",
    day:"wtorek",
    url:"../img(2).jpg",
},{
    id: 3,
    title_name:"90's",
    day:"wtorek",
    url:"../img(3).jpg",
},{
    id: 4,
    title_name:"Rap",
    day:"środa",
    url:"../img(4).jpg",
},{
    id: 5,
    title_name:"Mongolski śpiew gardłowy",
    day:"środa",
    url:"../img(5).jpg",
},{
    id: 6,
    title_name:"Muzyka klasyczna kompozytorów autriackich",
    day:"czwartek",
    url:"../img(6).jpg",
},{
    id: 7,
    title_name:"Rock Alternatywny",
    day:"piątek",
    url:"../img(7).jpg",
},{
    id: 8,
    title_name:"Folk",
    day:"sobota",
    url:"../img(8).jpg",
},{
    id: 9,
    title_name:"Reggae",
    day:"sobota",
    url:"../img(9).jpg",
},{
    id: 10,
    title_name:"Power Metal",
    day:"niedziela",
    url:"../img(10).jpg",
}]

window.addEventListener("DOMContentLoaded", function () {

    displayEvents();


});


function closeModal(){
    let modal1 = document.getElementById("modal1");
    modal1.style.visibility="hidden";

}
function closeAdblock(){
    let modal2 = document.getElementById("modal2");
    modal2.style.visibility="hidden";
}
function closeCookies(){
    let modal3 = document.getElementById("modal3");
    modal3.style.visibility="hidden";
}
function closeNews(){
    let modal4 = document.getElementById("modal4");
//modal4.style.visibility="hidden";
modal4.classList.remove("invisible2");
}
let isNewsletterModal = false;

document.addEventListener('scroll', (e)=> {
    if (!isNewsletterModal) modal4.classList.add("invisible2");
isNewsletterModal=true;
}
)

function displayEvents(){
    let events= document.getElementById("events");
    let displayE = Events.map(function (item){
        console.log(item);
        return `
        <div class="event" id=${item.id}>
            <div class="img-wrap">
              <img class="img-event" src=${item.url} alt="">
            </div><div class="two-text-event">
        <p class="title-name">${item.title_name}</p>
          <p class="p-event-hide">${item.day}</p>
          </div>
        </div>`
          
    });
    displayE = displayE.join(``);
    console.log(displayE);
    events.innerHTML = displayE;
}
