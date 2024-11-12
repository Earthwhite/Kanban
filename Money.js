const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');

const amount_one = document.getElementById('amount_one');
const amount_two = document.getElementById('amount_two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calmoney);
currency_two.addEventListener('change',calmoney);
amount_one.addEventListener('input',calmoney);

amount_one.addEventListener('keypress', function(e) {
    if (!/[0-9.]/.test(e.key)) {
        e.preventDefault(); 
    }
});

amount_two.addEventListener('keypress', function(e) {
    if (!/[0-9.]/.test(e.key)) {
        e.preventDefault(); 
    }
});
function calmoney(){
    //console.log("ok")
    const one = currency_one.value;
    const two = currency_two.value;
    //console.log(one);
    //console.log(two);
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    //ทำงานแบบ asynchronous
    .then(res => res.json()).then(data=>{
        const rate = data.rates[two];
        rateText.innerText = `1 ${one} =  ${rate} ${two}`;
        amount_two.value = (amount_one.value * rate).toFixed(2);
    })

}
swap.addEventListener('click',swap_currency);
function swap_currency(){
    same = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = same

    const tempAmount = amount_one.value;
    amount_one.value = amount_two.value;
    amount_two.value = tempAmount;

  
    calmoney();
}


calmoney();
console.log(amount_two)
 