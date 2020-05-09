FROM node:12-alpine

RUN npm i -g serverless
RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
    && pip install --upgrade pip --no-cache-dir \
    && pip install awscli --no-cache-dir \
    && apk --purge -v del py-pip \
    && rm -rf /var/cache/apk/*

WORKDIR /app

CMD [ "/bin/sh" ]
