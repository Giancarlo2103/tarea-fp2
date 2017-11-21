$(document).ready(function (){
    alert('Hola')

   $('input[type="submit"]').on("click", function(event) {
        /*var first_name = $('input[name="first_name"]').val();
        console.log(first_name);

        event.preventDefault();*/

        event.preventDefault();

        /*$.ajax('find.html',{
            method = 'post',
            data : {
                'first_name' : first_name
            }
        });*/
            

        var first_name =$('#first_name').val();
        var last_name =$('#last_name').val();
        var gender =$('input[name="gender"]:checked').val(); /*esto me devuelve un array de coinsidencia*/
        var interest =$('input[name="interest"]:checked'); /*checked (selector)*/
        var interests =  new Array();           
                     
        for (var i = 0; i < interest.length; i ++) {
            var temp_interest = interest[i];
            interests.push(temp_interest.value);
        }
            
        var payload =  {
            'first_name' :first_name,
            'last_name' :last_name,
            'gender' : gender,
            'interests' :interests,
            
        }
        $.post('/find',payload);
        $.get('/find',payload);


       

        
        });

});
