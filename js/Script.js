


var floatingMenuposition=$('#floatingMenu').position();
// alert(floatingDivposition.top);


$(window).scroll(function () {
    // alert("browser scroll");
   var currentScrollposition=$(window).scrollTop();
   if(currentScrollposition>=floatingMenuposition.top)
   {
      $('#floatingMenu').css({
          'position' : 'fixed',
          'top'  : '0px',
          'width' : '90%',
          'z-index' : '99'
      })

   }else{
       $('#floatingMenu').css({
           'position' : 'relative',
           'top'  : '0px',
           'width' : '100%'
       })

   }

})