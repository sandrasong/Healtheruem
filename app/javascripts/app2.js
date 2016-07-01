var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

// function refreshBalance() {
//   var meta = MetaCoin.deployed();

//   meta.getBalance.call(account, {from: account}).then(function(value) {
//     var balance_element = document.getElementById("balance");
//     balance_element.innerHTML = value.valueOf();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error getting balance; see log.");
//   });
// };

// function sendCoin() {
//   var meta = MetaCoin.deployed();

//   var amount = parseInt(document.getElementById("amount").value);
//   var receiver = document.getElementById("receiver").value;

//   setStatus("Initiating transaction... (please wait)");

//   meta.sendCoin(receiver, amount, {from: account}).then(function() {
//     setStatus("Transaction complete!");
//     refreshBalance();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error sending coin; see log.");
//   });
// };

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

 //   refreshBalance();
});

  var data=[];
  var drawTable = function(){
    console.log("drawTable gets called");
    data=[];

    $('.serviceItem').each(function() {
      var selectedService = $(this).find("select option:selected").text();
      console.log(selectedService);
      var servicePrice = $(this).find("div .price").val();
      data.push({"service":selectedService, "price":servicePrice});
      // console.log(data); 
    });
    $('#billTable').html("");
    var totes = 0;
    data.forEach(function(d){
      console.log(d);

      totes = totes + parseInt(d.price);
      
      $('#billTable').append('<tr><td>' + d.service +'</td><td>'+d.price+'</td> </tr>');
    });
    $('#billTable').append('<tr style="border-bottom: 1px solid #979797">' +
            '<td>Transaction fee</td><td>0.01 ETH</td>'+
          '</tr><tr><td>Amount</td><td>' + totes + '</td></tr>');
  }

  $('.price').on('change', drawTable);
  $('.selectedBox').on('change', drawTable);


  $("#addService").click(function(event){
    event.preventDefault();
    $(".serviceItem:first-child").clone().appendTo("#services");
    $('.price').on('change', drawTable);
    $('.selectedBox').on('change', drawTable);
  });
  
}

function switchPage(){
  alert("Your bill has been submitted. We are verifying with the Digital Health Record.");
  $('#page1').css("display", "none");
  $('#page2').css("display","block");
}

function alertBox(){
  alert('Your bill has been paid.');
}

