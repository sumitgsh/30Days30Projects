


const InputText=document.getElementById('textInput')
const wordCount=document.getElementById('myButton')
const dataTable=document.getElementById('data-table')

function addTable(data)
{
   dataTable.innerHTML = "";

    headers=['Word','Count']
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    //Table headers
    headers.forEach(currentValue => {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(currentValue));
      tr.appendChild(th);
 });

    //Table datas
    for (let key in data) {
        const tr=document.createElement("tr")

        const td=document.createElement("td")
        const td1=document.createElement("td")
        td.appendChild(document.createTextNode(key))
        td1.appendChild(document.createTextNode(data[key]))
        tr.appendChild(td)
        tr.appendChild(td1)

        table.appendChild(tr)
      }


    dataTable.appendChild(table)  

}

filterInput=()=>
{
    enteredText=InputText.value

    dict={}
    //Filter the input

    //Split the text
    wordArr=enteredText.split(' ')

    for(let start=0;start<wordArr.length;start++)
        {
           word=wordArr[start]
           
           if(dict[word])
           {
            dict[word]++
           }
           else
           {
                dict[word]=1;
           }

        }

addTable(dict)

}



wordCount.addEventListener('click',filterInput)

//Add data to the table


