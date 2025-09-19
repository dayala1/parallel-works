import YAML from 'yaml';
import enRaw from './en.yml?raw';

const data = YAML.parse(enRaw);
export default data;
