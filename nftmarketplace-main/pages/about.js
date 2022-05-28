import Headline from "../components/Headline";

const About = () => {
    const title = "EZPZ MARKET"; 
    const subTitle = "Start earning passive crypto now";

    return (
        <div className = "bg-black">
            <Headline title={title} subTitle={subTitle}/>
            <h1>About</h1>
        </div>
    )
}
export default About