# Suitelcoud Project

This guide provides a straightforward setup for handling SuiteCloud Development Framework (SDF) and NetSuite cloud customizations.


[See more here](https://www.npmjs.com/package/@oracle/suitecloud-cli)

To get started use ```npm install -g --acceptSuiteCloudSDKLicense @oracle/suitecloud-cli```

Make sure you have java installed on your machine 


If no account has been set up for this project. Run "suitecloud account:setup" to link your project with your account


For version control use github with [SDF framework](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4702622163.html#SuiteCloud-Development-Framework-Overview) . 

To ensure a smooth experience for both you and others collaborating on this project,
it's a good practice to disable GitHub Actions when you're working in your forked repository.

1. Go to your forked repository on GitHub.
2. Click on the "Actions" tab.
3. In the upper-right corner, toggle the switch to disable Actions for this repository.
4. Please use the github actions ( see workflow) for CI/CD to run test a validate project .


### How to setup Suite Cloud auth on new device 

1. Create a `.env` file:
    ```bash
    cp .env.example .env
    ```

2. Generate a private and public key pair:
    ```bash
    openssl req -new -x509 -newkey rsa:4096 -keyout ~/dev/private.pem -sigopt rsa_padding_mode:pss -sha256 -sigopt rsa_pss_saltlen:64 -out public.pem -nodes -days 365
    ```

3. Make sure you have a `.gitignore` file and **do not** push your private and public keys (e.g., `~/dev/private.pem`) to Git version control.

4. Go to **Setup > Integration > Manage Authentication > OAuth 2.0 Client Credentials (M2M) Setup** in NetSuite.

5. Create a new mapping, click the **Create New** button.

6. In the popup window, choose the entity, role, and application to be mapped. Upload the public part of the certificate from your computer.

7. Copy the certificate ID to your `.env` file.

8. Run the following command:
    ```bash
    npm run saveAuth -- --authtype dev
9. You should get a response in the terminal and a new file called `project.json` will be created in your directory. **Do not modify this file.**