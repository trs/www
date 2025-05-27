import type { Handle } from '@sveltejs/kit';

const COLOR_THEME_HEADER = 'Sec-CH-Prefers-Color-Scheme';

export const handle: Handle = async ({ event, resolve }) => {
	const pref = event.request.headers.get(COLOR_THEME_HEADER);
	const theme = event.cookies.get('theme') ?? pref ?? '';
	const motion = event.cookies.get('motion') ?? '';

	event.setHeaders({
		'Accept-CH': COLOR_THEME_HEADER,
		Vary: COLOR_THEME_HEADER,
		'Critical-CH': COLOR_THEME_HEADER
	});

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html
				.replace('data-theme=""', `data-theme="${theme}"`)
				.replace('data-motion=""', `data-motion="${motion}"`);
		}
	});
	return response;
};
