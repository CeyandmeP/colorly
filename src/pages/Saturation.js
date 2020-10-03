import React from 'react';
import PropTypes from 'prop-types';
import { ColorCard, ColorGroup, ColorPalette } from '../components';
import { withBaseColor } from '../utils/hoc';

const Saturation = ({ baseColor, setBaseColor }) => (
  <div className="page saturation">
    <ColorGroup layout="row">
      <ColorCard color={baseColor} size="large" />
      <ColorGroup layout="column">
        <ColorPalette
          baseColor={baseColor}
          onSelectColor={setBaseColor}
          type="saturated"
        />
        <ColorPalette
          baseColor={baseColor}
          onSelectColor={setBaseColor}
          type="desaturated"
        />
      </ColorGroup>
    </ColorGroup>
  </div>
);

Saturation.propTypes = {
  baseColor: PropTypes.string.isRequired,
  setBaseColor: PropTypes.func,
};

export default withBaseColor(Saturation);