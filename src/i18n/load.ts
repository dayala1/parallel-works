import YAML from 'yaml';

export type Dict = Record<string, any>;

export async function loadI18n(locale: string): Promise<Dict> {
  const files = import.meta.glob('./*.yml', { as: 'raw' });
  const loader = files[`./${locale}.yml`] ?? files['./en.yml'];
  const raw = await (loader as () => Promise<string>)();
  return YAML.parse(raw);
}
