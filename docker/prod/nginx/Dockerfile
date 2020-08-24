FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/prod/nginx/inzu_nginx.conf /etc/nginx/conf.d/

RUN mkdir -p /media/
RUN mkdir -p /static/

WORKDIR /media
RUN chown -R nginx:nginx /media

WORKDIR /static
RUN chown -R nginx:nginx /static

COPY ./inzu/static /static/
COPY ./media /media/

