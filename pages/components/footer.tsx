import { Text, Grid } from '@geist-ui/core';

export default function Footer() {
  return (
    <Grid.Container justify="center">
      <Text p>Jose Esparza | {new Date().getFullYear()}</Text>
    </Grid.Container>
  );
}
