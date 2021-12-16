exports.data = {
    layout: "brand_layout.11ty.js",
    title: "Brand",
    tags: "sections",
    description: "Visual patterns and guidelines for PFG brands.",
     icon: `
     <svg aria-label='brand' aria-hidden="true" class="svg-spot spotTheme" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M16.83 45h.67l25.22-25.56a3 3 0 000-4.25l-5.07-5.07a3 3 0 00-4.24 0L17 26.52V44a3 3 0 01-.17 1z"></path><path d="M9 43a4 4 0 110-8 4 4 0 0 1 0 8zm0-2a2 2 0 100-4 2 2 0 0 0 0 4zm5-40H4a3 3 0 00-3 3v40a3 3 0 003 3h40a3 3 0 003-3V34a3 3 0 00-3-3H28.15l12.57-12.56a3 3 0 000-4.25l-7.07-7.07a3 3 0 00-4.24 0L17 19.52V4a3 3 0 00-3-3zm30 44H16.83a3 3 0 00.17-1v-1.85L26.15 33H44a1 1 0 011 1v10a1 1 0 01-1 1zm-4.7-27.98L17 39.32V22.37L30.82 8.54a1 1 0 011.41 0l7.08 7.07a1 1 0 010 1.41zM3 4a1 1 0 011-1h10a1 1 0 011 1v40a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path></svg>
     `
  };

  exports.render = (data) => `
  
  
  ${data.content|| `
  <style>
   h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 3rem;
   }
   h2 {
    font-family: 'Raleway', sans-serif;
   }
   .subtitle{
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size:2rem;
   }
   .brandBody {
       display:flex;
       justify-content:center;
   }
   .sectionBody {
    max-width: 1100px;
    font-family: 'Merriweather', serif;
   }
  </style>
  <div class='brandBody'>
  <section class='sectionBody'>
    <h1>Brand Overview</h1>
    <div class='subtitle editable' >
        A brand is not a logo or a name. It’s the sum of the experiences people have with a product or company. 
        Each experience shapes an individual’s perception of a brand, whether it’s visiting a website, 
        reading an ad, calling a customer support line, or hearing a friend’s opinion.
    </div>
    <h2>Our Brand Philosophy</h2>
    <p class='editable' >
        Much of what makes a brand is intangible and shaped by impressions. By articulating some of the intangible 
        aspects of the Populus brand, the tools included in this site are designed to help us remain true to 
        who we are and what we stand for. The tools provide the visual and verbal information needed to offer 
        positive and consistent brand experiences to anyone who interacts with Populus, at any level. <a href='/pages/brand/brand-description'>
        a link to our brands</a>
    </p>
    <h2>Our Mission</h2>
    <p class='editable'>
        At Populus, we’re motivated by our mission to empower customer success. Our independent stance within 
        the financial services world is unshakeable. Staying true to our practice of long-term investing and 
        advocating for customers’ rights, even when the crowds are doing the opposite, is how we remain a trusted 
        voice of reason that rises above the market noise.
    </p>
    <p class='editable'>
        People don’t just need financial information—they need it in a form they can understand and use. Populus 
        has always valued design as an effective way to communicate complex ideas. We work to create experiences that 
        engage and enlighten people by using thoughtful, precise, and logical information design. From our early days 
        designing elegant reports on financial data to the user experience we build into our products today, we help 
        reveal valuable insights by making challenging information easier for all types of people to consume.
    </p>
    <h2>Why Design Matters</h2>
    <p class='subtitle editable'>Design is no longer an option. It’s an imperative to realize a competitive advantage in today’s financial services landscape.</p>
    <p class='editable'>
        Industry research has substantiated the value of design, quantifying the commercial impact of design-led 
        thinking for top-performing companies.
        <br>
        To accelerate clients’ use of the PFG’s global banking and lending capabilities, we deliver digital products 
        and services that solve real business problems with innovative, elegant and easy-to-use solutions.
    </p>
    <h2>Using Brand Documentation</h2>
    <p class='editable'>
        The foundational tools here provide the basis for ensuring positive and consistent brand experience for anyone who 
        interacts with Populus anywhere and serve as a general guideline. Should you see contradictory best practices 
        elsewhere that are specific to a product or service, please defer to those recommendations.
    </p>
    <h2>Have Brand Questions?</h2>
    <p class='editable'>
        The Brand team is dedicated to developing and evolving standards across the company. If you have any questions, 
        need support, or have work for us to review, please send an e-mail to brand@Populus.com.
    </p>

  </section>
  </div>
  `}
  `;