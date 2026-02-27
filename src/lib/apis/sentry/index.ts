import { WEBUI_API_BASE_URL } from '$lib/constants';

export const fetchSentryDSN = async () => {
	let error = null;

	const res = await fetch(`${WEBUI_API_BASE_URL}/sentry/dsn`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(async (response) => {
			if (!response.ok) throw await response.json();
			return response.json();
		})
		.then((json) => {
			return json?.dsn ?? null;
		})
		.catch((err) => {
			error = err;
			console.error('Failed to fetch Sentry DSN:', err);
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};
