function sayHello() {
    console.log("Button cliked");
    console.log(10 + 20);
}
const box = document.querySelector('.box')
const button = document.getElementById('btn')

button.onclick = () => {
    console.log("Hello");
     box.style.backgroundColor = 'white'
    box.style.backgroundColor === "black" ? box.style.backgroundColor = 'white' : box.style.backgroundColor = 'black'
}

const image = document.getElementById('new element')
image.onclick = () => {
    console.log("Image Cliked");
}
