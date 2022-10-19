import React, { useState } from 'react'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import toast, { Toaster } from 'react-hot-toast'
import useDappStore from '../../hooks/useDappStore'
import { WinterCheckout } from '@usewinter/checkout';

const QuantitySection = () => {
    const [count, setCount] = useState(1)
    const { connect, mint } = useDappStore()
    const account = useDappStore((state) => state.account)
    const [showWinter, setShowWinter] = useState(false)
    return (
        <div className="button_sec">
            <div className='btn two'>
                <button className="btnone"><p className='p_tag'>Quantity</p> <div><span className='min_plu' onClick={() => count !== 1 && setCount(count - 1)}>-</span> <span className='count_numbers'>{count}</span> <span className='min_plu' onClick={() => setCount(count + 1)}>+</span></div></button>
                <button onClick={async () => setShowWinter(true)}>MINT WITH CARD</button>
            </div>
            {!account && typeof window.ethereum !== 'undefined' ?
                (<div className="btn one" onClick={() => connect()}>
                    <button>CONNECT WALLET</button>
                </div>
                ) : (
                    <div className="btn two">
                        <button onClick={async () => mint(count)}>MINT NOW</button>
                    </div>
                )}
            <Toaster />

            <WinterCheckout
                projectId={7366}
                production={false}
                showModal={showWinter}
                // testnet need when production is false
                testnet={'goerli'}
                // pass in a function to be called when a successful purchase happens
                // onSuccess={() => setParty(true)}
                // pass in a function to be called when the modal is closed
                onClose={() => setShowWinter(false)}
            />

        </div>
    )
}

export default QuantitySection