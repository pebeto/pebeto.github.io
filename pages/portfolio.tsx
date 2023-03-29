import path from 'path';
import { promises as fs } from 'fs';

import Header from './components/header';
import Footer from './components/footer';

import {
  Card,
  Grid,
  Image,
  Link,
  Page,
  Spacer,
  Text,
} from '@geist-ui/core';

type Notebook = {
  title: string;
  link: string;
};

export const getStaticProps = async () => {
  const notebooksDirectory = path.join(process.cwd(), 'public/notebooks');
  const filenames = await fs.readdir(notebooksDirectory);
  const notebooks: Notebook[] = filenames.map((filename) => {
    return {
      title: filename.split('.')[0],
      link: `notebooks/${filename}`,
    };
  });

  return {
    props: {
      notebooks: await Promise.all(notebooks),
    },
  };
};

export default function Portfolio({ notebooks }: any) {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>
        <Grid.Container justify="center">
          <Grid xs={30} sm={15} md={15} lg={10} xl={8}>
            <Image src="nn.png"></Image>
          </Grid>
          <Spacer w={5} />
          <Grid lg direction="column">
            <Text p>
              I'm an enthusiast of{' '}
              <a href="https://julialang.org/" target="_blank">
                Julia Programming Language
              </a>
              , so I decided to translate every Python project from my old
              portfolio into Julia and using{' '}
              <a href="https://plutojl.org/" target="_blank">
                Pluto.jl
              </a>{' '}
              for reactive notebooks (they look great!).
            </Text>
            <Spacer />
            <Grid lg={30} xl>
              {notebooks.map((notebook: Notebook) => (
                <>
                  <Link href={notebook.link} target="_blank">
                    <Card type="secondary" hoverable>
                      <Text b>{notebook.title}</Text>
                    </Card>
                  </Link>
                  <Spacer w={1} />
                </>
              ))}
            </Grid>
          </Grid>
        </Grid.Container>
      </Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  );
}