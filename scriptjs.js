  (function () {
    'use strict';
    function hideSubmenu() {
        var submenu = document.querySelectorAll('ul li ul');
        for (var i = 0; i < submenu.length; i++) {
            submenu[i].className = 'hide-menu';
        }
    }

    hideSubmenu();

    var menulinks = document.querySelectorAll('.menulink');
    for (var i = 0; i < menulinks.length; i++) {
        menulinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            var thismenu = this.parentNode.querySelector('ul'); // this will specify the specific element
            // alert(thismenu.innerHTML);
            // thismenu.className="show-menu";
            if (thismenu.classList.contains('hide-menu')) {
                hideSubmenu();
                thismenu.className = 'show-menu';
            } else {
                thismenu.className = 'hide-menu';
            }
        });
    }
})();
