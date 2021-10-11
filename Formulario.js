$(document).ready(function () {

    $('.Departamento').html("<option value='0' class='Nombre_Departamento'>Elige tu departamento</option>")
    $('.Ciudad').html("<option value='0' class='Nombre_Ciudad'>Elige tu ciudad</option>")

    $.getJSON('Json/Info_Colombia.json', function (data) {
        $.each(data, function (id, Elemento) {
            $(".Nombre_Departamento").after('<option name="departamento">' + id + '</option>');
        });
    });

    $.getJSON('Json/Info_Colombia.json', function (data) {
        $.each(data, function (id, Elemento) {
            for (i in Elemento) {
                $(".Nombre_Ciudad").after('<option name="ciudad">' + Elemento[i] + '</option>');
            }
        });
    });
  
    $(".Nuevo_Cliente").click(function () {
       
        if (/^[a-zA-Z]+[a-zA-Z]+$/.test($("#Nombre").val())){
            $('#label_nombre').html("<span class='Mensaje_True'>Dato Correcto</span>")
            $('.valid_nombre').css({"border":"1px solid rgb(0,128,0,1)"})
            $('.icon_nombre').css({"background-color":"rgb(0,128,0,0.7)","color":"white"})
        }else{
            $('#label_nombre').html("<span class='Mensaje_False'>Nombre Incorrecto</span>")
            $('.valid_nombre').css({"border":"1px solid rgb(255,0,0,1)"})
            $('.icon_nombre').css( {"background-color":"rgb(255,0,0,0.7)","color":"white"})
        }
        
        if(/^[a-zA-ZÀ-ÿ\s]{3,15}$/.test($("#Apellido").val())){
            $('#label_apellido').html("<span class='Mensaje_True'>Dato Correcto</span>")
            $('.valid_apellido').css({"border":"1px solid rgb(0,128,0,0.7)"})
            $('.icon_apellido').css({"background-color":"rgb(0,128,0,0.7)" , "color":"white"})
        }else{
            $('#label_apellido').html("<span class='Mensaje_False'>Apellido Incorrecto</span>")
            $('.valid_apellido').css({"border":"1px solid rgb(255,0,0,0.7)"})
            $('.icon_apellido').css( {"background-color":"rgb(255,0,0,0.7)","color":"white"})
        }
        if(/^([0-9]{10})$/i.test($("#Telefono").val())){
            $('#label_telefono').html("<span class='Mensaje_True'>Dato Correcto</span>")
            $('.valid_telefono').css({"border":"1px solid rgb(0,128,0,0.7)"})
            $('.icon_telefono').css({"background-color":"rgb(0,128,0,0.7)" , "color":"white"})
        }else{
            $('#label_telefono').html("<span class='Mensaje_False'>Telefono Incorrecto</span>")
            $('.valid_telefono').css({"border":"1px solid rgb(255,0,0,0.7)"})
            $('.icon_telefono').css( {"background-color":"rgb(255,0,0,0.7)","color":"white"})
        }
        
        if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($("#Email").val())){
            $('#label_email').html("<span class='Mensaje_True'>Dato Correcto</span>")
            $('.valid_email').css({"border":"1px solid rgb(0,128,0,0.7)"})
            $('.icon_email').css({"background-color":"rgb(0,128,0,0.7)" , "color":"white"})
        }else{
            $('#label_email').html("<span class='Mensaje_False'>Telefono Incorrecto</span>")
            $('.valid_email').css({"border":"1px solid rgb(255,0,0,0.7)"})
            $('.icon_email').css( {"background-color":"rgb(255,0,0,0.7)","color":"white"})
        }

        if($(".Departamento").val()!=="0"){
            $('#departamento').html("<span class='Mensaje_True'>Correcto</span>")
            $('#departamento_colombia').css({"border":"1px solid rgb(0,128,0,0.7)"})
        }else{
            $('#departamento').html("<span class='Mensaje_False'>*Selecciona una opcion</span>")
            $('#departamento_colombia').css({"border":"1px solid rgb(255,0,0,0.7)"})
        }

        if($(".Ciudad").val()!=="0"){
            $('#ciudad').html("<span class='Mensaje_True'>Correcto</span>")
            $('#ciudad_colombia').css({"border":"1px solid rgb(0,128,0,0.7)"})
        }else{
            $('#ciudad').html("<span class='Mensaje_False'>*Selecciona una opcion</span>")
            $('#ciudad_colombia').css({"border":"1px solid rgb(255,0,0,0.7)"})
        }

    })

    /*$(".Nuevo").click(function(){
        location.href ="insert.php";
    })*/

});