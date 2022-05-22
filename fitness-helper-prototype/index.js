function calculateBMI(){
    a=document.getElementById("bmi-weight").value;
    b=document.getElementById("bmi-height").value;
    a=parseInt(a);
    b=parseInt(b)/100;
    console.log("height"+b)
    console.log("weight"+a)
    document.getElementById("bmi-calculated").value = Math.round(a/Math.pow(b,2));
}