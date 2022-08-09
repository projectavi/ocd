// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import ".././node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import ".././node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import ".././node_modules/@openzeppelin/contracts/access/Ownable.sol";
import ".././node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Degree is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        //when address is 0 it means new token is being minted
        require(from == address(0), "Err: token transfer is BLOCKED");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
