var bashy_click = function(){
    
    jQuery(window).on('click',function(e){
    
        var t = jQuery(e.target);
        
        if(t.is('#bashy-overlay')){
            bashy_toggle();
        }
    
    
    });

}