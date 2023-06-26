import { Grid } from "@geist-ui/core";
import Wrapper from "../components/wrapper";
import { Link } from "@geist-ui/core";

Resume.displayName = "Resume";
export default function Resume() {
  return (
    <Wrapper>
      <Grid.Container>
        <Grid direction="column" xs={0} sm={25} md={25} lg={25}>
          <iframe height="500px" src="resume.pdf" />
        </Grid>
        <Grid direction="column" sm={0} md={0} lg={0}>
          You can find my resume{" "}
          <Link href="resume.pdf" color icon target="_blank">
            here
          </Link>
          .
        </Grid>
      </Grid.Container>
    </Wrapper>
  );
}
