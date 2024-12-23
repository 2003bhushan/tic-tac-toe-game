function restart(){
    window.location="tic tac project.html"
}
let position='o'
let win=document.getElementById("win")
let game=true

function c1(){
    d=document.getElementById("c1")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c2(){
    d=document.getElementById("c2")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c3(){
    d=document.getElementById("c3")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c4(){
    d=document.getElementById("c4")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c5(){
    d=document.getElementById("c5")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c6(){
    d=document.getElementById("c6")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c7(){
    d=document.getElementById("c7")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c8(){
    d=document.getElementById("c8")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function c9(){
    d=document.getElementById("c9")
    if (game==true && d.innerHTML == " "){ 
        if(position=="o"){
           d.innerHTML="o"
           checkwin()
           position="x"
        }
        else{
            d.innerHTML="x"
            checkwin()
            position="o" 
        }
    }
}

function checkwin(){
    let c1=document.getElementById("c1").innerHTML
    let c2=document.getElementById("c2").innerHTML
    let c3=document.getElementById("c3").innerHTML
    let c4=document.getElementById("c4").innerHTML
    let c5=document.getElementById("c5").innerHTML
    let c6=document.getElementById("c6").innerHTML
    let c7=document.getElementById("c7").innerHTML
    let c8=document.getElementById("c8").innerHTML
    let c9=document.getElementById("c9").innerHTML

    if(c1==position&&c2==position&&c3==position||c4==position&&c5==position&&c6==position||
        c7==position&&c8==position&&c9==position||c1==position&&c4==position&&c7==position||
        c2==position&&c5==position&&c8==position||c3==position&&c6==position&&c9==position||
        c1==position&&c5==position&&c9==position||c3==position&&c5==position&&c7==position){
            win.innerHTML=position+" is winer"
            game=false
        }
    else if(c1!=' '&c2!=' '&c3!=' '&c4!=' '&c5!=' '&c6!=' '&c7!=' '&c8!=' '&c9!=' '){
        win.innerHTML='Draw Match'
        game=false

    }
    
}
