import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
  background: #181717;
  padding: 80px 30px;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  transition: .3s;
`;

export const Close = styled.span`
  position: fixed;
  top: 10px;
  right: 10px;
  opacity: .8;
  font-size: 36px;
  z-index: 9999;
  &:hover {
    opacity: 1;
  }
`;