
 $(document).ready(function () {
      $('body').on('click','td', function() {
        if($(this).hasClass('time-cell-selected')) {
            $(this).removeClass('time-cell-selected');
        } else {
            $(this).addClass('time-cell-selected');
        }
    });

})



  