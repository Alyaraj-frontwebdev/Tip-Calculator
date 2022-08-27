var billAmount = document.getElementById('billAmount'),
rangeValue = document.getElementById('rangeValue'),
rangeSlider = document.getElementById('rangeSlider'),
tipAmount = document.getElementById('tipAmount'),
totalAmount = document.getElementById('totalAmount');
rangeSlider.addEventListener('input', ()=>{
    rangeValue.innerHTML = rangeSlider.value;
    tip = billAmount.value*(rangeSlider.value/100);
    tipAmount.value = tip;
    totalAmount.value = parseFloat(parseFloat(billAmount.value) + parseFloat(tipAmount.value));
    var motion =rangeSlider.value/rangeSlider.max;
    rangeValue.style.left = (motion*330) + "px";
});
