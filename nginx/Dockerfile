FROM nginx:latest

RUN apt-get update -y && \
  apt-get upgrade -y && \
  apt-get install vim -y#
COPY html/ /usr/share/nginx/html/

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]