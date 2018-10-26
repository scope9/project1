
const showModal = function(e) {
e.preventDefault();
$(".modal-container").show();
}


const hideModal = function(e) {
    e.preventDefault();
    $(".modal-container").hide();
    }



$('.top-btn').on('click', showModal); 






const render = function(tweetText) {    
    $('.center-feed').append(` <div class ="center">
    &nbsp;   &nbsp;   <span class = "smallb">U.S EPA</span>  &nbsp; @EPA &nbsp; Oct 5
    <p>${tweetText}</p></div>`) 

 }  
 



const saveTask = function (event) {
    event.preventDefault() 
   const inputTask =  $('#text1').val();
   console.log(inputTask);





const render = function(tweetText) {    
   $('.center-feed').append(` <p>${tweetText}</p>`)
   


}  
    
   
$.get('api/tweet') 
.then(function(serverData) {
    for (let i = 0; i < serverData.length; i++)
    render(serverData[i].tweet);

})
}

   const task1 = function() {
    const inputTask = $('#text1').val();

    const inputData = {
        content: inputTask,
        username: 'fgft',
       
    }

    $.post('api/tweet', inputData)
    .then(function(serverResponse) {
        console.log(serverResponse);


        render(serverResponse.content);
    })
   }



  
    $.get('api/tweet') 
    .then(function(serverData) {
        for (let i = 0; i < serverData.length; i++)
        render(serverData[i].tweet);
    
   
    
    })
    


    


   const maxLength = 140;
$('textarea').keyup(function() {
  const textlen = maxLength - $(this).val().length;
  $('#chars').text(textlen);
});



        
   $(".tweet-btn").on('click', task1);

   $('.close-modal').on('click', hideModal); 





