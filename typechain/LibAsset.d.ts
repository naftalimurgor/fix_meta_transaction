/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LibAssetInterface extends ethers.utils.Interface {
  functions: {
    "ERC1155_ASSET_CLASS()": FunctionFragment;
    "ERC20_ASSET_CLASS()": FunctionFragment;
    "ERC721_ASSET_CLASS()": FunctionFragment;
    "ETH_ASSET_CLASS()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ERC1155_ASSET_CLASS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ERC20_ASSET_CLASS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ERC721_ASSET_CLASS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ETH_ASSET_CLASS",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC1155_ASSET_CLASS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ERC20_ASSET_CLASS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ERC721_ASSET_CLASS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ETH_ASSET_CLASS",
    data: BytesLike
  ): Result;

  events: {};
}

export class LibAsset extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LibAssetInterface;

  functions: {
    ERC1155_ASSET_CLASS(overrides?: CallOverrides): Promise<[string]>;

    ERC20_ASSET_CLASS(overrides?: CallOverrides): Promise<[string]>;

    ERC721_ASSET_CLASS(overrides?: CallOverrides): Promise<[string]>;

    ETH_ASSET_CLASS(overrides?: CallOverrides): Promise<[string]>;
  };

  ERC1155_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

  ERC20_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

  ERC721_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

  ETH_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ERC1155_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

    ERC20_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

    ERC721_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;

    ETH_ASSET_CLASS(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ERC1155_ASSET_CLASS(overrides?: CallOverrides): Promise<BigNumber>;

    ERC20_ASSET_CLASS(overrides?: CallOverrides): Promise<BigNumber>;

    ERC721_ASSET_CLASS(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_ASSET_CLASS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC1155_ASSET_CLASS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ERC20_ASSET_CLASS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ERC721_ASSET_CLASS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ETH_ASSET_CLASS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
