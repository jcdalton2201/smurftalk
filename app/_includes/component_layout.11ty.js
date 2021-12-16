exports.data = {
    title: "Components",
    company: 'PGF',
    layout:'base_layout.11ty.js'
};
exports.render = (data) => `
<style>

  .container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 102px auto 80px;
    height: 99vh;
  }
  nav {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 0.125rem;
  }
  .body {
    padding: 8px 16px;
  }
  header.design {
    width: 100%;
    grid-column: 1/-1;
    grid-row: 1/2;
    border-bottom: 3px solid var(--color-secondary-default);
    padding-left: 16px;
    display: flex;
    align-items: center;
  }
  header.design img {
    height: 70px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    background-color: #afafaf;
    padding: 4px 8px;
    border: 1px solid #878787;
  }
  td {
    border: 1px solid #afafaf;
    padding: 4px 8px;
  }
  footer {
    grid-column: 1/-1;
    display: flex;
    padding: 16px 8px;

  }
  footer img{ 
    margin: 0 16px;
  }
  @media only screen and (max-width: 600px){
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 50px auto 40px;
      height: 99vh;
    }
    header.design img {
      height: 40px;
    }
    html {
      font-size:12px;
    }
  }
  </style>
  <div class='container'>
  <header class='design'>
  <a href='/'>
  <img src='/images/populus-financial-group-logo.svg'>
  </a>
  </header>
  <nav>
  <squid-a variant='text' href='/sections/components/'>Home</squid-a>
  ${data?.collections?.components.map(selection =>`
  <squid-a variant='text' href='${selection.url}'>${selection.data.title}</squid-a>
  `).join('')}
  </nav>
  <div class='body'>
${data.content || data.safe}
</div>
<footer>
${data.footer}
  </footer>
  </div>
`;