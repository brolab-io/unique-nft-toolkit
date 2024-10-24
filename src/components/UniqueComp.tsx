"use client";
import React from "react";
import { UniqueChain } from "@unique-nft/sdk";
import { Button } from "./ui/button";
import { useWalletProvider } from "./providers/WalletProvider";

const UniqueComp = () => {
  const { connectedAccounts, activeProvider } = useWalletProvider();
  const handleClick = async () => {
    const sdk = UniqueChain({
      baseUrl: "https://rest.unique.network/v2/opal",
    });
    const balanceQuery = await sdk.balance.get({
      address: connectedAccounts[0].address,
    });

    console.log(balanceQuery);
  };
  return (
    <div>
      UniqueComp
      <pre>{JSON.stringify(connectedAccounts, null, 2)}</pre>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default UniqueComp;
