var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance(account) {
  var meta = Insurance.deployed();
  //var balance_element = document.getElementById("balance");
  //balance_element.innerHTML = web3.eth.getBalance(account)

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });


  meta.getBills.call(account, {from: account}).then(function(value) {
    var service_element = document.getElementById("serviceProvided");
    var cost_element = document.getElementById("cost");

    service_element.innerHTML = value[0].valueOf();
    cost_element.innerHTML = value[1].valueOf();
    console.log(value[1]);
    console.log(value[2]);
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting service; see log.");
  });
};

function sendCoin() {
  var meta = Insurance.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;
  var service = document.getElementById("service").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, service, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

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

    refreshBalance(account);
  });
}
