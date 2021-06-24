import { Jumbotron } from "../components";
import { JumbotronImageProps, JumbotronProps } from "../components/Jumbotron";

export declare interface JumbotronData
  extends JumbotronImageProps,
    JumbotronProps {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
}

export declare interface JumbotronContainerProps {
  jumboData: JumbotronData[];
}

export function JumbotronContainer({ jumboData }: JumbotronContainerProps) {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
