FROM amazonlinux:2 as base-image

RUN yum -y install tar gzip
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 14

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

RUN mkdir -p /app
WORKDIR /app
