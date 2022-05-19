// const e = require("cors");

var URL = 'http://localhost:5000/amigos'


$('#boton').click(function() {
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
        friends.forEach(e => {
            $('#lista').append(`<li id="${e.id}">${e.name} X</li>`)
            
        });

    })
})

$('#search').click (function (){
    let id = $('#input').val();

    if(id){
        $.get(`${URL}/${id}`, function (friend){
            $('#amigo').text(`El nombre de mi amigo es: ${friend.name}`);
            $('#input').val("");
        }) 
    }
});

let deleteFriend = (function (){
    let id = $('#inputDelete').val();
    let friend;
    if(id){
        $.get(`${URL}/${id}`, function(f){
            friend = f;
        });
    $.ajax({
        url: `${URL}/${id}`,
        type:"DELETE",
        success: function(){
            $('#success').text(`Tu amigo, ${friend.name} fue borrado con exito`);
            $('#inputDelete').val("");
            showFriends();
        }
    })
    }
})

$('delete').click(deleteFriend);
