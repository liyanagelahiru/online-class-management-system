# dev environment

FROM node:20-alpine

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "pnpm run dev --host"]