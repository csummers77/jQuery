// jQuery is  a Javascript library
// that means jQuery is javascript
// jQuery cannot live without javascript
// jQuery allows you to change stuff, but doesnt keep track of the changes
// in a big ... this is confusing
// react,angular, and Vue are the answer to this
// jQuery directly manipulatest the dom
// this is expensive - takes a lot of resources
// react and others use "virtualDom" which is efficient

// A $ means im writing JS but, not just any js im writing jquery
// console.log($);

console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('.container'));
console.log(document.getElementsByClassName('container'));
console.dir($('.container'));
// document.getElementById('row').children[0]
console.log($('#row p'));

// jQuery targets with css rules
// jQuery adds listeners as methods... ie, click = .click()
$('#hide').click(function(){
    // console.log('clicked on hide')
    $('#thing').hide();
})
$('#show').click(function(){
    $('#thing').show();
})
$('#toggle').click(function(){
    $('#thing').toggle();
})
$('#html').click(function(){
    $('#thing').html("<p> new html here</p>")
})
$('#text').click(function(){
    $('#thing').text("<p>Change the text</p>")
})
$('#css').click(function(){
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50px",
        "font-size": "100px"
    })
    // document.getElementById('thing').style.backgroundColor = "green"
    // document.getElementById('thing').style.borderRadius = "50px"
    // document.getElementById('thing').style.fontSize = "100px"
})
$('#add-class').click(function(){
    $('#thing').addClass('btn-danger')
})
$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger')
})
$('#prepend').click(function(){
    $('#thing').prepend('Test..')
})
$('#append').click(function(){
    $('#thing').append('Test...')
})
$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500)
})
$('#slide').click(function(){
    $('#thing').slideToggle(250)
})
$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200px',
        'margin-left': '100px'
    }),3000
})
// Native JS way
// document.getElementById('hide').addEventListener('click', function(){
//     console.log('clicked on hide')
// })