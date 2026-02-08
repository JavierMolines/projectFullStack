import express, { type Response } from "express";
import { fetch } from "./fetch";
import { loggerMiddleware } from "./middleware";
import type { ApiResponse, Data } from "./types/randomuser";

const app = express();
const port = process.env.PORT || 5002;

app.use(loggerMiddleware);
app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	next();
});

app.get("/", async (_, res: Response) => {
	const data: Data = await fetch("https://randomuser.me/api/");
	const contentResult = data.results[0];
	const response: ApiResponse = {
		message: "Random User!.",
		data,
		user: {
			name: contentResult.name.first,
			lastName: contentResult.name.last,
			age: contentResult.dob.age,
		},
	};
	res.json(response);
});

app.listen(port, () => {
	console.log(`Server on port ${port}!.`);
});
