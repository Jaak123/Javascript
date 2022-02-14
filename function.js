const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "2022.02.02",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "2022.02.01",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "2022.01.31",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "2022.02.06",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "2022.01.06",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "2022.01.16",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "2022.01.17",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "2022.01.13",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "2022.01.27",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];
//энд generateHtmlElement() фүнкцийг бич!
function generateHtmlElement(data) {
  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "singleNews");
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "titleP");
    let ptitle = document.createTextNode(e.title);
    h1.appendChild(ptitle);
    let p = document.createElement("p");
    let pdate = document.createTextNode(e.date);
    p.appendChild(pdate);
    let h2 = document.createElement("h2");
    let ptext = document.createTextNode(e.type);
    h2.appendChild(ptext);
    let img = document.createElement("img");
    img.setAttribute("src", e.pic_url);
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    document.querySelector("#mainNews").appendChild(div);
  });
}

//энд removeHtmlElement() фүнкцийг бич!
function removeHtmlElement() {
  let rData = document.querySelectorAll(".singleNews");
  rData.forEach((e) => {
    e.remove();
  });
}

/*
  энд 5н button-оо барьж аваад addEventListener хииж 
  removeHtmlElement() фүнкцийг дуудаж index.html доторох
  <div id="mainNews"> элементийг цэвэрлсний дараа
  зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул
  */
document.querySelector(".btn5").addEventListener("click", () => {
  removeHtmlElement();
  let filterNews = news.filter((e) => {
    return e.type === "спорт";
  });
  generateHtmlElement(filterNews);
});
document.querySelector(".btn4").addEventListener("click", () => {
  removeHtmlElement();
  let filteredNews = news.filter((e) => {
    return e.type === "улс төр";
  });
  generateHtmlElement(filteredNews);
});
document.querySelector(".btn3").addEventListener("click", () => {
  removeHtmlElement();
  generateHtmlElement(news);
});
document.querySelector(".btn2").addEventListener("click", () => {
  removeHtmlElement();
  let sortupNews = news.sort((dateA, dateB) => {
    if (dateA.date > dateB.date) {
      return -1;
    } else {
      return 1;
    }
  });
  generateHtmlElement(sortupNews);
});
document.querySelector(".btn1").addEventListener("click", () => {
  removeHtmlElement();
  let sortdownNews = news.sort((dateA, dateB) => {
    if (dateA.date < dateB.date) {
      return -1;
    } else {
      return 1;
    }
  });
  generateHtmlElement(sortdownNews);
});
