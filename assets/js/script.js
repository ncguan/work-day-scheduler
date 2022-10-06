var today = moment();
$("#currentDay").text((today).format("dddd, MMMM Do"));

$(document).ready(function() {
    for(var i = 0; i<9; i++){
        $( ".container" ).addClass( "time-block row" );
        $('.container').append(
            $(document.createElement('p')).attr({
                class: 'hour col-lg-1 h-100',
            })

        );
        $('.hour').each(function(i){
            if(i+9<13){
                $(this).text(i+9 +'AM');
            }
            else{
                $(this).text(i+9-12 +'PM');
            }
        });
        $('.container').append(
            $(document.createElement('input')).attr({
                type: 'input',
                class: 'col-lg-10'
            })
        );
        
        $('.container').append(
            $(document.createElement('input')).prop({
                type: 'button',
                class: 'saveBtn col-lg-1',
                value: 'Submit'
            })
        );
    }
});
