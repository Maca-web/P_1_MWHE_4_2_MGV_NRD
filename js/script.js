
// FLIPPING CARDS 


// BRANDS
$(document).ready(function() {
    $('.brand-title').click(function() {
        var description = $(this).next('.brand-description');
        
        // Ocultar el h2
        $(this).fadeOut(function() {
            // Al ocultar el h2, mostrar el p
            description.slideDown(); // Muestra el p con efecto de deslizamiento
        });
    });
});