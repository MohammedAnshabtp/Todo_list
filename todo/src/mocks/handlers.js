import { rest } from "msw";

export const handler = [
  rest.get("/api/todos", (res, req, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Learn MSW", completed: false },
      ])
    );
  }),

  rest.post("/api/todos", (req, res, ctx) => {
    const { text } = req.body;
    return res(
      ctx.status(200),
      ctx.json([{ id: Math.random(), text, completed: false }])
    );
  }),
];
