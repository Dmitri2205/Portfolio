jQuery(document).ready(function() {
    jQuery('.goals').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 200
    });

    jQuery('.about').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 300
    });

    jQuery('.skills').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 300
    });

    jQuery('.portfolio').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 300
    });

    jQuery('.courses').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 300
    });

    jQuery('.education').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        classToRemove: 'hidden',
        offset: 300
    });
      jQuery('.resume').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__slideInUp',
        classToRemove: 'hidden',
        offset: 200
    });
        jQuery('.contacts').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__slideInUp',
        classToRemove: 'hidden',
        offset: 50
    });
});