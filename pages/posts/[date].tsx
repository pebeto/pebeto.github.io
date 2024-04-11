import { Grid } from "@geist-ui/core";
import Markdown from "react-markdown";

import {
    getMarkdownFileNames,
    getMarkdownFileContent,
} from "../../services/markdownFiles";
import Wrapper from "../../components/wrapper";

export async function getStaticPaths() {
    const fileNames = await getMarkdownFileNames();
    const paths = fileNames.map(async (filename: string) => {
        return {
            params: {
                date: filename.replace(/\.md$/, ''),
            },
        };
    });

    return {
        paths: await Promise.all(paths),
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const blogEntry = await getMarkdownFileContent(`${params.date}.md`);

    return {
        props: {
            blogEntry: (await Promise.all(blogEntry))[0],
        },
    };
}

export default function BlogEntry({ blogEntry }: any) {
    return (
        <Wrapper>
            <Grid direction="column">
                <Markdown>
                    { blogEntry }
                </Markdown>
            </Grid>
        </Wrapper>
    );
}
