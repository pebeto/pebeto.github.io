import Header from './components/header';
import Footer from './components/footer';
import { Grid, Text, Page } from '@geist-ui/core';

export default function Tools() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>
        <Grid.Container justify="center">
          <Text>I will complete this, I promise!!!!!</Text>
        </Grid.Container>
      </Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  );
}
