import { Children } from "react";
import { promises as fs } from "fs";
import { ExternalLink } from "@geist-ui/icons";
import { Card, Grid, Image, Link, Spacer, Text } from "@geist-ui/core";

import Wrapper from "./components/wrapper";
import { Notebook } from "./types/notebook";
import { getNotebooks } from "./services/notebooks";

export async function getStaticProps() {
  const notebooks = await getNotebooks(fs.readdir);

  return {
    props: {
      notebooks: await Promise.all(notebooks),
    },
  };
}

Portfolio.displayName = "Portfolio";
export default function Portfolio({ notebooks }: any) {
  return (
    <Wrapper>
      <Grid xs={30} sm={15} md={15} lg={10} xl={8}>
        <Image src="nn.png"></Image>
      </Grid>
      <Spacer w={5} />
      <Grid lg direction="column">
        <h3>Notebooks</h3>
        <Text p>
          I'm an enthusiast of{" "}
          <Link href="https://julialang.org/" target="_blank" color icon>
            Julia Programming Language
          </Link>
          , so I decided to translate every Python project from my old portfolio
          into Julia and using{" "}
          <Link href="https://plutojl.org/" target="_blank" color icon>
            Pluto.jl
          </Link>{" "}
          for reactive notebooks (they look great!).
        </Text>
        <Spacer />
        <Grid lg={30} xl>
          {Children.toArray(
            notebooks.map((notebook: Notebook) => (
              <>
                <Link href={notebook.link} target="_blank">
                  <Card type="secondary" hoverable>
                    <Text b>
                      {notebook.title} <ExternalLink size={15} />
                    </Text>
                  </Card>
                </Link>
                <Spacer w={1} />
              </>
            ))
          )}
        </Grid>
      </Grid>
    </Wrapper>
  );
}
