/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const { resolve } = require('tsconfig-paths');


const { compilerOptions } = JSON.parse(
    readFileSync('./tsconfig.json', 'utf-8'),
);

const { paths } = compilerOptions;


const moduleNameMapper = {};
Object.keys(paths).forEach((key) => {
    const keyWithoutStar = key.replace('/*', '');
    const value = paths[key][0].replace('/*', '');

    moduleNameMapper[`^${keyWithoutStar}(.*)$`] = `<rootDir>/${value}/$1`;
});

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper
};

