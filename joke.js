let myCont = document.querySelector(".joke-content");
let myBtn = document.getElementById("buttonA");

let apiUrl = "https://icanhazdadjoke.com";

async function fetchData() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
      
    });
    const data = await response.json();
    console.log(data.joke);
    myCont.textContent = data.joke;
  } catch (error) {
    console.log("Error during fetch data:", error);
    myCont.textContent = "An error occurred while fetching the joke";
  }
}
fetchData();

myBtn.addEventListener("click", fetchData);
