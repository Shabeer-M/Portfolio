$(document).ready(function(){
    $("#reach-me").validate({
        rules:{
            name:{
            required:true,
        },
        email:{
            required:true,
            email:true
        },
        subject:{
            required:true
        },
        message:{
            required:true
        }
        },
        messages:{
            name:{
                required:"Enter a valid name",
            },
            email:{
            required:'Please Enter Email id',
            email:'Enter Valid Email id'
        },
        subject:{
            required:'Please mention Subject'
        },
        message:{
            required:'Please leave some message'
        }
        }
        
    })
        
    $("#reach-me").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwuAwS8mawsUo3tSPN6A0jIEUpLkkvddjZzxQDn/exec",
        data:$("#reach-me").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})    
})
