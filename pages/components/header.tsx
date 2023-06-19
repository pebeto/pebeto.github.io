import Link from "next/link";
import { useState, useEffect } from "react";
import { Text, Grid, Spacer, Link as GeistLink } from "@geist-ui/core";

import { getRandomSubheader } from "../services/subheaders";

export default function Header() {
  const [subheader, setSubheader] = useState<string>();

  useEffect(() => {
    setSubheader(getRandomSubheader());
  }, []);

  return (
    <Grid.Container justify="center">
      <Grid>
        <Text h1>Jose Esparza</Text>
        <Text h3>{subheader}</Text>
        <Spacer h={1} />
        <Link href="/">Home</Link>
        <Spacer inline={true} />
        <Link href="/now">Now</Link>
        <Spacer inline={true} />
        <Link href="/portfolio">Portfolio</Link>
        <Spacer inline={true} />
        <Link href="/tools">Tools I use</Link>
        <Spacer inline={true} />
        <GeistLink href="/resume.pdf" target="_blank" icon color>
          Download my resume
        </GeistLink>
      </Grid>
    </Grid.Container>
  );
}
