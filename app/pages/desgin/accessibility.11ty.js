

exports.data = {
    title: "Accessibility",
    tags: "design",
    layout: 'design_layout.11ty.js'
  };

  exports.render = (data) => `
  <style>
  p{
    color:var(-color-base-gray-20);
}
p.measure-6 {
    max-width: 700px;
}
.measure-6 img {
    width:100%
}
.height-4 {
    height: 40px;
    width: 40px;
}
.bg-gray-5  {
    background-color: var(--color-base-gray-90)
}
.bg-gray-10  {
    background-color: var(--color-base-gray-80)
}
.bg-gray-20  {
    background-color: var(--color-base-gray-70)
}
.bg-gray-30  {
    background-color: var(--color-base-gray-60)
}
.bg-gray-40  {
    background-color: var(--color-base-gray-50)
}
.bg-gray-50  {
    background-color: var(--color-base-gray-40)
}
.bg-gray-60  {
    background-color: var(--color-base-gray-30)
}
.bg-gray-70  {
    background-color: var(--color-base-gray-20)
}
.bg-gray-80  {
    background-color: var(--color-base-gray-10)
}
.bg-gray-90  {
    background-color: var(--color-base-gray-05)
}
.grid-row {
    display: flex;
}
.grid-col-fill {
    width: 40px;
    align-items: center;
    display: flex;
    flex-direction: column
}
table, th, td{
    border-color: var(--color-base-gray-60);
    border: 1px solid var(--color-base-gray-60);
    border-collapse: collapse;
}
th {
    background-clip: padding-box;
    font-weight: 700;
    line-height: 1.3;
    padding: .5rem 1rem;
}
tr {
    font-size: 1.06rem;
    line-height: 1.5;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
}
  </style>
  <h2 id="color-and-accessibility">Color and accessibility</h2>
  <p>Color is powerful but unreliable — its effects are neither consistent nor predictable across a population. 
  <a href="https://nei.nih.gov/health/color_blindness/facts_about">Approximately 0.5% of adult women and 8% of adult men</a> 
  (4.5% of the total population) have some kind of color insensitivity. Color insensitivity can make it difficult to distinguish 
  hues (red/green color blindness is the most common form), and some rare conditions prevent the perception of hue altogether. 
  Commonplace vision problems like short- and near-sightedness and astigmatism (among others) also affect how well folks 
  perceive color and contrast.</p>
  <p>Color is powerful but unreliable — its effects are neither consistent nor predictable across a population. 
  <a href="https://nei.nih.gov/health/color_blindness/facts_about">Approximately 0.5% of adult women and 8% of adult men</a> 
  (4.5% of the total population) have some kind of color insensitivity. Color insensitivity can make it difficult to 
  distinguish hues (red/green color blindness is the most common form), and some rare conditions prevent the perception 
  of hue altogether. Commonplace vision problems like short- and near-sightedness and astigmatism (among others) also affect 
  how well folks perceive color and contrast.</p>
  <p><a href="https://section508.gov/">Section 508</a>, which aligns with 
  <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0">WCAG 2.0 Level AA</a>, sets a legal standard for the 
  contrast level necessary between text and its background. The baseline AA contrast standard is 4.5:1 for most text and 3:1 for 
  large text (19px+ bold or 24px+ normal text).</p>
  <h3 id="accessible-color-pairings">Accessible color pairings</h3>
  <p>USWDS helps teams choose accessible colors with a color grade system. Let’s look at the <code class="language-plaintext highlighter-rouge">gray</code> color family, in grades 5-90 (grade 0 is <code class="language-plaintext highlighter-rouge">white</code>):</p>
  <div class="padding-2 bg-white radius-md measure-3">
    <div class="grid-row">
      <div class="grid-col-fill">
        <div class="bg-gray-5 height-4"></div>
        <div class="text-center margin-top-2px">5</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-10 height-4"></div>
        <div class="text-center margin-top-2px">10</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-20 height-4"></div>
        <div class="text-center margin-top-2px">20</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-30 height-4"></div>
        <div class="text-center margin-top-2px">30</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-40 height-4"></div>
        <div class="text-center margin-top-2px">40</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-50 height-4"></div>
        <div class="text-center margin-top-2px">50</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-60 height-4"></div>
        <div class="text-center margin-top-2px">60</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-70 height-4"></div>
        <div class="text-center margin-top-2px">70</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-80 height-4"></div>
        <div class="text-center margin-top-2px">80</div>
      </div><!-- swwatch -->
      <div class="grid-col-fill">
        <div class="bg-gray-90 height-4"></div>
        <div class="text-center margin-top-2px">90</div>
      </div><!-- swwatch -->
    </div>
  </div>
  <p class="font-lang-2xs"><strong>Above:</strong> Each color family has ten grades, from 5-90. Pure <code class="language-plaintext highlighter-rouge">white</code> is the equivalent of grade 0, and pure <code class="language-plaintext highlighter-rouge">black</code> is the equivalent of grade 100.</p>
  <h3 id="magic-number">Magic number</h3>
  <p>We call the difference in grade between any two colors the <em>magic number</em>. Magic numbers have important contrast implications:</p>
  <ul>
    <li><strong>A magic number of 40+</strong> results in WCAG 2.0 AA Large Text contrast (example: <code class="language-plaintext highlighter-rouge">gray-90</code> and <code class="language-plaintext highlighter-rouge">indigo-warm-50v</code>).</li>
    <li><strong>A magic number of 50+</strong> results in WCAG 2.0 AA contrast or AAA Large Text contrast (example: <code class="language-plaintext highlighter-rouge">gray-90</code> and <code class="language-plaintext highlighter-rouge">red-40</code>).</li>
    <li><strong>A magic number of 70+</strong> results in WCAG 2.0 AAA contrast (example: <code class="language-plaintext highlighter-rouge">gray-10</code> and <code class="language-plaintext highlighter-rouge">red-80</code>).</li>
    <li><strong>Colors of grade 50</strong> result in Section 508 AA contrast against both pure white (grade <code class="language-plaintext highlighter-rouge">0</code>) and pure black (grade <code class="language-plaintext highlighter-rouge">100</code>).</li>
  </ul>
  <p>Use USWDS magic numbers to choose accessible color combinations from any palette and color family.</p>
  <p>USWDS magic number works because each grade conforms to a specific range of values for <a href="https://www.w3.org/WAI/GL/wiki/Relative_luminance">relative luminance</a>. WCAG and Section 508 color contrast is calculated as a ratio of the relative luminances of two colors, so as long as our colors fall between a specific luminance range for each grade, the ratio will conform to contrast requirements.</p>
  <table>
    <thead>
      <tr>
        <th>grade</th>
        <th>minimum luminance</th>
        <th>maximum luminance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">0</code></td>
        <td><code class="language-plaintext highlighter-rouge">1.000</code></td>
        <td><code class="language-plaintext highlighter-rouge">1.000</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">5</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.850</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.930</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">10</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.750</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.820</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">20</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.500</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.650</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">30</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.350</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.450</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">40</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.250</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.300</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">50</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.175</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.183</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">60</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.100</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.125</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">70</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.050</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.070</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">80</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.020</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.040</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">90</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.005</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.015</code></td>
      </tr>
      <tr>
        <td><code class="language-plaintext highlighter-rouge">100</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.000</code></td>
        <td><code class="language-plaintext highlighter-rouge">0.000</code></td>
      </tr>
    </tbody>
  </table>
  <h4 id="accessible-color-combination-examples">Accessible color combination examples</h4>
  <p class="measure-6"><img src="/images/gray-example.png" alt="gray color contrast example"></p>
  <p class="font-lang-2xs"><strong>Above:</strong> Since <code class="language-plaintext highlighter-rouge">90 – 50 = 40</code>, on a background of <code class="language-plaintext highlighter-rouge">gray-90</code> use grades of <code class="language-plaintext highlighter-rouge">40</code> and below to assure Section 508 AA contrast. Grades of <code class="language-plaintext highlighter-rouge">50</code> and below are acceptable for large text.</p>
  <p class="measure-6 margin-top-5"><img src="/images/indigo-warm-example.png" alt="indigo color contrast example"></p>
  <p class="font-lang-2xs"><strong>Above:</strong> The color grade system works across color families.</p>
  <h3 id="color-contrast-and-readability">Color, contrast, and readability</h3>
  <p>Readability is the ease with which a reader can understand a written text. It’s a complicated phenomenon affected by many factors in addition to color and contrast, including (but not limited to) type size, typeface, line length, line height, whitespace, word choice, content design, and writing style. Readability issues can be especially important when your site contains documentation or detailed text that requires concentration.</p>
  <p>But when it comes to color, consider these general guidelines:</p>
  <ul>
    <li>Section 508 AA+ color contrast helps colorblindness and color perception.</li>
    <li>Avoiding pure black text on white helps dyslexia, <a href="https://irlen.com/what-is-irlen-syndrome/">Irlen Syndrome</a>, light sensitivity, and autism.</li>
    <li>Best combination is the max color contrast of white/light text on black/dark background which seems to visually work well for all.</li>
    <li>The best option, when possible, is to provide a way for users to select their own text and background colors.</li>
  </ul> 
  `;