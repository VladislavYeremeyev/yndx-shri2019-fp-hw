import { withHandlers } from "recompose";

export default withHandlers({
  onClick: ({ setOuterColor, setInnerColor, counter, setCounter }) => () => {
    setCounter(counter - 1);
    if (counter - 1 === 0) {
      setCounter(5);
      setInnerColor("orange");
      setOuterColor("orange");
    }
  }
});
