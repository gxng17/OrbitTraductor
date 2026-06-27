async function convert(){

let amount = Number(document.getElementById("amount").value);

let from = document.getElementById("fromCurrency").value;

let to = document.getElementById("toCurrency").value;


if(!amount){

alert("Enter amount");

return;

}


let response = await fetch(
`https://api.exchangerate-api.com/v4/latest/${from}`
);


let data = await response.json();


let rate = data.rates[to];


let result = amount * rate;


// keeps decimals
document.getElementById("result").innerHTML =

`${amount} ${from} = ${result.toLocaleString(undefined, {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})} ${to}`;


}