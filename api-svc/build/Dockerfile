FROM node:22.14.0

WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 3000

CMD ["pnpm", "dev"]