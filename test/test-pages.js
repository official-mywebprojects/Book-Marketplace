import { assert } from "chai";

const MarketPlace = artifacts.require('./Mymarketplace.sol');

contract('MarketPlace', (accounts) => {
    let marketplace

    before(async () => {
        marketplace = await MarketPlace.deployed()
    })

    describe('deployment', async () => {
        it('it deployed successfully', async() => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })
})

