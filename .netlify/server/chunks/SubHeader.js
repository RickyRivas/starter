import { c as create_ssr_component, e as escape } from "./index.js";
const subheading = "";
const SubHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-99zb07{text-transform:capitalize}",
  map: null
};
const SubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<section id="${"subheader"}"><img aria-hidden="${"true"}" src="${"/twig.png"}" alt="${"twig"}" class="${"abs-head"}" width="${"100"}" height="${"139"}">
	<h1 class="${"svelte-99zb07"}">${escape(pageTitle)}</h1>
	<div class="${"overlay"}"></div>
</section>`;
});
export {
  SubHeader as S
};
