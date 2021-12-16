const links = require('./links.js');
const meta = require('./meta.js');
exports.data = {
    title: "Main Page",
    company: 'PGF',
    footer: `
    <img src='/images/icons/icon-72x72.png'>
    <p>© ${(new Date()).getFullYear()} Populus Financial Group™. All Rights Reserved.</p>`
};

exports.render = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta name=description content="${data.company} Design System">
${meta}
<title>
${data.company} - ${data.title}
</title>
${links}
<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Raleway:wght@100;400&display=swap');
body {
    margin: 0;
}
</style>

</head>
<body>
    ${data.content || data.safe}
</body>
<script src='/javascript/squid-code-ui.min.mjs' ></script>
</html>
`; 