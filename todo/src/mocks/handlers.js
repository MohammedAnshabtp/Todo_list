// import { rest } from 'msw';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.restful-api.dev/objects', (res,ctx,req) => {
    const data = [
      {
        "id": "1",
        "name": "Google Pixel 6 Pro",
        "data": {
           "color": "Cloudy White",
           "capacity": "128 GB"
        }
     },
     {
      "id": "2",
      "name": "Apple iPhone 12 Mini, 256GB, Blue",
      "data": null
   },
   {
      "id": "3",
      "name": "Apple iPhone 12 Pro Max",
      "data": {
         "color": "Cloudy White",
         "capacity GB": 512
      }
   },
    ]
    return res(
      ctx.status(200),
      ctx.json(data)
    );
  }),

  http.post('https://api.restful-api.dev/objects', async(req, res,ctx) => {
    const { name, description } = await req.json();
    return res(
      ctx.status(201),
      ctx.json([{ id: Math.random(), name, description }])
    );
  }),
];
