$(document).ready(function() {
    
  $("#middle1").show();
    
  $(".name, .name2").hover(function() {
     $("#middle1, #side1").show();
      $("#middle2, #side2").hide();
  });
    
  $(".info").hover(function() {
     $("#middle2, #side2").show();
      $("#middle1, #side1").hide();
  });
    
//PROJECT 10 IMAGES
    
  // get rid of intro text + sides, underline project title 
  $("#10-1, #10-2, #10-3, #10-4, #10-ABC, #proj10").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj10").css("text-decoration", "underline");
      $("#proj10Label").show();
    },
  function(){
        $("#proj10").css("text-decoration", "none");
      $("#proj10Label").hide();
  });
    
  //title hovers    
  $("#proj10").hover(function() {
      $("#proj10Label, #proj10Title, #proj10-0Label").show(); 
  },
  function(){
      $("#proj10Label, #proj10Title, #proj10-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#10-1").hover(function() {
     $("#img10-1, #proj10-1Label").show();
    },
  function(){
        $("#img10-1, #proj10-1Label").hide();
  });
    
  $("#10-2").hover(function() {
     $("#img10-2, #proj10-2Label").show();
    },
  function(){
        $("#img10-2, #proj10-2Label").hide();
  });
    
  $("#10-3").hover(function() {
     $("#img10-3, #proj10-3Label").show();
    },
  function(){
        $("#img10-3, #proj10-3Label").hide();
  });

  $("#10-4").hover(function() {
     $("#img10-4, #proj10-4Label").show();
    },
  function(){
        $("#img10-4, #proj10-4Label").hide();
  });
    
  $("#10-5").hover(function() {
     $("#img10-5, #proj10-5Label").show();
    },
  function(){
        $("#img10-5, #proj10-5Label").hide();
  });    
    
    $("#10-ABC").hover(function() {
     $("#proj10Desc, #proj10-ABCLabel").show();
    },
  function(){
        $("#proj10Desc, #proj10-ABCLabel").hide();
  });
    
    
//PROJECT 9 IMAGES
    
  // get rid of intro text + sides, underline project title 
  $("#9-1, #9-2, #9-3, #9-ABC, #proj9").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj9").css("text-decoration", "underline");
      $("#proj9Label").show();
    },
  function(){
        $("#proj9").css("text-decoration", "none");
      $("#proj9Label").hide();
  });
    
  //title hovers    
  $("#proj9").hover(function() {
      $("#proj9Label, #proj9Title, #proj9-0Label").show(); 
  },
  function(){
      $("#proj9Label, #proj9Title, #proj9-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#9-1").hover(function() {
     $("#img9-1, #proj9-1Label").show();
    },
  function(){
        $("#img9-1, #proj9-1Label").hide();
  });
    
  $("#9-2").hover(function() {
     $("#img9-2, #proj9-2Label").show();
    },
  function(){
        $("#img9-2, #proj9-2Label").hide();
  });
    
  $("#9-3").hover(function() {
     $("#img9-3, #proj9-3Label").show();
    },
  function(){
        $("#img9-3, #proj9-3Label").hide();
  });
    
    $("#9-ABC").hover(function() {
     $("#proj9Desc, #proj9-ABCLabel").show();
    },
  function(){
        $("#proj9Desc, #proj9-ABCLabel").hide();
  });    
    
//PROJECT 8 IMAGES
    
  // get rid of intro text + sides, underline project title    
  $("#8-1, #8-2, #8-3, #8-4, #8-5, #8-6, #8-ABC, #proj8").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj8").css("text-decoration", "underline");
      $("#proj8Label").show();      
    },
  function(){
        $("#proj8").css("text-decoration", "none");
      $("#proj8Label").hide();
  });
  
  // title hovers 
  $("#proj8").hover(function() {
      $("#proj8Label, #proj8Title, #proj8-0Label").show(); 
    },
  function(){
      $("#proj8Label, #proj8Title, #proj8-0Label").hide();
  });
  
  // numbers + abc hovers   
  $("#8-1").hover(function() {
     $("#img8-1").show();
     $("#proj8-1Label").show();
    },
  function(){
        $("#img8-1").hide();
        $("#proj8-1Label").hide();
  });
    
    $("#8-2").hover(function() {
     $("#img8-2").show();
        $("#proj8-2Label").show();
    },
  function(){
        $("#img8-2").hide();
        $("#proj8-2Label").hide();
  });
    
  $("#8-3").hover(function() {
     $("#img8-3").show();
      $("#proj8-3Label").show();
    },
  function(){
        $("#img8-3").hide();
      $("#proj8-3Label").hide();
  });

  $("#8-4").hover(function() {
     $("#img8-4").show();
      $("#proj8-4Label").show();
    },
  function(){
        $("#img8-4").hide();
      $("#proj8-4Label").hide();
  });

  $("#8-5").hover(function() {
     $("#img8-5").show();
      $("#proj8-5Label").show();
     
    },
  function(){
        $("#img8-5").hide();
      $("#proj8-5Label").hide();
  });
    
  $("#8-6").hover(function() {
     $("#img8-6").show();
      $("#proj8-6Label").show();
    },
  function(){
        $("#img8-6").hide();
      $("#proj8-6Label").hide();
  });
    
  $("#8-ABC").hover(function() {
      $("#proj8Desc, #proj8-ABCLabel").show();
    },
  function(){
      $("#proj8Desc, #proj8-ABCLabel").hide();
  });    

