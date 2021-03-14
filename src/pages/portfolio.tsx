import * as React from 'react';
import { Layout } from '../layouts';
import SEO from "../components/common/SEO"
import { FlexWrapper, LayoutContainer, GridWrapper } from "../layouts/Layout.styles"
import { Heading } from "../components/common/Heading"
import { PortfolioItem } from "../components/screens/Portfolio/PortfolioItem"
import { PortfolioDetails } from "../components/screens/Portfolio/PortfolioDetails"
import Modal from "../components/common/Modal"

export default function Portfolio() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLocked, setIsLocked] = React.useState(true);
  const [isLockedOpen, setIsLockedOpen] = React.useState(false);

  return (
    <Layout>
      <SEO title={'Portfolio'} />
      <LayoutContainer>
        <FlexWrapper direction={"column"}>
          <Heading text={"Portfolio"} style={{ color: "var(--light)" }} />
          <GridWrapper columns={3} gap={15}>
            <PortfolioItem clickHandler={ setIsOpen } title={'Black & White Shoe'} />
          </GridWrapper>
        </FlexWrapper>
      </LayoutContainer>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <p>I'm a modal window, I use portal so I only exist when I'm open.</p>
        <p>
          Also tabbing is locked inside me go ahead and try tabbing to the
          button behind me.
        </p>
        <p style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </button>
        </p>
      </Modal>

    </Layout>
  )
}