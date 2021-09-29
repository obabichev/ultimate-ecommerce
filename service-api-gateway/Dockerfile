FROM nginx:1.19.5-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY templates /etc/nginx/templates
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
