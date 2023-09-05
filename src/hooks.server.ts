import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme") ?? "";
  const motion = event.cookies.get("motion") ?? "";

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html
        .replace('data-theme=""', `data-theme="${theme}"`)
        .replace('data-motion=""', `data-motion="${motion}"`);
    },
  });
  return response;
};
