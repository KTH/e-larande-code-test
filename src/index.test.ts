import { getResults } from ".";

describe("getResults", () => {
  it("should return the correct data for Sven Svensson", async () => {
    const actual = await getResults("000-000-000-sven");
    const expected = {
      student: {
        uid: "000-000-000-sven",
        name: "Sven Svensson",
      },
      draft: {
        uid: "000-000-000-result2",
        grade: "A",
        date: "2022-01-01",
      },
    };
    expect(actual).toEqual(expected);
  });
});
