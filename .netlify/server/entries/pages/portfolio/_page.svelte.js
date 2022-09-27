import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import { businessInfo } from "../_page.js";
import { S as SubFooter } from "../../../chunks/SubFooter.js";
import { S as SubHeader } from "../../../chunks/SubHeader.js";
const portfolio = "";
let pageTitle = "Our Portfolio";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(pageTitle)} | ${escape(businessInfo.cityAndState)}</title>`, ""}`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"portfolio"}"><div class="${"grid"}"><div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div>
		<div class="${"col"}"><div class="${"item"}"><img class="${""}" src="${"/portfolio/img01.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img02.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"item"}"><img class="${""}" src="${"/portfolio/img03.webp"}" width="${""}" height="${""}" alt="${""}" loading="${"lazy"}" decoding="${"async"}"></div></div></div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
