import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 61258,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "QaUser7821 Testnet",
  "nativeCurrency": {
    "name": "QaUser7821 Testnet Token",
    "symbol": "WND",
    "decimals": 18
  },
  "networkId": 61258,
  "redFlags": [],
  "rpc": [
    "https://61258.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
  ],
  "shortName": "QaUser7821 Testnet",
  "slug": "qauser7821-testnet",
  "testnet": true
} as const satisfies Chain;