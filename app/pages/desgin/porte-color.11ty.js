// const links = require('../../style/tokens.css');
const fs = require('fs');
const style = fs.readFileSync('./app/style/porte-tokens.css','utf8');
const list = style.split("\n").filter(x => x.startsWith('  --color')).map(item => {
  const parts = item.split(':');
  return {
    name: parts[0].trim(),
    value:parts[1].substring(1,8)
  }
});
console.log(list);
exports.data = {
    title: "Porte Color",
    tags: "design",
    layout: 'design_layout.11ty.js',
    date: new Date('2016-01-02')
};
  
exports.render = (data) => ` 
<style>
.color-container {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-gap: 8px;
  font-weight: var(--font-weight-light);
}
header {
grid-column: 1/-1;
}
p {
grid-column: 1/3;
}
.page-description {
grid-column: 1/3;
color: var(--color-base-gray-10)
  font-size: .875rem;
  line-height: 1.71429;
  font-weight: 400;
}
.empty {
grid-column:3/-1;
}
.page-intro {
font-size: 1.25rem;
line-height: 1.6;
font-weight: 300;
color: var(--color-base-gray-10)
}
.intro-title {
font-size: 1.25rem;
font-weight: 600;
margin: 0 0 8px 0;
}
.colorsGrid {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  grid-column: 1/-1;
}
@media only screen and (max-width: 600px){
  .colorsGrid {
    justify-self:center;
  }
}
</style>
<div class='color-container'>
<header>
<h1 id='color' class='page-title'>Color</h1>
</header>
<p class='page-intro'>
Color is a practical and emotional tool. It conveys personality, sets a tone, and attracts attention, and indicates importance.
</p>
<div class="page-description">
<h2 >Introduction</h2><br>
Use focused, meaningful color to pinpoint exactly what people need to see. 
We are committed to complying with the <a href="http://www.w3.org/TR/WCAG/">Web Content Accessibility Guidelines 
AA standard contrast ratios</a>. To do this, choose primary, secondary, and extended colors that support usability by 
ensuring sufficient color contrast between elements so that people with low vision can see and use our products.</div>
<p class='empty'></p>
<h1>Porte Brand Colors</h1>
<div class='colorsGrid'>
${list.map(item => ` 
<squid-color-card colorName='${item.name}'  tokenName='${item.name}' androidName='${item.name.replace('--','').replaceAll('-','_')}'
iosName='${item.name.replace('--color','').replaceAll('-','').replace(/base./g,(word,index)=>{
return `base${ word[4].toUpperCase()}`;
})}'
colorValue='${item.value}'></squid-color-card>
`).join('')}
</div>
 `;