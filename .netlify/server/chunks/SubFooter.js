import { c as create_ssr_component } from "./index.js";
const subfooter = "";
const SubFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"subfooter"}"><div class="${"container"}"><h2>Get it done<br> with us today</h2>
		<p>Say something catchy, informative, and encouraging to click the button to go to the contact
			page. I like to add these to the bottom of all pages.
		</p>
		<a class="${"btn"}" href="${"/contact"}">Request an Estimate</a></div></div>`;
});
export {
  SubFooter as S
};
