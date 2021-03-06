/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155HolderUpgradeable,
  ERC1155HolderUpgradeableInterface,
} from "../ERC1155HolderUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100a6575b600080fd5b61005961005436600461030b565b6100c5565b60405190151581526020015b60405180910390f35b61008d61007c366004610204565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610065565b61008d6100b43660046102a9565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806100f657506301ffc9a760e01b6001600160e01b03198316145b92915050565b80356001600160a01b038116811461011357600080fd5b919050565b600082601f830112610128578081fd5b813560206001600160401b038211156101435761014361036a565b8160051b61015282820161033a565b83815282810190868401838801850189101561016c578687fd5b8693505b8584101561018e578035835260019390930192918401918401610170565b50979650505050505050565b600082601f8301126101aa578081fd5b81356001600160401b038111156101c3576101c361036a565b6101d6601f8201601f191660200161033a565b8181528460208386010111156101ea578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a0868803121561021b578081fd5b610224866100fc565b9450610232602087016100fc565b935060408601356001600160401b038082111561024d578283fd5b61025989838a01610118565b9450606088013591508082111561026e578283fd5b61027a89838a01610118565b9350608088013591508082111561028f578283fd5b5061029c8882890161019a565b9150509295509295909350565b600080600080600060a086880312156102c0578081fd5b6102c9866100fc565b94506102d7602087016100fc565b9350604086013592506060860135915060808601356001600160401b038111156102ff578182fd5b61029c8882890161019a565b60006020828403121561031c578081fd5b81356001600160e01b031981168114610333578182fd5b9392505050565b604051601f8201601f191681016001600160401b03811182821017156103625761036261036a565b604052919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ed035a28eb3979e5949dbf251c7f025cf582f46a4fb3d9df7da1c5e165bce61364736f6c63430008040033";

export class ERC1155HolderUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155HolderUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155HolderUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155HolderUpgradeable {
    return super.attach(address) as ERC1155HolderUpgradeable;
  }
  connect(signer: Signer): ERC1155HolderUpgradeable__factory {
    return super.connect(signer) as ERC1155HolderUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155HolderUpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155HolderUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155HolderUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155HolderUpgradeable;
  }
}
