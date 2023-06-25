import { Image, Grid, Spacer, Text, Link } from "@geist-ui/core";
import { Github, Linkedin, Twitter, Book } from "@geist-ui/icons";

import Wrapper from "../components/wrapper";

Home.displayName = "Home";
export default function Home() {
  return (
    <Wrapper>
      <Grid xs={30} sm={15} md={15} lg={8} xl={5}>
        <Image src="profile.jpeg" alt="Jose Esparza" />
      </Grid>
      <Spacer w={5} />
      <Grid lg direction="column">
        <h3>Welcome!</h3>
        <Text p>
          I'm a Software Engineer with extensive knowledge in Machine Learning,
          Data Science and Developing. My experience in both academics and
          industry makes me aware of novelty and fast driving, as well as good
          analytical skills. I worked with teams from different countries,
          giving me an integral communication fluency in English. Some of my
          work are related with complex systems using large data pipelines, as
          well as performing analysis and applying machine learning models.
        </Text>
        <Text p>
          I studied in{" "}
          <Link href="https://www.upn.edu.pe/" target="_blank" color icon>
            Universidad Privada del Norte
          </Link>{" "}
          and received as a Bachelor in Software Engineering. My bachelor
          research project was highlighted due to subject innovation in my alma
          mater, as well as presented in{" "}
          <Link
            href="https://smiles.skoltech.ru/school-2020"
            target="_blank"
            color
            icon
          >
            SMILES 2020
          </Link>{" "}
          as a research poster.
        </Text>
        <Text p>
          As part of the first{" "}
          <Link
            href="https://www.repuprogram.org/repu-cs"
            target="_blank"
            color
            icon
          >
            REPUcs
          </Link>{" "}
          cohort, I presented and published a{" "}
          <Link
            href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18"
            color
            icon
            target="_blank"
          >
            research paper
          </Link>{" "}
          about COVID-19 vaccine roll social reaction and it was indexed in the{" "}
          <Link
            href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en"
            color
            icon
            target="_blank"
          >
            WHO COVID-19 Research Database
          </Link>
          . I was mentored by{" "}
          <Link
            href="https://www.linkedin.com/in/gissella-bejarano-phd-3789b01a/"
            color
            icon
            target="_blank"
          >
            Gissella Bejarano
          </Link>
          , being part of the Machine Learning Research Group from{" "}
          <Link
            href="https://www.binghamton.edu/computer-science/index.html"
            color
            icon
            target="_blank"
          >
            Binghamton University Computer Science Department
          </Link>
          .
        </Text>
        <Text>
          I'm a Julia Programming Language enthusiast, and most of my personal
          computer science projects are based on it. This is great language, and
          I'm convinced that it will be the future of scientific computing. The
          Google Summer of Code 2023 gave me the opportunity to be a{" "}
          <Link
            href="https://alan-turing-institute.github.io/MLJ.jl/dev/"
            color
            icon
            target="_blank"
          >
            Machine Learning in Julia (MLJ)
          </Link>{" "}
          contributor, being mentored by{" "}
          <Link href="https://ablaom.github.io" color icon target="_blank">
            Anthony Blaom, PhD
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.linkedin.com/in/deyandyankov/"
            color
            icon
            target="_blank"
          >
            Deyan Dyankov
          </Link>
          .
        </Text>
        <Text>
          I play vocals in a band called{" "}
          <Link
            href="https://pebeto.github.io/elmejorveranodemivida/"
            color
            icon
            target="_blank"
          >
            El mejor verano de mi vida
          </Link>{" "}
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
