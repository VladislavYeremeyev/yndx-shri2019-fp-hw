import { withHandlers } from "recompose";

export default withHandlers({
  onClick: ({ setOuterColor, setInnerColor, counter, setCounter }) => () => {
    if ((counter + 1) % 2 === 0) {
      setInnerColor("gray");
      setOuterColor("gray");
    } else {
      setInnerColor("green");
      setOuterColor("green");
    }
    setCounter(counter + 1);
  }
});
