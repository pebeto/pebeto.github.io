import Wrapper from "../components/wrapper";
import { Image, Grid, Display, Link, Text } from "@geist-ui/core";

import getDaysSinceDate from "@/utils";

Now.displayName = "Now";
export default function Now() {
  return (
    <Wrapper>
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
          <li>
            Started a MsC in Computer Science at{" "}
            <Link href="https://www.bbk.ac.uk/" target="_blank" color icon>
              Birkbeck, University of London
            </Link>
          </li>
          <li>
            Got two PSVitas (my childhood dream), and I'm playing a lot of
            games
          </li>
          <li>Learning to use{" "}
            <Link href="https://github.com/pspdev/pspsdk" target="_blank" color icon>
              PSPSDK
            </Link>
          </li>
          <li>
            Developing a section to show my critical thinking about
            videogames
          </li>
        </ul>
        Last update: {getDaysSinceDate("2023-12-31")} days ago
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
          <Image
            alt="Playing with El Mejor Verano de mi Vida"
            src="emvdmv.jpeg"
          />
        </Display>
      </Grid>
    </Wrapper>
  );
}
