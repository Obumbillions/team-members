
let teamMembers = [
    {
        name: "Obumneme Okoye",
        age: "19 years",
        favoriteMovie: "Loves action and comedy",
        favoriteFood: "Has a high palate for well cooked food",
        complexion: "He is chocolate in color",
        image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966490/Obum_brt3ca.jpg",
    },
    {
      name: "Emmanuel Chima",
      age: "24 years",
      favoriteMovie: "Loves the movie Old Guard",
      favoriteFood: "Best food is vegetable Soup with Fufu.",
      complexion: "He is dark in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966515/chima_nft5gt.jpg",
    },
    {
      name: "Adekunle Rasheed",
      age: 30 + " years",
      favoriteMovie: " Loves to watch the movie wire",
      favoriteFood: "Rice",
      complexion: "He is dark in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966516/Rasheed_etzq2m.jpg",
    },
    {
      name: "Jhenna",
      age: 23 + " years",
      favoriteMovie: "Enjoys watching Horror",
      favoriteFood: "Loves Ede soup and swallow",
      complexion: "She is fair in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966516/nkemdili_tbd79i.jpg",
    },
    {
      name: "Bamigboye Elizabeth",
      age: 23 + " years",
      favoriteMovie: "Loves to watch Mouse",
      favoriteFood: "Loves to eat yam and egg",
      complexion: "Dark in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966516/elizabeth_rdnoty.jpg",
    },
    {
      name: "Emmanuel Mitti",
      age: 23 + " years",
      favoriteMovie: "Loves to watch Wrath of Man",
      favoriteFood: "Enjoys eating Porridge Yam",
      complexion: "He is dark in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966516/chukwueku_khwozf.jpg",
    },
    {
      name: "Okanlawon Oluwatobiloba",
      age: 24 + " years",
      favoriteMovie: "Loves to watch Prison Break",
      favoriteFood: "Enjoys eating Semo with Egusi",
      complexion: "He is fair in color",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966516/oluwa_tcbga8.jpg",
    },
    {
      name: "Banfe Oluwakorede Serah",
      age: 26 + " years",
      favoriteMovie: "Love in the Prison",
      favoriteFood: "White rice with beans",
      complexion: "she is dark in complexion",
      image: "https://res.cloudinary.com/dkumyybgn/image/upload/v1654966515/banfe_ghuqes.jpg",
    },
  ];
  
  for (let i = 0; i < teamMembers.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = "Click Me";
    btn.addEventListener("click", () => {
      alert(teamMembers[i].name);
    });
    let div = document.createElement("div");
    div.classList.add("div");
    div.innerHTML = `
                      <img src=${teamMembers[i].image} alt="member image"/>
                      <p>${teamMembers[i].age}</p>
                      <p>${teamMembers[i].favoriteMovie}</p>
                      <p>${teamMembers[i].favoriteFood}</p>
                      <p>${teamMembers[i].complexion}</p>
                      
      `;
    div.appendChild(btn);
    document.body.appendChild(div);
    console.log(div);
  }