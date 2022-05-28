
import Link from "next/link";

const Headline = ({title, subTitle}) => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-purple-400 sm:text-4">
                    <span className="block">{title}</span>
                    <span className="block text-white">{subTitle}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="/createAndSell">
                            <a className="inline-flex items-center justify-center px-5 py-3 bg-purple-500 font-bold text-white rounded-md">
                                Create and Sell your NFT
                            </a>
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link href="/about">
                            <a className="inline-flex items-center justify-center px-5 py-3 bg-white font-bold text-purple-400 rounded-md">
                                Learn More
                            </a>
                        </Link>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
export default Headline;