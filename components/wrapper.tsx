import { Page } from "@geist-ui/core";

import Header from "./header";
import Footer from "./footer";

export default function Wrapper({ children }: any) {
  return (
    <Page style={{ padding: "0 0 0 0" }}>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>{children}</Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  );
}
