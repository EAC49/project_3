import Headline from "../components/Headline";

const Create = () => {
    const title = "EZPZ MARKET"; 
    const subTitle = "Start earning passive crypto now";

    return (
        <div className = "bg-black">
            <Headline title={title} subTitle={subTitle}/>
            <h1>Create and Sell</h1>
        </div>
    )
}
export default Create