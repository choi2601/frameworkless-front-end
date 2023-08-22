import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
   main
  </div>
`;

setupCounter(document.querySelector("#counter"));
