document.getElementById('nameInput').addEventListener('keyup', function() {
    document.getElementById('name').innerHTML = document.getElementById('nameInput').value;
});

//var elems = ['nameInput', 'name', 'nameInput'].map(function(el) {
//    return document.getElementById(el);
//});
//elems[0].addEventListener('keyup', function() {
//    elems[1].innerHTML = elems[2].value;
//});