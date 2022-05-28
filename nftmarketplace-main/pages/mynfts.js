import Headline from "../components/Headline";

const MyNFTs = () => {
    const title = "EZPZ MARKET"; 
    const subTitle = "Start earning passive crypto now";

    return (
        <div className = "bg-black">
            <Headline title={title} subTitle={subTitle}/>
            <h1>My NFTs</h1>
        </div>
    )
}
export default MyNFTs
