import express, { type Response } from "express";
import { fetch } from "./fetch";
import { loggerMiddleware } from "./middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(loggerMiddleware);

app.get("/", async (_, res: Response) => {
	const data = await fetch("https://randomuser.me/api/");
	res.json({
		message: "Random User!.",
		data,
	});
});

app.listen(port, () => {
	console.log(`Server on port ${port}!.`);
});
