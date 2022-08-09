// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require("fs")



async function main() {

    const Degree = await ethers.getContractFactory("Degree")
    const degree = await Degree.deploy("YorkUbusiness", "YU")
    await degree.deployed()
    console.log("Degrees deployed to: " + degree.address)
    export const degreeAddress = "0x674dC7365A204c9FE6484049de979CB0D52CFD02"




    //const NFT = await ethers.getContractFactory("NFTest")
    //const nft = await NFT.deploy("name", "symbol", "baseUri", "notRevealedUri")
    //await nft.deployed()
    //console.log("nft deployed to: " + nft.address)

    //await nft.connect(0xBF8698DfB723AF6eB0A6D696eb9EFBe5D1899a82).mint(1, { value: auctionPrice })


    //const Store = await ethers.getContractFactory("StoreMarketplace")
    //const store = await Store.deploy("newBaseUri", "name", "blah")
    //await store.deployed()
    //console.log("store deployed to: " + store.address)

    //await market.setAddy(store.address)
    //console.log("setAddy success")
    //const royalAdd = "0xe6b8F935A0b5Fb1A3BE1784e5aB7897C6824467e"
    //await market.setRoyaltyAddress(royalAdd)
    //console.log("market royalty success")
    //await store.setRoyaltyAddress(royalAdd)
    //console.log("store royalty success")


    //await market.transferOwnership("0xe6b8F935A0b5Fb1A3BE1784e5aB7897C6824467e")
    //console.log("transferred marketplace")

    //await store.transferOwnership("0xe6b8F935A0b5Fb1A3BE1784e5aB7897C6824467e")
    //console.log("store transferred")


    /*
      Marketplace and store contracts
    */
    /*
    const Market = await ethers.getContractFactory("Marketplace")
    const market = await Market.deploy()
    await market.deployed()
    console.log("marketplace deployed to: " + market.address)
  
    const Store = await ethers.getContractFactory("StoreMarketplace")
    const store = await Store.deploy("newBaseUri", "name", "blah")
    await store.deployed()
    console.log("store deployed to: " + store.address)
  
    fs.writeFileSync('./config.js', `export const marketplaceAddress = "${market.address}"\nexport const storeMarketplaceAddress = "${store.address}"`)
    */

    /*
      NFT minting old - doesn't work?
    */
    /*
     const NFT = await ethers.getContractFactory("NFTest")
     const nft = await NFT.deploy("name", "symbol", "baseUri", "notRevealedUri")
     await nft.deployed()
     console.log("nft deployed to: " + nft.address)
     */

    /*
      NFT minting that works
    */
    //const NFT = await ethers.getContractFactory("ERC721PresetMinterPauserAutoId")
    //const nft = await NFT.deploy("TestContract", "TST", "https://gateway.pinata.cloud/ipfs/QmVkDbc6NPni1uzQq3gsiocUc3YGZjF7QGcM37hMcBqNmv")
    //await nft.deployed()
    //console.log("nft deployed to: " + nft.address)

    //fs.writeFileSync('./config.js', `
    //export const nftAddress = "${nft.address}"
    //`)



    //using value auctionPrice for everything because minting fee, listing fee,
    //price set by seller, and price paid by buyer are all 1 eth for simplicity

    //add fetch market and display items 1:08:32

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
