var span = $('span');
var circle = $('div#circle');


circle.on({

  "mouseenter" : function(){
    span.show();
  },
  "mouseleave" : function(){
    span.hide();
  }
});
