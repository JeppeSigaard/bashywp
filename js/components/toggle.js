var bashy_toggled_on = false,
    bashy_toggle = function(){

    jQuery('body').toggleClass('bashy');

        if(bashy_toggled_on){

            bashy_toggled_on = false;

        }
        else{

            bashy_toggled_on = true;

            jQuery('#bashy-panel-input').focus().attr('placeholder','Type a command or --h for help');

        }
    };