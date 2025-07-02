
// select the element
const heading=document.getElementById("page-title")
const paragraphs=document.getElementsByClassName("description")
const listItems=document.getElementsByTagName("li")
const oneParagraph=document.querySelector(".description")
const items=document.querySelectorAll(".item")
const p= document.querySelector("p")
let x=document.getElementsByClassName("item-2")

// console.log(heading)
console.log(paragraphs)
console.log(listItems)
console.log(oneParagraph)
console.log(items)

// change DOM elements
//.textContent
heading.textContent="My first paragraph"

// .innerHTML
oneParagraph.innerText="My first paragraph"
oneParagraph.style.backgroundColor="red"
// oneParagraph.style.padding="20px"
oneParagraph.style.fontSize="30px"
oneParagraph.style.borderRadius="10px"
p.classList.add("first-paragraph")
x.classList.remove()
