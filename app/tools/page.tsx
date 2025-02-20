import Link from "next/link";
import { Metadata } from "next";
import { Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
    title: "Tools | Jose's Website",
};

export default async function Tools() {
    return (
        <Container>
            <Row>
                <h3>Why are you showing me this?</h3>
                <p>
                    I consider that a good workflow with the correct tools are essential
                    to be productive. Who doesn't want to be comfortable and efficient?
                    When I was in college, I was always looking to help my classmates
                    with tools I found useful. I think that can be impactful for them,
                    so I decided to share them here.
                </p>
                <h3>Operative systems</h3>
                <ul>
                    <li>
                        <b>Laptop operative system:</b>
                        {" "}
                        <Link href="https://www.freebsd.org/" target="_blank">
                            FreeBSD
                        </Link>
                        <p>
                            Installed in my Thinkpad T470. Choosing FreeBSD was more
                            related to curiosity than necessity. I wanted to learn more
                            about it, and I'm happy with the results. Even though it
                            doesn't have the same support as Linux, it's a great
                            experience.
                        </p>
                    </li>
                    <li>
                        <b>Desktop operative system:</b>
                        {" "}
                        <Link href="https://ubuntu.com/" target="_blank">
                            Ubuntu
                        </Link>
                        <p>
                            Installed in my desktop computer. Due to NVIDIA drivers
                            support, I decided to use Ubuntu. It's not my favorite
                            operative system due to its poor package management.
                        </p>
                    </li>
                </ul>
                <h3>Development tools</h3>
                <ul>
                    <li>
                        <b>Shell:</b> zsh
                        <p>
                            For years I used bash, but I decided to switch to zsh due
                            to its better plugin support.
                        </p>
                    </li>
                    <li>
                        <b>Text editor:</b>
                        {" "}
                        <Link href="https://neovim.io/" target="_blank">
                            Neovim
                        </Link>
                        <p>
                            My swiss army knife. I use it for everything since my
                            first year of college.
                        </p>
                    </li>
                    <li>
                        <b>Terminal emulator:</b>
                        {" "}
                        <Link href="https://wezterm.org/" target="_blank">
                            WezTerm
                        </Link>
                        <p>
                            For me, one of the best software made in the last years.
                            The only downside is that it's written in Rust (ugly).
                        </p>
                    </li>
                    <li>
                        <b>Database management:</b>
                        {" "}
                        <Link href="https://www.jetbrains.com/datagrip/" target="_blank">
                            DataGrip
                        </Link>
                        <p>
                            I use it because of my JetBrains free license for students.
                        </p>
                    </li>
                    <li>
                        <b>Web browser:</b>
                        {" "}
                        <Link href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">
                            Firefox
                        </Link>
                        <p>
                            Not a fan of it, but there's no browser fitting my needs
                            better than this one.
                        </p>
                    </li>
                </ul>
            </Row>
        </Container>
    );
}
