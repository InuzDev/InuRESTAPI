import express, { type Express, type Request, type Response } from "express";

export const app: Express = express(); // Initialize express.js API.

app.get("/", (req: Request, res: Response) => {
   // Send a response 'Hello World'
   res.send("Hello World");
});
