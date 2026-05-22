FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css script.js firebase-config.js CNAME /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
