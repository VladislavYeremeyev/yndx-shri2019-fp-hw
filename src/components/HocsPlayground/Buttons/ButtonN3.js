/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withCounter from '../hocs/withCounter';
import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';

export default compose(
    withCounter,
    withSmallSize,
    withPrimaryColor,
)(BaseButton)
