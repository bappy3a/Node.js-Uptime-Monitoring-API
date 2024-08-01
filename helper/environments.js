// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 6000,
    envName: 'production',
};

const currentEnviroment =    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =    typeof environments[currentEnviroment] === 'object'
        ? environments[currentEnviroment]
        : environments.staging;

module.exports = environmentToExport;