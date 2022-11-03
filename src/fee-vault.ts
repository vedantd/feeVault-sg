import { BigInt } from "@graphprotocol/graph-ts"
import {
  feeVault,
  Deposit,
  Initialized,
  OwnershipTransferred,
  Withdraw
} from "../generated/feeVault/feeVault"

import { DepositEntity, WithdrawEntity, OwnershipTransferredEntity, InitializedEntity } from "../generated/schema"


export function handleDeposit(event: Deposit): void {

  let entity = new DepositEntity(
    event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  )
  entity.from = event.params.from.toHexString();
  entity.amount = event.params.amount;
  entity.blockNum = event.block.number;
  entity.txHash = event.transaction.hash.toHex();
  entity.blockTime = event.block.timestamp;
  entity.save();
  }  

export function handleInitialized(event: Initialized): void {
  let entity = new InitializedEntity(
    event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  ) 
  entity.version = event.params.version;
  entity.blockNum = event.block.number;
  entity.txHash = event.transaction.hash.toHex();
  entity.blockTime = event.block.timestamp;
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = new OwnershipTransferredEntity(
    event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  ) 
  entity.previousOwner = event.params.previousOwner.toHex();
  entity.newOwner = event.params.newOwner.toHex();
  entity.blockNum = event.block.number;
  entity.txHash = event.transaction.hash.toHex();
  entity.blockTime = event.block.timestamp;
  entity.save();

}

export function handleWithdraw(event: Withdraw): void {
  let entity = new WithdrawEntity(
    event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  ) 
  entity.from = event.params.from.toHexString();
  entity.to = event.params.to.toHexString();
  entity.amount = event.params.amount;
  entity.blockNum = event.block.number;
  entity.txHash = event.transaction.hash.toHex();
  entity.blockTime = event.block.timestamp;
  entity.save();
}
