# syntax = docker/dockerfile:1

ARG NODE_VERSION=24.18.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Override so devDependencies actually get installed for the build
ENV NODE_ENV="development"

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./
RUN npm ci --include=dev --legacy-peer-deps

COPY . .

RUN npm run build

RUN npm prune --omit=dev


# Final stage for app image
FROM base

COPY --from=build /app /app

EXPOSE 3000
CMD [ "npm", "run", "start" ]