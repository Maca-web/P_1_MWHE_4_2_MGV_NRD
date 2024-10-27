
// FLIPPING CARDS 


// BRANDS

$(document).ready(function() {
    $('.brand-title').click(function() {
        var title = $(this); 
        var description = title.next('.brand-description');

        title.fadeOut(function() {
            description.css("display", "block").animate({ opacity: 1 }, 500); // Muestra y desvanece la descripción
        });

        description.click(function() {
            description.animate({ opacity: 0 }, 500, function() { // Reduce la opacidad gradualmente
                description.css("display", "none");
                title.fadeIn(); // Muestra el título después de la animación
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




    // IMÁGENES CARDS 
    
});