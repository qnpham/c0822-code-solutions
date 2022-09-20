/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);

  if (amount > 0 && Number.isInteger(amount) === true) {
    this.amount = amount;
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.amount = amount;
    this.transactions.push(transaction);
    return true;
  } else return false;
};

Account.prototype.getBalance = function () {
  var result = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      result += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      result -= this.transactions[i].amount;
    }
  }
  return result;
};
