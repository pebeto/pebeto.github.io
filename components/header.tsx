import Link from "next/link";
import { useState, useEffect } from "react";
import { ExternalLink } from "@geist-ui/icons";
import { Button, Text, Grid, Spacer } from "@geist-ui/core";

import { getRandomSubheader } from "../services/subheaders";

export default function Header() {
  const [subheader, setSubheader] = useState<string>();

  useEffect(() => {
    setSubheader(getRandomSubheader());
  }, []);

  return (
    <Grid.Container alignContent="center" direction="column">
      <Grid>
        <Text h1>Jose Esparza</Text>
        <Text h3>{subheader}</Text>
      </Grid>
      <Grid xs={35} sm={0} md={0} lg={0} direction="column" alignItems="center">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Spacer h={0.1} inline={true} />
        <Link href="/now">
          <Button>Now</Button>
        </Link>
        <Spacer h={0.1} inline={true} />
        <Link href="/portfolio">
          <Button>Portfolio</Button>
        </Link>
        <Spacer h={0.1} inline={true} />
        <Link href="/tools">
          <Button>Tools and Gear</Button>
        </Link>
        <Spacer h={0.1} inline={true} />
        <Link href="/resume.pdf">
          <Button auto icon={<ExternalLink />} iconRight>
            Download my resume
          </Button>
        </Link>
      </Grid>
      <Grid xs={0} sm={25} md={25} lg={25}>
        <Link href="/">Home</Link>
        <Spacer inline={true} />
        <Link href="/now">Now</Link>
        <Spacer inline={true} />
        <Link href="/portfolio">Portfolio</Link>
        <Spacer inline={true} />
        <Link href="/tools">Tools and Gear</Link>
        <Spacer inline={true} />
        <Link href="/resume.pdf" target="_blank">
          Download my resume <ExternalLink size={12} />
        </Link>
      </Grid>
    </Grid.Container>
  );
}
