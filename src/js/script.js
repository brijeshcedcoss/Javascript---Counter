// for add a number
function increment(){
    let num = parseInt(document.getElementById("num").value);
    return document.getElementById("num").value = num+1;
}
// for minus a number
function decrement(){
    let num = parseInt(document.getElementById("num").value);
    if(num<=1){
         document.getElementById("counter").style.display = "none";
         document.getElementById("add_to_cart").style.display = "flex";
    }else{
        return document.getElementById("num").value = num-1;
    }
}
// add to cart 
function add_cart(){
    document.getElementById("counter").style.display = "flex";
    document.getElementById("add_to_cart").style.display = "none";
}