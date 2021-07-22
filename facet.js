
function buynow()
{
    alert("Item is added to cart");
}

function search()
{
    var x= document.getElementById('t1').value;
    if(x=="")
    {
        alert("Please write Something");
        return false;
    }
    else{
    alert("Currently this product is unavailable");
    return true;
}
}
function search2()
{
    var x= document.getElementById('t2').value;
    if(x=="")
    {
        alert("Please write Something");
        return false;
    }
    else{
    alert("Currently this product is unavailable");
    return true;
}
}

function cp()
{
    alert("Copyright content");
}