function maths() {
    const gascost = document.getElementById("gascost").value;  
    const road = document.getElementById("road").value;
    const avaragecomsuction = document.getElementById("avaragecomsuction").value;
    console.log(gascost);
    console.log(road);
    console.log(avaragecomsuction);

    const cost = ((road * avaragecomsuction / 100) * gascost);
    const cost2 = (cost).toFixed(2);
    
    
   //ilość przejechanych kilometrów *  średnia ilość spalania na 100 = x * cena paliwa
    
    document.getElementById("cost2" ).innerHTML = cost2  + "zł"; 

}
