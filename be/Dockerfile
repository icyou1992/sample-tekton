FROM node:14.15.0 as builder

# 작업 폴더를 만들고 npm 설치
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json /usr/src/app/
RUN ls ./
RUN ls /usr/src/app
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# 소스를 작업폴더로 복사하고 빌드
COPY . /usr/src/app

EXPOSE 8080
CMD ["node", "server.js"]