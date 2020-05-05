FROM alpine:3 AS build
ARG BASE_URL=https://bytemagic.cloud
WORKDIR /opt/site
RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/testing/ >> /etc/apk/repositories \
 && apk add --update --no-cache zola git
COPY . /opt/site
RUN set -x \
 && sed -ie 's|^base_url.*$|base_url = "'$BASE_URL'"|g' config.toml \
 && git submodule init \
 && git submodule update \
 && zola build

FROM nginx:1.17-alpine
MAINTAINER Ryota Kota <ryota.kota@member.fsf.org>
COPY --from=build /opt/site/public /usr/share/nginx/html
EXPOSE 80
