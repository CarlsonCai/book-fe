# build stage
FROM node:16.17.0-slim as build-stage

# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm@7.8.0 && \
		pnpm install
COPY . .
ARG VUE_BUILD_MODE
RUN pnpm run build --mode production
# RUN pnpm run build --mode ${VUE_BUILD_MODE}


# production stage
FROM nginx:1.20.1-alpine as production-stage
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8810
CMD ["nginx", "-g", "daemon off;"]
