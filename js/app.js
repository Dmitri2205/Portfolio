jQuery(document).ready(function() {
    jQuery('.skills').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        classToRemove: 'hidden',
        offset: 0
    });

    jQuery('.portfolio').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        classToRemove: 'hidden',
        offset: 0
    });

    jQuery('.courses').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        classToRemove: 'hidden',
        offset: 0
    });

    jQuery('.education').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        classToRemove: 'hidden',
        offset: 0
    });
      jQuery('.resume').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__slideInUp',
        classToRemove: 'hidden',
        offset: 50
    });
});