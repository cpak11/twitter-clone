
$(document).ready(function(){

  $('textarea.tweet-compose').focus(function(){
    $(this).css('height','5em');
    $('#char-count,#tweet-submit').css('visibility','visible');
  });

  $('textarea').keyup(updateCount);
  $('textarea').keydown(updateCount);

  function updateCount(){
    var tc = $(this).val().length; //text count
    $('#char-count').text(140-tc);

    if(tc>=130){$('textarea').css('color','red');}
    if(tc>=140){$('button#tweet-submit').prop('disabled',true);}
    if(tc<=140){$('button#tweet-submit').prop('disabled',false);}
  }

  $('button#tweet-submit').click(function(){
    $(this).css('height','2.5em');
    $('#char-count,#tweet-submit').css('visibility','hidden');
    var ttweet = $('.tweet:first-of-type').clone();
    ttweet.find('.tweet-text').text($('textarea.tweet-compose').val());
    ttweet.find('img.avatar').attr('src','img/alagoon.jpg');
    ttweet.find('.content strong.fullname').text($('div.content p').val());

    $(ttweet).prependTo($('#stream'));
  });

  $('div.content').on('mouseenter', function(){
    $(this).find('div.tweet-actions,.favorites,.retweets').css('visibility','visible');
  });

  $('div.content').on('mouseleave', function(){
    $(this).find('div.tweet-actions,.favorites,.retweets').css('visibility','hidden');
  });

});
