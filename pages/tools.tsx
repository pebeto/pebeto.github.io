import { Grid, Spacer, Text, Image, Display } from '@geist-ui/core';

import Wrapper from './components/wrapper';

Tools.displayName = 'Tools';
export default function Tools() {
  return (
    <Wrapper>
      <Grid>
        <Text h3>Why are you showing me this?</Text>
        <Text p>
          I consider that a good workflow with the correct tools are essential
          to be productive. Who doesn't want to be comfortable and efficient?
          When I was in college, I was always looking to help my classmates with
          tools I found useful. I think that can be impactful for them, so I
          decided to share them here.
        </Text>
        <Spacer />
      </Grid>
      <Grid lg direction="column">
        <Text h4>Operative system & Desktop Environment</Text>
        <Text p>
          When I started my journey in the world of programming, I was using
          Windows 7. My first programming course was in C++ and installing
          libraries was a pain. So I decided to switch to Linux. I was using{' '}
          <a href="https://elementary.io/" target="_blank">
            Elementary OS
          </a>{' '}
          and it looked great, but I was not happy with the performance. Like
          six months later, I read about{' '}
          <a href="https://archlinux.org/" target="_blank">
            {' '}
            Arch Linux
          </a>{' '}
          and I decided to give it a try. I was amazed by the learning curve and
          the community (I used it for more than five years!!!). However, there
          was a lot of compatibility issues with my{' '}
          <a href="https://github.com/pebeto/mountainrice" target="_blank">
            desktop environment
          </a>{' '}
          that forced me to switch to a more traditional option. I decided to
          switch to{' '}
          <a href="https://ubuntu.com/" target="_blank">
            Ubuntu
          </a>{' '}
          and I'm using it since then. I'm really happy with it and I'm not
          planning to switch to another distro for a while.
        </Text>
        <Text h4>Terminal emulator</Text>
        <Text p>
          Choosing the right terminal emulator is essential for a good workflow.
          There are a lot of options for all types of users (focused on speed,
          customization, extra features, etc.). I'm using{' '}
          <a
            href="https://gitlab.gnome.org/raggesilver/blackbox"
            target="_blank"
          >
            Blackbox
          </a>{' '}
          because it's fast, minimal, lightweight, and has the customization
          options I need.
        </Text>
        <Text h4>Text editor & IDEs</Text>
        <Text p>
          I usually avoid using IDEs. They are great for beginners, but full of
          features that I will never use! My tools selection includes{' '}
          <a href="https://neovim.io/" target="_blank">
            Neovim
          </a>{' '}
          as my main editing tool. Avoiding to talk about the recurring of
          speed, the plugin capability is insane (and now with Lua is everything
          better than before). You can find my config in my{' '}
          <a href="https://github.com/pebeto/dotfiles" target="_blank">
            dotfiles
          </a>
          .
        </Text>
        <Text p>
          Thanks to my university, and the fact that IT people don't delete my
          account; I have full access to JetBrains paid tools. From there I only
          use certain tools:{' '}
          <a href="https://www.jetbrains.com/idea/" target="_blank">
            IntelliJ IDEA Ultimate
          </a>{' '}
          (I use it to develop my minecraft server plugin),{' '}
          <a href="https://www.jetbrains.com/datagrip/" target="_blank">
            DataGrip
          </a>{' '}
          &{' '}
          <a href="https://www.jetbrains.com/dataspell/" target="_blank">
            DataSpell
          </a>
          . I really recommend these tools for the simplicity they provide when
          installing dependencies. For everything else, they have a lot of
          things that you will only use once in your life.
        </Text>
      </Grid>
      <Grid xs={30} sm={30} md={20} lg={12} xl={10}>
        <Display
          caption={
            <p>
              <a
                href="https://gitlab.gnome.org/raggesilver/blackbox"
                target="_blank"
              >
                Blackbox
              </a>{' '}
              window with{' '}
              <a href="https://starship.rs/" target="_blank">
                Starship
              </a>{' '}
              prompt
            </p>
          }
        >
          <Image src="terminal.png" />
        </Display>
      </Grid>
    </Wrapper>
  );
}
