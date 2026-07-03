const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "/Frontend/images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "/Frontend/images/john.png"
  }
];
let curUserId = 0;

function toggle() {
  curUserId = curUserId === 0 ? 1 : 0;

  document.getElementById("img").src = users[curUserId].image;
  document.getElementById("card-name").innerText = users[curUserId].name;
}

console.log("Hello from JS");