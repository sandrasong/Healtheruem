// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBills","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"current_bills","outputs":[{"name":"service","type":"string"},{"name":"cost","type":"uint256"},{"name":"doctorAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"service_","type":"string"},{"name":"cost_","type":"uint256"},{"name":"doctorAddress","type":"address"}],"name":"add_item_to_bill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"pay_bill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"},{"name":"service","type":"string"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a033216600090815260208190526040902060329055600180548082018083558281838015829011610055576003028160030283600052602060002091820191016100559190610116565b505050600092835260208084206040805160a0810182526004606082019081527f58524159000000000000000000000000000000000000000000000000000000006080830190815290825260328286015261012392820192909252600395909502909101805481875295839020915160ff191660081781559294839261017e9260026001841615610100026000190190931692909204601f0104810190610166565b505060006001820155600281018054600160a060020a03191690556003015b8082111561017a57600060008201600050805460018160011615610100020316600290046000825580601f1061014c57506100f7565b601f0160209004906000526020600020908101906100f791905b8082111561017a5760008155600101610166565b5090565b505060208201516001820155604091909101516002919091018054600160a060020a031916909117905550610823806101b76000396000f3606060405236156100615760e060020a600035046345a132aa81146100635780636785ebd314610136578063748c2e4f146101ca5780637bd703e81461024a578063893b8adb14610275578063d8ba95a01461027a578063f8b2cb4f146102ec575b005b6103126004356040805160208101909152600080825260018054829081101561000257527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68150600180546000908110156100025750604080517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf75484546020600295821615610100026000190190911694909404601f8101859004850283018501909352828252929091849183018282801561047b5780601f106104505761010080835404028352916020019161047b565b61038760043560018054829081101561000257506000526003027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78101547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf88201547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69290920191600160a060020a031683565b6040805160206004803580820135601f810184900484028501840190955284845261006194919360249390929184019190819084018382808284375094965050933593505060443591505060018054808201808355828183801582901161048b5760030281600302836000526020600020918201910161048b9190610531565b61042a600435600073236ca24c871c60a69fb06159eade671e53cb84386396e4ee3d6105f9846102f3565b610061565b604080516020604435600481810135601f810184900484028501840190955284845261043c94813594602480359593946064949293910191819084018382808284375094965050505050505033600160a060020a03166000908152602081905260408120548390101561067757610670565b61042a6004355b600160a060020a0381166000908152602081905260409020545b919050565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103785780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6040805160208101849052600160a060020a03831691810191909152606080825284546002600182161561010002600019019091160490820181905281906080820190869080156104195780601f106103ee57610100808354040283529160200191610419565b820191906000526020600020905b8154815290600101906020018083116103fc57829003601f168201915b505094505050505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b5050505050915091509150915091565b50505091909060005260206000209060030201600050604080516060810182528681526020818101879052918101859052825487516000858152849020929493849360026001851615610100026000190190941693909304601f908101829004840193918b019083901061059957805160ff19168380011785555b506105c9929150610581565b505060006001820155600281018054600160a060020a03191690556003015b8082111561059557600060008201600050805460018160011615610100020316600290046000825580601f106105675750610512565b601f01602090049060005260206000209081019061051291905b808211156105955760008155600101610581565b5090565b82800160010185558215610506579182015b828111156105065782518260005055916020019190600101906105ab565b505060208201516001820155604091909101516002919091018054600160a060020a031916909117905550505050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f41561000257505060405151915061030d9050565b50506020820151600182810191909155604092909201516002919091018054600160a060020a03191690911790559150505b9392505050565b33600160a060020a03908116600090815260208190526040808220805487900390559186168152208054840190556001805480820180835582818380158290116106f65760008390526106f69060039081027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019184020161079f565b505050919090600052602060002090600302016000506040805160608101825285815260208181018890523392820192909252855183546000858152849020929493849360026001841615610100026000190190931692909204601f90810182900483019392918a01908390106107f357805160ff19168380011785555b5061063e929150610581565b505060006001820155600281018054600160a060020a03191690556003015b8082111561059557600060008201600050805460018160011615610100020316600290046000825580601f106107d55750610780565b601f0160209004906000526020600020908101906107809190610581565b82800160010185558215610774579182015b8281111561077457825182600050559160200191906001019061080556",
    unlinked_binary: "6060604052600160a060020a033216600090815260208190526040902060329055600180548082018083558281838015829011610055576003028160030283600052602060002091820191016100559190610116565b505050600092835260208084206040805160a0810182526004606082019081527f58524159000000000000000000000000000000000000000000000000000000006080830190815290825260328286015261012392820192909252600395909502909101805481875295839020915160ff191660081781559294839261017e9260026001841615610100026000190190931692909204601f0104810190610166565b505060006001820155600281018054600160a060020a03191690556003015b8082111561017a57600060008201600050805460018160011615610100020316600290046000825580601f1061014c57506100f7565b601f0160209004906000526020600020908101906100f791905b8082111561017a5760008155600101610166565b5090565b505060208201516001820155604091909101516002919091018054600160a060020a031916909117905550610823806101b76000396000f3606060405236156100615760e060020a600035046345a132aa81146100635780636785ebd314610136578063748c2e4f146101ca5780637bd703e81461024a578063893b8adb14610275578063d8ba95a01461027a578063f8b2cb4f146102ec575b005b6103126004356040805160208101909152600080825260018054829081101561000257527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68150600180546000908110156100025750604080517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf75484546020600295821615610100026000190190911694909404601f8101859004850283018501909352828252929091849183018282801561047b5780601f106104505761010080835404028352916020019161047b565b61038760043560018054829081101561000257506000526003027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78101547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf88201547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69290920191600160a060020a031683565b6040805160206004803580820135601f810184900484028501840190955284845261006194919360249390929184019190819084018382808284375094965050933593505060443591505060018054808201808355828183801582901161048b5760030281600302836000526020600020918201910161048b9190610531565b61042a600435600073__ConvertLib____________________________6396e4ee3d6105f9846102f3565b610061565b604080516020604435600481810135601f810184900484028501840190955284845261043c94813594602480359593946064949293910191819084018382808284375094965050505050505033600160a060020a03166000908152602081905260408120548390101561067757610670565b61042a6004355b600160a060020a0381166000908152602081905260409020545b919050565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103785780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6040805160208101849052600160a060020a03831691810191909152606080825284546002600182161561010002600019019091160490820181905281906080820190869080156104195780601f106103ee57610100808354040283529160200191610419565b820191906000526020600020905b8154815290600101906020018083116103fc57829003601f168201915b505094505050505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b5050505050915091509150915091565b50505091909060005260206000209060030201600050604080516060810182528681526020818101879052918101859052825487516000858152849020929493849360026001851615610100026000190190941693909304601f908101829004840193918b019083901061059957805160ff19168380011785555b506105c9929150610581565b505060006001820155600281018054600160a060020a03191690556003015b8082111561059557600060008201600050805460018160011615610100020316600290046000825580601f106105675750610512565b601f01602090049060005260206000209081019061051291905b808211156105955760008155600101610581565b5090565b82800160010185558215610506579182015b828111156105065782518260005055916020019190600101906105ab565b505060208201516001820155604091909101516002919091018054600160a060020a031916909117905550505050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f41561000257505060405151915061030d9050565b50506020820151600182810191909155604092909201516002919091018054600160a060020a03191690911790559150505b9392505050565b33600160a060020a03908116600090815260208190526040808220805487900390559186168152208054840190556001805480820180835582818380158290116106f65760008390526106f69060039081027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019184020161079f565b505050919090600052602060002090600302016000506040805160608101825285815260208181018890523392820192909252855183546000858152849020929493849360026001841615610100026000190190931692909204601f90810182900483019392918a01908390106107f357805160ff19168380011785555b5061063e929150610581565b505060006001820155600281018054600160a060020a03191690556003015b8082111561059557600060008201600050805460018160011615610100020316600290046000825580601f106107d55750610780565b601f0160209004906000526020600020908101906107809190610581565b82800160010185558215610774579182015b8281111561077457825182600050559160200191906001019061080556",
    address: "0xf75a4d3d4656320565860c2536de33d35f480156",
    generated_with: "2.0.9",
    contract_name: "Insurance"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Insurance error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Insurance error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Insurance error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Insurance error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Insurance = Contract;
  }

})();