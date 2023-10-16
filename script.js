const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item)=>{
    item.onclick = () =>{
        if (item.id=="clear") {
            display.innerText=""; /*con esto dejamos en blanco el texto interior del display*/
        }else if (item.id=="backspace") {
            let string = display.innerText.toString(); /*con esta linea convertimos todo hacia una cadena de texto*/
            display.innerText=string.substr(0, string.length-1) /*esta linea nos permite buscar dentro de una cadena de caracteres y afectar el caracter que nececitemos(borrando el ultimo caracter de una cadena de texto)*/
        }else if (display.innerText != "" && item.id == "equal") {
            display.innerText= eval(display.innerText);
            /* eval convierte en operaciones aritmeticas los calculos encontrados dentro de una cadena de texto.*/
        }else if (display.innerText == "" && item.id == "equal") {
            display.innerText="Null";
            setTimeout(() =>(display.innerText=""),1000); /* con esto declaramos una funcion que se cumplira en un intervalo de tiempo, al presionar boton igual si este esta vacio esperar 2 segundo y borrar el mensaje de null*/
        }else{
            display.innerText+=item.id; /*con esto aisgnamos al display cada valor que se vaya presionando */
        };
    };
});
const themeTogglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("toggler-icon");
let isdark= true;
themeTogglerBtn.onclick=()=>{
    calculator.classList.toggle("dark")/*afecte todo lo que esta en la clase */
    themeTogglerBtn.classList.toggle("active")
    isdark = !isdark
}