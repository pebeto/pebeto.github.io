import { Grid, Page } from "@geist-ui/core";

import Header from "./header";
import Footer from "./footer";

export default function Wrapper({ children }: any) {
    return (
        <Page>
            <Page.Header>
                <Header />
            </Page.Header>
            <Page.Content>
                <Grid.Container gap={2}>
                    {children}
                </Grid.Container>
            </Page.Content>
            <Page.Footer>
                <Footer />
            </Page.Footer>
        </Page>
    );
}
