let clients =[
    {
        "id" : 1,
        "name" : "Martwa Komar",
        "img" : "images/img--opinia1.jpg",
        "mark" : "7/10",
"words": "Hej Bartek, chciałam ci tylko powiedzieć, że zakochałam się w Twoim ojcu Wiem, że głupio tak z ziomalem Lecz ja zawsze już kochałam go Kiedy tylko go ujrzałam Chciałam schować to uczucie Lecz ja nie wiem jak mam ukryć to. Nie wiem co na to twoja mama.Bardziej boli mnie co powiesz. Boje się, że stracę brata."
    },
    {
        "id" : 2,
        "img" : "images/img--opinia2.jpg",
        "name" : "Marcel",
        "mark" : "21/37",
"words": "Nie wiem kto wam robił logo, ale poszedł po linii najmniejszego oporu. Na bank, zrobiłbym lepsze. Wiesz, coś z fajną czcionką, i wykorzystaniem negatywnej przestrzeni. Pasowałby ci do tego motyw Kasyna. Deal?",
    }
    ,
    {
        "id" : 3,
        "img" : "images/img--opinia3.jpg",
        "name" : "David",
        "mark" : "2,05/2,72",
"words": "Czy tak trudno byłoby kurwa znaleźć lokal z sufitem na normalnej wysokości? Rozumiem, że jebane webry są w chuj zacofane, ale serio, to nie jest Shire. Pierdolę....",
    }
    ,
    {
        "id" : 4,
        "img" : "images/img--opinia4.jpg",
        "name" : "Jakub vel Szefu",
        "mark" : "★★★★☆☆☆☆☆",
"words": "Co za barany robiły tę stronę? Tu nic nie działa poprawnie. Kiedyś też pykałem takie stronki, ale wtedy bylem jeszcze w gimnazjum. /nZła organizacja znaczników, brak konsekwencji w nazywaniu zmiennych, z dupy brane przesunięcia i potem wszystko się rozjeżdża. Okrągłe zero responsywności pod kątem urządzeń mobilnych. Powodzenia w rozbudowie, jak to już teraz ledwo co się trzyma. Kto niby tak robi bazy danych? Zerowa optymalizacja i bezpieczeństwo. Wzięlibyście chociaż jakis framework, to nie, załatać co się da i, cyk pora na CSS",
    }
]
let currentClientId = -1;

window.addEventListener('DOMContentLoaded', (event) => {
nextClient();
});

function nextClient(){
    console.log("next"+currentClientId);

    currentClientId = (currentClientId+1)%(clients.length);
    let img = document.getElementById("customer-img");
    let name = document.getElementById("who");
    let mark = document.getElementById("what");
    let words = document.getElementById("words");
    img.src = clients[currentClientId].img;
    name.innerHTML = clients[currentClientId].name;
    mark.innerHTML = clients[currentClientId].mark;
    words.innerHTML = clients[currentClientId].words;
}
function prevClient(){
        console.log("prev"+currentClientId);

    currentClientId = (currentClientId-1)%(clients.length);
    if (currentClientId<0) currentClientId= clients.length-1;

    let img = document.getElementById("customer-img");
    let name = document.getElementById("who");
    let mark = document.getElementById("what");
    let words = document.getElementById("words");
    img.src = clients[currentClientId].img;

    name.innerHTML = clients[currentClientId].name;
    mark.innerHTML = clients[currentClientId].mark;
    words.innerHTML = clients[currentClientId].words;
}