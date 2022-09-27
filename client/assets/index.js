async function getAllWishes() {
  const response = await fetch("http://localhost:3000/wishes");
  const wishes = await response.json();
  console.log(wishes);
  return wishes;
}

getAllWishes();
