// GRID VIEW 

$('#grid').click( function(){
    
    // Remove ONLY 'list' class
    
$('.cd-gallery').removeClass('list');   
    
    // add ONLY 'grid' class
$('.cd-gallery').addClass('grid');


});

// LIST VIEW 

$('#list').click( function(){
    
    // Remove ONLY 'list' class
    
$('.cd-gallery').removeClass('grid');   
    
    // add ONLY 'grid' class
$('.cd-gallery').addClass('list');
    
});


//clear filter

$(document).on('click', '#clear-filter', function(){       
    $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
});

$('#form')[0].reset(); 
$('#form').get(0).reset();