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


// BOTÓN PARA VOLVER ARRIBA

let $myButton = $("#btn-back-to-top");
    // Que aparezca el botón para volver arriba cuando se hace scroll hacia abajo. 

    $(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
        $myButton.show();
    } else {
        $myButton.hide();
    }});

    // When the user clicks on the button, scroll to the top of the document
    $myButton.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

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


// APERTURA DE LA VENTANA MODAL DEL FORMULARIO 
$(document).ready(function() {
    // Seleccionar todos los formularios que necesitan validación
    $('.needs-validation').on('submit', function(event) {
        // Evitar la acción predeterminada del formulario
        event.preventDefault();
        
        // Verificar si el formulario es válido
        if (this.checkValidity()) {
            // Si es válido, muestra la ventana modal
            $('#Modal').modal('show');
        } else {
            // Si no es válido, detiene la propagación del evento y muestra mensajes de validación
            event.stopPropagation();
            $(this).addClass('was-validated');
        }
    });
});

// VOLVER AL INDEX 1 TRAS LA COMPRA
$('#modalCloseButton').on('click', function() {
    window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu landing page
});

// NEWSLETTER

$('#newsletterForm').on('submit', function(event) {
    event.preventDefault();
    const emailInput = $('#email-newsletter');
    const emailValue = emailInput.val();

    // Verificar si el email es válido
    if (emailInput[0].checkValidity()) {
        // Mostrar el email en el contenido de la ventana
        $('#user-email').text(emailValue);

        // Abrir la modal confirmando la suscripción
        $('#exampleModal').modal('show');
    } else {
        alert('Please enter a valid email address.');
    }
});
  
});