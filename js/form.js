$(document).ready( ()=>{
      $("#loading").hide()
      $("#error").hide()
      $("#success").hide()
      $("#contactForm").submit((e)=>{
        $("#error").hide()
        $("#success").hide()
        $("#loading").show()
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwTP8ClfcBYK6DuGVYSmocZcE9D3uIsMH6nUceosihbzoLXpRs_q04UUYrWLDfXJudv/exec",
            data:$("#contactForm").serialize(),
            method:"post",
            success:function (response){
                // alert("Form submitted successfully")
                $("#loading").hide()
                $('#success').show()
                // window.location.reload()
                $('#name').val('')
                $('#email').val('')
                $('#subject').val('')
                $('#message').val('')

                //window.location.href="https://google.com"
            },
            error:function (err){
                // alert("Something Error")
                $("#loading").hide()
                $("#success").hide()
                $("#error").show()

            }
        })
    })
    })