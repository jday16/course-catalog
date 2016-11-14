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


