// now i want to change from sample paragraph to welcome 
// let's see in both ways how in normal JS it happens and how in JQuery it happens

// var para1 = document.getElementById("para1");
// para1.innerHTML="Welcome";


// $('#para1').html('welcome');

// we can hide any element, change height and width

// $('#para1').hide();

// get the width
// var w = $('#para1').width();

// set the width
// $('#para1').width(500);

// if you want to change the all the p tags of html page
// $('p').html("welcome");

/**Let's see how css is changed in JQuery */
$('#para1').css('color', 'red');

// if you want it to apply to all the p tags
// $('p').css('color', 'red');

// $('p').css('fontSize', 30px);

// if you want to apply both at the same time
// $('p').css({fontSize: 30, color: 'blue'})

$('div').css({
width:"100px",
height:"100px",
backgroundColor: "red",
});


/**Event Handling through JQuery */
$('div').click(function(){
    alert("Div Clicked");
});
// there is one more way on method too

$('div').on('click', function(){
    alert("Div Clicked");
});

$('a').on('click', function(event){
    event.preventDefault();
    alert("Link Clicked");
});

 
