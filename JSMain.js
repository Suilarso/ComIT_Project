
/*
    Author: Suilarso Japit
    Date: Apr 23, 2018
    Filename: index.html
    Purpose: This is the entry page to Johnsons Supplier web page.
    link: http://suilarso.atwebpages.com/index.html
*/

/*-- SJ6120518 - These JavaScript codes are meant to populate img for customer browsing --*/

window.onload = function()
{
    const itemsArray = [
        {
            ImgSrc: './img/bearing/ballB.jpeg',
            ImgAlt: 'Bearing Image',
            ImgTitle: 'Nachi',
            desc: 'Nachi bearing',
            price: 12.5,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/pencilB.jpeg",
            ImgAlt: "Pencil Image",
            ImgTitle: "Pilot",
            desc: 'Pilot pencil',
            price: 1.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/penlover.jpeg",
            ImgAlt: "Pen Image",
            ImgTitle: "Pilot",
            desc: 'Pilot pen',
            price: 8.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/papermateamazon.jpeg",
            ImgAlt: "Pencil Image",
            ImgTitle: "Papermate",
            desc: 'Papermate pencil',
            price: 3.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/papermateoffice.jpeg",
            ImgAlt: "Pen Image",
            ImgTitle: "Papermate",
            desc: 'Papermate pen',
            price: 6.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/papermateofficework.jpeg",
            ImgAlt: "Pen Image",
            ImgTitle: "Papermate",
            desc: 'Papermate pen',
            price: 6.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/pentelebay.jpeg",
            ImgAlt: "Pencil Image",
            ImgTitle: "Pentel",
            desc: 'Pentel pencil',
            price: 4.50,
            quantity: 0,
        },

        {
            ImgSrc: "./img/pencil/pentelwhite.jpeg",
            ImgAlt: "Pen Image",
            ImgTitle: "Pentel",
            desc: 'Pentel pen',
            price: 5.50,
            quantity: 0,
        }
    ];

//SJ2150518 - From here, try to make it a function; populateMerchandise(goodsArray)
    //const mainContainer = document.getElementsByClassName('container');
    const cat = document.querySelector(".catalogue");
    const invoice = document.querySelector(".invoice");
    const totalAmt = document.querySelector(".totalAmt");
    //const button = document.querySelectorAll("button");
    
    //const cat = document.getElementsByClassName("catalogue");
    let figureElement = '';
    let imgElement = '';
    let figcaptionElement = '';
    let addButton = '';
    let delButton = '';
    let totalButton = 0;
    //let adhocElement = '';
    let totalPurchase = 0;

    //SJ0130518 - Populate merchandise items on catologue area
    itemsArray.forEach(function(item, index)
    {
        figureElement = document.createElement('figure');
        imgElement = document.createElement('img');
        imgElement.setAttribute('src', item.ImgSrc);
        imgElement.setAttribute('alt', item.ImgAlt);
        imgElement.setAttribute('title', item.ImgTitle);
        
        figcaptionElement = document.createElement('figcaption');
        figcaptionElement.innerText = '$'.concat(item.price);

        addButton = document.createElement('button');
        addButton.innerText = '+';
        addButton.setAttribute('class', 'addButton'.concat(index));
        delButton = document.createElement('button');
        delButton.innerText = '-';
        delButton.setAttribute('class', 'delButton'.concat(index));
        totalButton += 1;

        figureElement.appendChild(imgElement);
        figureElement.appendChild(figcaptionElement);
        figureElement.appendChild(addButton);
        figureElement.appendChild(delButton);
        cat.appendChild(figureElement);
    });
//SJ2150518 - End

    //SJ0130518 - Function to style invoice and totalAmt
    function styleInvoice(invoice)
    {
        //adhocElement = document.createElement('');
        invoice.innerText = 'Total:';
        invoice.style.color = 'red';
        invoice.style.margin = '15px 5px 10px 10px';
        invoice.style.display = 'inline-block';
    }
    function styleTotalAmt(totalAmt, amount)
    {
        totalAmt.innerText = '$'.concat(amount);
        totalAmt.style.margin = '15px 0px 10px 5px';
        totalAmt.style.display = 'inline-block'; 
    }

    //SJ6260518 - Function to create division for invoice number
    function createInvoiceNumberDIV()
    {
        const invoiceNumber = "<div class='invoiceNoClass'></div>";
        cat.innerHTML = invoiceNumber;
    }  //SJ6260518 - End of createInvoiceNumberDIV() function

    //SJ6260518 - Function to create division for invoice details
    function createInvoiceDetailDIV()
    {
        const invoiceDetail = "<div class='invoiceDetailClass'></div>";
        cat.innerHTML = invoiceDetail;
    }  //SJ6260518 - End of createInvoiceDetailDIV() function

    //SJ1280518 - This function populate invoice detail one line for each item in catalogue DIV
    function populateInvoiceDetail()
    {

        let desc = '';
        let qty = '';
        let unitPrice = '';
        let subtotal = '';
        let total = '';
        let addButton = '';
        let delButton = '';
        //let totalButton = 0;

        //let invDetail = createInvoiceDetailDIV();

        //SJ1280518 - Item's description, qty purchase, add and minus button to facilitate change of 
        //purchase items, unit price, and sut-total
        let tableContents = "<table width=\"300\" cellspacing=\"0\" cellpadding=\"10\"><tbody>"
        /*for (let i=0; i<=9; i++)
        {
            tableContents += "<tr><td>" + "content" + "</tr></td>";
        }*/
        itemsArray.forEach(function(item, index)
        {
            if (item.quantity !== 0)
            {
                const subtotal = item.quantity * item.price;
                tableContents += "<tr><td>" + item.desc;  //SJ1280518 - Add description to table row
                tableContents += item.quantity.toString() + item.price.toString();  //SJ1280518 - Add qty and unit price
                tableContents += subtotal.toString();  //SJ1280518 - Add subtotal
                tableContents += "</tr></td>";  //SJ1280518 - Now add the closing tag
            }  
        });
        tableContents += "</tbody></table>";
        cat.innerHTML = tableContents;

//        addButton = document.createElement('button');
//        addButton.innerText = '+';
//        addButton.setAttribute('class', 'addButton'.concat(index));
//        delButton = document.createElement('button');
//        delButton.innerText = '-';
//        delButton.setAttribute('class', 'delButton'.concat(index));
//        totalButton += 1;

        //invDetail.style.display = 'inline-block';
    }

    //SJ5250518 - Function to display invoice detail. First, remove mechandise items from catalogue
    //SJ5250518 - and then add invoice detail.
    const viewDetail = function(event)
    {
        //SJ5250518 - First remove catalogue items to make room for invoice detail
        cat.innerHTML = '';

        //SJ5250518 - Replace catalogue elements with invoice details
        //const invoiceNumber = document.createElement('p');
        const invoiceString = "Invoice: ".concat('006411');
        let invNumber = '';
        //cat.innerHTML = invoiceNumber;

        createInvoiceNumberDIV();  //SJ1280518 - Create DIV element for invoice number
        invNumber = document.querySelector(".invoiceNoClass");
        invNumber.style.margin = '5px';
        invNumber.style.border = '1px solid black';
        invNumber.style.position = 'relative';
        invNumber.style.left = '0px';
        invNumber.innerText = invoiceString;

        //invDetail = createInvoiceDetailDIV();
        populateInvoiceDetail();
/*
figureElement = document.createElement('figure');
        imgElement = document.createElement('img');
        imgElement.setAttribute('src', item.ImgSrc);
        imgElement.setAttribute('alt', item.ImgAlt);
        imgElement.setAttribute('title', item.ImgTitle);
        
        figcaptionElement = document.createElement('figcaption');
        figcaptionElement.innerText = '$'.concat(item.price);

        addButton = document.createElement('button');
        addButton.innerText = '+';
        addButton.setAttribute('class', 'addButton'.concat(index));
        delButton = document.createElement('button');
        delButton.innerText = '-';
        delButton.setAttribute('class', 'delButton'.concat(index));
        totalButton += 1;

        figureElement.appendChild(imgElement);
        figureElement.appendChild(figcaptionElement);
        figureElement.appendChild(addButton);
        figureElement.appendChild(delButton);
        cat.appendChild(figureElement);

*/
    }  //SJ5250518 - End of viewDetail() function

    //SJ5250518 - Function to confirm purchase
    const confirmTransaction = function(event)
    {

    }  //SJ5250518 - End of confirmTransaction() function

    //SJ0130518 - Function for button click action.
    //let clickHandler = function(event)
    let addPurchase = function(event)
    {
        const invoice = document.querySelector(".invoice");
        const totalAmt = document.querySelector(".totalAmt");
        //event.preventDefault();
        let buttonName = event.target.className;
        let ndx = parseInt(buttonName.substr((buttonName.length-1), (buttonName.length-1)));

        if (totalPurchase === 0)  //SJ3160518 - No purchase done before, therefore need to build view button
        {
            let reviewDetail = document.querySelector(".reviewDetail");
            let buttons = "<button class='view'>View</button><button class='confirm'>Confirm</button>"
            let button = '';

            reviewDetail.innerHTML = buttons;
            //SJ4170518 - Here we register click event function handler to both view and confirm button
            button = document.querySelector('.'.concat('view'));
            button.addEventListener('click', viewDetail);  //SJ5180518 - Change to correct function
            /*button = document.querySelector('.'.concat('confirm'));
            button.addEventListener('click', confirmTransaction);  //SJ5180518 - Change to correct function
            */
        }
        itemsArray[ndx].quantity += 1;  //SJ2150518 - Increase purchase quantity by 1
        totalPurchase += itemsArray[ndx].price;
        styleInvoice(invoice);
        styleTotalAmt(totalAmt, totalPurchase);
    }  //SJ0130518 - End of addPurchase() function

    //let delClickHandler = function(event)
    let delPurchase = function(event)
    {
        //const invoice = '';
        const totalAmt = document.querySelector(".totalAmt");
        //event.preventDefault();
        let buttonName = event.target.className;
        let ndx = parseInt(buttonName.substr((buttonName.length-1), (buttonName.length-1)));

        if (itemsArray[ndx].quantity)  //SJ2150518 - Can only remove items if it had been purchased
        {
            itemsArray[ndx].quantity -= 1;  //SJ2150518 - Decrease purchase quantity by 1
            totalPurchase -= itemsArray[ndx].price;

            if (totalPurchase)
            {
                styleTotalAmt(totalAmt, totalPurchase);
            }
            else  //SJ2150518 - No more purchase items so remove total element
            {
                document.querySelector(".invoice").innerText = ''; 
                document.querySelector(".totalAmt").innerText = '';
                document.querySelector(".reviewDetail").innerHTML = '';
            }
        }
    }  //SJ0130518 - End of delPurchase() function

    //let allButton = document.querySelectorAll('button');
    for (let i=0; i<totalButton; i++)
    {
        let buttonClass = '';
        let button = '';

        //SJ0130518 - This is for add button
        buttonClass = 'addButton'.concat(i);
        button = document.querySelector('.'.concat(buttonClass));
        //there is a classList method I believe
        button.addEventListener('click', addPurchase);

        //SJ0130518 - This is for del button
        buttonClass = 'delButton'.concat(i);
        button = document.querySelector('.'.concat(buttonClass));
        button.addEventListener('click', delPurchase);
    }

    //SJ0130518 - Test if the functions are working

    //SJ0130518 - Below codes are used to create calendar
    function createCalendar()
    {
        var d = new Date();
        var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var month = d.getMonth();   //SJ0130518 - Get month from 0 to 11
        var year = d.getFullYear(); //SJ0130518 - Get year 2018
        var first_date = month_name[month] + " " + 1 + " " + year;
        //SJ0130518 - Retrieve date
        var tmp = new Date(first_date).toDateString();
        //Mon Sep 01 2014 ...
        var first_day = tmp.substring(0, 3);    //Mon
        var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        var day_no = day_name.indexOf(first_day);   //1
        var days = new Date(year, month+1, 0).getDate();    //30
        //SJ0130518 - 
        var calendar = get_calendar(day_no, days);
        document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
        document.getElementById("calendar-dates").appendChild(calendar);
    }

    function get_calendar(day_no, days)
    {
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        
        //row for the day letters
        for(var c=0; c<=6; c++)
        {
            var td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
        //create 2nd row
        tr = document.createElement('tr');
        var c;
        for(c=0; c<=6; c++)
        {
            if(c == day_no)
            {
                break;
            }
            var td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }
    
        var count = 1;
        for(; c<=6; c++)
        {
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
        //rest of the date rows
        for(var r=3; r<=7; r++)
        {
            tr = document.createElement('tr');
            for(var c=0; c<=6; c++)
            {
                if(count > days)
                {
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }  //SJ0130518 - End of get_calendar() function

    createCalendar();  //SJ1140518 - Block first
    //SJ0130518 - End -------------------------------

}  //SJ0130518 - End of main function

/*
//const paragraph = document.createElement('p');
//const div = document.createElement('div');
//paragraph.innerText = 'Adding some text as content';
//paragraph.setAttribute('id', 'my-paragraph');
//paragraph.style.fontWeight = 'bold';
//paragraph.style.color = 'green';
//div.border = '1px solid gray';
//div.appendChild(paragraph);
//document.body.appendChild(div);
//button.addEventListener('click', clickHandler);
//button.addEventListener('dblclick', dblclickHandler);
//button.removeEventListener('click', clickHandler);


//SJ0130518 - Sample for form
const form = document.querySelector('form');

form.onsubmit = function() {
	// This code will get executed when the form is submited
  // Returning false we don't execute the form submition
  return false;
}
// also
const form = document.querySelector('form');
form.onsubmit = function(event) {
  event.preventDefault();
}
// or
form.addEventHandler('submit', function(event) {
  event.preventDefault();
});

function clickHandler() {
	console.log(this);
}

//SJ0130518 - Sample for button event handler
let button = document.querySelector('button');
button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler);

//SJ0130518 - More sample


function parseResponseAsJSON(response)
{
    return response.json;
}

function getTvEpisodes(data)
{
    return data.show;
}

fetch(apiURL
.then(parseResponseAsJSON)
.then(getTvEpisodes)
.then(showEpisodes)
.catch(showError)
*/
