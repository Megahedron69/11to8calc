let inp1=11
let inp2=8
let res
function add(){
    let sum=inp1+inp2
    res=sum
    console.log(sum)
    document.getElementById("number1").textContent=inp1
    document.getElementById("number2").textContent=inp2
    document.getElementById("symbol").textContent="+"
    document.getElementById("output").textContent="="+" "+sum
}

function sub(){
    let sub=inp1-inp2
    res=sub
    console.log(sub)
    document.getElementById("number1").textContent=inp1
    document.getElementById("number2").textContent=inp2
    document.getElementById("symbol").textContent="-"
    document.getElementById("output").textContent="="+" "+sub
}

function multi(){
    let mult=inp1*inp2
    res=mult
    console.log(mult)
    document.getElementById("number1").textContent=inp1
    document.getElementById("number2").textContent=inp2
    document.getElementById("symbol").textContent="X"
    document.getElementById("output").textContent="="+" "+mult
}


function div(){
    let divi=inp1/inp2
    res=divi
    console.log(divi)
    document.getElementById("number1").textContent=inp1
    document.getElementById("number2").textContent=inp2
    document.getElementById("symbol").textContent="/"
    document.getElementById("output").textContent="="+" "+divi
}

function reset(){
    inp1=11
    inp2=8
    document.getElementById("number1").textContent="Number1"
    document.getElementById("number2").textContent="Number2"
    document.getElementById("symbol").textContent="Symbol"
    document.getElementById("output").textContent=" = OUTPUT"
}


function save(){
    let ss=document.getElementById("prev")
    console.log(res)
    ss.textContent+=" "+res+" - "
}