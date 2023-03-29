import Link from 'next/link';
import { Text, Grid, Spacer } from '@geist-ui/core';

export default function Header() {
  return (
    <Grid.Container justify="center">
      <Grid>
        <Text h1>Jose Esparza</Text>
        <Text h3>Data Science, Machine Learning, Python & Julia</Text>

        <Spacer h={1} />
        <Link href="/">Home</Link>
        <Spacer inline={true} />
        <Link href="/portfolio">Portfolio</Link>
        <Spacer inline={true} />
        <Link href="/tools">Tools I use</Link>
        <Spacer inline={true} />
        <Link href="/resume.pdf" target="_blank">Download my resume!</Link>
      </Grid>
    </Grid.Container>
  );
}
