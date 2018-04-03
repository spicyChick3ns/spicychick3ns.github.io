function handleScroll() {
  var $href = $(this).attr('href');
  var $anchor = $($href).offset();
  var $offset = $('nav.nav').height();
  var $pos = $anchor.top + ($anchor.top === 0) * 30;
  $('html, body').animate({ scrollTop: $anchor.top });
  return false;
}

$('div.nav-menu').find('a').click(handleScroll);
$('a#arrow-button').click(handleScroll);

$('div#top').find('a').click(function() {
  $('html, body').animate({ scrollTop: 0 });
  return false;
});
