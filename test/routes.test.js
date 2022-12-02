const axios = require("axios");

const baseURL = "http://localhost:4000";

describe("Router Request", () => {
  it("Get request", async () => {
    const { data } = await axios.get(`${baseURL}/get`);

    expect(data).toStrictEqual({
      blogs: [
        {
          _id: "638a36ee2b1adc7b220655f4",
          title: "Test title",
          body: "Test body",
          tags: ["test1", " test2"],
          __v: 0,
        },
      ],
      success: true,
    });
  });

  //   it("Add request", async () => {
  //     const { data } = await axios.post(`${baseURL}/add`, {
  //       title: "Test title",
  //       body: "Test body",
  //       tags: "test1, test2",
  //     });

  //     expect(data).toStrictEqual({

  //             "blog": {
  //                 "title": "Hello world2",
  //                 "body": "Hi Hello",
  //                 "tags": [
  //                     "hi",
  //                     "hello"
  //                 ],
  //                 "_id": "638a39f32b1adc7b22065601",
  //                 "__v": 0
  //             }

  //       success: true,
  //     });
  //   });
});
