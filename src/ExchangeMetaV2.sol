// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
pragma abicoder v2;

import "./ExchangeV2Core.sol";
import "./GhostMarketTransferManager.sol";
import "./EIP712MetaTransaction.sol";

contract ExchangeMetaV2 is ExchangeV2Core, GhostMarketTransferManager, EIP712MetaTransaction {

        /**
     * @dev initialize ExchangeV2
     *
     * @param _transferProxy address for proxy transfer contract that handles ERC721 & ERC1155 contracts
     * @param _erc20TransferProxy address for proxy transfer contract that handles ERC20 contracts
     * @param newProtocolFee address for protocol fee
     * @param newDefaultFeeReceiver address for protocol fee if fee by token type is not set (GhostMarketTransferManager.sol => function getFeeReceiver)
     */
    function __ExchangeV2_init(
        INftTransferProxy _transferProxy,
        IERC20TransferProxy _erc20TransferProxy,
        uint newProtocolFee,
        address newDefaultFeeReceiver
    ) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        __TransferExecutor_init_unchained(_transferProxy, _erc20TransferProxy);
        __GhostMarketTransferManager_init_unchained(newProtocolFee, newDefaultFeeReceiver);
        __OrderValidator_init_unchained();
        __MetaTransaction_init_unchained("GhostExchangeV2", "1");
    }

    function _msgSender()
        internal
        view
        virtual
        override(ContextUpgradeable, EIP712MetaTransaction)
        returns (address)
    {
        return super._msgSender();
    }

    uint256[50] private __gap;
}
