import { Header } from "../components";

export function HeaderContainer({ home = false, browse = false }) {
  return (
    <Header home={home} browse={browse}>
      <Header.Pane>
        <Header.Logo active={!home} />
      </Header.Pane>
      <Header.Pane>
        <Header.Button href="/">Sign In</Header.Button>
      </Header.Pane>
    </Header>
  );
}
