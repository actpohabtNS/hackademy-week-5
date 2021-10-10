FROM node:lts as dependencies
WORKDIR /openweather-nextjs
COPY package.json package-lock.json ./
RUN npm install --production

FROM node:lts as builder
WORKDIR /openweather-nextjs
COPY . .
RUN npm build

FROM node:lts as runner
WORKDIR /openweather-nextjs
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /openweather-nextjs/next.config.js ./
COPY --from=builder /openweather-nextjs/public ./public
COPY --from=builder /openweather-nextjs/.next ./.next
COPY --from=builder /openweather-nextjs/node_modules ./node_modules
COPY --from=builder /openweather-nextjs/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
