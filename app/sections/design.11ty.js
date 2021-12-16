exports.data = {
    title: "Design",
    tags: "sections",
    description: "End-to-end design language to create simple, intuitive, and beautiful experiences.",
    icon:`<svg aria-hidden="true" class="svg-spot spotDocumentAlt" width="48" height="48" viewBox="0 0 48 48">
    <path d="M39 6c2.5 0 4 0 4 2v35a3 3 0 01-3 3H11c-2 0-2-2.34-2-4h30V6zm-19 6a4 4 0 11-8 0 4 4 0 0 1 8 0z" 
    opacity=".2"></path><path d="M10 20a1 1 0 100 2h24a1 1 0 100-2H10zm0 5a1 1 0 100 2h24a1 1 0 100-2H10zm0 
    5a1 1 0 100 2h24a1 1 0 100-2H10zm0 5a1 1 0 100 2h24a1 1 0 100-2H10zM4 4a3 3 0 013-3h30a3 3 0 013 3v1h.91C42.61 
    5 44 6.31 44 7.93v36.14A3.01 3.01 0 0140.91 47H11.1A3.01 3.01 0 018 44.07V43H7a3 3 0 01-3-3V4zm6.06 39v1.07a1 
    1 0 001.03.98H40.9a1 1 0 001.03-.98V7.93a1 1 0 00-1.03-.98H40V40a3 3 0 01-3 3H10.06zM7 3a1 1 0 00-1 1v36a1 1 0 
    001 1h30a1 1 0 001-1V4a1 1 0 00-1-1H7zm6.5 10a2.5 2.5 0 110-5 2.5 2.5 0 0 1 0 5zm0 2a4.5 4.5 0 100-9 4.5 4.5 0 0 0 0 9z">
    </path></svg>`,
    layout: "design_layout.11ty.js"
  };

  exports.render = (data) => `
  
  
  ${data.content|| `
  <style>
  .infoSection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .headline {
    font-size:2.5rem;
    font-family: 'Raleway', sans-serif;
  }
  .boxIcon {
    display: grid;
    grid-template-columns: 32px 1fr;
  }
  .boxIcon {
    display: grid;
    grid-template-columns: 32px 1fr;
    color:var(--font-color-default)
  }
  .boxIcon .bodyText{
    grid-column: 2/3;
  }
  .boxIcon svg{
    align-self: center;
  }
  .boxIcon .headline{
    align-self: center;
  }
  .boxIcon a{
    grid-column: 2/3;
  }
  .hero {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-bottom:64px;
  }
  .hero .title {
    font-size: 4rem;
    font-weight: 600;
    font-family: 'Raleway';
    margin:0 0 16px 0;
  }
  .hero .label{
    font-size: 1.75rem;
  }
  .hero .subtext {
    max-width: 400px;
    line-height: 1.5rem;
    grid-row:2/3;
  }
  .heroImage {
    width:75vh;
  }
  .heroImageDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    grid-row: 1/3;
  }
  @media only screen and (max-width: 600px){
    .heroImageDiv {
      display:none;
    }
    .infoSection {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .hero {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 8px;
    }
  }
  </style>
  <section class='sectionBody'>
  <div class="hero">
  <div class="title">
  Populus One</br>
  Design System
  </div>
  <div class='subtext'>
    <span class='label'> Build great products, faster.</span><br>
    Populus One empowers product and developennt teams, to create great experiences for PFG financial software with inclusive tools, alignment, and processes.
    </div>
    <div class='heroImageDiv'>
    <img class='heroImage' src='/images/design-one.png'>
    </div>
  </div>
  <div class="infoSection">
    <div class="infoSectionBox">
      <p class="headline">Connect with Us</p>
      <p class="bodyText">
        Need help with Populus One? Found something wrong? Reach out to us for your
        need.
      </p>
    </div>
    <div class="infoSectionBox boxIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="24px"
        width="24px"
        viewBox="0 0 24 24">
      <path
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path></svg>
      <div class="headline">Report an Issue</div>
      <div class="bodyText">
      Ran into a bug in the code or design? We use Azure Devops to track
      outstanding issues with Populus On.
      </div>
      <a  role="link"
          class="Link p-l-half m-l-4 Link--blue"
          href="https://acecashexpress.visualstudio.com/PFG%20Design/_workitems/recentlyupdated/"
          >File an issue on Azure DevOps</a>
    </div>

    <div class="infoSectionBox boxIcon">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24px"
    width="24px"
    viewBox="0 0 24 24">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
      <div class="headline">Get Help</div>
      <div class="bodyText">
      You can reach the Design team in the #ask-designsystem Teams channel.
      </div>
      <a  role="link"
          class="Link"
          href="https://acecashexpress.visualstudio.com/PFG%20Design/_workitems/recentlyupdated/"
          >Join the Teams channel</a>
    </div>
    <div class="infoSectionBox boxIcon">
    </div>
    <div class="infoSectionBox boxIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="24px"
        width="24px"
        viewBox="0 0 24 24">
        <path
          d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
        ></path></svg>
      <div class="headline">Suggest an Idea</div>
      <div class="bodyText">
      Have an idea for a component, pattern, or documentation? Submit your
            idea to&nbsp;Azure DevOps.
      </div>
      <a
            role="link"
            class="Link p-l-half m-l-4 Link--blue"
            href="https://acecashexpress.visualstudio.com/PFG%20Design/_workitems/recentlyupdated/"
            >Add an idea on Azure DevOps</a
          >
    </div>

    <div class="infoSectionBox boxIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="24px"
        width="24px"
        viewBox="0 0 24 24">
        <path
          d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"
        ></path></svg>
      <div class="headline">Populus One Roadmap</div>
      <div class="bodyText">
      We update our roadmap every quarter with what we’re working on.
      </div>
      <a
            role="link"
            class="Link p-l-half m-l-4 Link--blue"
            href="https://acecashexpress.visualstudio.com/PFG%20Design"
            >View the roadmap</a
          >
    </div>

  </div>
  </section>
  `}
  
  
  `;