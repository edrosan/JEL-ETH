

function Card({ title }: { title: string }) {
    return (
        <div className="bg-white flex flex-col gap-4 p-4 rounded-lg border shadow">
            <span className="font-medium text-xl">{title}</span>

            <button type="button" disabled className="px-4 py-2 bg-slate-300 rounded-md text-slate-700 cursor-not-allowed">Closed</button>
        </div>
    )
}

function VoteSoda() {
    

    return (
        <div className='w-[1200px] flex flex-col items-center justify-center'>
            <h2 className='font-medium text-2xl'>Soda is harmful to health?</h2>

            <div className="flex gap-4 mt-8">
                <Card title="Yeah! I agree" />

                <Card title="No I love soda" />
            </div>

            <div>
                <span>Total votes: </span>
            </div>
        </div>
    )
}


export { VoteSoda }