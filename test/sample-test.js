const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", function () {
    it("Should create and execute market sales", async function () {
        const Market = await ethers.getContractFactory("RevisedMarketplace")
        const market = await Market.deploy()
        await market.deployed()
        const marketAddress = market.address

        const NFT = await ethers.getContractFactory("NFTest")
        const nft = await NFT.deploy("name", "symbol", "baseUri", "notRevealedUri")
        await nft.deployed()
        const nftaddress = nft.address

        const Store = await ethers.getContractFactory("StoreMarketplace")
        const store = await Store.deploy("newBaseUri", "name", "Symbol")
        await store.deployed()
        const storeaddress = store.address

        console.log(await market.setAddy(storeaddress))
        console.log("addy set success")




        const auctionPrice = ethers.utils.parseUnits('1', 'ether')
        const basicFee = ethers.utils.parseUnits('500', 'ether')

        const [_, seller1, seller2, buyer1, buyer2, buyer3, jade] = await ethers.getSigners()
        console.log(await market.setRoyaltyAddress(jade.address))
        console.log("royalty set success")
        //seller1 mints
        let count = 1
        while (count < 15) {
            await nft.connect(seller1).mint(1, { value: auctionPrice })
            console.log("mint successful #" + count)
            count = count + 1;
        }


        //seller1 registers store
        await store.connect(seller1).createStore("khalids", "#571686", "basic", "www.logo.com", { value: basicFee })
        console.log("store registery successful")


        console.log(await store.connect(seller1).nameAvailable("khalids"))
        //console.log(await store.connect(seller1).getStoreWithId(1))
        console.log(await store.connect(seller1).getStoreWithSubdomain("khalids"))
        //await store.connect(seller1).getStoreWithSubdomain("khalids")

        await store.connect(seller1).editStoreLogo("khalids", "www.neURIlolol")
        console.log(await store.connect(seller1).getStoreWithSubdomain("khalids"))


        //seller 1 approves marketplace to transfer his NFT, setApprovalForAllFunction takes in address and bool
        await nft.connect(seller1).setApprovalForAll(marketAddress, true)
        console.log("seller1 approval successful")

        //seller 1 creates listing
        //should require the subdomain to be available
        /** */
        let counter = 1
        while (counter < 11) {
            await market.connect(seller1).createListing("khalids", counter, 1, nftaddress)
            console.log("seller1 listing created successful, listing #" + counter)
            counter = counter + 1;
        }



        //buyer 1 buys NFT from seller1
        await market.connect(buyer1).buyNow(nftaddress, 1, { value: auctionPrice })
        console.log("seller1 sale to buyer1 successful")

        //buyer 1 wants to relist, he must seek approval first. approves marketplace to transfer his NFT, setApprovalForAllFunction takes in address and bool
        await nft.connect(buyer1).setApprovalForAll(marketAddress, true)
        console.log("buyer1 approval successful")

        //buyer 1 relists
        //need a way of grabbing these nftcontractaddresses
        await market.connect(buyer1).relistToken(1, 1, nftaddress)
        console.log("buyer1 relist successful")

        //seller 1 buys it back
        await market.connect(seller1).buyNow(nftaddress, 1, { value: auctionPrice })
        console.log("buyer1 sale back to resller1 successful")

        //using value auctionPrice for everything because minting fee, listing fee,
        //price set by seller, and price paid by buyer are all 1 eth for simplicity

        //add fetch market and display items 1:08:32

        console.log("\n\nmessing about\n\n")
        console.log("plan is a: ")
        //console.log(await market.connect(seller1).someAction(storeaddress, 1))

        const diff = ethers.utils.parseUnits('1500', 'ether')
        await store.connect(seller1).upgrade("khalids", "unlimited", { value: diff })
        console.log(await store.connect(seller1).getStoreWithSubdomain("khalids"))









    });
});