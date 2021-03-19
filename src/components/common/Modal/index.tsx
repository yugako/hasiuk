import * as React from "react";
import { Content, Backdrop, Close } from './Modal.styles';
import Portal from "./Portal";

export default function Modal(props) {
  const [active, setActive] = React.useState(false);
  const { open, onClose } = props;
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const { current } = backdrop;
    const transitionEnd = () => setActive(open);
    const keyHandler = e => [27].indexOf(e.which) >= 0 && onClose();
    const clickHandler = e => e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        // @ts-ignore
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#___gatsby").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#___gatsby").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <Backdrop ref={backdrop} className={active && open && "active"}>
            <Content className="modal-content">{props.children}</Content>
            <Close />
          </Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
}
