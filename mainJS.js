
+/1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts
//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības
//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības
//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību

//1
const ienakumi = document.getElementById('all_income').getElementsByClassName('list_item');
console.log(ienakumi);

//2
const izdevumi = document.getElementById('all_expenses').getElementsByClassName('list_item');
console.log(izdevumi);

//3
const budzets = document.getElementById('budget_value');
console.log(budzets);

//4
function funkcija1(value){
document.getElementById('budget_value').innerHTML = value;
}

//5
function funkcija2(ienakumi,type,desc,value){
const apraksts = document.getElementById('add_description').value;
const summa = document.getElementById('add_value').value;
income.innerAdjecentHTML('beforeend', apraksts + summa + '<br>');
}

//6
function poga() {
document.getElementById('add_description');
poga.addEventListener
}

//7
function funkcija3() {
	
}
