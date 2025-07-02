require("dotenv").config(); // Load environment variables
const { exec } = require("child_process");
const fs = require("fs");

async function saveAuth(type) {
    let redColor = "\x1b[31m%s\x1b[0m"; // Red text for errors
    const { NS_ACCOUNT_ID, NS_CERTIFICATE_ID, NS_PRIVATE_KEY } = process.env;
    let privateKeyPath = NS_PRIVATE_KEY ? "private_key.pem" : "~/dev/private.pem";
    if (!NS_ACCOUNT_ID || !NS_CERTIFICATE_ID) {
        console.error(
            redColor,
            "NS_ACCOUNT_ID or NS_CERTIFICATE_ID is not set in the environment variables."
        );
        console.error("");
        return;
    }

    if (NS_PRIVATE_KEY) {
        console.log(`Deploying your application...path: ${privateKeyPath}`);
        fs.writeFileSync(privateKeyPath, NS_PRIVATE_KEY, { mode: 0o600 });
    }

    console.log(`Deploying your application... to account type ${type}`);
    const command = `npx suitecloud account:setup:ci --account ${NS_ACCOUNT_ID} --authid ${type} --certificateid ${NS_CERTIFICATE_ID} --privatekeypath ${privateKeyPath}`;
    exec(command, (error, stdout) => {
        if (error) {
            console.log(redColor, `Deploying your application...failed !!: `);
            console.log(redColor, stdout);
            return;
        }
        console.log("\x1b[32m%s\x1b[0m", stdout); // Green text for success
    });
}

if (require.main === module) {
    let flag = process.argv.pop();
    saveAuth(flag);
}

module.exports = { saveAuth };
