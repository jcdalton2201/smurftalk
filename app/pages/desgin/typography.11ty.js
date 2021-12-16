exports.data = {
    title: "Typography",
    tags: "design",
    layout: 'design_layout.11ty.js'
  };

  exports.render = (data) => `
  <style>
.typo-container {
    font-weight: var(--font-weight-light);
}
.intro{
    font-size:var(--size-medium);
    color:var(--color-base-gray-10);
    line-height:1.65
}
.very-small {
    font-size: var(--size-font-very-small);
}
.small {
    font-size: var(--size-font-small);
}
.large {
    font-size: var(--size-font-large);
}
.size-tree{
    display: grid;
    grid-template-columns: repeat(5,1fr);
}
.size-tree-title, .size-tree-item{
    border-bottom: 1px solid gray;
    padding: 8px 0;
}
.font-tree{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.font-tree-title, .font-tree-item{
    border-bottom: 1px solid gray;
    padding: 8px 0;
}
.acumin {
    font-family:  acumin-pro, sans-serif;
    font-weight: var(--font-weight-regular);
}
.acumin-italic {
    font-style: italic;
    font-family:  acumin-pro, sans-serif;
    font-weight: var(--font-weight-regular);
}
.cabin {
    font-family: var(--font-cabin-name);
    font-weight: var(--font-weight-regular);
}
.cabin-italic{
    font-style: italic;
    font-family: var(--font-cabin-name);
    font-weight: var(--font-weight-regular);
}
.nunito {
    font-family: var(--font-nunito-name);
    font-weight: var(--font-weight-regular);
}
.nunito-italic{
    font-style: italic;
    font-family: var(--font-nunito-name);
    font-weight: var(--font-weight-regular);
}
.extra-light{
    font-weight: var(--font-weight-extra-light);
}
.light{
    font-weight: var(--font-weight-light);
}
.medium{
    font-weight: var(--font-weight-medium);
}
.semi{
    font-weight: var(--font-weight-semi-bold);
}
.bold {
    font-weight: var(--font-weight-bold);
}
.extra-bold {
    font-weight: var(--font-weight-extra-bold);
}
.black {
    font-weight: var(--font-weight-black);
}
  </style>
  <div class='typo-container'>
        <h1>Typography</h1>
        <p class='intro'>
        Typography is the foundation for tone, voice, and content. Comet’s typography maximizes 
        legibility and communicates concepts clearly to enable users to enjoy discovering content.
        </p>
        <h2 class='famlies'>Families</h2>
        <h3 class='cabin'>Cabin</h3>
        <p>
        Ace's primary font family is Cabin, whose rounded sans-serif conveys a friendly first impression.     Use varying weights to establish visual hierarchy and create contrast.
        </p>
        <div class='font-tree'>
            <div class='font-tree-title'>NAME</div>
            <div class='font-tree-title'>WEIGHT</div>
            <div class='font-tree-title'>SPECIMEN</div>
            <div class='font-tree-item'>400</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item cabin'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>400 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item cabin-italic'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item cabin medium'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item cabin-italic medium'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item cabin semi'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item cabin-italic semi'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item cabin bold'>Typography as Cabin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item cabin-italic bold'>Typography as Cabin is the foundation for tone, voice, and content.</div>
        </div>
        <h3 class='nunito'>Nunito</h3>
        <p>
        Flare's and Elite's primary font family is Nunito, Nunito is a well balanced sans serif typeface superfamily, with 2 versions.
        Its a rounded terminal sans-serif font for display that pairs well with Alegreya     
        Use varying weights to establish visual hierarchy and create contrast.
        </p>
        <div class='font-tree'>
            <div class='font-tree-title'>NAME</div>
            <div class='font-tree-title'>WEIGHT</div>
            <div class='font-tree-title'>SPECIMEN</div>
            <div class='font-tree-item'>200</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item nunito extra-light'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item nunito-italic extra-light'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item nunito light'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item nunito-italic light'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>400</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item nunito'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>400 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item nunito-italic'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item nunito medium'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item nunito-italic medium'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item nunito semi'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item nunito-italic semi'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito bold'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito-italic bold'>Typography as Nunito is the foundation for tone, voice, and content.</div>

            <div class='font-tree-item'>800</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito extra-bold'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>800</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito-italic extra-bold'>Typography as Nunito is the foundation for tone, voice, and content.</div>

            <div class='font-tree-item'>900</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito black'>Typography as Nunito is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>900</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item nunito-italic black'>Typography as Nunito is the foundation for tone, voice, and content.</div>
        </div>

        <h3 class='acumin'>Acumin</h3>
        <p>
        Flare's and Elite's primary font family is Acumin, Acumin is a well balanced sans serif typeface superfamily, with 2 versions.
        Its a rounded terminal sans-serif font for display that pairs well with Alegreya     
        Use varying weights to establish visual hierarchy and create contrast.
        </p>
<div class='font-tree'>
            <div class='font-tree-title'>NAME</div>
            <div class='font-tree-title'>WEIGHT</div>
            <div class='font-tree-title'>SPECIMEN</div>
            <div class='font-tree-item'>200</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item acumin extra-light'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item acumin-italic extra-light'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item acumin light'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>200 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item acumin-italic light'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>400</div>
            <div class='font-tree-item'>normal</div>
            <div class='font-tree-item acumin'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>400 italic</div>
            <div class='font-tree-item'>italic</div>
            <div class='font-tree-item acumin-italic'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item acumin medium'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>500</div>
            <div class='font-tree-item'>medium</div>
            <div class='font-tree-item acumin-italic medium'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item acumin semi'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>600</div>
            <div class='font-tree-item'>semi-bold</div>
            <div class='font-tree-item acumin-italic semi'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin bold'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>700</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin-italic bold'>Typography as Acumin is the foundation for tone, voice, and content.</div>

            <div class='font-tree-item'>800</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin extra-bold'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>800</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin-italic extra-bold'>Typography as Acumin is the foundation for tone, voice, and content.</div>

            <div class='font-tree-item'>900</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin black'>Typography as Acumin is the foundation for tone, voice, and content.</div>
            <div class='font-tree-item'>900</div>
            <div class='font-tree-item'>bold</div>
            <div class='font-tree-item acumin-italic black'>Typography as Acumin is the foundation for tone, voice, and content.</div>
        </div>
        <h2 class='famlies'>Tokens</h2>
        <h3>Sizes</h3>
        <p>
        Use size tokens in your style to align with Populus' sizing of most commonly used textual elements.

In the absence of a token, consider the use of --size-font-medium for most elements in your interface.

Populus' basic typography standard avoids resizing typography responsively for different viewport sizes. For specialized components, 
products should consider moderating the size of very large headings on small screens.
        </p>
        <div class='size-tree'>
            <div class='size-tree-title'>Value</div>
            <div class='size-tree-title'>Web</div>
            <div class='size-tree-title'>Adroid</div>
            <div class='size-tree-title'>IOS</div>
            <div class='size-tree-title'>example</div>
            
            <div class='size-tree-item'>12px /.75rem</div>
            <div class='size-tree-item'><code>--size-font-very-small</code></div>
            <div class='size-tree-item'><code>sizeFontVerySmall</code></div>
            <div class='size-tree-item'><code>fontVerySmall</code></div>
            <div class='size-tree-item very-small'>Populus Finacial</div>

            <div class='size-tree-item'>14px /.875rem</div>
            <div class='size-tree-item'><code>--size-font-small</code></div>
            <div class='size-tree-item'><code>sizeFontSmall</code></div>
            <div class='size-tree-item'><code>fontSmall</code></div>
            <div class='size-tree-item small'>Populus Finacial</div>

            <div class='size-tree-item'>16px /1rem</div>
            <div class='size-tree-item'><code>--size-font-medium</code></div>
            <div class='size-tree-item'><code>sizeFontMedium</code></div>
            <div class='size-tree-item'><code>fontMedium</code></div>
            <div class='size-tree-item'>Populus Finacial</div>

            <div class='size-tree-item'>32px /2rem</div>
            <div class='size-tree-item'><code>---size-font-large</code></div>
            <div class='size-tree-item'><code>sizeFontLarge</code></div>
            <div class='size-tree-item'><code>fontLarge</code></div>
            <div class='size-tree-item large'>Populus Finacial</div>
            
        </div>
        </div>
  `;