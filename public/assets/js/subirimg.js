$("#submitbtn").on("click",()=>{
     let file_data = $("#fileup").prop("files")[0]
     let form_data = new FormData()
     form_data.append("image", file_data)
     $.ajax({
         url: "http://localhost:8080",
         type: "post",
         data:form_data,
         contentType: false,
         processData: false,
         success: function(response){
             console.log(response)

             if(response.length > 0) {
                console.log(response)
                Swal.fire(
                    'Recyclable!',
                    'Congratulations! You found a recyclable treasure!',
                    'success'
                  )
             }else{
                 console.log(response)
                Swal.fire({
                    title: 'Not Recyclable!',
                    text: "There's a huge chance that this thing is not recyclable... Sorry.",
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
             }
         }
     })
 })


