const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const cliConfig = require("./suitecloud.config");

module.exports ={ ...SuiteCloudJestConfiguration.build({
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
}),
coveragePathIgnorePatterns: [
  "/node_modules/",
  "/lib/moment\\.min\\.js$", // Escape the dots and make sure the path ends with moment.min.js
],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"], // 👈 Add this line
}