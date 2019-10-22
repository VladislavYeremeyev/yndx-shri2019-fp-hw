/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose } from "recompose";
import BaseButton from "./BaseButton";

import withDecrementCounter from '../hocs/withDecrementCounter';
import withSmallSize from '../hocs/withSmallSize';
import withDefaultColor from '../hocs/withDefaultColor';

export default compose(
  withDecrementCounter,
  withSmallSize,
  withDefaultColor
)(BaseButton);
