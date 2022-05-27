# Simple NFT Contract Project

This project demonstrates a simple NFT contract. Details:
- Builds with [Hardhat](https://hardhat.org), follows [ERC721 Standard](https://eips.ethereum.org/EIPS/eip-721)
- Simple [OpenSea Metadata](https://docs.opensea.io/docs/metadata-standards)
- Deploy to [Matic Mumbai Testnet](https://docs.polygon.technology/docs/develop/network-details/network)

## Installation
1. Install NPM packages
```shell
npm install
```
2. Rename .env.example to .env and replace your MetaMask Private Key. Follow [these instructions](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) to export your Private Key from MetaMask

3. Replace your token information on contracts/Cactus.sol or create a new one

4. Folder opensea_metadata contain simple standard metadata opensea, replace with your data and upload to [IPFS](https://ipfs.io/) to get uri image and json

5. Run this command in root of the project directory to deploy on Matic Network
```shell
npx hardhat run scripts/deploy.js --network matic
```