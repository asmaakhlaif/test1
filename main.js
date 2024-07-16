var exchange = document.querySelector(".exchange");
var dollar = document.querySelector(".dollar");
var dollar = document.querySelector(".dinar");


var users = [];
exchange.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements; 
    var user = {
        amount:elements[0].value,
        submit:elements[1].value,
    };
  

       users.push(user);
       printdata();
}

       function printdata(){
        var data =``;
        for (var i=0;i<users.length;i++){
            data+=`
           <p> ${users[i].amount} </p>
            <p> ${users[i].submit} </p>
            `;
        }
        document.querySelector("p").innerHTML=data;
       }

      

    

