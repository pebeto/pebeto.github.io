import Wrapper from "../components/wrapper";
import { Image, Grid, Display, Link, Text } from "@geist-ui/core";

import getDaysSinceDate from "@/utils";

Now.displayName = "Now";
export default function Now() {
  return (
    <Wrapper>
      <Grid.Container gap={2}>
        <Grid direction="column" xs={25} sm={15} md={14} lg={14}>
          <Text h3>
            What I'm doing{" "}
            <Link href="https://nownownow.com/about" target="_blank" color icon>
              now
            </Link>
            ?
          </Text>
          <ul>
            <li>
              Recording my band's album (a truly masterpiece; if you are a
              record label, please hire us)
            </li>
            <li>Planning my first mountain trip with my girlfriend</li>
            <li>Trying to finish a research paper I started 1 year ago</li>
            <li>
              Looking for a MsC grant in Computer Science (if you are a
              professor and you are reading this, please consider me)
            </li>
            <li>Learning to use org-mode because I'm a nerd</li>
            <li>Thinking about switching to Emacs (remember I'm a nerd)</li>
          </ul>
          Last update: {getDaysSinceDate("2023-06-19")} days ago
        </Grid>
        <Grid direction="column" xs={25} sm={8} md={10} lg={10}>
          <Display
            caption={
              <Text p>
                Playing with{" "}
                <Link
                  href="https://pebeto.github.io/elmejorveranodemivida/"
                  color
                  icon
                  target="_blank"
                >
                  El Mejor Verano de mi Vida
                </Link>
              </Text>
            }
          >
            <Image src="emvdmv.jpeg" />
          </Display>
        </Grid>
      </Grid.Container>
    </Wrapper>
  );
}
