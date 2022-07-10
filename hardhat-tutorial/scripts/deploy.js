const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

const { CONTRACT_FAKE_NFT_MARKETPLACE_ADRRESS } = require("../constants");

async function main() {
  // Deploy the FakeNFTMarketplace contract first
  /*
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);
*/
  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");


  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    "0x54DCd42e6499E5f418B40BfBE9B8DD8CB4d995F8",
    "0x2a0a8f2c4427d927e2Db71328929991Cd917678e",
    {
      // This assumes your account has at least 1 ETH in it's account
      // Change this value as you want
      value: ethers.utils.parseEther("0.01"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });