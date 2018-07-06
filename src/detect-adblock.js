'use strict';
(function () {
    angular.module('detectAdblock', [])
        .provider('adblock', function () {
            this.imagePath = 'https://pbs.twimg.com/profile_images/809117081274814464/az-86S-3_400x400.jpg';
            this.title = 'Adblock Detected!';
            this.description = 'Oops! Your browser is using the Adblock Plugin. You can not access to this website with the adblock plugin. To continue website please disable adblock plugin in you browser settings.';
            /*this.close = true;
            this.refresh = true;*/

            this.$get = ['$injector', '$document', function ($injector, $document) {

                var imagePath = this.imagePath;
                var title = this.title;
                var description = this.description;
                var close = this.close;
                var refresh = this.refresh;

                function _detect() {
                    var ad = angular.element('<ins></ins>');
                    ad.css({
                        'display': 'block',
                        'position': 'absolute',
                        'top': '-1px',
                        'height': '-1px'
                    });
                    var body = $document.find('body').eq(0);
                    body.append(ad);
                    var isAdBlockEnabled = !ad.clientHeight;
                    ad.remove();
                    return isAdBlockEnabled;
                }
                

                function _template() {
                    var element = {
                        div: function () {
                            return angular.element('<div></div>');
                        },
                        img: function () {
                            return angular.element('<img>');
                        },
                        span: function () {
                            return angular.element('<span></span>');
                        },
                        p: function () {
                            return angular.element('<p></p>');
                        },
                        button: function () {
                            return angular.element('<button></button>');
                        }
                    }

                    var image = element.img();
                    image.attr('src', imagePath);

                    var alertImage = element.div();
                    alertImage.addClass('alert-image');
                    alertImage.append(image);

                    var alertTitle = element.span();
                    alertTitle.append(title);

                    var alertDescription = element.p();
                    alertDescription.append(description);

                    var alertContent = element.div();
                    alertContent.addClass('alert-content');
                    alertContent.append(alertTitle);
                    alertContent.append(alertDescription);

                    var cancelButton = element.button();
                    cancelButton.append('<i class="fa fa-times"></i>');
                    cancelButton.append('Cancel');
                    cancelButton.bind('click', function($event) {
                        console.log("Cancel clicked.");
                    });

                    /*
                    cancelButton.attr("on-click", 'test()');

                    var refreshButton = element.button();
                    refreshButton.append('<i class="fa fa-refresh"></i>');
                    refreshButton.append('Refresh');
                    */

                    var alertButtons = element.div();
                    alertButtons.addClass('alert-buttons');
                    //alertButtons.append(cancelButton);
                    //alertButtons.append(refreshButton);

                    var adAlert = element.div();
                    adAlert.addClass('ad-alert');
                    adAlert.append(alertImage);
                    adAlert.append(alertContent);
                    //adAlert.append(alertButtons);

                    var adblock = element.div();
                    adblock.addClass('adblock-detect');
                    adblock.append(adAlert);

                    return adblock;
                }

                function _alert() {
                    var adblock = _template();
                    var body = $document.find('body').eq(0);
                    body.append(adblock);
                }

                function _start() {
                    var adblock = _detect();
                    if (adblock == true) {
                        _alert();
                    }
                }

                return {
                    detect: _start,
                };
            }];
        })
})();