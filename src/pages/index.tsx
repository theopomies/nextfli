import {
  JumbotronContainer,
  JumbotronContainerProps,
} from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import { FaqContainer, FaqContainerProps } from "../containers/Faq";
import { GetStaticProps } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

interface HomeProps {
  jumboProps: JumbotronContainerProps;
  faqProps: FaqContainerProps;
}

export default function Home({ jumboProps, faqProps }: HomeProps) {
  return (
    <>
      <JumbotronContainer {...jumboProps} />
      <FaqContainer {...faqProps} />
      <FooterContainer />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const REL_JUMBO_PATH = "/src/fixtures/jumbo.json";
  const REL_FAQ_PATH = "/src/fixtures/faq.json";

  const jumboDataPath = join(cwd(), REL_JUMBO_PATH);
  const jumboStringData = readFileSync(jumboDataPath).toString();
  const jumboData = JSON.parse(jumboStringData);

  const faqDataPath = join(cwd(), REL_FAQ_PATH);
  const faqStringData = readFileSync(faqDataPath).toString();
  const faqData = JSON.parse(faqStringData);
  return {
    props: {
      jumboProps: {
        jumboData,
      },
      faqProps: {
        faqData,
      },
    },
  };
};
