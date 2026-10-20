# MSA Help Tools

One workspace for the MSA certificate generator, bulk email sender, and QR code generator.

## Run locally

```sh
npm install
npm run dev
```

Open the local Vite URL shown in the terminal. Use the sidebar to switch between **Certificates**, **Bulk email**, and **QR code generator**.

## Certificate studio

Import a CSV participant list, set the participant name column and certificate details, choose one of the four templates, then download individual PDF certificates in a ZIP archive.

## Bulk email sender

Import a recipient CSV or Excel file with an email column. Additional CSV or Excel files can be joined by a matching field or row order. Create a personalized subject and HTML message, then either download `.eml` drafts or send through Gmail.

Gmail sending uses the local Vite mail endpoint. Enter the Gmail address and an app password in the sender panel when sending. The sender also accepts optional `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `APP_ORIGIN` environment variables. Keep credentials in an untracked local `.env.local` file; never commit them. The server sends one message at a time, waits between messages, and accepts up to 500 recipients per request.

The separate Python prototype is not part of this app. Its source contains a hardcoded Gmail app password and should not be run or shared; revoke that password if it was ever active.

## QR code generator

Create a QR code from text or a link, optionally add a center logo, customize its color and logo size, then download as PNG, SVG, JPEG, or WebP. QR generation and export run in the browser.
