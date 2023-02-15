let num = "";
let size = prompt("Vul een getal in: (Minder dan 100) ");
let size2 = size
const numbers = [];
for (let i=1; i<=size; i++)
{
    let number = i;
    num += number;
    document.getElementById("antwoord").innerText += num + "\n";
    numbers.push(num)
if (i == size) {
    num += "";
  } else {
    num += "-";
  }
}
numbers.pop()
let reversenumbers = numbers.reverse()
let yo = 0
for (const element of numbers) {
    document.getElementById("antwoord").innerText += numbers[yo] + "\n"; 
    yo += 1
    numbers.pop
}