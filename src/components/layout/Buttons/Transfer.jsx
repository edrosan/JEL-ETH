
import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata } from "@gear-js/api";
import { Button } from "@chakra-ui/react";

function Transfer({payload} : {payload:string}) {
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programIDFT =
    "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";

  // Add your metadata.txt
  const meta =
    "00020000000100000000010100000000000000000102000000a90320000808696f48416374696f6e547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000040808696f444576656e74547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200";

  const metadata = ProgramMetadata.from(meta);

  const message: any = {
    destination: programIDFT, // programId
    payload: {payload},
    gasLimit: 899819245,
    value: 0,
  };


  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = await api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          account?.address ?? alert.error("No account"),
          { signer: injector.signer },
          ({ status }) => {
            if (status.isInBlock) {
              alert.success(status.asInBlock.toString());
            } else {
              console.log("In process");
              if (status.type === "Finalized") {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }
  };

  // return (<Button  backgroundColor="green.400" onClick={signer}>Give vote</Button>)
  return (
    <button type="button" onClick={signer} className="w-full py-2 px-4 rounded-xl font-medium bg-emerald-400 hover:bg-emerald-300 hover:transition-colors">
      Give vote
    </button>
  )
}

export {Transfer };
