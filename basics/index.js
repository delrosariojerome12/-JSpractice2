const contacts = [
  {
    firstname: "Akira",
    lastname: "Laine",
    number: "096514124",
    likes: ["pizza", "coding", "brownies"],
  },
  {
    firstname: "Ben",
    lastname: "ten",
    number: "0321312312",
    likes: ["horn", "choco", "milfs"],
  },
  {
    firstname: "Gwen",
    lastname: "ten",
    number: "0321312312",
    likes: ["horn", "choco", "milfs"],
  },
];
function search(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstname) {
      return `Match Found! \nName: ${name} \nProperty: ${prop} ${contacts[i][prop]} `;
    }
  }
  return "Not Found";
}
let data = search("Gwen", "likes");
console.log(data);
