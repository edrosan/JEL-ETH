
import { useAccount } from "@gear-js/react-hooks";

function Balance() {
    const { account } = useAccount();

    return (

        <div className="w-[300px] p-4 flex flex-col gap-2 rounded-lg bg-emerald-100">
            <h2 className="text-xl font-medium">Balance Account</h2>
            <span>
                <span className="font-medium">LocalStorageAccount :</span> {account?.address}
            </span>
            <span>
                <span className="font-medium">Balance:</span> {account?.balance.value}
            </span>

        </div>

    );
}
export { Balance };
