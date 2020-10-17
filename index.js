var selectEstados = document.getElementById('estados'); 
var img = document.getElementById('bandeira'); 

selectEstados.addEventListener('change', mostrarBandeira);

function mostrarBandeira(){

    var estados = selectEstados.options[selectEstados.selectedIndex].value;    
    
    if(estados == 'par'){             
        img.src = "pr.jpg";
        mostraBandeira.appendChild(img); 
    }else if(estados == 'rio'){
        img.src = "rs.jpg";
        mostraBandeira.appendChild(img); 
    }else if(estados == 'san'){
        img.src = "sc.jpg";
        mostraBandeira.appendChild(img); 
    }

}