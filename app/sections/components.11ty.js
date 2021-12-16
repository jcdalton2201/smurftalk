exports.data = {
    layout: "component_layout.11ty.js",
    title: "Components",
    tags: "sections",
    description: "Robust vanilla Javascript component library to build component web applications",
    icon:`<svg aria-hidden="true" class="svg-spot spotPuzzle" width="48" height="48" viewBox="0 0 48 48">
    <path opacity=".2" d="m36.11 15.9-3.78 3.79c-.37.37-.97.22-1.19-.22a2.92 2.92 0 00-3.41-1.7 2.92 2.92 0 
    0 0-.52 5.56c.44.22.6.81.22 1.18L24.02 28l-3.78-3.78a.7.7 0 00-1.12.14 2.95 2.95 0 0 1-3.19 1.34 2.89 2.89 0 
    0 1-2.15-2.15 2.9 2.9 0 0 1 1.34-3.2c.37-.21.52-.8.14-1.1L12 15.98 21.87 5.9a3.05 3.05 0 014.3 0l9.94 10.02z">
    </path><path d="M21.14 1.18a4.04 4.04 0 015.71 0l19.96 19.96a4.02 4.02 0 01.07 5.64L26.85 46.82a4.04 4.04 0
     01-5.71 0L1.18 26.86a4.05 4.05 0 010-5.72L11.2 11.2h.01l9.93-10.01zm1.41 1.42-9.23 9.3 2.56 2.56a1.7 1.7 
     0 01-.32 2.67 1.95 1.95 0 0 0-.9 2.13 2.1 2.1 0 0 0 1.49 1.47 1.9 1.9 0 0 0 2.08-.86l.02-.02c.27-.46.74-.74 
     1.21-.82a1.6 1.6 0 011.5.5l2.9 2.91 2.53-2.54a3.83 3.83 0 01-1.85-4.26 3.98 3.98 0 0 1 2.88-2.9h.01a3.83 3.83 
     0 014.28 1.84l2.86-2.85-9.13-9.13c-.8-.8-2.1-.8-2.89 0zm13.43 10.54-3.14 3.14c-.91.91-2.28.48-2.75-.47-.42-.83-1.2-1.37-2.17-1.14a1.99 
     1.99 0 00-1.43 1.44c-.25.96.3 1.75 1.13 2.17.95.47 1.39 1.84.47 2.75l-2.82 2.82 2.97 2.98c.9-1.2 2.4-1.87 
     4.06-1.5 1.44.3 2.6 1.5 2.98 2.94v.04a3.93 3.93 0 01-1.49 4.07l2.34 2.33 9.34-9.34c.7-.7.74-2-.08-2.81L36 
     13.14zM22.44 23.85l-2.67-2.67a3.93 3.93 0 01-4.11 1.49 4.08 4.08 0 0 1-2.95-2.98 3.94 3.94 0 0 1 1.5-4.06l-2.3-2.31-9.31 
     9.24c-.8.8-.8 2.09 0 2.88l9.12 9.13 2.95-2.94c.4-.42.96-.57 1.48-.48.48.1.9.39 1.15.8a1.86 1.86 0 
     002.03.85c.6-.13 1.2-.68 1.4-1.42.17-.78-.14-1.6-.84-2a1.76 1.76 0 01-.8-1.2c-.09-.47.02-1.06.5-1.47l2.85-2.86zM13.14 
     36l9.41 9.41c.8.8 2.1.8 2.89 0l9.27-9.27-2.56-2.56a1.6 1.6 0 01-.51-1.5c.08-.47.36-.94.82-1.21l.02-.01a1.9 
     1.9 0 00.86-2.09 2.08 2.08 0 0 0-1.46-1.48h-.01c-.88-.2-1.66.17-2.13.89-.25.41-.67.71-1.17.8-.52.1-1.07-.06-1.5-.48l-3.22-3.22-2.6 
     2.6a3.84 3.84 0 011.42 4 3.98 3.98 0 0 1-2.91 2.88 3.85 3.85 0 0 1-3.95-1.44L13.14 36zM8.47 6.53a1.37 1.37 0 11-1.94 1.94 1.37 
     1.37 0 0 1 1.94-1.94zm33 33a1.38 1.38 0 11-1.94 1.94 1.38 1.38 0 0 1 1.94-1.94zm-34.94 0a1.38 1.38 0 111.94 1.94 1.38 1.38 0 
     0 1-1.94-1.94zm33-33a1.38 1.38 0 111.94 1.94 1.38 1.38 0 0 1-1.94-1.94z"></path></svg>`
  };
  exports.render = (data) => `
  ${data.content||`<h1>Components</h1>`}
  `;