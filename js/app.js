var loanBalance;
var interestRate;
var loanTerm;
var period;
var numberOfPayments;
var monthlyInterestRate;
var compoundInterestRate;
var interestQuotient;
var monthlyPayment;
var payment;

function gather() {
		//inputs
	loanBalance = document.getElementById("loanBalance").value;
	interestRate = document.getElementById("interest").value;
	loanTerm = document.getElementById("loanTerm").value;
	period = document.getElementById("period").value;
	
	console.log(loanBalance, interestRate, loanTerm, period);

    	return false;
}

 
function calculate() {
		// number of payments
	numberOfPayments = loanTerm * period;
		// monthly interest 
	monthlyInterestRate = (interestRate / 100) / period;
		// compounded interest rate 
	compoundInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
		// interest quotient 
	interestQuotient = (monthlyInterestRate * compoundInterestRate) / (compoundInterestRate - 1);
		// final calculation 
	monthlyPayment = loanBalance * interestQuotient;

	payment = monthlyPayment.toFixed(3);

	console.log(monthlyPayment, payment);

 		return false;
}

function toHTML() {
	var p = document.getElementById('result');
	var html = '<div> Your home mortgage monthly payment is $ ' + payment + '</div>';
    p.innerHTML = html

    console.log(html);
    
    	return false;
}

function clearNaN() {
	if (payment === "NaN") {
    payment = 0
	}
}

function toString() {
	gather();
	calculate();
	clearNaN();
	toHTML();	

	return false;
}

		var button = document.getElementById('button');
		button.onclick = toString;