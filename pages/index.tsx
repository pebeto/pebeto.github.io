import { Image, Grid, Spacer, Text, Link } from '@geist-ui/core';
import { Github, Linkedin, Twitter, Book } from '@geist-ui/icons';

import Wrapper from './components/wrapper';

Home.displayName = 'Home';
export default function Home() {
  return (
    <Wrapper>
      <Grid xs={30} sm={15} md={15} lg={5} xl={5}>
        <Image src="profile.jpeg" alt="Jose Esparza" />
      </Grid>
      <Spacer w={5} />
      <Grid lg direction="column">
        <Text p>
          I'm a Software Engineer with extensive knowledge about Machine
          Learning, Data Science and Developing. My experience in both academics
          and industry makes me aware of novelty and fast driving, as well as
          good analytical skills. I worked with multi-national teams, mostly
          speaking the English language, giving me an integral communication
          fluency. Some of my work are related with complex systems using large
          data pipelines, as well as performing analysis and applying machine
          learning models.
        </Text>
        <Text p>
          I studied in{' '}
          <a href="https://www.upn.edu.pe/" target="_blank">
            Universidad Privada del Norte
          </a>{' '}
          and received as a Bachelor in Software Engineering. My bachelor
          research project was highlighted due to subject innovation in my alma
          mater, as well as presented in{' '}
          <a href="https://smiles.skoltech.ru/school-2020" target="_blank">
            SMILES 2020
          </a>{' '}
          as a research poster.
        </Text>
        <Text p>
          As part of the first{' '}
          <a href="https://www.repuprogram.org/repu-cs" target="_blank">
            REPU Computer Science
          </a>{' '}
          cohort, I presented and published a{' '}
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18"
            target="_blank"
          >
            research paper
          </a>{' '}
          about COVID-19 vaccine roll social reaction and it was indexed in the{' '}
          <a
            href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en"
            target="_blank"
          >
            WHO COVID-19 Research Database
          </a>
          . I was mentored by{' '}
          <a
            href="https://www.linkedin.com/in/gissella-bejarano-phd-3789b01a/"
            target="_blank"
          >
            Gissella Bejarano
          </a>
          , being part of the Machine Learning Research Group from{' '}
          <a
            href="https://www.binghamton.edu/computer-science/index.html"
            target="_blank"
          >
            Binghamton University Computer Science Department
          </a>
          .
        </Text>
        <Text>
          I play vocals in a band called{' '}
          <a
            href="https://pebeto.github.io/elmejorveranodemivida/"
            target="_blank"
          >
            El mejor verano de mi vida
          </a>{' '}
          (The best summer of my life). We were recognized as part of the fifth
          wave of emo, so I'm proud of it. I also like to play Magic The
          Gathering and I have two cats.
        </Text>
        <Spacer />
        <Grid>
          <Link href="https://github.com/pebeto" target="_blank">
            <Github color="gray" />
          </Link>
          <Spacer inline={true} />
          <Link href="https://www.linkedin.com/in/josesparza/" target="_blank">
            <Linkedin color="darkblue" />
          </Link>
          <Spacer inline={true} />
          <Link href="https://twitter.com/pebeto99" target="_blank">
            <Twitter color="blue" />
          </Link>
          <Spacer inline={true} />
          <Link
            href="https://scholar.google.com/citations?user=SVSY8pIAAAAJ"
            target="_blank"
          >
            <Book color="brown" />
          </Link>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
