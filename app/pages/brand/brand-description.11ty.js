exports.data = {
    title: "Brand Descriptions",
    tags: "brands",
    layout: 'brand_layout.11ty.js'
  };

  exports.render = (data) => `
  <style>
   .row img {
      width: 270px;
   }
   .brandContainer {
      display:grid;
      grid-template-columns: 1fr minmax(600px, 1fr) 1fr;
      width: 98vw;
   }
   .row {
      grid-column: 2/3;
   }
   .card {
      display: grid;
      align-items: center;
      gap: 24px;
      grid-template-columns: 1fr 1fr;
      padding: 16px 0;
   }
   .pretitle {
      display: block;
      margin: 0 0 10px;
      text-align: inherit;
      line-height: 1.15em;
      letter-spacing: 1px;
      color: #2f5b7f;
      font-size: 14px;
      font-weight: 700;
   }
   .blue {
    color: #0f307a;
    font-size: 2rem;
   }
   @media only screen and (max-width: 600px){
    .container {
      grid-template-columns: 1fr;
      
    }
    .row {
      grid-column: 1/2;
    }
    .row img {
      width: 170px;
    }
    .card {
      display:block;
      gap: 8px;
      grid-template-columns: auto 1fr;
    }
    .pretitle {
      display:none;
    }
   }
  </style>
  <div class="brandContainer">
  <div class="row">
  <squid-a variant="left" class="" href="/sections/brand/" title="ACE Cash Express">Brand Home</squid-a>
      <div id="ace-cash-express" class="col-12">
        <div class="card brand-card">

          <div class="card-img-left">
            <img src="/images/logo-ace-cash-express.svg?_cchid=bd3acf7aa138c19fea22620243d401b4" alt="ACE Cash Express logo" data-cms-original-src="/images/logo-ace-cash-express.svg">
          </div>

          <div class="card-body">
            <p class="pretitle">ACE Cash Express</p>
            <h2 class="blue">We have cash when you need it most!</h2>
            <hr class="align-left">
            <div class="card-content"><p>Since 1968, ACE Cash Express has provided convenient access to financial services to consumers who prefer alternatives to traditional banking.</p>

<p>ACE Cash Express is a leading financial services provider, specializing in lending, card services, check cashing, bill pay and money transfer.</p>
</div>
            <div>
              <squid-a class="btn btn-outline-blue" href="https://www.acecashexpress.com/" target="_blank" title="ACE Cash Express">Visit Website</squid-a>
            </div>
          </div>

        </div>
      </div>
    
      <div id="ace-flare-account" class="col-12">
        <div class="card brand-card">

          <div class="card-img-left">
            <img src="/images/logo-ace-flare-account-by-metabank.svg?_cchid=d5a6dc681620ea19daeb1622a58f2b34" alt="ACE Flare™ Account by MetaBank® logo" data-cms-original-src="/images/logo-ace-flare-account-by-metabank.svg">
          </div>

          <div class="card-body">
            <p class="pretitle">ACE Flare™ Account by MetaBank®</p>
            <h2 class="blue">An account full of features.</h2>
            <hr class="align-left">
            <div class="card-content"><p>The ACE Flare™ Account by MetaBank® offers consumers a modern bank account with competitive features.&nbsp;<em>Account opening subject to identity verification.¹&nbsp;</em></p>

<p>Populus has partnered with Netspend® and MetaBank, N.A. to bring traditional banking options to a demand deposit account.</p>
</div>
            <div>
              <squid-a class="btn btn-outline-blue" href="https://www.flareaccount.com/" target="_blank" title="ACE Flare™ Account by MetaBank®">Visit Website</squid-a>
            </div>
          </div>

        </div>
      </div>
    
      <div id="ace-elite" class="col-12">
        <div class="card brand-card">

          <div class="card-img-left">
            <img src="/images/logo-ace-elite.svg?_cchid=cb5f7865d1cb075b34beadd2bbf0741b" alt="ACE Elite™ Visa® Prepaid Debit Card logo" data-cms-original-src="/images/logo-ace-elite.svg">
          </div>

          <div class="card-body">
            <p class="pretitle">ACE Elite™ Visa® Prepaid Debit Card</p>
            <h2 class="blue">Be prepared with our prepaid debit card.</h2>
            <hr class="align-left">
            <div class="card-content"><p>The ACE Elite™ Visa® Prepaid Debit Card provides consumers convenient money management options and competitive perks.&nbsp;<em>Subject to activation and identity verification.²&nbsp;</em></p>

<p>More than a basic prepaid card, the ACE Elite Card gives consumers the opportunity to take advantage of helpful features.</p>
</div>
            <div>
              <squid-a class="btn btn-outline-blue" href="https://www.aceeliteprepaid.com/" target="_blank" title="ACE Elite™ Visa® Prepaid Debit Card">Visit Website</squid-a>
            </div>
          </div>

        </div>
      </div>
    
      <div id="porte" class="col-12">
        <div class="card brand-card">

          <div class="card-img-left">
            <img src="/images/portelogo-portecolor-homepagecard.svg?_cchid=dfce83f10cfcae1a76b023ce47ce71b4" alt="Porte logo" data-cms-original-src="/images/portelogo-portecolor-homepagecard.svg">
          </div>

          <div class="card-body">
            <p class="pretitle">Porte</p>
            <h2 class="blue">Banking built for you.</h2>
            <hr class="align-left">
            <div class="card-content"><p>Porte is a premium mobile banking experience designed with you in mind.&nbsp;</p>

<p>Porte puts your banking needs in the convenience of your mobile device and brings positive change through its #DoorToChange charity program.</p>

<p><em>Account opening subject to identity verification.<sup>1</sup></em></p>
</div>
            <div>
              <squid-a class="btn btn-outline-blue" href="https://www.portebanking.com/" target="_blank" title="Porte">Visit Website</squid-a>
            </div>
          </div>

        </div>
      </div>
    

  </div>
</div>
</div>
  `;