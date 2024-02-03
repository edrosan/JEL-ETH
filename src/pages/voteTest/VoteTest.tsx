
function OptionVote () {
    return (
        <div>
            o
        </div>
    )
}

function VoteTest () {
    return (
        <div className="w-[1200px] mx-auto">
            <h2>Vote</h2>
            <div className="flex gap-4">
                <OptionVote />
                <OptionVote />
                <OptionVote />
            </div>
        </div>
    )
}

export { VoteTest}