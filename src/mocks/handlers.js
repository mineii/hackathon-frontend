import { http, HttpResponse } from "msw";

let mockData = [
  {
    id: 0,
    shortUrl: "url-shortener/bf406",
    originUrl:
      "https://medium.com/@hgbaek1128/querydsl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-pageable%EB%A1%9C-sorting%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-65c63ebaebd8",
    createdAt: "2021-06-07T11:38:16+0000",
  },
  {
    id: 1,
    shortUrl: "url-shortener/cf406",
    originUrl:
      "https://medium.com/@hgbaek1128/querydsl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-pageable%EB%A1%9C-sorting%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-65c63ebaebd8",
    createdAt: "2021-06-07T11:38:16+0000",
  },
  {
    id: 2,
    shortUrl: "url-shortener/df406",
    originUrl:
      "https://medium.com/@hgbaek1128/querydsl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-pageable%EB%A1%9C-sorting%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-65c63ebaebd8",
    createdAt: "2021-06-07T11:38:16+0000",
  },
];

export const handlers = [
  http.post("/short-links", async ({ request }) => {
    const { url } = await request.json();
    const newData = {
      id: mockData.length,
      shortUrl: `url-shortener/bf40${Math.floor(Math.random() * 10)}`,
      originUrl: url,
      hash: `bf40${Math.floor(Math.random() * 10)}`,
      createdAt: "2021-06-07T11:38:16+0000",
    };
    mockData.push(newData);
    return HttpResponse.json({
      data: newData,
    });
  }),

  http.get("/short-links", () => {
    return HttpResponse.json({
      data: mockData,
    });
  }),

  http.delete("/short-links/:id", async ({ params }, res, ctx) => {
    const { id } = params;
    const index = mockData.findIndex((item) => item.id.toString() === id);

    if (index === -1) {
      return HttpResponse.json(
        { error: "Not found" },
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    mockData.filter((item) => item.id.toString() !== id);

    return HttpResponse.json(
      { message: "Deleted successfully" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }),
];
