# Nodemailer Email Sender

A simple Node.js application that sends emails using the Gmail SMTP server and Nodemailer. Credentials are securely stored using environment variables for improved security.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Introduction

The **Nodemailer Email Sender** is a basic Node.js-based email-sending service. It uses **Nodemailer**, a popular library for handling email functionality in Node.js, to send emails via the **Gmail SMTP** server. The application is configured to store sensitive credentials, such as the Gmail username and password, in environment variables using the `dotenv` package, ensuring enhanced security.

This application allows users to send emails to a predefined list of recipients, with customizable HTML content. It is ideal for anyone looking for a simple, secure email-sending solution in Node.js.

## Prerequisites

Before using the application, make sure the following tools are available and configured:

- **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **Gmail Account**: You'll need a Gmail account to use as the SMTP server for sending emails. If you have enabled **2-Step Verification** on your account, generate an **App Password** to use for the application.
- **Nodemailer & dotenv**: These packages handle email functionality and loading environment variables securely. They will be installed during the setup process.

## Installation

To set up and run the application, follow the steps below:

1. **Clone the repository**:

    Clone the repository to your local machine using Git:

    ```bash
    git clone https://github.com/your-username/nodemailer-app.git
    cd nodemailer-app
    ```

2. **Install the required dependencies**:

    After navigating into the project directory, install the necessary packages by running:

    ```bash
    npm install
    ```

    This will install all the dependencies listed in `package.json`, including `nodemailer` and `dotenv`.

3. **Set up environment variables**:

    Create a `.env` file in the root directory of the project and add your Gmail credentials as follows:

    ```bash
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    ```

    > **Note**: If you have 2-Step Verification enabled on your Gmail account, you must use an App Password instead of your regular Gmail password.

4. **Ensure .env is in .gitignore**:

    Make sure that `.env` is listed in the `.gitignore` file to prevent sensitive data from being committed to the repository:

    ```bash
    echo ".env" >> .gitignore
    ```

## Usage

Once the installation is complete, you can run the application with the following command:

```bash
node app.js