//PROJECT 7 IMAGES
    
  // get rid of intro text + sides, underline project title    
  $("#7-1, #7-2, #7-3, #7-4, #7-ABC, #proj7").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj7").css("text-decoration", "underline");
      $("#proj7Label").show();      
    },
  function(){
        $("#proj7").css("text-decoration", "none");
      $("#proj7Label").hide();
  });
  
  // title hovers 
  $("#proj7").hover(function() {
      $("#proj7Label, #proj7Title, #proj7-0Label").show(); 
    },
  function(){
      $("#proj7Label, #proj7Title, #proj7-0Label").hide();
  });
  
  // numbers + abc hovers   
  $("#7-1").hover(function() {
     $("#img7-1").show();
     $("#proj7-1Label").show();
    },
  function(){
        $("#img7-1").hide();
        $("#proj7-1Label").hide();
  });
    
    $("#7-2").hover(function() {
     $("#img7-2").show();
        $("#proj7-2Label").show();
    },
  function(){
        $("#img7-2").hide();
        $("#proj7-2Label").hide();
  });
    
  $("#7-3").hover(function() {
     $("#img7-3").show();
      $("#proj7-3Label").show();
    },
  function(){
        $("#img7-3").hide();
      $("#proj7-3Label").hide();
  });

  $("#7-4").hover(function() {
     $("#img7-4").show();
      $("#proj7-4Label").show();
    },
  function(){
        $("#img7-4").hide();
      $("#proj7-4Label").hide();
  });

    
  $("#7-ABC").hover(function() {
      $("#proj7Desc, #proj7-ABCLabel").show();
    },
  function(){
      $("#proj7Desc, #proj7-ABCLabel").hide();
  });    
    
    
//PROJECT 1 IMAGES
    
  // get rid of intro text + sides, underline project title    
  $("#1-1, #1-2, #1-3, #1-4, #1-5, #1-6, #1-ABC, #proj1").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj1").css("text-decoration", "underline");
      $("#proj1Label").show();      
    },
  function(){
        $("#proj1").css("text-decoration", "none");
      $("#proj1Label").hide();
  });
  
  // title hovers 
  $("#proj1").hover(function() {
      $("#proj1Label, #proj1Title, #proj1-0Label").show(); 
    },
  function(){
      $("#proj1Label, #proj1Title, #proj1-0Label").hide();
  });
  
  // numbers + abc hovers   
  $("#1-1").hover(function() {
     $("#img1-1").show();
     $("#proj1-1Label").show();
    },
  function(){
        $("#img1-1").hide();
        $("#proj1-1Label").hide();
  });
    
    $("#1-2").hover(function() {
     $("#img1-2").show();
        $("#proj1-2Label").show();
    },
  function(){
        $("#img1-2").hide();
        $("#proj1-2Label").hide();
  });
    
  $("#1-3").hover(function() {
     $("#img1-3").show();
      $("#proj1-3Label").show();
    },
  function(){
        $("#img1-3").hide();
      $("#proj1-3Label").hide();
  });

  $("#1-4").hover(function() {
     $("#img1-4").show();
      $("#proj1-4Label").show();
    },
  function(){
        $("#img1-4").hide();
      $("#proj1-4Label").hide();
  });

  $("#1-5").hover(function() {
     $("#img1-5").show();
      $("#proj1-5Label").show();
     
    },
  function(){
        $("#img1-5").hide();
      $("#proj1-5Label").hide();
  });
    
  $("#1-6").hover(function() {
     $("#img1-6").show();
      $("#proj1-6Label").show();
    },
  function(){
        $("#img1-6").hide();
      $("#proj1-6Label").hide();
  });
    
  $("#1-ABC").hover(function() {
      $("#proj1Desc, #proj1-ABCLabel").show();
    },
  function(){
      $("#proj1Desc, #proj1-ABCLabel").hide();
  });
    
