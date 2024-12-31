// @ts-nocheck
import {
    Grid,
    Link,
} from "@geist-ui/core";

import Wrapper from "../components/wrapper";

export async function getStaticProps() {
    return {
        props: {
            title: "Resume",
        },
    };
}

export default function Resume() {
    return (
        <Wrapper>
            <Grid>
                You can download my resume{" "}
                <Link href="resume.pdf" color icon target="_blank">
                    here
                </Link>
                .
            </Grid>
        </Wrapper>
    );
}
