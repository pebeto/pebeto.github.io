import {
    Grid,
    Link,
    Text,
    Image,
    Spacer,
    Display,
} from "@geist-ui/core";
import { Children } from "react";
import { promises as fs } from "fs";

import Wrapper from "../components/wrapper";
import { getNotebooks } from "../services/notebooks";
import { FileResource } from "../types/fileResource";

export async function getStaticProps() {
    const notebooks = await getNotebooks(fs.readdir);

    return {
        props: {
            notebooks: await Promise.all(notebooks),
        },
    };
}

Portfolio.displayName = "Portfolio";
export default function Portfolio({ notebooks }: any) {
    return (
        <Wrapper>
            <Grid direction="column" xs={0} sm={0} md={10} lg={8}>
                <Display caption={<Text p>A cool neural network</Text>}>
                    <Image alt="A cool neural network" src="nn.png"></Image>
                </Display>
            </Grid>
            <Grid direction="column" sm={25} md={14} lg={14}>
                <Text h3>Notebooks</Text>
                <Text p>
                    I'm an enthusiast of{" "}
                    <Link href="https://julialang.org/" target="_blank" color icon>
                        Julia Programming Language
                    </Link>
                    , so I decided to translate every Python project from my old
                    portfolio into Julia and using{" "}
                    <Link href="https://plutojl.org/" target="_blank" color icon>
                        Pluto.jl
                    </Link>{" "}
                    for reactive notebooks (they look great!).
                </Text>
                <Grid>
                    <ul>
                        {
                            Children.toArray(
                                notebooks.map((notebook: FileResource) => (
                                    <>
                                        <li>
                                            <Link href={notebook.link} target="_blank" color icon>
                                                <Text b>{notebook.title}</Text>
                                            </Link>
                                        </li>
                                        <Spacer inline={false} />
                                    </>
                                ))
                            )
                        }
                    </ul>
                </Grid>
                <Text p>
                    Also you can find more interesting stuff in my {" "}
                    <Link href="https://github.com/pebeto" target="_blank" color icon>
                        Github Profile
                    </Link>.
                </Text>
            </Grid>
        </Wrapper>
    );
}
