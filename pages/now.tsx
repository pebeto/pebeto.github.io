import {
    Grid,
    Link,
    Text,
    Image,
    Display,
} from "@geist-ui/core";

import getDaysSinceDate from "../utils";
import Wrapper from "../components/wrapper";

export async function getStaticProps() {
    return {
        props: {
            title: "Now",
        },
    };
}

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
                        Still recording my band's album (a truly masterpiece; if you are a
                        record label, please hire us)
                    </li>
                    <li>
                        I bought my first apartment!
                    </li>
                    <li>
                        Redefining my personal habits (for my mental health and productivity)
                    </li>
                    <li>
                        Designing the new generation model tracking system using Julia
                    </li>
                    <li>
                        Developing a section to show my critical thinking about
                        videogames and other stuff
                    </li>
                </ul>
                Last update: {getDaysSinceDate("2024-04-10")} days ago
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
