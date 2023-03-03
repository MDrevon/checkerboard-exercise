// Your JS goes here
const body = document.body;


//const tab = document.createElement("table");

for(var x = 0;x < 63; x++)
{
    const div = document.createElement("div");
    //const row = document.createElement("tr");
    //row.style.width = "11.1%"
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";

    if(x % 2 === 0)
    {
        div.style.backgroundColor = "red"
    }
    else
    {
        div.style.backgroundColor = "black";
    }

    //tab.appendChild(row);
    body.appendChild(div);

    //for(var y = 0; y < 8; y++)
    //{
    //    const cell = document.createElement("td");
    //    cell.style.width = "11.1%";
    //    cell.style.paddingBottom = "11.1%";
    //    cell.style.float = "left";
    //
    //    if(y % 2 === 0)
    //    {
    //        cell.style.backgroundColor = "red";
    //    }
    //    else{
    //        cell.style.backgroundColor = "black";
    //    }
    //
    //    row.appendChild(cell);
    //    //div.appendChild.appendChild(div);
    //}
}


//document.body.appendChild(tab);
//console.log(body);

//createTable();
//console.log(body);

//function createTable()
//{
//    const tab = document.createElement("table");
//    const row = document.createElement("tr");
//    const cell = document.createElement("td");
//
//    for(let x = 0; x < 8; x++)
//    {
//        tab.appendChild(row);
//        for(let y = 0; y < 7; y++)
//        {
//            row.appendChild(cell);
//        }
//    }
//
//    body.appendChild(tab);
//}





