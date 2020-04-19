FROM nginx:1.17-alpine
COPY ./static-content /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx-config/default.conf /etc/nginx/conf.d