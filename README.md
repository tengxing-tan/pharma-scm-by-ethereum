## Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Running Next.js app

```shell
pnpm install
pnpm dev
```

## Initilize Database

Modify `.env`
```shell
pnpm dlx prisma generate
pnpm dlx prisma migrate dev 
```
