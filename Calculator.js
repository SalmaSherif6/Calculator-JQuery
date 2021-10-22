$(document).ready(function(){
	var prev = '';
	var curr = '';
	var op = null;

	changeInput(prev, op, curr);

	$("input[type=button]").click(function(){
		var currBtn = $(this).val();
		console.log("currBtn: " + currBtn);

		if(currBtn === "C") {
			prev = '';
			curr = '';
			op = null;
		}
		else if(currBtn === "CE") curr = '0';
		else if(currBtn === "Del") {
			if(op==null) curr = curr.slice(0,-1);
			else
			{
				curr=prev;
				op=null;
				prev='';
			}
		}
		else if(currBtn === "+/-") curr *= -1;
		else if(currBtn === ".") curr += '.';
		else if((currBtn === "0") || (currBtn === "1") || (currBtn === "2") || (currBtn === "3" || (currBtn === "4") || (currBtn === "5") || (currBtn === "6") || (currBtn === "7") || (currBtn === "8") || (currBtn === "9"))){
			if(curr === '0') curr = currBtn;
			else curr = curr + currBtn;
		}
		else if((currBtn === "+") || (currBtn === "-") || (currBtn === "*") || (currBtn === "/")){
			if(op!=null) op = currBtn;
			else{
				op = currBtn;
				if(prev === '') prev = parseFloat(curr);
				else prev = calculate(prev, op, curr);
			}
			curr = '';
		}
		else if(currBtn === "="){
			if(curr=== '')
				alert("Enter Number at First!!");
			else if(op != null){
				curr = calculate(prev, op, curr);
				op = null;
				prev=''
			}
		}

		console.log("curr: " + curr);
		console.log("op: " + op);
		console.log("prev: " + prev);

		changeInput(prev, op, curr);
	});
});

calculate = function(first, op, second){
	first = parseFloat(first);
	second = parseFloat(second);
	if(op === '+') return first + second;
	else if(op === '-') return first - second;
	else if(op === '*') return first * second;
	else if(op === '/') return first / second;
};

changeInput = function(prev, op, curr){
	var result;
	if(op!=null) result =prev+op+curr;
	else result = curr;
	console.log("result: " + result);
	$("input[type=text]").val(result.toString());
};
