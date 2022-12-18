FROM hub.oocc.es/home/pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . ./

EXPOSE 3000

CMD [ "node","-r", "dotenv/config","app.js" ]
