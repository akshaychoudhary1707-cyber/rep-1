var numfield1=document.getElementById('numfield1');
var numfield2=document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield');
var form=document.getElementById('xiswhatpercentageofy');

form.addEventListener('submit', function(event){
    if(!numfield1.value || !numfield2.value){
            alert("Please enter the values in the field");
    }
    else{
        var x=parseFloat(numfield1.value);
        var y=parseFloat(numfield2.value);
        var a= (x/y)*100;
        resultfield.innerText = "Answer: " +a+ "%";
        event.preventDefault();
    }
});