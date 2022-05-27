const hre = require("hardhat");

async function main() {
  const Cactus = await hre.ethers.getContractFactory("Cactus");
  const cactus = await Cactus.deploy();

  await cactus.deployed();
  console.log("CmCactusNaive deployed to:", cactus.address);

  // opensea matadata uri
  await cactus.mint("https://ipfs.io/ipfs/QmVb4cUioXVyEZyBd4uVkhusaE6ykuNhvMHAHMs6PC6ti7");
  console.log("NFT successfuly minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
