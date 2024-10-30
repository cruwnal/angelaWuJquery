// $(document).ready(function (){

//     

// })


// $('h1').css('color','red')

// console.log($('h1').css('font-size'))
// $('button')

$('h1').addClass('big-title .margin-50')
$('h1').text('bye')
//$("button").text("do not click me");
$('button').html('<em>hello</em>');
console.log($('img').attr('src'));
$('a').html('<b>ckick here</b>');
$('a').attr('href','jiohotstar.com');

$('h1').click(
    function (){
        $('h1').css('color','purple')
    }
)


$('button').click(function (){
    $('h1').html('Kunal Nagwanshi');
    $('h1').css('color','purple');
})

$('input').keypress(function (event){
console.log(event.key);
})


$(document).keypress(function (event){
    $('button').html(event.key)
    })

$('h1').on('mouseover',function(){
    $('h1').css('color','purple')
});

$('h1').hover(mouseEnter, mouseLeave);
function mouseEnter() {
    $('h1').css('color','purple') ;
};
function mouseLeave() {
    $('h1').css('color','green');
};




$('button').on('click', function() {
    
    // if ($('h1').is(":visible")) {
    //     $('h1').hide();
    // } else {
    //     $('h1').show();
    // }

    $('h1').toggle();
});