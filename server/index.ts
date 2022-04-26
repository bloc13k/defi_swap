import { ethers } from 'ethers'
import sdk from '@bloc13k/v2-sdk';

const endpoint = "https://rinkeby.infura.io/v3/4dea3112b0e642a5ab5e1d3fa407e4f2"
const provider = new ethers.providers.JsonRpcProvider(endpoint);

const poolAddress = '0xe2f8cb89b86532658ab6dd5e7b5c7087f9a792d0'