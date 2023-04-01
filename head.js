let head = `
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Andrew and Joan are getting married!" />
        <meta NAME="author" content="Andrew and Joan">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
        <meta http-equiv="Pragma" content="no-cache"/>
        <meta http-equiv="Expires" content="0"/>

        <title>Andrew and Joan are getting married!</title>
        <link rel='shortcut icon' href='Jody_Logo.png' type='image/x-icon' />
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous" maxage = 86400></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css" max-age=86400>
        <link rel="stylesheet" href="styles/github-activity-0.1.4.min.css" max-age=86400>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js" max-age=86400></script>
        <script type="text/javascript" src="scripts/github-activity-0.1.4.min.js" max-age=86400></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" max-age=86400>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js" max-age=86400></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

        <link rel="stylesheet" href="wedding.css">

        <script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-84941217-1', 'auto');
            ga('send', 'pageview');
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js" integrity="sha256-CutOzxCRucUsn6C6TcEYsauvvYilEniTXldPa6/wu0k=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.20/moment-timezone-with-data.min.js" integrity="sha256-VbgTHb5lNUXSO3dpUopgsh61ITkA7UBADWrQvcaj/vY=" crossorigin="anonymous"></script>
        <script src="scripts/custom.js" charset="utf-8"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.collapsible');
                var instances = M.Collapsible.init(elems, options);
            });
        </script>
    </head>
`;
document.getElementById("head").innerHTML = head;