$( function() {

 let  pieza1=false, 
      pieza2=false, 
      pieza3=false, 
      pieza4=false;
   
    $("#pieza1").draggable({revert:"invalid"});
    $("#hueco1").droppable({
        drop: function(){
            $("#pieza1").css({top:$("#hueco1").css("top"),left:$("#hueco1").css("left")});
            pieza1=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza1"
    });


  $("#pieza2").draggable({revert:"invalid"});
    $("#hueco2").droppable({
        drop: function(){
            $("#pieza2").css({top:$("#hueco2").css("top"),left:$("#hueco2").css("left")});
            pieza2=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza2"
    });

    
  $("#pieza3").draggable({revert:"invalid"});
    $("#hueco3").droppable({
        drop: function(){
            $("#pieza3").css({top:$("#hueco3").css("top"),left:$("#hueco3").css("left")});
            pieza3=true;
            comprobar();
        },
        tolerance:"touch",
        accept: "#pieza3"
    });
  

    $("#pieza4").draggable({revert:"invalid"});
    $("#hueco4").droppable({
        drop: function(){
            $("#pieza4").css({top:$("#hueco4").css("top"),left:$("#hueco4").css("left")});
            pieza4=true;
            comprobar();
     },
        tolerance:"touch",
        accept: "#pieza4"
    });

    



    function comprobar(){
        if (pieza1 && pieza2 && pieza3 && pieza4){ 
            
            let confirme = confirm("Siguiente nivel");
            if (confirme == true)
              {
              location.href="puzzlenumeros2.html";
             }
        }
    }

  } );