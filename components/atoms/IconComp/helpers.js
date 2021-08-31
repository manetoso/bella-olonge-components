const ICONS_ASSET_MAP = '/Icons'

const iconMap = {
  facebook: 'icon-facebook',
  instagram: 'icon-instagram',
  linkedin: 'icon-linkedin',
  twitter: 'icon-twitter',
  menu: 'icon-menu'
}

const iconSize = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
}

export const mapIcon = (type) => {
  return `./${ICONS_ASSET_MAP}/${iconMap[type]}.svg`
}
export const mapSize = (size) => {
  return iconSize[size]
}
