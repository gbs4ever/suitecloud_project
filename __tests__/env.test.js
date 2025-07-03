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
describe("Environment test for log.debug", () => {
    beforeAll(() => {
        // Mock global.log.debug if not present
        if (!global.log) {
            global.log = {};
        }
        if (!global.log.debug) {
            global.log.debug = jest.fn();
        }
    });

    it("should have log.debug defined in the environment", () => {
        expect(global.log).toBeDefined();
        expect(global.log.debug).toBeDefined();
        expect(typeof global.log.debug).toBe("function");
    });

    it("should call log.debug with correct arguments", () => {
        const message = "Test debug message";
        global.log.debug(message);
        expect(global.log.debug).toHaveBeenCalledWith(message);
    });
});
