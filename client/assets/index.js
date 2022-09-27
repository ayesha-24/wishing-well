async function getAllWishes() {
  const response = await fetch("http://localhost:3000/wishes");
  const wishes = await response.json();
  console.log(wishes);
  return wishes;
}

getAllWishes();

// async function newWish(e) {
//   e.preventDefault();

//   const data = {
//     wish: e.target.wish.value,
//     author: e.target.author.value,
//   };

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };

//   const response = await fetch("http://localhost:3000/wishes", options);

//   if (response.status == 201) {
//     alert("Your wish has been submitted to the well!");
//     window.location.reload();
//   }
// }

async function newWish(e) {
  e.preventDefault();

  // Extract the data into an object
  const data = {
    wish: e.target.wish.value,
    author: e.target.author.value,
  };

  // Set the options for the fetch request
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Make a fetch request sending the data
  const response = await fetch("http://localhost:3000/wishes", options);

  if (response.status == 201) {
    alert("Your wish has been submitted to the well!");
    window.location.reload();
  }
}

const form = document.querySelector("#createForm");
form.addEventListener("submit", newWish);

console.log(newWish());
