// COUNTDOWN
$(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Fecha fija para el countdown: 22 de noviembre de 2024
    const birthday = "12/20/2024";
    const countDown = new Date(birthday).getTime();
  
    const x = setInterval(function() {    
      const now = new Date().getTime(),
            distance = countDown - now;
  
      $("#days").text(Math.floor(distance / day));
      $("#hours").text(Math.floor((distance % day) / hour));
      $("#minutes").text(Math.floor((distance % hour) / minute));
      $("#seconds").text(Math.floor((distance % minute) / second));
  
      // Cuando se alcance la fecha
      if (distance < 0) {
        $("#headline").text("STREETBEAT IS HERE!");
        $("#countdown").hide();
        clearInterval(x);
      }
    }, 0);
});
  




// BRANDS


$(document).ready(function() {
    $('.brand-title').click(function() {
        var title = $(this); 
        var description = title.next('.brand-description');

        // Asegura que el título no esté ya en un estado oculto
        title.stop(true, true).fadeOut(function() {
            description.stop(true, true).css("display", "block").animate({ opacity: 1 }, 500); // Muestra y desvanece la descripción
        });

        // Usa `.one()` en lugar de `.click()` para evitar acumulación de eventos
        description.one('click', function() {
            description.stop(true, true).animate({ opacity: 0 }, 500, function() { // Reduce la opacidad gradualmente
                description.css("display", "none");
                title.stop(true, true).fadeIn(); // Muestra el título después de la animación
            });
        });
    });


// $(document).ready(function() {
//     $('.brand-title').click(function() {
//         var title = $(this); 
//         var description = title.next('.brand-description');

//         title.fadeOut(function() {
//             description.css("display", "block").animate({ opacity: 1 }, 500); // Muestra y desvanece la descripción
//         });

//         description.click(function() {
//             description.animate({ opacity: 0 }, 500, function() { // Reduce la opacidad gradualmente
//                 description.css("display", "none");
//                 title.fadeIn(); // Muestra el título después de la animación
//             });
//         });
//     });

    // Variable para el temporizador de scroll
    let timeoutId;

    $(window).scroll(function() {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
            $('.brand-description').animate({ opacity: 0 }, 500, function() { // Desvanece la descripción en scroll
                $(this).css("display", "none");
                $('.brand-title').fadeIn();
            });
        }, 300); // Retraso antes de restablecer
    });




    // IMÁGENES CARDS 

    // BOTÓN PARA SUBIR ARRIBA
    $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
        });
        $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
    }

    // FORMULARIO
    $(document).ready(function() {
        // Seleccionar todos los formularios que necesitan validación
        $('.needs-validation').on('submit', function(event) {
          // Verificar si el formulario es válido
          if (!this.checkValidity()) {
            event.preventDefault(); // Evitar que se envíe el formulario
            event.stopPropagation(); // Detener la propagación del evento
          }
          $(this).addClass('was-validated'); // Agregar la clase para mostrar la validación
        });
      });

    // // VENTANA MODAL DE SUSCRIPCIÓN NEWSLETTER
    // $('#myModal').on('shown.bs.modal', function() {
    //     $('#myInput').focus();
    // });
    
});