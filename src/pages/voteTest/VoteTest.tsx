import { Transfer } from "components/layout/Buttons/Transfer";
import { ProgramMetadata } from "@gear-js/api";
import { useState, ReactElement, useEffect } from "react";
import { useApi, useAlert, useAccount } from "@gear-js/react-hooks";
import { Button, Card, Center, Heading, VStack, Text } from "@chakra-ui/react";
import { web3FromSource } from "@polkadot/extension-dapp";
import { AnyJson } from "@polkadot/types/types";


function FirstButton() {
    const alert = useAlert();
    const { accounts, account } = useAccount();
    const { api } = useApi();

    // Add your programID
    const programIDFT =
        "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";

    const meta = "00020000000100000000010100000000000000000102000000a90320000808696f48416374696f6e547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000040808696f444576656e74547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200"
    const metadata = ProgramMetadata.from(meta);

    const message: any = {
        destination: programIDFT, // programId
        payload: "FirstOption",
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

    return (
        <button type="button" onClick={signer} className="w-full py-2 px-4 rounded-xl font-medium bg-emerald-400 hover:bg-emerald-300 hover:transition-colors">
            Give vote
        </button>
    )
}

function SecondButton() {
    const alert = useAlert();
    const { accounts, account } = useAccount();
    const { api } = useApi();

    // Add your programID
    const programIDFT =
        "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";

    const meta = "00020000000100000000010100000000000000000102000000a90320000808696f48416374696f6e547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000040808696f444576656e74547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200"
    const metadata = ProgramMetadata.from(meta);

    const message: any = {
        destination: programIDFT, // programId
        payload: "SecondOption",
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

    return (
        <button type="button" onClick={signer} className="w-full py-2 px-4 rounded-xl font-medium bg-emerald-400 hover:bg-emerald-300 hover:transition-colors">
            Give vote
        </button>
    )
}

function ThirdButton() {
    const alert = useAlert();
    const { accounts, account } = useAccount();
    const { api } = useApi();

    // Add your programID
    const programIDFT =
        "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";

    const meta = "00020000000100000000010100000000000000000102000000a90320000808696f48416374696f6e547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000040808696f444576656e74547261666669634c6967687400010c2c46697273744f7074696f6e000000305365636f6e644f7074696f6e0001002c54686972646f7074696f6e00020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200"
    const metadata = ProgramMetadata.from(meta);

    const message: any = {
        destination: programIDFT, // programId
        payload: "Thirdoption",
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

    return (
        <button type="button" onClick={signer} className="w-full py-2 px-4 rounded-xl font-medium bg-emerald-400 hover:bg-emerald-300 hover:transition-colors">
            Give vote
        </button>
    )
}

function ReadState2() {
    const { api } = useApi();

    const alert = useAlert();

    const [fullState, setFullState] = useState<AnyJson>();

    // Add your programID
    const programIDFT =
        "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";

    // Add your metadata.txt
    const meta =
        "000100000001000000000101000000000000000102000000090320000808696f48416374696f6e547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000040808696f444576656e74547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200";

    const metadata = ProgramMetadata.from(meta);

    const getState = () => {
        api.programState
            .read({ programId: programIDFT, payload: "" }, metadata)
            .then((result) => {
                setFullState(result.toJSON());
                alert.success("Successful state");
            })
            .catch(({ message }: Error) => alert.error(message));
    };

    return (
        <div className="container">
            <center>Full State</center>
            <center className="state">
                State
                <p className="text"> {JSON.stringify(fullState)}</p>
            </center>
            <Button onClick={getState}>Get State</Button>
        </div>
    );
}


function OptionVote({ title, message, payload, src, alt, children }: { title: string, message: string, payload: string, src: string, alt: string, children: ReactElement }) {
    return (
        <div className="w-[300px] p-2 bg-white shadow-sm rounded-2xl border">
            <div className="w-full h-[300px] overflow-hidden rounded-xl">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-medium">
                {title}
            </h3>
            <p>{message}</p>
            <div className="w-full mt-4 mb-0">
                {children}
            </div>

        </div>
    )
}

function VoteTest() {
    const { api } = useApi();
    const alert = useAlert();

    const [fullState, setFullState] = useState<AnyJson>();
    const [loadedPage, setLoadedPage] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0)
    const [values, setValues] = useState([])
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)

    const programIDFT =
        "0x628b6124c5fea30178c136e3a1ddbf31d8c2c3fe484005978a4b77927be15461";
    const meta =
        "000100000001000000000101000000000000000102000000090320000808696f48416374696f6e547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000040808696f444576656e74547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200";

    const metadata = ProgramMetadata.from(meta);

    const getState = () => {
        api.programState
            .read({ programId: programIDFT, payload: "" }, metadata)
            .then((result) => {
                setFullState(result.toJSON());
                alert.success("Successful state");
            })
            .catch(({ message }: Error) => alert.error(message));
    };

    if (loadedPage === 1) {
        getState()
        setLoadedPage(2)

    }

    useEffect(() => {
        setLoadedPage(1)
    }, []);

    useEffect(() => {
        setTotalVotes(Object.values(fullState || {}).length)
        // setValues(Object.values(fullState || {}))
        let f = 0
        let s = 0
        let t = 0

        Object.values(fullState || {}).forEach((element) => {
            if (element[1] === "FirstOption") {
                f += 1
            } else if (element[1] === "SecondOption") {
                s += 1
            } else if (element[1] === "ThirdOption") {
                t += 1
            }

        });

        setFirst(f)
        setSecond(s)
        setThird(t)


    }, [fullState]);


    return (
        <div className="w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl">Vote for your new representative</h2>
            <div className="flex  gap-4 ">
                <OptionVote
                    title="Alan Jou"
                    message="Hello, I'm Alan and I hope you vote for me to improve our society."
                    payload="FirstOption"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img" >
                    <FirstButton />
                </OptionVote>
                <OptionVote
                    title="Mark Zunzu"
                    message="Something you won't regret, your future is in the best hands with Zunzu."
                    payload="SecondOption"
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img" >
                    <SecondButton />
                </OptionVote>
                <OptionVote
                    title="Izac News"
                    message="The advancement of our society is guaranteed with Izac."
                    payload="Thirdoption"
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img" >
                    <ThirdButton />
                </OptionVote>
            </div>

            <div className="w-full mb-8 flex flex-col items-center gap-2">
                <span className="font-medium text-2xl">Total votes: {totalVotes}</span>
                <div className=" w-[1200px] flex justify-between gap-4">
                    <span>Alan Jou: {first} vote(s)</span>
                    <span>Mark Zunzu: {second} vote(s)</span>
                    <span>Izac News: {third} vote(s)</span>
                </div>
            </div>


        </div>
    )
}

export { VoteTest }