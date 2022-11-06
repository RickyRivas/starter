import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../chunks/index.js";
import { S as SubHeader } from "../../chunks/SubHeader.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "#error.svelte-rj6o9r.svelte-rj6o9r{display:flex;justify-content:center;align-items:center;padding:3em 0}@media only screen and (min-width: 768px){#error.svelte-rj6o9r.svelte-rj6o9r{padding:5em 0}}#error.svelte-rj6o9r .container.svelte-rj6o9r{width:90%;box-shadow:var(--box-shadow);display:flex;justify-content:center;align-items:flex-start;flex-direction:column;border-top:0.5em solid #c1121f;border-radius:0.5em;padding:2em 1em}@media only screen and (min-width: 768px){#error.svelte-rj6o9r .container.svelte-rj6o9r{width:30em}}span.svelte-rj6o9r.svelte-rj6o9r{margin-bottom:0.5em}.btns.svelte-rj6o9r.svelte-rj6o9r{display:flex;justify-content:center;align-items:center}.btns.svelte-rj6o9r a.svelte-rj6o9r{margin:0}h1.svelte-rj6o9r.svelte-rj6o9r{margin-bottom:1em}",
  map: null
};
let pageTitle = "Error";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"error"}" class="${"svelte-rj6o9r"}"><div class="${"container svelte-rj6o9r"}"><span class="${"svelte-rj6o9r"}">Message:</span>
		<h1 class="${"svelte-rj6o9r"}">${escape($page.status)}: ${escape($page.error.message)}</h1>
		<div class="${"btns svelte-rj6o9r"}"><a href="${"/"}" class="${"btn svelte-rj6o9r"}">Go Home</a></div></div>
</main>`;
});
export {
  Error as default
};
