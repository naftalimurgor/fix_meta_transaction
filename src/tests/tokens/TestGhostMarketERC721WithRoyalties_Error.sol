// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
pragma abicoder v2;

import "./GhostmarketERC721.sol";

contract TestGhostMarketERC721WithRoyalties_Error is GhostMarketERC721 {
    function getRoyaltiesWithRevert(uint256) external pure returns (Royalty[] memory) {
        revert("getRoyalties failed");
    }
}
