FROM node:16
WORKDIR /usr/src/app
COPY ./ ${WORKDIR}
RUN yarn install
EXPOSE 3000
CMD yarn start