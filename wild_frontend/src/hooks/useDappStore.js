import create from 'zustand'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import abi from '../config/abi.json'
import config from '../config/config.json'


const useDappStore = create((set) => ({
    account: null,
    smartContract: undefined,
    mint: (count) => set(async (state) => {
        if (typeof window.ethereum === 'undefined') {
            console.log('MetaMask not installed!');
        } else {
            const costInWei = 1000000000000000 * count
            await state.smartContract?.mint(state.account, count, { value: costInWei })
        }
    }),
    connect: async (state) => {
        if (typeof window.ethereum === 'undefined') {
            console.log('MetaMask not installed!');
        }
        else {
            console.log("Connecting")
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", []);
            const account = accounts[0]
            const signer = provider.getSigner()
            const smartContract = new ethers.Contract(config.contract_address, abi, signer)
            set({ account: account, smartContract: smartContract })
        }
    }
}))

export default useDappStore;
