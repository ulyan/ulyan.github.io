$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  .nav.nav-secondary{display:none;}  </style>"));
});