const calculateTemp=()=>{
     
    const numberTemp  =document.getElementById('temp').value;
    
    const tempSelected=document.getElementById('tempDiff');
    const valueTemp   =tempDiff.options[tempSelected.selectedIndex].value;
    
    const CelToFah=(Celcius)=>{

        let Fahrenheit = Math.round((Celcius*9/5)+32);
        return Fahrenheit;
    }

    const CelToKel=(Celcius)=>{

        let Kelvin = Celcius + 273.15;
        return Kelvin;
    }

    let result;

    if(valueTemp =='Celcius'){
        result   =  CelToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }else{
        result   =  FahToCel(numberTemp);
        document.getElementById('resultContaier').innerHTML = `= ${result}°Celcius`;
    }

    if(valueTemp =='Celcius'){
        result   =  CelToKel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    }else
    {
        result   =  KelToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;
    }


    // if(valueTemp =='Fahrenheit'){
    //     result   =  FahToCel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;
    // }else
    // {
    //     result   =  CelToFah(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    // }

    // if(valueTemp =='Fahrenheit'){
    //     result   =  FahToKel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    // }else
    // {
    //     result   =  KelToFah(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;

    // }

     
    // if(valueTemp =='Kelvin'){
    //     result   =  KelToCel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;
    // }else
    // {
    //     result   =  CelTOKel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    // }

    // if(valueTemp =='Kelvin'){
    //     result   =  KelToFah(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    // }else
    // {
    //     result   =  FahTOKel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;

    // }
}  