import {
    Grid,
    Link,
    Text,
    Spacer
} from "@geist-ui/core";
import { Children } from "react";

import Wrapper from "../components/wrapper"
import { FileResource } from "../types/fileResource";
import { getMarkdownFiles } from "../services/markdownFiles";

export async function getStaticProps() {
    const markdownFiles = await getMarkdownFiles();

    return {
        props: {
            title: "Blog",
            markdownFiles: await Promise.all(markdownFiles),
        },
    };
}

Blog.displayName = "Blog";
export default function Blog({ markdownFiles }: any) {
    return (
        <Wrapper>
            <Grid direction="column">
                <Text>
                    This is a very personal section of my website. My thoughts, experiences and ideas are shared here.
                </Text>
                <Text>
                    Most of my writings will be in my native language, Spanish. However, I will try to write some articles in English.
                </Text>
                <ul>
                    {
                        Children.toArray(
                            markdownFiles.map((markdownFile: FileResource) => (
                                <>
                                    <li>
                                        <Link href={markdownFile.link} color>
                                            <Text b>{markdownFile.title}</Text>
                                        </Link>
                                    </li>
                                    <Spacer inline={false} />
                                </>
                            ))
                        )
                    }
                </ul>
            </Grid>
        </Wrapper>
    );
}
