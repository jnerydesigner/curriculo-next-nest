FROM node:20-alpine


WORKDIR /usr/src/app


COPY package.json yarn.lock* ./

COPY tsconfig.json ./

COPY ./src/infra/database/postgres/prisma ./prisma

RUN yarn install --frozen-lockfile

RUN yarn prisma generate

RUN yarn build

COPY ./dist ./dist


# Exponha a porta que o app usa (altere para a porta correta do seu app)
EXPOSE 3000

# Comando para iniciar o app
CMD [ "yarn", "start:prod" ]