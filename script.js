'use strict'

$('document').ready(function() {

    $(".popUpToggle").on( "click", function() {
        $(".popUpMenu").slideToggle(500);
        
        //Esconde y muestra el menú inicial
        $(".popUpInicio").slideToggle(500);
      });

});

