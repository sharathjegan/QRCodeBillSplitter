//Calculate Bill Split With Tip
function calculateSplit() 
{
  var billAmount = document.getElementById("billamount").value;
  var serviceQuality = (document.getElementById("serviceQuality").value)/100;
  var numberOfPeople = document.getElementById("peopleamount").value;
    
  //validate input
  if (billAmount === "") 
  {
    alert("Please enter values");
    return;
  }
  
  if (numberOfPeople === "" || numberOfPeople <= 1) 
  {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } 
  else 
  {
    document.getElementById("each").style.display = "block";
  }

  //Calculate Bill
  var totalBill = billAmount / numberOfPeople;
  
  //Calculate tip
  var totalTip = (billAmount * serviceQuality) / numberOfPeople;
    
  //Calculate split amount
  var totalSplit = totalBill + totalTip;
  totalSplit = Math.round(totalSplit * 100) / 100;
  totalSplit = totalSplit.toFixed(2);
  document.getElementById("finalSplit").style.display = "block";
  document.getElementById("split").innerHTML = totalSplit;

  var name = document.getElementById("username").value;
  var paypal = "https://Paypal.me/";
  var split = totalSplit;
  var url = paypal + name + "/" + split;
  console.log(url); 

  let qrcode = new QRCode("PaymentRequest", 
        {
            text: "url",
            width: 150,
            height: 150,
            verticalAlign: "middle",
            colorDark : "#000000",
            colorLight : "#ffffff",
        });
    
        document.body.addEventListener('click', ()=>{
            qrcode.clear(); 
            qrcode.makeCode(url); 
        })
}

//Hide the split amount on load
document.getElementById("finalSplit").style.display = "none";
document.getElementById("each").style.display = "none";

//button
document.getElementById("calculate").onclick = function() {
  calculateSplit();  
};
