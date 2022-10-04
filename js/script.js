const calcy = () =>{
    let hind = document.getElementById('hind').value;
    let maths = document.getElementById('maths').value;
    let eng = document.getElementById('eng').value;
    let soc = document.getElementById('soc').value;
    let arts = document.getElementById('arts').value;
    let grades = "";
    
    let totalGrades = parseFloat(hind) + parseFloat(maths) + parseFloat(eng) + parseFloat(soc) + parseFloat(arts);
    alert(totalGrades);

    let perc = (totalGrades/500) * 100;
    alert(perc);

    if(perc <= 100 && perc >= 80){
        grades = 'A';
    } else if(perc <= 79 && perc >= 60){
        grades = 'B';
    } else if(perc <= 59 && perc >= 33){
        grades = 'C'
    }else{
        grades = 'F'
    }

    if(perc >= 33){
    document.getElementById('showData').innerHTML = ` Out of 500 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are pass.`
    }
    else{
    document.getElementById('showData').innerHTML = ` Out of 500 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are fail.`
    }

}