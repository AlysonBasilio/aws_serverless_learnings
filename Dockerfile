FROM python:3.7.3-alpine3.9

COPY terraform /bin/

RUN pip install --upgrade pip --no-cache-dir
RUN pip install awscli --no-cache-dir

WORKDIR /app

CMD [ "/bin/sh" ]
