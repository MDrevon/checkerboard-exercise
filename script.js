// Your JS goes here
const body = document.body;

var random = false;

for(var x = 0;x < 63; x++)
{
    const div = document.createElement("div");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";

    if(!random)
    {
        if(x % 2 === 0)
        {
            div.style.backgroundColor = "red"
        }
        else
        {
            div.style.backgroundColor = "black";
        }
    }
    else
    {
        //create random colors now
        div.style.backgroundColor = "#" + randomColor;
    }
    

    
    
    body.appendChild(div);
}






