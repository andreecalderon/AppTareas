function header(){
let header = document.createElement('header');
header.className = "div-header";

let logo = document.createElement('img');
logo.src = "https://st3.depositphotos.com/30226412/33449/v/450/depositphotos_334490068-stock-illustration-diamond-logo-design-template.jpg";
header.appendChild(logo);

let h1 = document.createElement('h1');
h1.innerText = "Biatxx"
header.appendChild(h1);
return header;
}

export { header };