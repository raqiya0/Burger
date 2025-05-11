function goBack(){
    history.back()
}
// header ul bar icon
let iconbar = document.getElementById("icon-bar")
let ul = document.getElementById("ul")
iconbar.onclick = () =>{
    ul.classList.toggle("ul")
}
ul.onclick=()=>{
    ul.classList.toggle('ul')
}