import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>
        Questions? Call{" "}
        <Footer.Link href="tel:(+33) 0805-543-064">
          (+33) 0805-543-064
        </Footer.Link>
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.LinkContainer>
            <Footer.Link href="#">FAQ</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Investor Relations</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Corporate Information</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.LinkContainer>
        </Footer.Column>

        <Footer.Column>
          <Footer.LinkContainer>
            <Footer.Link href="#">Help Centre</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Jobs</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Terms of Use</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkContainer>
        </Footer.Column>

        <Footer.Column>
          <Footer.LinkContainer>
            <Footer.Link href="#">Account</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Redeem gift cards</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Privacy</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.LinkContainer>
        </Footer.Column>

        <Footer.Column>
          <Footer.LinkContainer>
            <Footer.Link href="#">Media Centre</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Buy gift cards</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
          </Footer.LinkContainer>
          <Footer.LinkContainer>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.LinkContainer>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix France</Footer.Text>
    </Footer>
  );
}
