import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Color from 'color';
import ColorCard from './ColorCard';
import { white, black, gray } from '../utils/colors';
import './ColorPalette.css';

const types = {
  tintsAndShades: 'tintsAndShades',
  tints: 'tints',
  shades: 'shades',
  tones: 'tones',
  lighten: 'lighten',
  darken: 'darken',
  saturated: 'saturated',
  desaturated: 'desaturated',
};

const ColorPalette = ({
  className,
  type,
  baseColor,
  length = 10,
  increment = 0.1,
  includeBaseColor = false,
  reversed = false,
  onSelectColor = () => {},
}) => {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    const base = new Color(baseColor);
    const colors = includeBaseColor ? [base] : [];
    const lightness = base.lightness();
    const saturation = base.saturationl();

    for (let i = 0; i < length; i++) {
      const weight = (i + 1) * increment;
      var color = base;

      /* eslint-disable no-case-declarations */
      switch (type) {
        case types.tintsAndShades:
          if (i < length / 2) {
            color = color.mix(white, 0.5 - weight);
          } else {
            color = color.mix(black, weight - 0.5);
          }
          break;
        case types.tints:
          color = color.mix(white, weight);
          break;
        case types.shades:
          color = color.mix(black, weight);
          break;
        case types.tones:
          color = color.mix(gray, weight);
          break;
        case types.lighten:
          color = color.lightness(lightness + weight * (100 - lightness));
          break;
        case types.darken:
          color = color.lightness(color.lightness() * (1 - weight));
          break;
        case types.saturated:
          color = color.saturationl(saturation + weight * (100 - saturation));
          break;
        case types.desaturated:
          color = color.saturationl(color.saturationl() * (1 - weight));
          break;
        default:
          break;
      }
      /* eslint-enable no-case-declarations */

      colors.push(color.hex());
    }

    if (reversed) {
      setPalette(colors.reverse());
    } else {
      setPalette(colors);
    }
  }, [baseColor, includeBaseColor, increment, length, reversed, type]);

  return (
    <div className={classNames('color-palette', type, className)}>
      {palette.map((color, index) => (
        <ColorCard
          key={index}
          color={color}
          size="flex"
          onSelect={onSelectColor}
        />
      ))}
    </div>
  );
};

ColorPalette.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(types)).isRequired,
  baseColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  length: PropTypes.number,
  increment: PropTypes.number,
  includeBaseColor: PropTypes.bool,
  reversed: PropTypes.bool,
  onSelectColor: PropTypes.func,
};

ColorPalette.types = types;

export default ColorPalette;