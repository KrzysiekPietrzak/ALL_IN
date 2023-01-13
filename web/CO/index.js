const menu = [
    {
      id: 1,
      title: "Mikstura przeciwpiechotna",
      category: "Specjalne",
      price: "xx.xx",
      img: "./menu1.jpg",
      desc: `Bechorovka i Schweppes`,
    },
    {
      id: 2,
      title: "30-1975",
      category: "Specjalne",
      price: "xx.xx",
      img: "./menu2.jpg",
      desc: `Whisky z Colą z plastikowego kubka`,
    },
    
    {
      id: 3,
      title: "Sihill Zoltana Chivaya",
      category: "Specjalne",
      price: "xx.xx",
      img: "./menu3.png",
      desc: `Zestaw pięciu i trzech shotów`,
    },
    {
      id: 4,
      title: "Norweski zawrót głowy",
      category: "Alchemia",
      price: "xx.xx",
      img: "./menu4.jpg",
      desc: `Chłodziwo pół na pół z wodą`,
    }, {
      id: 5,
      title: "Przysmak watykański",
      category: "Słodko",
      price: "21.37",
      img: "./menu5.jpg",
      desc: `Osłodzenie wieczoru kierowcy`,
    },
     {
      id: 6,
      title: "Cynamonowy pogromca",
      category:"Alchemia",
      price: "xx.xx",
      img: "./menu6.jpg",
      desc: `Kto ma wiedzieć ten wie`,
    }, {
      id: 7,
      title: "Miśkowy sok z heli-jagód",
      category: "Specjalne",
      price: "yy.yy",
      img: "./menu7.jpg",
      desc: `Pilnie strzeżona skandynawska receptura`,
    },
]

//const buttons = document.getElementsByClassName("buttons");
const offer = document.querySelector(".offer");
const buttons = document.querySelector(".buttonsy");

//console.log(offer.innerHTML);
window.addEventListener("DOMContentLoaded", function () {

    displayMenuItems(menu);
    displayMenuButtons();

   /* displayMenuButtons();
*/  
});
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4 class="offer-title">${item.title}</h4>
                <h4 class="price">${item.price} PLN</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });

    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    offer.innerHTML = displayMenu;
  }


  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Wszystko"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="buttons" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    buttons.innerHTML = categoryBtns;
    const filterBtns = buttons.querySelectorAll(".buttons");
    //console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Wszystko") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
