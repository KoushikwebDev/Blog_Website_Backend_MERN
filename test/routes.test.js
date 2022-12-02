const axios = require("axios");

const baseURL = "http://localhost:4000";

describe("Router Request", () => {
  it("Get request", async () => {
    const { data } = await axios.get(`${baseURL}/get`);

    expect(data).toStrictEqual({
      blogs: [
        {
          _id: "638a39f32b1adc7b22065601",
          title: "Hello world2",
          body: "Hi Hello",
          tags: ["hi", "hello"],
          __v: 0,
        },
      ],
      success: true,
    });
  });
});
