async function fetchWishData() {
  const response = await fetch("http://localhost:3000/wishes");
  const wishData = await response.json();
  console.log(wishData);
  return wishData;
}

async function showAllWishes() {
  const getWish = await fetchWishData();
  const wishList = document.querySelector("#wishList");

  for (i = 0; i < getWish.length; i++) {
    const elem = document.createElement("li");
    elem.textContent = getWish[i].wish;
    wishList.appendChild(elem);
  }
}
showAllWishes();

// async function displayNewInfo(info) {
//     const newBeast = await fetchBeastData();
//     const name = document.getElementById(info);
//     const elem = document.createElement("li");
//     elem.textContent = newBeast[info];
//     name.appendChild(elem);
//   }

//   displayNewInfo("name");
//   displayNewInfo("habitat");
//   displayNewInfo("dangerRating");
//   displayNewInfo("description");
//   displayNewInfo("encounterRate");
//   displayNewInfo("loot");

// async function displayWishes() {
//   const wishes = await fetchWishData();
//   const well = document.querySelector("#wishList");
//   let data = ``;
//   for (let wish of wishes) {
//     data += `<div>
//         <h2>Wish: ${wish.wish}</h2>
//         <p>Author: ${wish.author}</p>
//       </div>`;
//   }
//   well.innerHTML = data;
// }
// displayWishes();
