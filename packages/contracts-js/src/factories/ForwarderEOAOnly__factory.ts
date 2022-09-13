/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ForwarderEOAOnly,
  ForwarderEOAOnlyInterface,
} from "../ForwarderEOAOnly";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarderEOAOnly.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarderEOAOnly.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
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
  "0x61014060405234801561001157600080fd5b50604080518082018252600f81526e23a9a73b19102337b93bb0b93232b960891b602080830191825283518085019094526005845264302e302e3160d81b908401528151902060e08190527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc1991638118856101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6100fa8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c052610120525061010f92505050565b60805160a05160c05160e0516101005161012051610ba261015e60003960006105300152600061057f0152600061055a015260006104b3015260006104dd015260006105070152610ba26000f3fe6080604052600436106100345760003560e01c80632d0335ab1461003957806347153f8214610082578063bf5d3bdb146100a3575b600080fd5b34801561004557600080fd5b5061006f61005436600461093a565b6001600160a01b031660009081526020819052604090205490565b6040519081526020015b60405180910390f35b61009561009036600461096a565b6100d3565b604051610079929190610a39565b3480156100af57600080fd5b506100c36100be36600461096a565b6102b0565b6040519015158152602001610079565b600060603332146101155760405162461bcd60e51b81526020600482015260076024820152666e6f7420454f4160c81b60448201526064015b60405180910390fd5b6101208585856102b0565b6101925760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f657360448201527f206e6f74206d6174636820726571756573740000000000000000000000000000606482015260840161010c565b6101a160808601356001610a75565b6000806101b1602089018961093a565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906101eb919061093a565b6001600160a01b03166060880135604089013561020b60a08b018b610a9b565b61021860208d018d61093a565b60405160200161022a93929190610ae2565b60408051601f198184030181529082905261024491610b08565b600060405180830381858888f193505050503d8060008114610282576040519150601f19603f3d011682016040523d82523d6000602084013e610287565b606091505b50909250905061029c603f6060890135610b24565b5a116102a457fe5b90969095509350505050565b6000806103c384848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103bd92507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e489150610320905060208a018a61093a565b61033060408b0160208c0161093a565b60408b013560608c013560808d013561034c60a08f018f610a9b565b60405161035a929190610b46565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e0810191909152610100016040516020818303038152906040528051906020012061042e565b90610482565b905060808501356000806103da602089018961093a565b6001600160a01b03166001600160a01b03168152602001908152602001600020541480156104255750610410602086018661093a565b6001600160a01b0316816001600160a01b0316145b95945050505050565b600061047c61043b6104a6565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b600080600061049185856105cd565b9150915061049e8161063d565b509392505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156104ff57507f000000000000000000000000000000000000000000000000000000000000000046145b1561052957507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000808251604114156106045760208301516040840151606085015160001a6105f8878285856107fb565b94509450505050610636565b82516040141561062e57602083015160408401516106238683836108e8565b935093505050610636565b506000905060025b9250929050565b600081600481111561065157610651610b56565b141561065a5750565b600181600481111561066e5761066e610b56565b14156106bc5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161010c565b60028160048111156106d0576106d0610b56565b141561071e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161010c565b600381600481111561073257610732610b56565b141561078b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161010c565b600481600481111561079f5761079f610b56565b14156107f85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161010c565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561083257506000905060036108df565b8460ff16601b1415801561084a57508460ff16601c14155b1561085b57506000905060046108df565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156108af573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166108d8576000600192509250506108df565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83168161091e60ff86901c601b610a75565b905061092c878288856107fb565b935093505050935093915050565b60006020828403121561094c57600080fd5b81356001600160a01b038116811461096357600080fd5b9392505050565b60008060006040848603121561097f57600080fd5b833567ffffffffffffffff8082111561099757600080fd5b9085019060c082880312156109ab57600080fd5b909350602085013590808211156109c157600080fd5b818601915086601f8301126109d557600080fd5b8135818111156109e457600080fd5b8760208285010111156109f657600080fd5b6020830194508093505050509250925092565b60005b83811015610a24578181015183820152602001610a0c565b83811115610a33576000848401525b50505050565b82151581526040602082015260008251806040840152610a60816060850160208701610a09565b601f01601f1916919091016060019392505050565b60008219821115610a9657634e487b7160e01b600052601160045260246000fd5b500190565b6000808335601e19843603018112610ab257600080fd5b83018035915067ffffffffffffffff821115610acd57600080fd5b60200191503681900382131561063657600080fd5b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b60008251610b1a818460208701610a09565b9190910192915050565b600082610b4157634e487b7160e01b600052601260045260246000fd5b500490565b8183823760009101908152919050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220bca5d66e06b7615d7bea7f2b28f6032920e2b8fc895ce787aa1c19b32f3144cc64736f6c634300080c0033";

type ForwarderEOAOnlyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ForwarderEOAOnlyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ForwarderEOAOnly__factory extends ContractFactory {
  constructor(...args: ForwarderEOAOnlyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ForwarderEOAOnly> {
    return super.deploy(overrides || {}) as Promise<ForwarderEOAOnly>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ForwarderEOAOnly {
    return super.attach(address) as ForwarderEOAOnly;
  }
  override connect(signer: Signer): ForwarderEOAOnly__factory {
    return super.connect(signer) as ForwarderEOAOnly__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForwarderEOAOnlyInterface {
    return new utils.Interface(_abi) as ForwarderEOAOnlyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForwarderEOAOnly {
    return new Contract(address, _abi, signerOrProvider) as ForwarderEOAOnly;
  }
}