//PROJECT 2 IMAGES

  // get rid of intro text + sides, underline project title    
  $("#2-1, #2-2, #2-3, #2-4, #2-5, #2-6, #2-ABC, #proj2").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj2").css("text-decoration", "underline");
      $("#proj2Label").show();
    },
  function(){
        $("#proj2").css("text-decoration", "none");
      $("#proj2Label").hide();
  });

  //title hovers    
    $("#proj2").hover(function() {
      $("#proj2Label, #proj2Title, #proj2-0Label").show(); 
    },
  function(){
      $("#proj2Label, #proj2Title, #proj2-0Label").hide();
  });
  
  //numbers + abc hovers
  $("#2-1").hover(function() {
     $("#img2-1, #proj2-1Label").show();
    },
  function(){
        $("#img2-1, #proj2-1Label").hide();
  });
    
  $("#2-2").hover(function() {
     $("#img2-2, #proj2-2Label").show();
    },
  function(){
        $("#img2-2, #proj2-2Label").hide();
  });
    
  $("#2-3").hover(function() {
     $("#img2-3, #proj2-3Label").show();
    },
  function(){
        $("#img2-3, #proj2-3Label").hide();
  });

  $("#2-4").hover(function() {
     $("#img2-4, #proj2-4Label").show();
    },
  function(){
        $("#img2-4, #proj2-4Label").hide();
  });

  $("#2-5").hover(function() {
     $("#img2-5, #proj2-5Label").show();
     
    },
  function(){
        $("#img2-5, #proj2-5Label").hide();
  });
    
  $("#2-6").hover(function() {
     $("#img2-6, #proj2-6Label").show();
    },
  function(){
        $("#img2-6, #proj2-6Label").hide();
  });
    
  $("#2-ABC").hover(function() {
      $("#proj2Desc, #proj2-ABCLabel").show();
    },
  function(){
      $("#proj2Desc, #proj2-ABCLabel").hide();
  });
    
