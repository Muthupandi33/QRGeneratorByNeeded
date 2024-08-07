
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
let image = document.getElementById("imageQR");
let inpValue=document.getElementById("inpValue");
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
if(inpValue.value == "") return;
let qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
let srcValue=qrCode+inpValue.value;
// console.log(srcValue);
image.src=srcValue;
})

// let inpValue=document.getElementById("inpValue");
// inpValue.addEventListener("change",e=>{
//    console.log(e);
// })