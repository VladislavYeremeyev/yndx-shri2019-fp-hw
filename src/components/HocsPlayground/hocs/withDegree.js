import { withHandlers } from "recompose";

let colors = ["black", "purple", "cyan", "yellow", "pink"];

export default withHandlers({
  onClick: ({ setOuterColor, setInnerColor, degree, setDegree }) => () => {
    setDegree(degree + 30);
    if (degree + 30 === 360) {
      let randomColor = colors[Math.floor(Math.random() * colors.length)];

      setDegree(0);
      setInnerColor(randomColor);
      setOuterColor(randomColor);
    }
  }
});
