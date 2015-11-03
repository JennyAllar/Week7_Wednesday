$(document).ready(function(){
  var name = prompt('your name?')

  $(".badge").mouseenter(function(){
    $(this).css("background-color", "#b20000");
  });

  $(".panel:even").css("background-color", "#cccccc");

  $(".progress").first().on({
      mouseenter: function () {
        var message = $('<span>2016 projection</span>');
        $(".progress-bar").first().after(message);
      },
      mouseleave: function () {
        $(".progress-bar").nextAll().remove();
      }
  });

  $(".table-responsive > table > tbody > tr").last().remove()
  $(".table-responsive > table > tbody > tr").last().remove()

  $(".btn-group .btn-primary").click(function(){
    $(this).find('.glyphicon').remove();
    $(this).css('color', 'grey')
  });

  $(".btn-group .btn-primary").dblclick(function(){
    $(this).remove();
  });

  $(".alert button").click(function(){
    $(this).each(function(){
      alert('YOU CAN NEVER GET THIS BACK!')
      $('.alert').remove();
    })
  })

  // $(".control-group:first > .controls").find("input[type=text]").attr("placeholder", name);

  var orig = $(".progress-bar-info").css("width");


  $(".progress").hover(function(){
   $(".progress-bar-info").css('width', );
  }, function(){
   $(".progress-bar-info").css('width', orig);
  })


  // $(".progress-bar-info").attr('aria-valuenow', 0).css('width', 22);
  // $(".progress-bar-info").on({
  //     mouseenter: function () {
  //       var originalProgress = $(this).attr('aria-valuenow')
  //       $(".progress").attr('aria-valuenow', originalProgress).css('width', originalProgress);
  //     }
      // mouseleave: function () {
      //   $(this).attr('aria-valuenow', 100).css('width', 100);
      // }
  // });


  // $(".progress-bar-info").hover(function(){
  //   $(this).progressbar( "option", "value", 100 )
  // })
// $(".progress-bar-warning .sr-only").text("3% Complete")

});
