import type { IncomingMessage } from "node:http";
import https from "node:https";

const fetch = async (url: string) => {
	const executorPromise = (
		resolve: (value?: any) => void,
		reject: (reason?: any) => void,
	) => {
		const handlerStream = (response: IncomingMessage) => {
			let data = "";

			response.on("data", (chunk) => {
				data += chunk;
			});

			response.on("end", () => {
				resolve(JSON.parse(data));
			});
		};

		https.get(url, handlerStream).on("error", (error) => {
			reject(error);
		});
	};

	return new Promise(executorPromise);
};

export { fetch };
