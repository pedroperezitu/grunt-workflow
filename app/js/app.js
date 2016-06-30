(function() {
  $('document').ready(function() {
    $('#deploy-menu').on('click', function(e) {
      $('.menu-active').toggleClass('active');
      $('.colapse').toggleClass('open-menu');
      return e.preventDefault();
    });
  });

  return;

}).call(this);
