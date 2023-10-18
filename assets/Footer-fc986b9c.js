import{r as n,s as a,j as e,B as o,C as l,G as r}from"./index-8b58bec7.js";const c=t=>n.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",...t},n.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})),d=t=>n.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",...t},n.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})),h=t=>n.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",...t},n.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})),m=a(o)`
  margin: 8px;
  height: 32px;
  width: 32px;
  color: #fff;
`;function i({icon:t,...s}){return e.jsx(m,{...s,as:"a",target:"_blank",rel:"noreferrer noopener",children:t})}const x=a.footer`
  background-color: #3d28a4;
  display: flex;
  justify-content: center;
`,p=a.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "copyright copyright"
    "links links";
  @media (min-width: 600px) {
    grid-template-areas: "copyright links";
  }
`,f=a(r)`
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`,g=a(r)`
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`,u=a.p`
  color: #fff;
`;function j(){return e.jsx(x,{children:e.jsx(l,{maxWidth:900,padding:"8px 48px",children:e.jsxs(p,{children:[e.jsx(f,{name:"copyright",children:e.jsx(u,{children:"© 2022 Kalle Rouvinen. All rights reserved."})}),e.jsxs(g,{name:"links",children:[e.jsx(i,{"aria-label":"link-to-instagram",href:"https://instagram.com/kallerouvinen",icon:e.jsx(d,{})}),e.jsx(i,{"aria-label":"link-to-linkedin",href:"https://linkedin.com/in/kalle-rouvinen-794b4215b",icon:e.jsx(h,{})}),e.jsx(i,{"aria-label":"link-to-github",href:"https://github.com/kallerouvinen",icon:e.jsx(c,{})})]})]})})})}export{j as default};
