const SuiteCloudJestUnitTestRunner = require("@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner");

module.exports = {
  defaultProjectFolder: "src",
  commands: {
    "account:setup": {
      afterExecuting: async (args) => {
        console.log("We are validating you Netsuite app ...");

        return args;
      },
    },
    "project:deploy": {
      beforeExecuting: async (args) => {
        console.log("We are validating you Netsuite app ...");
        if (!args.arguments.dryrun) {
          await SuiteCloudJestUnitTestRunner.run({
          });
        }
        return args;
      },
    },
    "project:validate": {
      beforeExecuting: (options) => {
        options.arguments.server = true;
        options.arguments.accountspecificvalues = "WARNING";
        return options;
      },
    },
  },
};
