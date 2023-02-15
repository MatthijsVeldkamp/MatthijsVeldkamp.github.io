hoeveelfris = 0
hoeveelbier = 0
hoeveelwijn = 0
let frisprijs = 1.20
let bierprijs = 1.50
let wijnprijs = 1.75
alert("Welkom, U kunt kiezen uit fris, bier of wijn.")
alert("Fris kost €1,20, bier kost €1,50 en wijn kost €1,75.")
alert("Type stop om de bon te printen.")
function drankjekiezen()
{
  let drankje = prompt("Wat wilt u bestellen?").toLocaleLowerCase()
  if (drankje == "fris")
  {
    let hoeveelheidfris = prompt("Hoeveel keer fris wilt u?")
    for (let i = 0; i < hoeveelheidfris; i++) {
      hoeveelfris++;
    }
    drankjekiezen()
  }
  else if (drankje == "bier")
  {
    let hoeveelheidbier = prompt("Hoeveel keer bier wilt u?")
    for (let i = 0; i < hoeveelheidbier; i++) {
      hoeveelbier++;
    }
    drankjekiezen()
  }
  else if (drankje == "wijn")
  {
    let hoeveelheidwijn = prompt("Hoeveel keer wijn wilt u?")
    for (let i = 0; i < hoeveelheidwijn; i++) {
      hoeveelwijn++;
    }
    drankjekiezen()
  }
  else if (drankje == "stop")
  {
    prijsf = (frisprijs * hoeveelfris)
    document.getElementById("hoeveelfris").innerText += " "+hoeveelfris+"x";
    document.getElementById("prijsfris").innerText += "€"+prijsf.toFixed(2);
    prijsb = (bierprijs * hoeveelbier)
    document.getElementById("hoeveelbier").innerText += " "+hoeveelbier+"x";
    document.getElementById("prijsbier").innerText += "€"+prijsb.toFixed(2);
    prijsw = (wijnprijs * hoeveelwijn)
    document.getElementById("hoeveelwijn").innerText += " "+hoeveelwijn+"x";
    document.getElementById("prijswijn").innerText += "€"+prijsw.toFixed(2);
    let totaalbedrag = (prijsf += prijsb += prijsw)
    document.getElementById("totaalprijs").innerText += " €"+totaalbedrag.toFixed(2);
  } 
  else {
    alert("Dit ken ik niet!")
    alert("De vraag wordt nu opnieuw gesteld!")
    drankjekiezen()
  }
}
drankjekiezen()