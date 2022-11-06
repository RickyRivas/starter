import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/index.js";
import { U as URL, D as DESCRIPTION, c as companyName, i as industry, a as cityAndState } from "../../../chunks/config.js";
import { reviews } from "../_page.js";
import { S as SubFooter } from "../../../chunks/SubFooter.js";
import { S as SubHeader } from "../../../chunks/SubHeader.js";
const misc = "";
let pageTitle = "Testimonials";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-4aibi6_START --><link rel="${"canonical"}"${add_attribute("href", URL, 0)}><meta name="${"Description"}"${add_attribute("content", DESCRIPTION, 0)}><meta property="${"og:description"}"${add_attribute("content", DESCRIPTION, 0)}>${$$result.title = `<title>${escape(companyName)} | ${escape(industry)} | ${escape(cityAndState)}</title>`, ""}<!-- HEAD_svelte-4aibi6_END -->`, ""}

${validate_component(SubHeader, "SubHeader").$$render($$result, { pageTitle }, {}, {})}
<main id="${"services"}"><div class="${"container"}">${each(reviews, ({ review, testifier }, i) => {
    return `<div class="${"item"}"><div class="${"stars"}">${each({ length: 5 }, (_) => {
      return `<svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" role="${"img"}"><path d="${"M30 11.5908L19.0993 10.8741L14.994 0.560669L10.8888 10.8741L0 11.5908L8.3516 18.6821L5.61105 29.4393L14.994 23.5084L24.3771 29.4393L21.6365 18.6821L30 11.5908Z"}" fill="${"currentcolor"}"></path></svg>`;
    })}</div>
				<p>${escape(review)}</p>
				<div class="${"info"}"><img src="${"/reviews/user.svg"}" alt="${"testifier"}" width="${"40"}" height="${"40"}">
					<div><h4>${escape(testifier)}</h4>
						<p>Homeowner</p>
					</div></div>
			</div>`;
  })}</div></main>
${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
