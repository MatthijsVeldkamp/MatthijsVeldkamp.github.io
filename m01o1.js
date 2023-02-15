let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
// Berekenen hier het aantal verdiepingen
aantal_verdiepingen = Math.ceil((gewenste_aantal_autos-80)/120);
let antwoord = "Ik heb nog geen idee hoeveel verdiepingen er moeten komen :-(";
if (aantal_verdiepingen == 1)
{
    antwoord = "Er moet " + aantal_verdiepingen +" verdieping op de beganegrond";
}
else if (aantal_verdiepingen > 0)
{
    antwoord = "Er moeten " + aantal_verdiepingen +" verdiepingen op de beganegrond";
}
else
{
    antwoord = "Er zijn geen verdiepingen nodig";
}
document.getElementById("antwoord").innerText = antwoord;

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik x verdiepingen nodig.")