import "ConvertLib.sol";

contract Insurance{

    struct Bill { 
        string service;
        uint cost;
        address doctorAddress;
    }

    mapping (address => uint) balances;
    Bill[] public current_bills;

    function Insurance() {
        balances[tx.origin] = 50;
        current_bills.push(Bill("XRAY", 50, 0x123));
    }


    function add_item_to_bill(string service_, uint cost_, address doctorAddress)
    {
        current_bills.push(Bill(service_, cost_, doctorAddress));
    }


    function pay_bill()
    {
        
    }
    
    function sendCoin(address receiver, uint amount, string service) returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        current_bills.push(Bill(service, amount, msg.sender));
        return true;
    }

    function getBills(address addr) returns (string, uint) {

        return (current_bills[0].service, current_bills[0].cost);
    }

    
    function getBalanceInEth(address addr) returns(uint){
        return ConvertLib.convert(getBalance(addr),2);
    }
    
    function getBalance(address addr) returns(uint) {
        return balances[addr];
    }


}
