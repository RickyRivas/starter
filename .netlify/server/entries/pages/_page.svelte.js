import { c as create_ssr_component, f as escape, e as each, v as validate_component } from "../../chunks/index.js";
import { businessInfo, services } from "./_page.js";
import { S as SubFooter } from "../../chunks/SubFooter.js";
const home = "";
const quick = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-pujoj5 -->${$$result.title = `<title>${escape(businessInfo.companyName)} | ${escape(businessInfo.industry)} | ${escape(businessInfo.cityAndState)}</title>`, ""}<!-- HEAD_svelte-pujoj5 -->`, ""}

<main id="${"home"}">
	
	
	<section id="${"landing"}"><picture><source media="${"(max-width: 600px)"}" srcset="${"/home/img02m.webp"}">
			<source media="${"(min-width: 601px)"}" srcset="${"/home/img02.webp"}">
			<img aria-hidden="${"true"}" decoding="${"async"}" src="${"/home/img02.jpeg"}" alt="${"hero"}" width="${"276"}" height="${"132"}"></picture>
		<div class="${"overlay"}"></div>
		<div class="${"content"}"><h1>Main Keywords of What They Do, And Location If Needed</h1>
			<p>Talk about the other services they do with keywords and locations where they serve. Try to
				make this 2-3 lines tall.
			</p>
			<div class="${"btns"}"><a href="${"/contact"}" class="${"btn"}">Main Call to Action</a></div></div></section>
	
	
	
	<section id="${"services"}"><div class="${"container"}">${each(services, ({ name, description }, i) => {
    return `<div class="${"item"}"><div class="${"icon"}"><img class="${""}" src="${"/home/0" + escape(i + 1, true) + ".svg"}" alt="${""}" width="${"100"}" height="${"100"}" loading="${"lazy"}" decoding="${"async"}"></div>
					<h2>${escape(name)}</h2>
					<p>${escape(description)}</p>
				</div>`;
  })}</div></section>
	
	
	
	<section id="${"layout01"}"><div class="${"container"}"><div class="${"img-container"}"><img class="${""}" src="${"/home/about.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}"></div>
			<div class="${"content"}"><h2>Trusted home builders for (main city) for over 20 years</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="${"list-head"}"><strong>A list if you need it.</strong></p>
				<ul>${each({ length: 4 }, (_) => {
    return `<li><img class="${""}" src="${"/check.svg"}" alt="${"checkmark"}" width="${"20"}" height="${"20"}" loading="${"lazy"}" decoding="${"async"}">
							<span>List item about something, this one is going to two lines so you can see what it
								looks like</span>
						</li>`;
  })}</ul>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="${"btns"}"><a href="${"/contact"}">Contact Us</a></div></div></div></section>
	
	
	
	<section id="${"layout02"}"><div class="${"container"}"><div class="${"content"}"><h2>Trusted home builders for (main city) for over 20 years</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<p class="${"list-head"}"><strong>A list if you need it.</strong></p>
				<ul>${each({ length: 4 }, (_) => {
    return `<li><img class="${""}" src="${"/check.svg"}" alt="${"checkmark"}" width="${"20"}" height="${"20"}" loading="${"lazy"}" decoding="${"async"}">
							<span>List item about something, this one is going to two lines so you can see what it
								looks like</span>
						</li>`;
  })}</ul>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae quo, earum a nobis
					officiis maiores natus hic omnis corrupti minima eius eaque odio, placeat ad vero magnam
				</p>
				<div class="${"btns"}"><a href="${"/contact"}">Contact Us</a></div></div>
			<div class="${"img-container"}"><img class="${""}" src="${"/home/about.webp"}" alt="${"Owner"}" width="${"500"}" height="${"750"}" loading="${"lazy"}" decoding="${"async"}"></div></div></section></main>



${validate_component(SubFooter, "SubFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
