document.getElementById('select-show').onchange=function(){
    for(var i=0;i<document.getElementsByClassName('option-show').length;i++){
        document.getElementsByClassName('option-show')[i].style.display='none';
    }
    document.getElementById(document.getElementById('select-show').value+'-show').style.display='block';
}