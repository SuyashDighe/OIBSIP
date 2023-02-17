function myfunction(){
    const temp=document.getElementById("temperature");
    let temp1=temp.value;
    document.getElementById("output").innerHTML = temp1;
    const unit=document.getElementById("unit");
    let unit1=unit.value;
    if(unit1==="op1"){
        document.getElementById("output").innerHTML = (temp1*9/5)+32 + ' &#8457';
    }else{
        document.getElementById("output").innerHTML = (temp1-32)*5/9 + ' &#8451';
    }



}