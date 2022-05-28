/** Connect to Moralis server */
const serverUrl = "https://uvxxvga5mc2j.usemoralis.com:2053/server";
const appId = "5h7z90ipCUi9YvV3WKukDhLtxfOfbyb5vs0lEJbY";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Hello World!" })
            await Moralis.enableWeb3();
            console.log(user)
            console.log(user.get('ethAddress'))
        } catch (error) {
            console.log(error)
        }
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

async function deposit() {


    var val  = document.getElementById("deposit-val").value;

    let options = {
        contractAddress: "0x981224780D175DacbCB9F7a8353b0B4A3767bF71",
        functionName: "deposit",
        abi: [{
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
            }],
        params:{},
        msgValue: Moralis.Units.ETH(val)
    }
    await Moralis.executeFunction(options);
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-deposit").onclick = deposit;
document.getElementById("btn-logout").onclick = logOut;