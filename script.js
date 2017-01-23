

$(document).ready(function(){
	
	var gridSize = 30;
	
 
    var createGrid = function(gridSize) {
        for (var x = 0; x < gridSize; x++) {
            for (var y = 0; y < gridSize; y++) {
               $("<div>").addClass("pixel").appendTo("#container");
            }
        };
	    $('.pixel').css('height', (512 - 2*gridSize)/gridSize + "px");
        $('.pixel').css('width', (512 - 2*gridSize)/gridSize + "px");
	    draw();
    };
	
	var color = "black";
	var z = 0;
    $('#rainbow').click(function(){
	    z = 1;
	});	
	
		
    var draw = function(){
		$('.pixel').mouseenter(function(){
		    if (z !== 1) {
			    $(this).css('background-color', color);
				
		    } 
		    else{
			    $(this).css('background-color', 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
		    };
		});
	};
	$('#black').click(function(){
        color = "black"; 
		z = 0;
    });
	$('#white').click(function(){
        color = "white"; 
		z = 0;
    });
	$('#red').click(function(){
        color = "red"; 
		z = 0;
    });
    $('#yellow').click(function(){
	    color = "yellow"; 
		z = 0;
    });
    $('#blue').click(function(){
	    color = "blue"; 
		z = 0;
    });  
    
		
    $('#clear').click(function(){
        $('.pixel').remove();
	    createGrid(gridSize);
    });

    $('#newgrid').click(function() {
	    $('.pixel').remove();
	    gridSize = prompt("select size:", "30");
	    createGrid(gridSize);
    });

    createGrid(gridSize);
       
});



