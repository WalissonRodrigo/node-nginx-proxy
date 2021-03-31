FROM nginx:latest

RUN apt-get update -y && \
  apt-get upgrade -y && \
  apt-get install vim bash -y

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
# create a file for nginx find a file web and not return 404 error
RUN mkdir /var/www/html -p && touch /var/www/html/index.html


ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]