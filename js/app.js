$(document).ready(function(){
var totalSummary = 0;

/* clears the list */
	$('#clearList').on('mousedown', function (event) {
		  event.preventDefault();
	      $('.listVariableExample').remove();
	      totalSummary = 0;
	      totalSummaryVat = 0;
	      vat =0;
	      totalArray = [];
	      $('#listTotal').html(0);
	      $('#vatTotal').html(0);
	      $('#shopAppTotal').html(0);
	      $('.listInput').html('');
    });

/* adds an item to the list */ 
	$('#addItem').on('mousedown', function(event) {
		    event.preventDefault();
	        var price = +$('#priceBoxValue').val();
	        var quantity = +$('#quantityBoxValue').val();
	        var item = $('#textBoxValue').val();
	        total = price * quantity;
	        var appendItem = "<div class='listVariableExample'><span class='contVar1 description1'>" + item + "</span><span class='contVar1'> £<span>" + price + "</span></span><span class='contVar1'>" + quantity + "</span><span class='contVar1'> £<span class='contVarT'>" + total + "</span></span><span class='contVar1'><input class='button1' type='submit' name='Delete' value='X'></span></div>";               
	        $('#list-container').append(appendItem);
	        $('#list-container div:last-child').hide().slideDown(500);
	    totalSummary += total;
	    summaryTotal();     
	    $('#priceBoxValue').val(0);
	    $('#quantityBoxValue').val(0);
	    $('#textBoxValue').val(' ');
    });

/* Updates the summary */ 
   function summaryTotal () {
        vat = Math.round(totalSummary*0.2*100)/100;
        totalSummaryVat = totalSummary + vat;
        $('#listTotal').html(totalSummary);
        $('#vatTotal').html(vat);
        $('#shopAppTotal').html(totalSummaryVat);
   }

$('#list-container').on('mousedown', '.button1', function(event) {
		    event.preventDefault();
		    var removeItemValue = +$(this).closest('div').find('.contVarT').html();
		    totalSummary -= removeItemValue;
		    $(this).closest('div').fadeOut(500);
		    summaryTotal();
		    console.log(removeItemValue);
		    console.log(totalSummary);
           });		    	                                                                                                       

});