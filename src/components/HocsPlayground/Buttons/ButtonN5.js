/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose } from "recompose";
import BaseButton from "./BaseButton";

// import withDecrementCounter from '../hocs/withDecrementCounter';
import withLargeSize from "../hocs/withLargeSize";
import withPrimaryColor from "../hocs/withPrimaryColor";
import withDegree from "../hocs/withDegree";

export default compose(
  withDegree,
  withLargeSize,
  withPrimaryColor
)(BaseButton);
