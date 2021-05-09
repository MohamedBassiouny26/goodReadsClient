# FROM nginx:alpine
# WORKDIR /usr/src/app
# COPY  /dist/goodReadsAngular ./
# # RUN npm install
# # RUN npm i ngx-pagination
# ENV PORT=4200
# # COPY . .
# EXPOSE 4200
# CMD ["npm","start"]

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/goodReadsAngular /usr/share/nginx/html