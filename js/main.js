$(document).ready(function(){
  // $('#results').hide();
  $("form#ping-pong-form").submit(function(event) {
    $(".startHidden").css("display", "block");
    $("ul").empty();
    var inputNumber = parseInt($("input#inputNumber").val());
    var ping, pong;
    var pingCount = 0;
    var pongCount = 0;
    var pingPongCount = 0;
    for (var index = 1; index <= inputNumber; index += 1) {
      ping = index % 3;
      pong = index % 5;
      if (!ping && !pong) {
        $("#resultList").append('<li class="list-group-item list-group-item-success">Ping-Pong</li>');
        $("#pingPongList").append('<li class="list-group-item list-group-item-success">' + index + '</li>');
        pingPongCount += 1;
      }
      else if (!ping) {
        $("#resultList").append('<li class="list-group-item list-group-item-info">Ping</li>');
        $("#pingList").append('<li class="list-group-item list-group-item-info">' + index + '</li>');
        pingCount += 1;
      }
      else if (!pong) {
        $("#resultList").append('<li class="list-group-item list-group-item-warning">Pong</li>');
        $("#pongList").append('<li class="list-group-item list-group-item-warning">' + index + '</li>');
        pongCount +=1;
      }
      else {
        $("#resultList").append('<li class="list-group-item list-group-item-danger">' + index + '</li>');
      }
    };
    $('#pingPongBadge').text(pingPongCount);
    $('#pingBadge').text(pingCount);
    $('#pongBadge').text(pongCount);
    $('#resultBadge').text(inputNumber);

    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  });
});
