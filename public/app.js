$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(addTodos);
   
   $('#todoInput').keypress(function(event){
     if(event.which == 13){
       createTodo();
     }
   });
   $('.list').on('click','span', function(){
     removeTodo($(this).parent());
   });
});

function addTodos(todos){
    //add todo to page
    todos.forEach(function(todo){
      addTodo(todo);
    })
}

function addTodo(todo){
      var newtodo = $('<li class="task">' +todo.name + '<span>✖</span>' +'</li>');
      newtodo.data('id', todo._id);
      if (todo.completed){
        newtodo.addClass("done");
      }
      $('.list').append(newtodo);
}

function createTodo(todo){
  var usrInput = $('#todoInput').val();
   $.post("/api/todos",{name: usrInput})
   .then(function(newTodo){
     $('#todoInput').val('');
     addTodo(newTodo);
   })
   .catch(function(err){
     console.log(err);
   });
}

function removeTodo(todo){
     var clickedID = todo.data('id');
     var deletedURL = '/api/todos/' + clickedID;
     $.ajax({
       method: 'DELETE',
       url: deletedURL
     })
     .then(function(data){
       todo.remove();
     })
     .catch(function(err){
       console.log(err);
     });
}