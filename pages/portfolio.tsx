import Header from './components/header';
import Footer from './components/footer';
import { Page } from '@geist-ui/core';

export default function Portfolio() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content></Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  );
}
