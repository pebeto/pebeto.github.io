import Link from "next/link";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
    title: "Tools | Jose's Website",
};

export default async function Tools() {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Why are you showing me this?</h3>
                    <p>
                        I consider that a good workflow with the correct tools are essential
                        to be productive. Who doesn't want to be comfortable and efficient?
                        When I was in college, I was always looking to help my classmates
                        with tools I found useful. I think that can be impactful for them,
                        so I decided to share them here.
                    </p>
                    <h4>Operative system & Desktop Environment</h4>
                    <p>
                        When I started my journey in the world of programming, I was using
                        Windows 7. My first programming course was in C++ and installing
                        libraries was a pain. So I decided to switch to GNU/Linux. I was
                        using{" "}
                        <Link href="https://elementary.io/" target="_blank">
                            Elementary OS
                        </Link>{" "}
                        and it looked great, but I was not happy with the performance. Like
                        six months later, I read about{" "}
                        <Link href="https://archlinux.org/" target="_blank">
                            {" "}
                            Arch Linux
                        </Link>{" "}
                        and I decided to give it a try. I was amazed by the learning curve
                        and the community (I used it for more than five years!!!). However,
                        there was a lot of compatibility issues with my{" "}
                        <Link
                            href="https://github.com/pebeto/mountainrice"
                            target="_blank"
                        >
                            desktop environment
                        </Link>{" "}
                        that forced me to switch to a more traditional option. I decided to
                        switch to{" "}
                        <Link href="https://ubuntu.com/" target="_blank">
                            Ubuntu
                        </Link>{" "}
                        and I'm using it since then. I'm really happy with it and I'm not
                        planning to switch to another distro for a while. However, my laptop
                        uses Arch with Wayland and I'm really happy with it (still a fanboy).
                    </p>
                    <h4>Terminal emulator</h4>
                    <p>
                        Choosing the right terminal emulator is essential for a good
                        workflow. There are a lot of options for all types of users
                        (focused on speed, customization, extra features, etc.). I tried a
                        lot of them (
                        <Link
                            href="http://software.schmorp.de/pkg/rxvt-unicode.html"
                            target="_blank"
                        >
                            urxvt
                        </Link>
                        ,{" "}
                        <Link href="https://st.suckless.org/" target="_blank">
                            st
                        </Link>
                        ,{" "}
                        <Link href="https://alacritty.org/" target="_blank">
                            Alacritty
                        </Link>
                        ,{" "}
                        <Link
                            href="https://sw.kovidgoyal.net/kitty/"
                            target="_blank"
                        >
                            kitty
                        </Link>
                        ,{" "}
                        <Link
                            href="https://gnome-terminator.org/"
                            target="_blank"
                        >
                            Terminator
                        </Link>
                        ,{" "}
                        <Link
                            href="https://gitlab.gnome.org/raggesilver/blackbox"
                            target="_blank"
                        >
                            Black Box
                        </Link>
                        , to mention some of them). Now I'm using{" "}
                        <Link
                            href="https://wezfurlong.org/wezterm/"
                            target="_blank"
                        >
                            WezTerm
                        </Link>{" "}
                        as my daily driver because it's fast, minimal, lightweight, and
                        has the customization options I need.
                    </p>
                    <p>
                        <Link
                            href="https://www.gnu.org/software/bash/"
                            target="_blank"
                        >
                            Bash
                        </Link>
                        is my choice for a shell. I tried other shells, like{" "}
                        <Link href="https://www.zsh.org/" target="_blank">
                            Zsh
                        </Link>
                        and{" "}
                        <Link href="https://fishshell.com/" target="_blank">
                            fish
                        </Link>
                        , but I don't need all the extra features they provide.
                    </p>
                    <p>
                        For my personal taste, I like to have it minimal as possible. It
                        means: no tabs, no status bar, no scroll bar, no menu bar, no
                        title bar, no window decorations, <b>no nothing</b>. You
                        can find my configuration in my{" "}
                        <Link
                            href="https://github.com/pebeto/dotfiles"
                            target="_blank"
                        >
                            dotfiles
                        </Link>
                        .
                    </p>
                    <h4>Text editor & IDEs</h4>
                    <p>
                        I usually avoid using IDEs. They are great for beginners, but full
                        of features that I will never use! My tools selection includes{" "}
                        <Link href="https://neovim.io/" target="_blank">
                            Neovim
                        </Link>{" "}
                        as my main editing tool. Avoiding to talk about the recurring of
                        speed, the plugin capability is insane (and now with Lua is
                        everything better than before). You can find my configuration in my{" "}
                        <Link
                            href="https://github.com/pebeto/dotfiles"
                            target="_blank"
                        >
                            dotfiles
                        </Link>
                        .
                    </p>
                    <p>
                        Thanks to my university, and the fact that IT people don't delete my
                        account; I have full access to JetBrains paid tools. From there I
                        only use certain tools:{" "}
                        <Link
                            href="https://www.jetbrains.com/idea/"
                            target="_blank"
                        >
                            IntelliJ IDEA Ultimate
                        </Link>{" "}
                        (I use it to develop my minecraft server plugin),{" "}
                        <Link
                            href="https://www.jetbrains.com/datagrip/"
                            target="_blank"
                        >
                            DataGrip
                        </Link>{" "}
                        &{" "}
                        <Link
                            href="https://www.jetbrains.com/dataspell/"
                            target="_blank"
                        >
                            DataSpell
                        </Link>
                        . I really recommend these tools for the simplicity they provide
                        when installing dependencies. For everything else, they have a lot
                        of things that you will only use once in your life.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
