$(document).ready(function(){

var totalArray = [];

/* clears the list */
	$('#clearList').on('mousedown', function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	        $('#listVariableExample').children().remove();
    });

/* adds an item to the list */ 
	$('#addItem').on('mousedown', function(event) {
	        event.preventDefault();
	        event.stopPropagation();
	        var price = +$('#priceBoxValue').val();
	        var quantity = +$('#quantityBoxValue').val();
	        var item = $('#textBoxValue').val();
	        total = price * quantity;
	        /*var appendItem = '<div id='listVariableExample'><span class='contVar1' id='description1'>' + item + '</span><span class='contVar1'>£<span>' + price + '</span></span><span class='contVar1'>' + quantity + '</span><span class='contVar1'>£<span>' + total + '</span></span><span class='contVar1'><input class='button1' type='submit' name='Delete' value='X'></span></div>';        
	        */
            var appendItem = '<div id='listVariableExample'><span class='contVar1' id='description1'>' + Apples + '</span></div>';
	    $('#listVariableExample').hide();
	    $('#list-container').append(appendItem);
	    totalArray.push(total);
	    summaryTotal();
    });

/* Updates the summary */ 
   function summaryTotal () {
        var totalSummary = 0;
        for (var x = 0; x < totalArray.length; x += 1) {
        		totalSummary += totalArray[x];
        };
        var vat = totalSummary*0.2;
        var totalSummaryVat = totalSummary + vat;
   }

});



		    	                                                                                                          

<div id='listVariableExample'>
		    	<span class='contVar1' id='description1'>Apples</span>
		    	<span class='contVar1'>£<span>8</span></span>
		    	<span class='contVar1'>1</span>
		    	<span class='contVar1'>£<span>8</span></span>
		    	<span class='contVar1'><input class='button1' type='submit' name='Delete' value='X'></span>	
		    </div>			





