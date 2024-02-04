

import { Transfer } from "components/layout/Buttons/Transfer";


function OptionVote({ title, message, payload, src, alt }: { title: string, message: string, payload: string, src: string, alt: string }) {
    return (
        <div className="w-[300px] p-2 bg-white shadow-sm rounded-2xl border">
            <div className="w-full h-[300px] overflow-hidden rounded-xl">
                <img src={src} alt={alt} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-xl font-medium">
                {title}
            </h3>
            <p>{message}</p>
            <div className="w-full mt-4 mb-0">
                <Transfer payload={payload} />
            </div>

        </div>
    )
}

function VoteTest() {
    return (
        <div className="w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl">Vote for your new representative</h2>
            <div className="flex  gap-4 ">
                <OptionVote 
                    title="Alan Jou" 
                    message="Hello, I'm Alan and I hope you vote for me to improve our society." 
                    payload="0" 
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="img" />
                <OptionVote 
                    title="Mark Zunzu" 
                    message="Something you won't regret, your future is in the best hands with Zunzu." 
                    payload="1" 
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="img" />
                <OptionVote 
                    title="Izac News" 
                    message="The advancement of our society is guaranteed with Izac." 
                    payload="2" 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="img" />
            </div>
        </div>
    )
}

export { VoteTest }