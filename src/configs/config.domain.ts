
interface Config {
    domain: string;
}

const dev: Config = {
    domain: import.meta.env.VITE_DOMAIN_DEV || '',
};

const pro: Config = {
    domain: import.meta.env.VITE_DOMAIN_PRO || '',
};

const config_raw: Record<string, Config> = { dev, pro };
const env: string = import.meta.env.VITE_NODE_ENV || 'dev';
const configDomain: Config | undefined = config_raw[env];

export default configDomain;