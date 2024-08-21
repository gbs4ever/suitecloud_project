import http from "N/http";

jest.mock("N/http");

beforeEach(() => {
    jest.clearAllMocks();
});

describe("Sample test with user defined http module stub", () => {
    it("should call http get method", () => {
        // given
        const clientResponseMock = {
            code: 200,
            body: {
                data: "foobar",
            },
            // more properties and functions here if needed
        };
        http.get.mockReturnValue(clientResponseMock);

        const options = {
            url: "https://netsuite.com",
        };

        // when
        const clientResponse = http.get(options);

        // then
        expect(http.get).toHaveBeenCalledWith(options);
        expect(clientResponse).toMatchObject({
            code: 200,
            body: {
                data: "foobar",
            },
        });
    });
});