//PROJECT 3 IMAGES
    
  $("#3-1, #3-2, #3-3, #3-4, #3-ABC, #proj3").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj3").css("text-decoration", "underline");
      $("#proj3Label").show();
    },
  function(){
        $("#proj3").css("text-decoration", "none");
      $("#proj3Label").hide();
  });
    
  //title hovers    
  $("#proj3").hover(function() {
      $("#proj3Label, #proj3Title, #proj3-0Label").show(); 
  },
  function(){
      $("#proj3Label, #proj3Title, #proj3-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#3-1").hover(function() {
     $("#img3-1, #proj3-1Label").show();
    },
  function(){
        $("#img3-1, #proj3-1Label").hide();
  });
    
  $("#3-2").hover(function() {
     $("#img3-2, #proj3-2Label").show();
    },
  function(){
        $("#img3-2, #proj3-2Label").hide();
  });
    
  $("#3-3").hover(function() {
     $("#img3-3, #proj3-3Label").show();
    },
  function(){
        $("#img3-3, #proj3-3Label").hide();
  });

  $("#3-4").hover(function() {
     $("#img3-4, #proj3-4Label").show();
    },
  function(){
        $("#img3-4, #proj3-4Label").hide();
  });
    
    $("#3-ABC").hover(function() {
     $("#proj3Desc, #proj3-ABCLabel").show();
    },
  function(){
        $("#proj3Desc, #proj3-ABCLabel").hide();
  });
    
//PROJECT 4 IMAGES
    
  // get rid of intro text + sides, underline project title 
  $("#4-1, #4-2, #4-3, #4-4, #4-ABC, #proj4").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj4").css("text-decoration", "underline");
      $("#proj4Label").show();
    },
  function(){
        $("#proj4").css("text-decoration", "none");
      $("#proj4Label").hide();
  });
    
  //title hovers    
  $("#proj4").hover(function() {
      $("#proj4Label, #proj4Title, #proj4-0Label").show(); 
  },
  function(){
      $("#proj4Label, #proj4Title, #proj4-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#4-1").hover(function() {
     $("#img4-1, #proj4-1Label").show();
    },
  function(){
        $("#img4-1, #proj4-1Label").hide();
  });
    
  $("#4-2").hover(function() {
     $("#img4-2, #proj4-2Label").show();
    },
  function(){
        $("#img4-2, #proj4-2Label").hide();
  });
    
  $("#4-3").hover(function() {
     $("#img4-3, #proj4-3Label").show();
    },
  function(){
        $("#img4-3, #proj4-3Label").hide();
  });

  $("#4-4").hover(function() {
     $("#img4-4, #proj4-4Label").show();
    },
  function(){
        $("#img4-4, #proj4-4Label").hide();
  });
    
    $("#4-ABC").hover(function() {
     $("#proj4Desc, #proj4-ABCLabel").show();
    },
  function(){
        $("#proj4Desc, #proj4-ABCLabel").hide();
  });
    
//PROJECT 5 IMAGES
    
  // get rid of intro text + sides, underline project title 
  $("#5-1, #5-2, #5-3, #5-4, #5-ABC, #proj5").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj5").css("text-decoration", "underline");
      $("#proj5Label").show();
    },
  function(){
        $("#proj5").css("text-decoration", "none");
      $("#proj5Label").hide();
  });
    
  //title hovers    
  $("#proj5").hover(function() {
      $("#proj5Label, #proj5Title, #proj5-0Label").show(); 
  },
  function(){
      $("#proj5Label, #proj5Title, #proj5-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#5-1").hover(function() {
     $("#img5-1, #proj5-1Label").show();
    },
  function(){
        $("#img5-1, #proj5-1Label").hide();
  });
    
  $("#5-2").hover(function() {
     $("#img5-2, #proj5-2Label").show();
    },
  function(){
        $("#img5-2, #proj5-2Label").hide();
  });
    
  $("#5-3").hover(function() {
     $("#img5-3, #proj5-3Label").show();
    },
  function(){
        $("#img5-3, #proj5-3Label").hide();
  });

  $("#5-4").hover(function() {
     $("#img5-4, #proj5-4Label").show();
    },
  function(){
        $("#img5-4, #proj5-4Label").hide();
  });
    
    $("#5-ABC").hover(function() {
     $("#proj5Desc, #proj5-ABCLabel").show();
    },
  function(){
        $("#proj5Desc, #proj5-ABCLabel").hide();
  });
    
    
//PROJECT 6 IMAGES
    
  // get rid of intro text + sides, underline project title 
  $("#6-1, #6-2, #6-3, #6-ABC, #proj6").hover(function() {
     $("#middle1, #side1, #middle2, #side2").hide();
     $("#proj6").css("text-decoration", "underline");
      $("#proj6Label").show();
    },
  function(){
        $("#proj6").css("text-decoration", "none");
      $("#proj6Label").hide();
  });
    
  //title hovers    
  $("#proj6").hover(function() {
      $("#proj6Label, #proj6Title, #proj6-0Label").show(); 
  },
  function(){
      $("#proj6Label, #proj6Title, #proj6-0Label").hide();
  });
    
  //numbers + abc hovers  
  $("#6-1").hover(function() {
     $("#img6-1, #proj6-1Label").show();
    },
  function(){
        $("#img6-1, #proj6-1Label").hide();
  });
    
  $("#6-2").hover(function() {
     $("#img6-2, #proj6-2Label").show();
    },
  function(){
        $("#img6-2, #proj6-2Label").hide();
  });
    
  $("#6-3").hover(function() {
     $("#img6-3, #proj6-3Label").show();
    },
  function(){
        $("#img6-3, #proj6-3Label").hide();
  });
    
    $("#6-ABC").hover(function() {
     $("#proj6Desc, #proj6-ABCLabel").show();
    },
  function(){
        $("#proj6Desc, #proj6-ABCLabel").hide();
  });
    
//FACE TOY
  var count = 0;
  var maxHeight = screen.height;
  var maxWidth = screen.width;
    
    $("#face-1").click(function() {
    count++;
        var randomHeight = Math.floor(Math.random() * maxHeight);

        function randomWholeNum() {
            return Math.random();
        }
        
        var randomWidth = Math.floor(Math.random() * maxWidth);

        function randomWholeNum() {
            return Math.random();
        }
  
        
        
        if(count==1){
            $("#face-2").show();
            $("#face-2").css("top", randomHeight);
            $("#face-2").css("left", randomWidth);
        }
        
        if(count==2){
            $("#face-3").show();
            $("#face-3").css("top", randomHeight);
            $("#face-3").css("left", randomWidth);
        }
        
        if(count==3){
            $("#face-4").show();
            $("#face-4").css("top", randomHeight);
            $("#face-4").css("left", randomWidth);
        }
        
        if(count==4){
            $("#face-5").show();
            $("#face-5").css("top", randomHeight);
            $("#face-5").css("left", randomWidth);
        }
        
        if(count==5){
            $("#face-6").show();
            $("#face-6").css("top", randomHeight);
            $("#face-6").css("left", randomWidth);
        }
        
        if(count==6){
            $("#face-7").show();
            $("#face-7").css("top", randomHeight);
            $("#face-7").css("left", randomWidth);
        }
        
        if(count==7){
            $("#face-8").show();
            $("#face-8").css("top", randomHeight);
            $("#face-8").css("left", randomWidth);
        }
        
        if(count==8){
            $("#face-9").show();
            $("#face-9").css("top", randomHeight);
            $("#face-9").css("left", randomWidth);
        }
        
        if(count==9){
            $("#face-10").show();
            $("#face-10").css("top", randomHeight);
            $("#face-10").css("left", randomWidth);
        }
        
        if(count==10){
            $("#face-1").attr("src", "images/face-02.png");
            $("#face-11").show();
            $("#face-11").css("top", randomHeight);
            $("#face-11").css("left", randomWidth);
        }
        if(count==11){
            $("#face-1").attr("src", "images/face-01.png");
            $("#face-2, #face-3, #face-4, #face-5, #face-6, #face-7, #face-8, #face-9, #face-10, #face-11").hide();
            count=0;

        }
  });
    
    $("#face-2").hover(function() {
     $("#face-2").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-2").attr("src", "images/face-01.png");
  });
 
    $("#face-2").click(function() {
    $("#face-2").hide();
  });
    
    $("#face-3").hover(function() {
     $("#face-3").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-3").attr("src", "images/face-01.png");
  });
 
    $("#face-3").click(function() {
    $("#face-3").hide();
  });
    
    $("#face-4").hover(function() {
     $("#face-4").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-4").attr("src", "images/face-01.png");
  });
 
    $("#face-4").click(function() {
    $("#face-4").hide();
  });
    
    $("#face-5").hover(function() {
     $("#face-5").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-5").attr("src", "images/face-01.png");
  });
 
    $("#face-5").click(function() {
    $("#face-5").hide();
  });

    $("#face-6").hover(function() {
     $("#face-6").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-6").attr("src", "images/face-01.png");
  });
 
    $("#face-6").click(function() {
    $("#face-6").hide();
  });
    
    $("#face-7").hover(function() {
     $("#face-7").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-7").attr("src", "images/face-01.png");
  });
 
    $("#face-7").click(function() {
    $("#face-7").hide();
  });
    
    $("#face-8").hover(function() {
     $("#face-8").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-8").attr("src", "images/face-01.png");
  });
 
    $("#face-8").click(function() {
    $("#face-8").hide();
  });
    
    $("#face-9").hover(function() {
     $("#face-9").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-9").attr("src", "images/face-01.png");
  });
 
    $("#face-9").click(function() {
    $("#face-9").hide();
  });
    
    $("#face-10").hover(function() {
     $("#face-10").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-10").attr("src", "images/face-01.png");
  });
 
    $("#face-10").click(function() {
    $("#face-10").hide();
  });
    
    $("#face-11").hover(function() {
     $("#face-11").attr("src", "images/face-03.png");
    },
  function(){
     $("#face-11").attr("src", "images/face-01.png");
  });
 
    $("#face-11").click(function() {
    $("#face-11").hide();
  });


});
