var circle = $('div#circle');

circle.on({

  "mouseenter" : function(){
    circle.addClass(function(){
      circle.html("LIVE CODING");
    });
  },
  "mouseleave" : function(){
    circle.removeClass(function(){
      circle.html("LIVE CODING");
    })
  }
});
