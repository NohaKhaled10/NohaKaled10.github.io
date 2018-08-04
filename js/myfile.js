//vertical navbar
function openNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "276px";
}

function closeNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "0";
}

$('.parallax-window').parallax({imageSrc: 'img/cover_bg_1.jpg'});
$('.timer').countTo();
$(document).ready(function () {
    "use strict";
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.fa-arrow-down').removeClass('fa-arrow-down').addClass('fa-arrow-up');
        
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.fa-arrow-up').removeClass('fa-arrow-up').addClass('fa-arrow-down');  
    });
    
});
$('.panel-heading a').click(function () {
    "use strict";
    $('.panel-heading').removeClass('active');
    if (!$(this).closest('.panel').find('.panel-collapse').hasClass('in')) {
        $(this).parents('.panel-heading').addClass('active');
    }
});
//google map
function loadMap() {
    "use strict";
    var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
				
    var map = new google.maps.Map(document.getElementById("sample"), mapOptions);
}
