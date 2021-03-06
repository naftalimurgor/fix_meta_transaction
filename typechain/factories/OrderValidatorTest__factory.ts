/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OrderValidatorTest,
  OrderValidatorTestInterface,
} from "../OrderValidatorTest";

const _abi = [
  {
    inputs: [],
    name: "__OrderValidatorTest_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "assetTypeTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "getHashTypedDataV4",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bytes4",
                name: "assetClass",
                type: "bytes4",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct LibAsset.AssetType",
            name: "assetType",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct LibAsset.Asset",
        name: "asset",
        type: "tuple",
      },
    ],
    name: "hashAsset",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes4",
            name: "assetClass",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct LibAsset.AssetType",
        name: "assetType",
        type: "tuple",
      },
    ],
    name: "hashAssetType",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "makeAsset",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "takeAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            internalType: "bytes4",
            name: "dataType",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct LibOrder.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "hashOrder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "intValue",
        type: "bytes32",
      },
      {
        internalType: "bytes4",
        name: "strValue",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "addr",
        type: "bytes",
      },
    ],
    name: "hashTest",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "addr",
        type: "bytes",
      },
    ],
    name: "keccak256Result",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "makeAsset",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "takeAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            internalType: "bytes4",
            name: "dataType",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct LibOrder.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "orderMakerEqualsOrderSigner",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "makeAsset",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "takeAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            internalType: "bytes4",
            name: "dataType",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct LibOrder.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "recoverAddressFromSignature",
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
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "recoverTest",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "makeAsset",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes4",
                    name: "assetClass",
                    type: "bytes4",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct LibAsset.AssetType",
                name: "assetType",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct LibAsset.Asset",
            name: "takeAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            internalType: "bytes4",
            name: "dataType",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct LibOrder.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateOrderTest",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113c1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c806326cad81b146100d5578063279758d8146100fb5780632bec72d9146101265780632bfcc665146101395780633408e4701461014e57806342fe398b146101545780634c1698d8146101675780639036df811461017a57806391c2600f1461019357806397b014ab146101a7578063985f9a5c146101ba578063b0a2e266146101ce578063bb2e5a36146101e1578063c56d89b5146101f4578063f698da25146101fc578063f6b230b614610204575b600080fd5b6100e86100e3366004611001565b610218565b6040519081526020015b60405180910390f35b61010e610109366004610f6a565b610233565b6040516001600160a01b0390911681526020016100f2565b6100e8610134366004610f14565b61028e565b61014c610147366004611033565b6102ce565b005b466100e8565b61014c6101623660046110fd565b61031b565b61010e6101753660046110fd565b6103d0565b6100e8610188366004610fc7565b805160209091012090565b60008051602061132c8339815191526100e8565b6100e86101b53660046110cb565b6103e7565b60008051602061130c8339815191526100e8565b6100e86101dc366004610efc565b6103f3565b6100e86101ef366004611001565b610404565b61014c610418565b6100e861048c565b60008051602061134c8339815191526100e8565b60008061022c610227846112bb565b61049b565b9392505050565b6000600185858585604051600081526020016040526040516102589493929190611204565b6020604051602081039080840390855afa15801561027a573d6000803e3d6000fd5b5050604051601f1901519695505050505050565b600080848484805190602001206040516020016102ad93929190611189565b60408051808303601f19018152919052805160209091012095945050505050565b6103166102da846112d3565b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104e892505050565b505050565b81516001600160a01b0316336001600160a01b0316146103cc57600061034083610690565b83519091506001600160a01b03166103618361035b84610756565b906107a4565b6001600160a01b0316146103165760405162461bcd60e51b815260206004820152602760248201527f6f72646572206d616b657220646f6573206e6f74206d61746368206f726465726044820152661039b4b3b732b960c91b60648201526084015b60405180910390fd5b5050565b600061022c8261035b6103e2866103e7565b610756565b60008061022c83610690565b60006103fe82610756565b92915050565b60008061022c610413846112c7565b61085a565b600054610100900460ff1680610431575060005460ff16155b61044d5760405162461bcd60e51b81526004016103c390611222565b600054610100900460ff1615801561046f576000805461ffff19166101011790555b61047761089e565b8015610489576000805461ff00191690555b50565b600061049661093b565b905090565b80516020808301518051908201206040516000936104cb9360008051602061130c83398151915293919201611189565b604051602081830303815290604052805190602001209050919050565b81516001600160a01b0316336001600160a01b0316146103cc57600061050d83610690565b83519091506001600160a01b03163b15610617578251630b135d3f60e11b906001600160a01b0316631626ba7e61054384610960565b856040518363ffffffff1660e01b81526004016105619291906111a9565b60206040518083038186803b15801561057957600080fd5b505afa15801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b19190610fab565b6001600160e01b031916146103165760405162461bcd60e51b815260206004820152602660248201527f436f6e74726163743a207369676e617475726520766572696669636174696f6e6044820152651032b93937b960d11b60648201526084016103c3565b82516001600160a01b031661062f8361035b84610960565b6001600160a01b0316146103165760405162461bcd60e51b815260206004820152602260248201527f557365723a207369676e617475726520766572696669636174696f6e2065727260448201526137b960f11b60648201526084016103c3565b600060008051602061132c83398151915282600001516106b3846020015161085a565b84604001516106c5866060015161085a565b608087015160a088015160c089015160e08a01516101008b015180516020918201206040516104cb9b9a999897969594939201998a526001600160a01b0398891660208b015260408a0197909752949096166060880152608087019290925260a086015260c085015260e08401929092526001600160e01b0319919091166101008301526101208201526101400190565b60006103fe61076361093b565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000808451604114156107ce5750505060208201516040830151606084015160001a610844565b8451604014156107fc5750505060408201516020830151906001600160ff1b0381169060ff1c601b01610844565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103c3565b61085086828585610a58565b9695505050505050565b600060008051602061134c833981519152610878836000015161049b565b6020808501516040516104cb949392019283526020830191909152604082015260600190565b600054610100900460ff16806108b7575060005460ff16155b6108d35760405162461bcd60e51b81526004016103c390611222565b600054610100900460ff161580156108f5576000805461ffff19166101011790555b6104776040518060400160405280600b81526020016a11da1bdcdd13585c9ad95d60aa1b815250604051806040016040528060018152602001601960f91b815250610be5565b600061049660008051602061136c83398151915261095860335490565b603454610c6f565b604080518082018252600b81526a11da1bdcdd13585c9ad95d60aa1b6020918201528151808301835260018152601960f91b9082015290516000917ff7645354abf2b8319c9979d69e838e27128975fec6da6f7d8206f207bba6d37b917fad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a59160008051602061136c833981519152918591610a0591849187918791469130910161115d565b60408051601f19818403018152828252805160209182012061190160f01b848301526022840181905260428085018b90528351808603909101815260629094019092528251920191909120909150610850565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b03821115610acb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103c3565b8360ff16601b1480610ae057508360ff16601c145b610b375760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103c3565b600060018686868660405160008152602001604052604051610b5c9493929190611204565b6020604051602081039080840390855afa158015610b7e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610bdc5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016103c3565b95945050505050565b600054610100900460ff1680610bfe575060005460ff16155b610c1a5760405162461bcd60e51b81526004016103c390611222565b600054610100900460ff16158015610c3c576000805461ffff19166101011790555b82516020808501919091208351918401919091206033919091556034558015610316576000805461ff0019169055505050565b60008383834630604051602001610c8a95949392919061115d565b6040516020818303038152906040528051906020012090509392505050565b80356001600160a01b0381168114610cc057600080fd5b919050565b8035610cc0816112f5565b600082601f830112610ce0578081fd5b81356001600160401b0380821115610cfa57610cfa6112df565b604051601f8301601f19908116603f01168101908282118183101715610d2257610d226112df565b81604052838152866020858801011115610d3a578485fd5b8360208701602083013792830160200193909352509392505050565b600060408284031215610d67578081fd5b50919050565b600060408284031215610d7e578081fd5b610d86611270565b90508135610d93816112f5565b815260208201356001600160401b03811115610dae57600080fd5b610dba84828501610cd0565b60208301525092915050565b600060408284031215610dd7578081fd5b610ddf611270565b905081356001600160401b03811115610df757600080fd5b610e0384828501610d6d565b8252506020820135602082015292915050565b60006101208284031215610e28578081fd5b610e30611298565b9050610e3b82610ca9565b815260208201356001600160401b0380821115610e5757600080fd5b610e6385838601610dc6565b6020840152610e7460408501610ca9565b60408401526060840135915080821115610e8d57600080fd5b610e9985838601610dc6565b60608401526080840135608084015260a084013560a084015260c084013560c0840152610ec860e08501610cc5565b60e084015261010091508184013581811115610ee357600080fd5b610eef86828701610cd0565b8385015250505092915050565b600060208284031215610f0d578081fd5b5035919050565b600080600060608486031215610f28578182fd5b833592506020840135610f3a816112f5565b915060408401356001600160401b03811115610f54578182fd5b610f6086828701610cd0565b9150509250925092565b60008060008060808587031215610f7f578081fd5b84359350602085013560ff81168114610f96578182fd5b93969395505050506040820135916060013590565b600060208284031215610fbc578081fd5b815161022c816112f5565b600060208284031215610fd8578081fd5b81356001600160401b03811115610fed578182fd5b610ff984828501610cd0565b949350505050565b600060208284031215611012578081fd5b81356001600160401b03811115611027578182fd5b610ff984828501610d56565b600080600060408486031215611047578283fd5b83356001600160401b038082111561105d578485fd5b908501906101208288031215611071578485fd5b90935060208501359080821115611086578384fd5b818601915086601f830112611099578384fd5b8135818111156110a7578485fd5b8760208285010111156110b8578485fd5b6020830194508093505050509250925092565b6000602082840312156110dc578081fd5b81356001600160401b038111156110f1578182fd5b610ff984828501610e16565b6000806040838503121561110f578182fd5b82356001600160401b0380821115611125578384fd5b61113186838701610e16565b93506020850135915080821115611146578283fd5b5061115385828601610cd0565b9150509250929050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b9283526001600160e01b0319919091166020830152604082015260600190565b828152600060206040818401528351806040850152825b818110156111dc578581018301518582016060015282016111c0565b818111156111ed5783606083870101525b50601f01601f191692909201606001949350505050565b93845260ff9290921660208401526040830152606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b604080519081016001600160401b0381118282101715611292576112926112df565b60405290565b60405161012081016001600160401b0381118282101715611292576112926112df565b60006103fe3683610d6d565b60006103fe3683610dc6565b60006103fe3683610e16565b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461048957600080fdfe452a0dc408cb0d27ffc3b3caff933a5208040a53a9dbecd8d89cad2c0d40e00c477ed43b8020849b755512278536c3766a3b4ab547519949a75f483372493f8ddb6f72e915676cfc289da13bc4ece054fd17b1df6d77ffc4a60510718c236b088b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400fa26469706673582212202ea3ea45e9015b82e88675b538a1c2a9a95ae0c9cbceb4584b31ce216c1acaec64736f6c63430008040033";

export class OrderValidatorTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OrderValidatorTest> {
    return super.deploy(overrides || {}) as Promise<OrderValidatorTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderValidatorTest {
    return super.attach(address) as OrderValidatorTest;
  }
  connect(signer: Signer): OrderValidatorTest__factory {
    return super.connect(signer) as OrderValidatorTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderValidatorTestInterface {
    return new utils.Interface(_abi) as OrderValidatorTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderValidatorTest {
    return new Contract(address, _abi, signerOrProvider) as OrderValidatorTest;
  }
}
