let cookies = 0
let amount = 1
let cookieprice = 1
let price = 20
let autoclickers = 0
let balance = 0
const audio = new Audio("click.mp3");
const money = new Audio("money.mp3")
const error = new Audio("error.mp3")
const buttons = document.querySelectorAll("button");
document.getElementById("btn").disabled = true;
document.getElementById("btn3").disabled = true;
updatetitle()
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
function increaseprice()
{
    audio.play();
    cookieprice = (cookieprice + 0.25)
    check()
    updatetitle()
}
function decreaseprice()
{
    audio.play();
    cookieprice = (cookieprice -= 0.25)
    check()
    updatetitle()
    
}
function showshop()
{
    audio.play();
    document.getElementById("shop").style.display = "block"
    document.getElementById("btn").style.display = "block"
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn3").style.display = "block"
    document.getElementById("antwoord").style.display = "none"
    document.getElementById("shopbtn").style.display = "none"
    document.getElementById("backbtn").style.display = "block"
}
function back()
{
    audio.play();
    document.getElementById("shop").style.display = "none"
    document.getElementById("btn").style.display = "none"
    document.getElementById("btn1").style.display = "block"
    document.getElementById("btn3").style.display = "none"
    document.getElementById("antwoord").style.display = "block"
    document.getElementById("shopbtn").style.display = "block"
    document.getElementById("backbtn").style.display = "none"
}
function check()
{
    if (cookies > price - 1)
    {
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.display = "block"
    }else{
        document.getElementById("btn").disabled = true;
    }
    if (cookies > 0)
    {
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn3").style.display = "block"
    }else{
        document.getElementById("btn3").disabled = true;
    }
}
function addcookie()
{
    audio.play();
    cookies = (cookies += amount)
    check()
    updatetitle()
}
function sell()
{
    if (cookieprice == 0.25)
    {
        error.play();
        document.getElementById("btn3").disabled = true;
        alert("The price of cookies can't be any lower!\nDouble your cookies to increase the price.")
    }else{
        money.play();
        addtobalance = (cookies * cookieprice)
        balance += addtobalance
        cookies = 0
        decreaseprice()
        check()
        updatetitle()
    }
    
}
function doublecookie()
{
    money.play()
    amount++
    cookies = (cookies - price)
    price = (price * 1.2)
    price = Math.round(price)
    increaseprice()
    check()
    updatetitle()
}
function updatetitle()
{
    document.getElementById("btn").innerHTML = "";
    document.getElementById("btn").innerText += "Double cookies! Price: "+String(kFormatter(price));
    document.getElementById("btn3").innerHTML = "";
    document.getElementById("btn3").innerText += "Sell cookies, (price per cookie: "+String(kFormatter(cookieprice))+"$)";
    check()
    document.getElementById("btn1").innerHTML = "";
    if (amount == 1)
    {
        document.getElementById("btn1").innerText += "+"+amount+" Cookie (Earn "+amount+" cookie per click)";
    }
    else{
        document.getElementById("btn1").innerText += "+"+amount+" Cookies (Earn "+amount+" cookies per click)";
    }
    
    document.getElementById("antwoord").innerHTML = "";
    if (cookies == 1)
    {
        document.getElementById("antwoord").innerText += "You have "+String(kFormatter(cookies))+" Cookie.";
    }else{
        document.getElementById("antwoord").innerText += "You have "+String(kFormatter(cookies))+" Cookies.";
    }
    document.getElementById("antwoord2").innerHTML = "";
    document.getElementById("antwoord2").innerText += "Balance: "+String(kFormatter(balance.toFixed(2)))+" $.";
    let title = String(kFormatter(cookies)) + " Cookies";
    document.title = title;
}