const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// const pwdBtnEle = document.getElementById('pwd-btn-ele');
// console.log(pwdBtnEle)

const pwdOneEle = document.getElementById('pwd-one-ele');
const pwdTwoEle = document.getElementById('pwd-two-ele');


function handleBtn() {
    pwdOneEle.textContent = generatePasswords()
    pwdTwoEle.textContent = generatePasswords()
}

function generatePasswords() {
    let length = 15;
    let charset = characters.join('');
    let pwd = "";
    for (let i = 0; i < length; i++){
        pwd += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return pwd;
}

