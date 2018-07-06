# angularjs-adblock

Detects browsers that use AdBlock and displays a warning on the screen.
## Usage
1. install package
**via bower:**

`$ bower install angularjs-adblock`

2. include the supplied JS and CSS file.

```sh
<link rel='stylesheet' href='dist/detect-adblock.css' type='text/css'/>
<script type='text/javascript' src='dist/detect-adblock.js'></script>
```

3. Include the loading bar as a dependency for your app.

```sh
angular.module('myApp', ['detectAdblock'])
```

4. Start detect

```sh
angular.module('myApp', ['detectAdblock'])
.run(function (adblock) {
        adblock.detect();
 });
```

5. Activate adblock and see alert.

 ![](https://preview.ibb.co/kHEO9y/Screenshot.png)

## Configuration
**Customize the template:**
```sh
    angular.module('myApp', ['detectAdblock'])
    .config(['adblockProvider', function(adblockProvider) {
        adblockProvider.imagePath = 'your_alert_image';
        adblockProvider.title = 'your_alert_title';
        adblockProvider.description = 'your_alert_description';
  }]);
```
## License
Licensed under the MIT license
