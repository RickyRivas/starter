import { c as create_ssr_component, f as escape, v as validate_component } from "../../../chunks/index.js";
import { businessInfo } from "../_page.js";
import { S as SubFooter } from "../../../chunks/SubFooter.js";
import { S as SubHeader } from "../../../chunks/SubHeader.js";
const about = "";
let pageTitle = "About Us";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xbfusu -->${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle)} | ${escape(businessInfo.cityAndState)}</title>`, ""}<!-- HEAD_svelte-xbfusu -->`, ""}




${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"about"}">
	
	
	<div class="${"container"}"><div class="${"img-container"}"><img class="${""}" src="${"/about/owner.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}">
			<div class="${"name"}"><p>Richard Smith</p>
				<span>Owner</span></div></div>
		<div class="${"content"}"><div class="${"flex"}"><img class="${""}" src="${"/about/grass.svg"}" alt="${""}" width="${"25"}" height="${"25"}" loading="${"lazy"}" decoding="${"async"}">
				<span>Our Story</span></div>
			<h2>Who we are</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
				officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				pariatur harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, suscipit
				laborum est perferendis illo, totam, itaque dolores nulla debitis impedit reiciendis
				repellendus in id. Consectetur placeat quis dolores voluptatem quibusdam?
			</p>
			<div class="${"btns"}"><a href="${"/"}">Contact Us</a></div></div></div></main>



${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
