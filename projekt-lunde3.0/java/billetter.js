var itemName = [];
var itemAmount = [];
var itemPrice = [];

function addTicketA() {
    itemName.push("Vokesn");
    itemAmount.push("1");
    itemPrice.push("100");
    
    displayCart();
};

function addTicketB() {
    itemName.push("Barn");
    itemAmount.push("1");
    itemPrice.push("75");
    
    displayCart();
};

function displayCart(){
    cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
    total = 0;

    for (i=0; i<itemName.length; i++){
      total += itemAmount[i] * itemPrice[i]
      cartdata += "<tr><td>" + itemName[i] + "</td><td>" + itemAmount[i] + "</td><td>" + itemPrice[i] + "</td><td>" + itemAmount[i] * itemPrice[i] + "</td><td><button onclick='deleteElement(" + i + ")'>Delete</button></td></tr>"
    }

    cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

    document.getElementById('cart').innerHTML = cartdata
};

function deleteElement(a){
    itemName.splice(a, 1);
    itemAmount.splice(a, 1);
    itemPrice.splice(a, 1);
    displayCart();
};

function ticketButton() {
  var pressOne = document.getElementById("stepOne");
  var pressTwo = document.getElementById("stepTwo");
  
  
    if (pressOne.style.display !== "none") {
      
      pressOne.style.display = "none";
      pressTwo.style.display = "block";
      
  } else{
      
      window.location.replace("https://lunde3.theravencsraft.com/Billetter3.html");
      
  }
};