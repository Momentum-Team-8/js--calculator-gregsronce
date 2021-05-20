// start by selecting the document with document(.)
// select our specific element with querySelector (.)
// select element with quotation marks around class or id selector (.)
// prime the __ to watch for an event with addEventListener
// in this case the event is a 'click' 
// document.querySelector('.buttons').addEventListener('click', function(event){
//     console.log(event.target)
// })


document.querySelector('.buttons').addEventListener('click', function (event) {
    console.log(event.target)})

addEventListener('click', function (event) {
    console.log(event.target.innerText)
    output.innerText += event.target.innerText})

document.querySelector('#equals').addEventListener('click', function (event) {
    console.log(eval(output.innerText))})

    


