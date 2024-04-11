import {
    Text,
    Grid,
} from "@geist-ui/core";

export default function Footer() {
    return (
        <Grid.Container justify="center">
            <Grid>
                <Text p>Jose Esparza | {new Date().getFullYear()}</Text>
            </Grid>
        </Grid.Container>
    );
}
