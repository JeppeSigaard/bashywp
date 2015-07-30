jQuery(function($){
    
    $bashyPanel.append($bashyInput);
    $bashyOverlay.append($bashyPanel);        
    $('body').prepend($bashyOverlay);
    
    bashy_keys();
    bashy_click();
    
});