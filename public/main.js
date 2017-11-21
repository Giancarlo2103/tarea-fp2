$(document).ready(function (){

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
        var old =$('input[name="old"]:checked').val(); /*esto me devuelve un array de coinsidencia*/
        var hobbys =$('input[name="hobbys"]:checked'); /*checked (selector)*/
        var textarea =$('#textarea').val();
        var hobbyst =  new Array();

        for (var i = 0; i < hobbys.length; i ++) {
            var temp_hobbys = hobbys[i];
            hobbyst.push(temp_hobbys.value);
        }

        var payload =  {
            'first_name' :first_name,
            'last_name' :last_name,
            'hobbyst' :hobbyst,
            'textarea' :textarea,
            'old' : old
        }
        $.post('/find',payload);
        $.get('/find',payload);





        });

});
