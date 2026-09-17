# DeFi Insight Dashboard

## Status

This project is a work in progress. It is a frontend prototype, not a production application. It has no backend and does not interact with real smart contracts; on-chain-looking data (balances, APY, transaction history) is served from static mocks. Wallet connection itself is intended to be real once Web3 hooks are wired up.

## Concept

DeFi Insight Dashboard is meant to demonstrate a typical DeFi user flow entirely on the frontend: a user connects a wallet, sees an overview of their account, interacts with a mocked yield farming interface, and reviews a feed of past transactions. The goal is to explore the UI and interaction patterns of a DeFi dashboard (wallet connection, staking flow, transaction history) without requiring a live backend or deployed contracts.

Planned functionality:

- Wallet connection through MetaMask / WalletConnect using Wagmi hooks.
- Account overview showing address, ENS name (if available), network, and balance.
- Mock yield farming: an Approve/Deposit staking interface. Actions are expected to trigger real wallet signature prompts even though no contract call is made.
- Transaction feed: a list of past transactions rendered from static mock data, with type, status, and relative timestamps.
- Theming (light/dark, persisted via `localStorage`) and internationalization (English, Russian, Portuguese).

## Technology stack

- React 18 with TypeScript
- Vite 7 as the build tool and dev server, Vitest for testing
- Wagmi 3 and Viem for wallet connection and Ethereum client primitives
- TanStack React Query for async/server state management
- LESS with CSS Modules for component-scoped styling
- i18next / react-i18next for internationalization, with browser language detection
- ESLint (flat config) and Prettier for linting and formatting
- Testing Library (React) and jsdom for component tests

## Project structure

```
vibe_agent_web3_1/
├── index.html                  Vite entry HTML
├── src/
│   ├── App.tsx                 Root component: layout, wallet state, routing between the empty state and the dashboard
│   ├── main.tsx                Application entry point
│   ├── i18n.ts                 i18next configuration and locale registration
│   ├── styles.d.ts              Type declarations for CSS module imports
│   ├── components/
│   │   ├── WalletConnect.tsx    Wallet connect/disconnect control
│   │   ├── AccountOverview.tsx  Address, balance and network summary
│   │   ├── Dashboard.tsx        Composes the account, yield farming and transaction sections (lazy-loaded)
│   │   ├── YieldFarming.tsx     Mock staking interface (Approve/Deposit per asset)
│   │   ├── TransactionFeed.tsx  Mock transaction history list
│   │   ├── ThemeToggle.tsx      Light/dark theme switch
│   │   ├── LanguageToggle.tsx   Locale switch
│   │   ├── ErrorBoundary.tsx    Error boundary around the lazy-loaded dashboard
│   │   ├── ui/                  Shared UI primitives (e.g. DropdownSelector)
│   │   └── *.module.less        Per-component CSS Modules styles
│   ├── hooks/
│   │   └── useTheme.ts          Theme state, persisted to localStorage and seeded from OS preference
│   ├── mocks/
│   │   └── index.ts             Static mock assets and transactions
│   ├── types/
│   │   └── index.ts             Shared TypeScript types (Account, Asset, Transaction, Theme)
│   ├── locales/
│   │   ├── en/translation.json
│   │   ├── ru/translation.json
│   │   └── pt/translation.json
│   └── styles/
│       ├── App.less
│       ├── main.less
│       └── variables.less       Shared LESS variables (colors, etc.)
├── vite.config.ts               Vite/Vitest configuration, including manual chunk splitting for vendor/UI bundles
├── vitest.setup.ts              Test environment setup (jest-dom matchers)
├── tsconfig.json / tsconfig.node.json
├── eslint.config.js             ESLint flat configuration
├── .prettierrc
└── package.json
```

## Available commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the Vite development server (default: `http://localhost:5173`, opens automatically) |
| `npm run build` | Type-check the project (`tsc`) and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally for inspection |
| `npm run lint` | Run ESLint across the project; fails on any warning |
| `npm run format` | Format `.ts`, `.tsx`, `.less` and `.md` files under `src/` with Prettier |
| `npm run typecheck` | Run the TypeScript compiler in no-emit mode to check types only |
| `npm test` | Run the test suite with Vitest |
| `npm run test:ui` | Run Vitest with its interactive UI |
| `npm run coverage` | Run the test suite and produce a coverage report |

## Requirements

- Node.js 18 or later
- npm

## Known limitations / next steps

- No real smart contract integration: staking and transactions are simulated with static data.
- No wallet-triggered signature flow implemented yet for the mock staking actions.
- No authentication layer (e.g. Sign-In With Ethereum).
- No on-chain data source (e.g. The Graph) integrated.
- Test coverage is partial and limited to a subset of components.

## License

MIT
