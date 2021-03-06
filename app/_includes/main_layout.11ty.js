exports.data = {
    title: "My Rad Blog"
  };
  
  exports.render = function(data) {
      return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name=description content="Test blog site">
    <title>Smurf Talk</title>
    <link rel="stylesheet" href="/style/tokens.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Raleway&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: 'Raleway', sans-serif;
        }
        .container {
            display: grid;
            grid-template-columns: 1fr 6fr;
            grid-template-rows: 70px auto 70px;
            grid-template-areas:
                "header header"
                "sidebar main"
                "footer footer";
        }

        header {
            grid-area: header;
            display: grid;
            grid-template-columns: 200px 40% auto 70px 70px;
            border-bottom: 1px solid var(--color-primary-default, blue);
            background-color: var(--color-primary-default, gray);
            font-family: 'Merriweather', serif;
        }

        header div {
            display: flex;
            align-items: center;
        }

        header .logo {
            justify-content: center;
            height: 70px;
        }
        header .logo img{
            height: 70px;
        }

        header .alert {
            justify-content: center;
        }

        header .login {
            justify-content: center;
        }
        header .title {
            font-size: 4rem;
            color:white;
        }

        nav {
            grid-area: sidebar;
            padding: 8px 0 0 8px;
            overflow-wrap: break-word;
            text-overflow: ellipsis;
        }
        nav div {
            overflow-wrap: break-word;
            text-overflow: ellipsis;
        }

        .sink {
            grid-area: main;
            padding: 8px;
        }

        footer {
            grid-area: footer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        footer .logo {
            display: flex;
            align-items: center;
            justify-content: center;
           
        }
        footer .logo img {
            height:30px;
        }
        h1,h2 {
            font-family: 'Merriweather', serif;
        }
    </style>
</head>
<body>
    <div class='container'>
        <header>
            <div class='logo'>
                <a href='/'>
                    <img src="/images/logo.png" alt="logo" srcset="">
                </a>
            </div>
            <div class='title'>Smurf Talk</div>

        </header>
        <nav>
            <!--<squid-accordion-group>
                <squid-accordion>
                    <span slot="summary">Foundation</span>
                    <span slot="content"> -->
                    ${data.collections.post.map(post => `
                    <div>
                            <squid-a  variant='text' href=${post.url} id="${post.data.title}">${post.data.title}</squid-a>
                        </div>
                    `).join('')}
                        
                    </span>
              <!--  </squid-accordion>
                </sauid-accordion-group>-->
        </nav>
        <div id='sink' class='sink editable'>
        ${data.content}
        </div>
        <footer>
            <div class='logo'><img src="/images/logo.png" alt="logo" srcset="">&#169; Smurf Talk&trade; All Rights Reserved</div>

        </footer>
    </div>
</body>
<script src='/javascript/squid-core-ui.min.mjs' ></script>
</html>`;};