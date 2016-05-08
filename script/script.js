$(document).ready(function(){
    $('.arrow-down').on('click', function(e) {
      e.preventDefault();
      return $("html,body").animate({
        scrollTop: $(".page-work").offset().top
      });
    });
   
    $('.filter-link').on('click', function(e) {
        var group;
        e.preventDefault();
        if ($(this).hasClass('active')) {
        return false;
      } else {
        group = ($(this).hasClass('active')? 'all' :    $(this).data('group'));
        if (!$(this).hasClass('active')) {
          $('.work-filter .active').removeClass('active');
        }
        $(this).toggleClass('active');
            $(".page-work .work-pictures .work-item:not(."+group+")").animate({opacity:"hide"},0);
           $(".page-work .work-pictures .work-item."+group).animate({opacity:"show"},0);
      }
     });
     $(".mobile-filter-select").on('click', function(e) {
      e.preventDefault();
      $('.work-filter').slideToggle();
      return $(this).toggleClass('opened');
    });
});
