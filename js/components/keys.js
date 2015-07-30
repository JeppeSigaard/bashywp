var altKey = false,
    bashy_keys = function(){

        window.onkeydown = function(e) {
            if(e.keyCode == 18) {
                altKey = true;
            }
            if(e.keyCode == 67 && altKey){
                e.preventDefault();
                bashy_toggle();
            }
            if(e.keyCode == 27 && bashy_toggled_on){
                bashy_toggle();
            }

            if(e.keyCode == 13 && bashy_toggled_on){
                bashy_exec_command();
                bashy_clear();
            }
        };

        window.onkeyup = function(e) {
            if(e.keyCode == 18) {
                altKey = false;
            }
        };

}