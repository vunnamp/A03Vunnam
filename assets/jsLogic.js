function formSubmit() {
    alert("The form was submitted");
}

function calc(){
	document.shopForm.total.value = '';
	var sum = 0;
	if(!(document.shopForm.note.checked)&&!(document.shopForm.pen.checked)&&!(document.shopForm.pencil.checked))
	{
		alert("Select atleast one product");
	}
	
	if (document.shopForm.note.checked){
		sum = 5;
	}
	if (document.shopForm.pen.checked){
		sum = sum + 4;
	}
	if (document.shopForm.pencil.checked){
		sum = sum + 3;
	}
	document.shopForm.total.value = sum;
}

function discount(){
	var total = document.shopForm.total.value;
	//var disc = total * 0.5;
	var disc = getHalf(total);
	document.shopForm.discTotal.value= disc;
	alert("Discount has been applied on you order");
}

function order(){
	document.shopForm.note.checked = false;
	document.shopForm.pen.checked = false;
	document.shopForm.pencil.checked = false;
	$("#discTotal").val("");
	$("#total").val("");
	alert("Thank you for ordering");
}

function getHalf(disc) {
    let answer = disc;
	if (typeof answer !== 'number' || typeof answer !== 'number') {
      throw Error('The given argument is not a number');
    }
	
	if(answer <0){
		throw Error('The given argument is not a positive number');
	}
    if (answer != null) {
		return answer*0.5;
    }
  }