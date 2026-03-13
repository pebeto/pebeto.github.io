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
                <h3>
                    Operative system:{" "}
                    <Link href="https://archlinux.org/" target="_blank">
                        Arch Linux
                    </Link>
                </h3>
                <p>
                    Installed in my Thinkpad T470 and desktop computer. I switched
                    to Arch Linux because I can better manage the configurations
                    and share them between machines. My window manager is {" "}
                    <Link href="https://swaywm.org/" target="_blank">
                        Sway
                    </Link>{" "}
                    , so now I'm in the fields of Wayland.
                </p>
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
                        <Link href="https://helium.computer/" target="_blank">
                            Helium
                        </Link>
                        <p>
                            Chosen for simplicity and no privacy concerns. I prefer
                            avoiding Mozilla's trend of bloating the browser with AI
                            features, like everyone else in software these days.
                        </p>
                    </li>
                    <li>
                        <b>Code assistant:</b>
                        {" "}
                        <Link href="https://opencode.ai/" target="_blank">
                            OpenCode
                        </Link>
                        <p>
                            Running {" "}
                            <Link href="https://huggingface.co/Sehyo/Qwen3.5-35B-A3B-NVFP4" target="_blank">
                                Sehyo/Qwen3.5-35B-A3B-NVFP4
                            </Link>. Useful for code generation and code explanation. However, I don't
                            rely on it entirely because I'm not a vibe-coder. I prefer
                            to "operate" it and understand the solution before using it,
                            avoiding the "copy-paste" mentality that can be harmful for
                            learning and understanding the code.
                        </p>
                    </li>
                </ul>
                <h3>Personal tools</h3>
                <ul>
                    <li>
                        <b>Daily notes:</b>
                        {" "}
                        <Link href="https://www.moleskine.com/en-us/" target="_blank">
                            Moleskine notebook
                        </Link>
                        <p>
                            Since I use it for daily notes, my mind is more focused and I
                            can remember things better. The decision to stay away from
                            digital tools for this purpose is because of the distraction
                            they can cause.
                        </p>
                    </li>
                    <li>
                        <b>Agenda:</b>
                        {" "}
                        <Link href="https://orgmode.org/" target="_blank">
                            Org Mode
                        </Link>
                        <p>
                            Don't look me in the eyes, I know it's not physical as the
                            notebooks, but it's extremely useful for managing events
                            and tasks. I use it in Neovim thanks to {" "}
                            <Link href="https://github.com/nvim-orgmode/orgmode" target="_blank">
                                nvim-orgmode
                            </Link>, and thanks to it a message is always sent to my
                            family and friends on the day of their birthday.
                        </p>
                    </li>
                    <li>
                        <b>Note-taking:</b>
                        {" "}
                        <Link href="https://shop.travelerscompanyusa.com/products/travelers-notebook-passport-size-brown" target="_blank">
                            Traveler's notebook Passport size
                        </Link>
                        <p>
                            Using it as my wallet too. I write down ideas, to-do lists, and
                            other things I want to remember or to transfer to another
                            notebook later. Thanks to its size, I can carry it everywhere
                            and never forget what I should do or what I want to do.

                        </p>
                    </li>
                    <li>
                        <b>Syncing files:</b>
                        {" "}
                        <Link href="https://syncthing.net/" target="_blank">
                            Syncthing
                        </Link>
                        <p>
                            My resume, books, papers, orgfiles, and other important files
                            are synced between my devices. I don't want to rely on
                            third-party services for this. Adding a VPN to the mix, I can
                            access my files from anywhere without worrying about privacy or
                            security.
                        </p>
                    </li>
                </ul>
            </Row>
        </Container>
    );
}
