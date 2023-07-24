// document.getElementById('#c1').addEventListener('click',f1)

function f1(color){

    switch (color)
    {
    case 1:
    i = document.getElementById('img');
    b = document.getElementById('name');
    b.style.cssText = 'color : #ffffff'
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/1056x594/n/3m6nkva_1605229.jpg?q=75&wm=1")'
    break;
    
    case 2:
    i = document.getElementById('img');
    b = document.getElementById('name');
    b.style.cssText = 'color : #000000'
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/1056x594/n/8g8nkva_1605221.jpg?q=75&wm=1")'
    break;
    
    case 3:
    i = document.getElementById('img');
    b = document.getElementById('name');
    b.style.cssText = 'color : #474797'
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/1056x594/n/f8knkva_1605223.jpg?q=75&wm=1")'
    break;
    
    case 4:
        alert="Nothing";
    default:
        i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/1056x594/n/f8knkva_1605223.jpg?q=75&wm=1")'
        break;
}
}
function cart(){
    b = document.getElementsByTagName('input')[0];
    b.value="Added Successfully";
}
