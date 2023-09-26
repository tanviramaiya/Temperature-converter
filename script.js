// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Celsius TO.......=-=-=-=-=-=-=-=-=-=-=-=-=-=-


let cel=()=>{
    let Celsius=document.getElementById("Celsius").value; 
    

// Celsius to Fahrenheit

    let c_f=(Celsius*9/5)+32;
    // console.log(feh);

    if(c_f===c_f.isInteger){     //if(feh==Math.floor)
        document.getElementById("Fahrenheit").value=c_f;
    }else{
        c_f=c_f.toFixed(2);
        document.getElementById("Fahrenheit").value=c_f;
    }


// Celsius to Kelvin

    let c_k=Number(Celsius)+273.15;
    if(c_k===c_k.isInteger){
        
        document.getElementById("Kelvin").value=c_k;
    }
    else{
        c_k=c_k.toFixed(2);
        document.getElementById("Kelvin").value=c_k;

    }

}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Fahrenheit TO.......=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let fah=()=>{
    let Fahrenheit=document.getElementById("Fahrenheit").value;
    // console.log(Fahrenheit);

//Fahrenheit To Celsius
    let f_c=(Fahrenheit-32)*5/9;

    if(f_c===f_c.isInteger){
        document.getElementById("Celsius").value=f_c;
    }
    else{
        f_c=f_c.toFixed(2);
        document.getElementById("Celsius").value=f_c;
    }

//Fahrenheit To Kelvin

    let f_k=Number(Fahrenheit-32)*5/9+273.15;
    if(f_k==f_k.isInteger){
        document.getElementById("Kelvin").value=f_k;
    }
    else{
        f_k=f_k.toFixed(2);
        document.getElementById("Kelvin").value=f_k;
    }
}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Kelvin TO.......=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let kel=()=>{
    let Kelvin=document.getElementById("Kelvin").value;


//Kelvin to Celsius

    let k_c=Kelvin-273.15;
    if(k_c===k_c.isInteger){
        document.getElementById("Celsius").value=k_c;
    }
    else{
        k_c=k_c.toFixed(2);
        document.getElementById("Celsius").value=k_c;
    }

//Kelvin to Fahrenheit

    let k_f=Number(Kelvin-273.15)*9/5+32;
    if(k_f===k_f.isInteger){
        document.getElementById("Fahrenheit").value=k_f;
    }
    else{
        k_f=k_f.toFixed(2);
        document.getElementById("Fahrenheit").value=k_f
    }

}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= =...Reset...=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let res=()=>{
    document.getElementById("Celsius").value="";
    document.getElementById("Fahrenheit").value="";
    document.getElementById("Kelvin").value="";
}