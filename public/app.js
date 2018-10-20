// function that shows and hide modal

const showModal = function(e) {
e.preventDefault();
$(".modal-container").show();
}


const hideModal = function(e) {
    e.preventDefault();
    $(".modal-container").hide();
    }



$('.top-btn').on('click', showModal); // tweet
// Place it here



// const saveTask = function () {
//     console.log('I clicked the button');
// }

const render = function(tweetText) {    
    $('.center-feed').append(` <p>${tweetText}</p>`) 

 }  //render all content in the inner tweet
 // Test
 
 



const saveTask = function (event) {
    event.preventDefault() // needed for form tag
   const inputTask =  $('#text1').val();
   console.log(inputTask);





   //Put Here

   



//    $('.delete').on('click', function() {
//     const id = $('[data-id]').val();
//     $.ajax({ method: 'delete', url: `/api/tweet/${id}`})
//   });


// const  data = {
//     content: inputTask, // whatever they types in is saved in task
//     complete: false // require model that has task incomplete
//     // username: ''
// }

// $.post('/api/task', data)
// .then(function (data) {

// console.log(data);
// })

// }

// $('#add-task').on('click', saveTask);

// x



// Use $.ajax for PUT and DELETE


const render = function(tweetText) {    
   $('.center-feed').append(` <p>${tweetText}</p>`)
   


}  //render all content in the inner tweet
    
   
$.get('api/tweet') 
.then(function(serverData) {
    for (let i = 0; i < serverData.length; i++)
    render(serverData[i].tweet);

})
}
// 1. Edit
// Add an edit button
// Route Put  id
// edit model / text area

// 2. Delete
// add delete button
// store id
// when delete clicked make delete request with id
// delete route

// function deleteData(item, url) {
//     return fetch(url + '/' + item, {
//       method: 'delete'
//     }).then(response =>
//       response.json().then(json => {
//         return json;
//       })
//     );
//   }

// 3. Check to see # of char > 140
// display an error message
// Post request

// Break
   const task1 = function() {
    const inputTask = $('#text1').val();

    const inputData = {
        content: inputTask,
        username: 'fgft',
        // characters: ''
    }

    $.post('api/tweet', inputData)
    .then(function(serverResponse) {
        console.log(serverResponse);


        render(serverResponse.content);
    })
   }


   // DELETE
//    $.ajax({ url: '/api/list', method: 'DELETE', data: selEntry }).then(
//     function (data) {
//         console.log(data.success);
//         if (data.success) {
//             console.log('input data in delete method ajax', data);
//             alert('You just deleted a new entry!');
//         } else {
//             alert("There's a problem with your submision");

    
 


// $.ajax({
//     url: '/routes/api-routes',
//     type: 'DELETE',
//     success: function(result) {
//         // Message Removed
//     }
// });

const render1 = function(tweet) {
    $('.center-feed').append(`
     <p>${tweet.text}</p>
     <button data-id=${tweet._id}></button>
    `)
   }

   const maxLength = 140;
$('textarea').keyup(function() {
  const textlen = maxLength - $(this).val().length;
  $('#chars').text(textlen);
});


// $('.delete').on('click', function() {
//     const id = $('[data-id]').val();
//     $.ajax({ method: 'delete', url: `/api/tweets/${id}`})
//   })

// $.ajax({ url: `/api/tweet/${id}`,type: 'delete',success: function(deletetweet){
//     console.log(deletetweet);
// }
// });

// $('.delete').on('click', function() {
//     const id = $('[data-id]').val();
//     $.ajax({ method: 'delete', url: `/api/tweet/${id}`})
//   render();
//   });



        
   $(".tweet-btn").on('click', task1);

   $('.close-modal').on('click', hideModal); 


        
//     }
// }
// <div> </div>
// <p>${tweetText}</p>

// }


// const addTweet = function() {
//     const newTweet = $('#tweet-content').val();
//     const tweetData = {
//         content: newTweet,
//         username: 'EPA'

//     }

//     $.post('api/tweet', tweetData)
//     .then(function(data)
//     console.log(data);
    
//     render();
    
//     )





