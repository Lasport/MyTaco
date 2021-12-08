var bm1= document.getElementById('btn-outline-secondary'),
contador=0;


function cambio(){
    if(contador==0){
        bm1.classList.add('ms');
        contador=1;
    }else{
        bm1.classList.remove('ms')
        contador=0;
    }
}


bm1.addEventListener('click',cambio,true)
