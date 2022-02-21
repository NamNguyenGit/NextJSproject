import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="description" content="React-App with Next JS" />
          <meta name="keywords" content="next react " />
          <meta name="author" content="Nam" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
          />
        </head>
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument