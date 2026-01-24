import icons from '@iconify-json/ri/icons.json' with { type: 'json' };

const data = Object.keys(icons.icons).map(name => `i-ri-${name}`);

export default data;
