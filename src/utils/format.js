export const formatRGB = (color) => {
  const red = Math.round(color.red());
  const green = Math.round(color.green());
  const blue = Math.round(color.blue());
  return `RGB: ${red} ${green} ${blue}`;
};

export const formatCMYK = (color) => {
  const cyan = Math.round(color.cyan());
  const magenta = Math.round(color.magenta());
  const yellow = Math.round(color.yellow());
  const black = Math.round(color.black());
  return `CMYK: ${cyan}/${magenta}/${yellow}/${black}`;
};

export const formatHSL = (color) => {
  const hue = Math.round(color.hue());
  const saturation = Math.round(color.saturationl());
  const lightness = Math.round(color.lightness());
  return `HSL: ${hue}° ${saturation}% ${lightness}%`;
};

export const formatHSV = (color) => {
  const hue = Math.round(color.hue());
  const saturation = Math.round(color.saturationv());
  const lightness = Math.round(color.lightness());
  return `HSV: ${hue}° ${saturation}% ${lightness}%`;
};

export const formatLuminance = (color) => {
  const luminance = color.luminosity();
  return `Luminance: ${
    Math.round((luminance + Number.EPSILON) * 10000) / 10000
  }`;
};