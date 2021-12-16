exports.data = {
    title: "Design Systems",
    layout: "base_layout.11ty.js",
  };
  
  exports.render = (data) => `
  <style>
  #craneBox {
    grid-column: 5/6;
    grid-row: 2/3;
    align-self: end;
    justify-self: end;
  }
  #largeCrane {
    grid-column: 3/3;
    grid-row: 1/2;
    align-self: end;
  }
  .heroHeader {
    display:grid;
    background-color:var(--color-primary-default);
    height:70vh;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(3,1fr);
  }
  .heroText {
    grid-row: 3/4;
    grid-column: 2/4;
    overflow-wrap: break-word;
  }
  .headerTitle {
    font-size: 3rem;
    margin: 0 0 16px 0;
    font-family: 'Raleway', sans-serif;
  }
  .headerDescription {
    font-size: 1.125rem;
    font-family: 'Merriweather', serif;
  }
  div {
    color:white;
  }
  h1 {
    color: white;
    font-size: 3rem;
  }
  .sections{
    
    display:flex;
    justify-content: space-evenly;
    margin-top: 10vh;
  }
  .section {
    color:black;
  }
  .sectionBox {
    padding: 16px;
    border: 1px solid gray;
    box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px, rgba(0,0,0,0.05) 0px 1px 4px 0px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 300px;
    border-radius:4px;
  }
  .sectionBox:hover {
    border: 2px solid gray;
  }
  .sectionBox .icon {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  .sectionBox .sectionTitle  {
    grid-row: 1/2;
    grid-column: 2/3;
    color: var(--color-primary-default);
    font-size: 1.125rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    align-self: end;
  }
  .sectionBox .sectionDescription {
    grid-row: 2/3;
    grid-column: 2/-1;
  }
  .hidden-text{
    position: absolute;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    width: 1px;
    height: 1px;
    word-wrap: normal
  }
  @media only screen and (max-width: 600px){
    #craneBox, #largeCrane{
      display: none;
    }
    html {
      font-size:12px;
    }
    .heroHeader {
      display:grid;
      background-color:var(--color-primary-default);
      height:200px;
      grid-template-columns: repeat(1,1fr);
      grid-template-rows: repeat(1,1fr);
    }
    .heroText {
      grid-row: 1/2;
      grid-column: 1/2;
      overflow-wrap: break-word;
      padding: 16px;
    }
    .sections {
      display: flex;
      align-items: center;
      margin-top: 16px;
      flex-direction: column;
    }
    .sectonBox {
      width: 90vw;
    }
  }
  </style>
  <div class='content'>
  <div class='heroHeader'>
  <svg id='craneBox' width="235" height="247" viewBox="0 0 235 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M134.833 236.879C138.665 236.879 141.771 234.32 141.771 231.164C141.771 228.007 138.665 225.448 134.833 225.448C131.002 225.448 127.896 228.007 127.896 231.164C127.896 234.32 131.002 236.879 134.833 236.879Z" stroke="white"/>
<path d="M221.167 236.879C224.998 236.879 228.104 234.32 228.104 231.164C228.104 228.007 224.998 225.448 221.167 225.448C217.335 225.448 214.229 228.007 214.229 231.164C214.229 234.32 217.335 236.879 221.167 236.879Z" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M124.042 160.671H175.688V205.761L194.188 186.709H223.479V205.761H124.042V160.671Z" stroke="white" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M223.479 218.462H127.896C121.729 223.966 118.646 228.2 118.646 231.164C118.646 234.127 121.729 238.573 127.896 244.5H223.479C230.16 239.846 233.5 235.401 233.5 231.164C233.5 226.927 230.16 222.693 223.479 218.462Z" stroke="white" stroke-width="2"/>
<path d="M140.229 218.462V212.747H212.688V218.462" stroke="white" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M194.187 186.709L129.438 55.2506L150.25 48.9L218.854 186.709H194.187Z" stroke="white" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M144.083 51.4403L136.375 69.2221L166.437 79.3831L153.333 101.61L183.396 114.947L170.292 137.809L200.354 149.875L188.021 173.373L218.854 185.439L198.812 186.709L209.604 167.657L179.542 156.226L191.104 131.458L161.812 120.662L174.146 97.1649L144.083 85.0987L156.417 60.3312L136.375 53.3455L144.083 51.4403Z" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M136.375 53.3455L114.021 1.27014L124.042 10.7961L144.854 50.1701L136.375 53.3455Z" stroke="white"/>
<path d="M110.937 0V90.1792L85.5 113.042V153.051H140.229L141 113.042H85.5" stroke="white" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.479 90.8143L138.687 112.406H112.479V90.8143Z" stroke="white" stroke-width="2"/>
<path d="M151.792 234.339C153.92 234.339 155.646 232.917 155.646 231.164C155.646 229.41 153.92 227.988 151.792 227.988C149.663 227.988 147.938 229.41 147.938 231.164C147.938 232.917 149.663 234.339 151.792 234.339Z" stroke="white"/>
<path d="M204.208 234.339C206.337 234.339 208.062 232.917 208.062 231.164C208.062 229.41 206.337 227.988 204.208 227.988C202.08 227.988 200.354 229.41 200.354 231.164C200.354 232.917 202.08 234.339 204.208 234.339Z" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M129.438 168.292V186.709H158.729C158.135 178.336 156.079 173.044 152.562 170.832C149.046 168.621 141.337 167.774 129.438 168.292Z" stroke="white"/>
<path d="M48 212.5H1V246.5H48V212.5Z" stroke="white"/>
<path d="M96 212.5H49V246.5H96V212.5Z" stroke="white"/>
<path d="M48 177.5H1V211.5H48V177.5Z" stroke="white"/>
</svg>

  <svg id='largeCrane' width="271" height="178" viewBox="0 0 271 178" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M167.5 177H200L196 23H167.5V177Z" stroke="white"/>
<path d="M270.5 44H225.5V82H270.5V44Z" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M167.5 28H149V64.5H167.5V28Z" stroke="white"/>
<path d="M163.5 30H149.5V57H163.5V30Z" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M259.5 21.5L31.5 24.5L2 1H259.5V21.5Z" stroke="white"/>
<path d="M248 43.5V21.5" stroke="white"/>
<path d="M40 24.5L41.5 89H36L40 97.5H45L48.5 89H42.5" stroke="white"/>
<path d="M43 97.5V101.5C44.7647 102.323 45.7647 103.323 46 104.5C46.353 106.265 46.0401 107.74 44.5 109C43.4733 109.84 42.1399 109.84 40.5 109L39 106.5" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 20V28H46V20H40V27V20H34Z" stroke="white"/>
<path d="M167.5 171H200L166 138L199 110.5L167.5 83.5L197 56L167.5 29.5L195.5 23H167.5H195.5L167.5 29.5H197L167.5 56L198 82.5L167.5 110.5L199 138L167.5 171ZM167.5 171H200H167.5Z" stroke="white"/>
<path d="M259.5 1L237.5 21.5L216 1L194.5 21.5L171 1L149 23L126.5 1L104 23L83.5 1L57 24L34 1L18 14L2 1H18L34 24.5L60.5 1L83.5 24L104 1L126.5 23L149 1L172.5 23L193.5 1L216 21.5L237.5 1L259.5 21.5" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5 108.5L24.5 121V133H76.5V120.5L42.5 108.5Z" stroke="white"/>
<path d="M24.5 121H76.5" stroke="white"/>
<path d="M42.5 108.5C42.5 109.167 42.5 113.333 42.5 121" stroke="white"/>
</svg>

    <div class='heroText'>
    
      <div class='headerTitle'>Populus One</div>
      <div class='headerDescription'>Populus One provides everything you 
      needed to  quickly design, build, and ship coherent experiences Across 
      all of PFG - from the brand and products itself, down to how we send emails 
      and write copy</div>
    </div>
  </div>
  <div class='sections'>
  ${data.collections.sections.map(selection =>`
  
  <div class='sectionBox'>
    <div class='icon'><a href='${selection.url}'><span class='hidden-text'>${selection.data.title}</span>${selection.data.icon}</a></div>
    <div class='sectionTitle section'>${selection.data.title}</div>
    <div class='sectionDescription section'>${selection.data.description}</div>
  </div>
  `).join('')}
  </div>
  </div>
  `;