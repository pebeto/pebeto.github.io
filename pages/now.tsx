import Wrapper from "../components/wrapper";
import { Image, Grid, Display, Link } from "@geist-ui/core";

import getDaysSinceDate from "@/utils";

Now.displayName = "Now";
export default function Now() {
  return (
    <Wrapper>
      <Grid lg direction="column">
        <h3>
          What I'm doing{" "}
          <Link href="https://nownownow.com/about" target="_blank" color icon>
            now
          </Link>
          ?
        </h3>
        <ul>
          <li>
            Recording my band's album (a truly masterpiece; if you are a record
            label, please hire us)
          </li>
          <li>Planning my first mountain trip with my girlfriend</li>
          <li>Trying to finish a research paper I started 1 year ago</li>
          <li>
            Looking for a MsC grant in Computer Science (if you are a professor
            and you are reading this, please consider me)
          </li>
          <li>Learning to use org-mode because I'm a nerd</li>
          <li>Thinking about switching to Emacs (remember I'm a nerd)</li>
        </ul>
        <p>Last update: {getDaysSinceDate("2023-06-19")} days ago</p>
      </Grid>
      <Grid xs={30} sm={30} md={20} lg={10} xl={8}>
        <Display
          caption={
            <p>
              Playing with{" "}
              <Link
                href="https://pebeto.github.io/elmejorveranodemivida/"
                color
                icon
                target="_blank"
              >
                El Mejor Verano de mi Vida
              </Link>
            </p>
          }
        >
          <Image src="emvdmv.jpeg" />
        </Display>
      </Grid>
    </Wrapper>
  );
}
