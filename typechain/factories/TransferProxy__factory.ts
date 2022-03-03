/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TransferProxy, TransferProxyInterface } from "../TransferProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "__OperatorRole_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "__TransferProxy_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC1155Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "erc1155safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "erc721safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80632ff26a0a14610088578063495edf8614610092578063715018a61461009a5780638da5cb5b146100a25780639870d7fe146100c65780639c1c2ee9146100d9578063ac8a584a146100ec578063f2fde38b146100ff578063f709b90614610112575b600080fd5b610090610125565b005b6100906101aa565b610090610209565b6100aa610270565b6040516001600160a01b03909116815260200160405180910390f35b6100906100d4366004610645565b61027f565b6100906100e7366004610668565b6102d2565b6100906100fa366004610645565b610372565b61009061010d366004610645565b6103c2565b610090610120366004610720565b6104a0565b600054610100900460ff168061013e575060005460ff16155b6101635760405162461bcd60e51b815260040161015a906107c9565b60405180910390fd5b600054610100900460ff16158015610185576000805461ffff19166101011790555b61018d61053f565b6101956105a9565b80156101a7576000805461ff00191690555b50565b600054610100900460ff16806101c3575060005460ff16155b6101df5760405162461bcd60e51b815260040161015a906107c9565b600054610100900460ff16158015610201576000805461ffff19166101011790555b610195610125565b33610212610270565b6001600160a01b0316146102385760405162461bcd60e51b815260040161015a90610817565b6033546040516000916001600160a01b0316906000805160206108aa833981519152908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b33610288610270565b6001600160a01b0316146102ae5760405162461bcd60e51b815260040161015a90610817565b6001600160a01b03166000908152606560205260409020805460ff19166001179055565b3360009081526065602052604090205460ff166103015760405162461bcd60e51b815260040161015a9061084c565b604051637921219560e11b81526001600160a01b0388169063f242432a9061033790899089908990899089908990600401610770565b600060405180830381600087803b15801561035157600080fd5b505af1158015610365573d6000803e3d6000fd5b5050505050505050505050565b3361037b610270565b6001600160a01b0316146103a15760405162461bcd60e51b815260040161015a90610817565b6001600160a01b03166000908152606560205260409020805460ff19169055565b336103cb610270565b6001600160a01b0316146103f15760405162461bcd60e51b815260040161015a90610817565b6001600160a01b0381166104565760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161015a565b6033546040516001600160a01b038084169216906000805160206108aa83398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526065602052604090205460ff166104cf5760405162461bcd60e51b815260040161015a9061084c565b604051632142170760e11b81526001600160a01b0384811660048301528381166024830152604482018390528516906342842e0e90606401600060405180830381600087803b15801561052157600080fd5b505af1158015610535573d6000803e3d6000fd5b5050505050505050565b600054610100900460ff1680610558575060005460ff16155b6105745760405162461bcd60e51b815260040161015a906107c9565b600054610100900460ff16158015610195576000805461ffff191661010117905580156101a7576000805461ff001916905550565b600054610100900460ff16806105c2575060005460ff16155b6105de5760405162461bcd60e51b815260040161015a906107c9565b600054610100900460ff16158015610600576000805461ffff19166101011790555b603380546001600160a01b0319163390811790915560405181906000906000805160206108aa833981519152908290a35080156101a7576000805461ff001916905550565b600060208284031215610656578081fd5b813561066181610894565b9392505050565b600080600080600080600060c0888a031215610682578283fd5b873561068d81610894565b9650602088013561069d81610894565b955060408801356106ad81610894565b9450606088013593506080880135925060a08801356001600160401b03808211156106d6578384fd5b818a0191508a601f8301126106e9578384fd5b8135818111156106f7578485fd5b8b6020828501011115610708578485fd5b60208301945080935050505092959891949750929550565b60008060008060808587031215610735578384fd5b843561074081610894565b9350602085013561075081610894565b9250604085013561076081610894565b9396929550929360600135925050565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526028908201527f4f70657261746f72526f6c653a2063616c6c6572206973206e6f74207468652060408201526737b832b930ba37b960c11b606082015260800190565b6001600160a01b03811681146101a757600080fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220d5e20d6b3b5034631bf1c15c51a3fcbc67cf6c33a1a91799ce9b3e8e5563c73f64736f6c63430008040033";

export class TransferProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TransferProxy> {
    return super.deploy(overrides || {}) as Promise<TransferProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TransferProxy {
    return super.attach(address) as TransferProxy;
  }
  connect(signer: Signer): TransferProxy__factory {
    return super.connect(signer) as TransferProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferProxyInterface {
    return new utils.Interface(_abi) as TransferProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferProxy {
    return new Contract(address, _abi, signerOrProvider) as TransferProxy;
  }
}
