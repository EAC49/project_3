import NftError from './NftError';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';

export default function NFTs({loadSignerItemsOnly}) {

    // This file has missing code

    //Temporary
    const nftItems = [
        {
            tokenId: 1,
            name: 'My First Ape',
            href: '#',
            image: 'https://lh3.googleusercontent.com/IPkSz9rlXr_7k8mQ85ZvSz1lnImhwThU32XQXsCWCR0zXMdeawJrcwvVzv3_hUHB_2yjN7AGykYdrzXQq1eBzQX9ifFDNgJUEHF2=w600',
            price: '35.32454356',
            ownerAddress: '0x4711',
            isListedForSale: true,
            isOwnerBySigner: true,
            hasValidSalesOrder: false
        },
        {
            tokenId: 2,
            name: 'My Second Ape',
            href: '#',
            image: 'https://lh3.googleusercontent.com/696GKHKPe6GYZaCr7Do0wt91hNb_Qqz6h6nk0cChdpHngvnnp9aYwWqE-XTGd5kyRLdiWELaIhxXeOXmhrjVwkfr9XGgkzHtxgF9xQ=w600',
            price: '41.36926363',
            isListedForSale: true,
            isOwnedBySigner: true,
            hasValidSalesOrder: false
        },
    ]

    const loadingInfo = '';
    const error = null;

    //const {nftItems, setNftItems, isLoading, loadingInfo, error} = serviceMarketplace}

    const errorHandling = (error) => {
        if (error) {
            if (!error.data) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage(error.data.message)
            } 
        } else {
            setErrorMessage('');
        }
    }

    const updateState = (nftItem) => {
        // Find the index of this item in the nftItems array
        const index = nftItems.findIndex(item => item._id == nftItem._id);

        // Replace the found nftItem with this nftItem
        const updateNftItems = [...nftItems];
        updateNftItems[index] = nftItem;

        //update the nftItems with this state with this nftItems
        setNftItems(updateNftItems);
    }

    const sellNFT = async (nftItem) => {
        Router.push({pathname: '/createAndSell', query: nftItem})
    }

    const delistFromSale = async (nftItem) => {
        try {
           updateState(nftItem); 

        } catch (error) {
            errorHandling(error);
        }
    }

    const buyNFT = async (nftItem) => {
        try {
            errorHandling(null);
            //await interfaceMarketplace.buy(nftItem);

            nftItem = {...nftItem, isOwnedBySigner: true, isListedForSale: false, price: 0};
            updateState(nftItem);

        } catch (error) {
            errorHandling(error);
        }
    }

    const buyFromSalesOrder = async (nftItem) => {
        try {
            errorHandling(null);
            //await interfaceMarketplace.buyFromSalesOrder(nftItem);

            nftItem = {...nftItem, isMinted: true, isOwnedBySigner: true, isListedForSale: false, price: 0}
            updateState(nftItem);

        } catch (error) {
            errorHandling(error);
        }
    }

    const deleteSalesOrder = async (nftItem) => {
        try {
            errorHandling(null)
            //await interfaceMarketplace.deletalesOrder(nftItem);

            nftItem = {...nftItem, isListedForSale: false, hasValidSalesOrder: false, price: 0}
            updateState(nftItem);

        } catch (error) {
            errorHandling(error);
        }
    }

    if (error) {
        errorHandling(error);
        return <NftError errorMessage={errorMessage} />
    }

    if (loadingInfo) return (<NftError errorMessage={loadingInfo} />);
    if (!nftItems) return (<div className="bg-black h-96"> </div>);
    return (
        <div className="bg-black">
            
            { /* <NftError errorMessage={errorMessage} /> */ }

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-6">

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2"> //?
                {nftItems.map((nftItem) => (
                    <div key={nftItem.tokenId} className="group relative">

                        <div className="rounded-xl bg-gradient-to-r p-[6px] from-[#6EE787]" >

                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-w-1 aspect-h-1 rounded">
                                <img
                                    src={nftItem.image}
                                    alt={nftItem.name}
                                    className="w-full h-full object-center object-cover lg:w-full lg-h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>           

                ))}
                </div>
            </div>
        </div>
    )
}