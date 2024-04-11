import {
    DocumentContext,
    DocumentInitialProps
} from "next/document";
import Document from "next/document";
import { CssBaseline } from "@geist-ui/core";

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
