import Headline from "../components/Headline";
import NFTs from "../components/NFT";

const Home = () => {
  const title = "EZPZ MARKET"; 
  const subTitle = "Start earning passive crypto now";
  
  const loadSignerItemsOnly = false

  return (
    <div className = "bg-black">
      <Headline title={title} subTitle={subTitle}/>
      <NFTs loadSignerItemsOnly={loadSignerItemsOnly} />
    </div>
  );
}
export default Home;