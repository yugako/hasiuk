import * as React from "react";
import { Layout } from "../layouts";
import SEO from "../components/common/SEO";
import { FlexWrapper, LayoutContainer, GridWrapper } from "../layouts/Layout.styles";
import { Heading } from "../components/common/Heading";
import { PortfolioItem } from "../components/screens/Portfolio/PortfolioItem";
import { PortfolioDetails } from "../components/screens/Portfolio/PortfolioDetails";
import Modal from "../components/common/Modal";

export default function Portfolio() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Layout>
      <SEO title={"Portfolio"} />
      <LayoutContainer>
        <FlexWrapper direction={"column"}>
          <Heading text={"Portfolio"} style={{ color: "var(--light)" }} />
          <GridWrapper columns={3} gap={15}>
            <PortfolioItem clickHandler={setIsOpen} title={"Black & White Shoe"} />
          </GridWrapper>
        </FlexWrapper>
      </LayoutContainer>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <PortfolioDetails
          title={"Title"}
          category={"site"}
          client={"NA"}
          date={"upcoming"}
          preview={"https://ixtheme.netlify.app/zuman/img/work_details_01.jpg"}
          link={"http://google.com"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          closeHandler={() => {
            setIsOpen(false);
          }} />
      </Modal>
    </Layout>
  );
}