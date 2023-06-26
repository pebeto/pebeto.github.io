import { CssBaseline } from "@geist-ui/core";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: [
        <>
          {initialProps.styles}
          {styles}
        </>,
      ],
    };
  }
}

export default MyDocument;
