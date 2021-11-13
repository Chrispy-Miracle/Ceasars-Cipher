//actual functional answer:
var str = "";
function rot13() {
    str = document.getElementById("input").value;
    const abcs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let arr = [];
    let newStr = str.toUpperCase();
    for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j <= abcs.length; j++) {
            if (newStr[i] === abcs[j]) {
                let code = j + 13;
                if (code < 26) {
                 arr.push(abcs[j + 13]);
                } else {
              arr.push(abcs[(j + 13) - 26]);
             } 
                 
            } 
         
        } 
    }
    for (let sym = 0; sym < newStr.length; sym++) {
        if (newStr[sym].match(/[^A-Z]/)) {
            arr.splice(sym, 0, newStr[sym])
        }
    }
    // console.log(arr.join(""));
    document.getElementById("solution").innerHTML = arr.join("");
}
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        rot13();
    }
}
    
    // rot13("SERR PBQR PNZC");
    // rot13("SERR CVMMN!");
    // rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");