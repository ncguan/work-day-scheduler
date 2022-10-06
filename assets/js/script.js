var today = moment();
$("#currentDay").text((today).format("dddd, MMMM Do"));


for(var i = 0; i<9; i++){
    $( ".container" ).addClass( "time-block row" );
    $('.container').append(
        $(document.createElement('p')).attr({
            class: 'hour col-lg-1 h-100',
        })
    );
    $('.hour').each(function(i){
        if(i+9<12){
            $(this).text(i+9 +'AM');
        }
        else if (i+9==12){
            $(this).text(i+9 +'PM');
        }
        else{
            $(this).text(i+9-12 +'PM');
        }
    });
    $('.container').append(
        $(document.createElement('input')).attr({
            type: 'input',
            class: 'eventInput col-lg-10',
        })
    );
    
    $('.container').append(
        $(document.createElement('input')).attr({
            type: 'button',
            class: 'saveBtn col-lg-1',
            value: 'Save',
        })
    );
}

var events = new Array(9);
$('.saveBtn').on('click', function () {
    var index = $('.saveBtn').index(this);
    var input = $('.eventInput')
    var value = input.eq(index).val();
    events.splice(index,1,value);
    storeEvents();
});

renderSchedule();
function renderSchedule(){
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    events = storedEvents
    for (var i = 0; i < events.length; i++) {
        var init = events[i];
        $('.eventInput').eq(i).val(init)
    }
}

function storeEvents(){
    localStorage.setItem("events", JSON.stringify(events));
}