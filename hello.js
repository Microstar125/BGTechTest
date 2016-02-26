$(document).ready(function () {
    $.ajax({
        url: "https://bedefetechtest.herokuapp.com/v1/"
    }).then(function (data) {
        for (var i = 0; i < bet_id; i++) {
            $('.bet-id').append(data.bet_id);
            $('.event').append(data.event);
        }
    });
});