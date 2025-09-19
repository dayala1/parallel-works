import YAML from 'yaml';
import jaRaw from './ja.yml?raw';

const data = YAML.parse(jaRaw);
export default data;
