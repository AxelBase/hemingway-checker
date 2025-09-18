import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set(
		'Content-Security-Policy',
		"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';"
	);
	return response;
};
