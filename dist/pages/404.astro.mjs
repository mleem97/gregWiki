import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_gdVP-I2a.mjs';
import 'piccolore';
import { $ as $$Common } from '../chunks/common_CFh0GYN2.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "C:/Users/marvi/source/repos/gregFramework/gregWiki/node_modules/@astrojs/starlight/routes/static/404.astro", void 0);

const $$file = "C:/Users/marvi/source/repos/gregFramework/gregWiki/node_modules/@astrojs/starlight/routes/static/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
