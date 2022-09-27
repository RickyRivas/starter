import { c as create_ssr_component, e as escape } from "./index.js";
const subheading = "";
const SubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  return `<section id="${"subheader"}"><img aria-hidden="${"true"}" src="${"/twig.png"}" alt="${"twig"}" class="${"abs-head"}" width="${"100"}" height="${"139"}">
	<h1>${escape(pageTitle)}</h1>
	<picture><source media="${"(max-width: 600px)"}" srcset="${"/img08m.webp"}">
		<source media="${"(min-width: 601px)"}" srcset="${"/img08l.webp"}">
		<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/img08.png"}" alt="${""}" width="${"276"}" height="${"132"}"></picture>
	<div class="${"overlay"}"></div></section>`;
});
export {
  SubHeader as S
};