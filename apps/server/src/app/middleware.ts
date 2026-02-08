import type { NextFunction, Request, Response } from "express";
import { message } from "./color";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const start = process.hrtime();

	res.on("finish", () => {
		const end = process.hrtime(start);
		const durationInMilliseconds = end[0] * 1000 + end[1] / 1e6;
		const { method, originalUrl } = req;
		const code =
			res.statusCode === 200
				? message.blue("200")
				: message.red(`${res.statusCode}`);

		const toLogs = [
			message.yellow(`[${new Date().toISOString()}]`),
			`${durationInMilliseconds.toFixed(3)}ms`,
			code,
			message.cyan(method),
			originalUrl,
		];

		console.log(`>>> ${toLogs.join(" - ")} `);
	});

	next();
};

export { loggerMiddleware };
