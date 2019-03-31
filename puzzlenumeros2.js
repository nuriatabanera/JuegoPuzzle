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

        $("#pieza5").draggable({revert:"invalid"});
    $("#hueco5").droppable({
        drop: function(){
            $("#pieza5").css({top:$("#hueco5").css("top"),left:$("#hueco5").css("left")});
            pieza5=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza5"
    });


  $("#pieza6").draggable({revert:"invalid"});
    $("#hueco6").droppable({
        drop: function(){
            $("#pieza6").css({top:$("#hueco6").css("top"),left:$("#hueco6").css("left")});
            pieza6=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza6"
    });

    
  $("#pieza7").draggable({revert:"invalid"});
    $("#hueco7").droppable({
        drop: function(){
            $("#pieza7").css({top:$("#hueco7").css("top"),left:$("#hueco7").css("left")});
            pieza7=true;
            comprobar();
        },
        tolerance:"touch",
        accept: "#pieza7"
    });
  

    $("#pieza8").draggable({revert:"invalid"});
    $("#hueco8").droppable({
        drop: function(){
            $("#pieza8").css({top:$("#hueco8").css("top"),left:$("#hueco8").css("left")});
            pieza8=true;
            comprobar();
     },
        tolerance:"touch",
        accept: "#pieza8"
    });

        $("#pieza9").draggable({revert:"invalid"});
    $("#hueco9").droppable({
        drop: function(){
            $("#pieza9").css({top:$("#hueco9").css("top"),left:$("#hueco9").css("left")});
            pieza9=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza9"
    });


  $("#pieza10").draggable({revert:"invalid"});
    $("#hueco10").droppable({
        drop: function(){
            $("#pieza10").css({top:$("#hueco10").css("top"),left:$("#hueco10").css("left")});
            pieza10=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza10"
    });

    
  $("#pieza11").draggable({revert:"invalid"});
    $("#hueco11").droppable({
        drop: function(){
            $("#pieza11").css({top:$("#hueco11").css("top"),left:$("#hueco11").css("left")});
            pieza11=true;
            comprobar();
        },
        tolerance:"touch",
        accept: "#pieza11"
    });
  

    $("#pieza12").draggable({revert:"invalid"});
    $("#hueco12").droppable({
        drop: function(){
            $("#pieza12").css({top:$("#hueco12").css("top"),left:$("#hueco12").css("left")});
            pieza12=true;
            comprobar();
     },
        tolerance:"touch",
        accept: "#pieza12"
    });

        $("#pieza13").draggable({revert:"invalid"});
    $("#hueco13").droppable({
        drop: function(){
            $("#pieza13").css({top:$("#hueco13").css("top"),left:$("#hueco13").css("left")});
            pieza13=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza13"
    });


  $("#pieza14").draggable({revert:"invalid"});
    $("#hueco14").droppable({
        drop: function(){
            $("#pieza14").css({top:$("#hueco14").css("top"),left:$("#hueco14").css("left")});
            pieza14=true;
            comprobar();

        },
        tolerance:"touch",
        accept: "#pieza14"
    });

    
  $("#pieza15").draggable({revert:"invalid"});
    $("#hueco15").droppable({
        drop: function(){
            $("#pieza15").css({top:$("#hueco15").css("top"),left:$("#hueco15").css("left")});
            pieza15=true;
            comprobar();
        },
        tolerance:"touch",
        accept: "#pieza15"
    });
  

    $("#pieza16").draggable({revert:"invalid"});
    $("#hueco16").droppable({
        drop: function(){
            $("#pieza16").css({top:$("#hueco16").css("top"),left:$("#hueco16").css("left")});
            pieza16=true;
            comprobar();
     },
        tolerance:"touch",
        accept: "#pieza16"
    });



    function comprobar(){
        if (pieza1 && pieza2 && pieza3 && pieza4
         && pieza5 && pieza6 &&pieza7 && pieza8 
         && pieza9 && pieza10 && pieza11 && pieza12 
         &&pieza13 && pieza14 && pieza15 && pieza16){ 
            
            let confirme = confirm("Siguiente nivel");
            if (confirme == true)
              {
              location.href="puzzlenumeros3.html";
             }
        }
    }

  } );