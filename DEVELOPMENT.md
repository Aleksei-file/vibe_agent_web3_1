# 🚀 DeFi Insight Dashboard

Интерактивный дашборд для взаимодействия с DeFi протоколами, позволяющий пользователям подключить кошелек, просмотреть активы, участвовать в yield farming и отслеживать историю транзакций.

## ✨ Функциональность

### 🔐 Подключение кошелька
- Поддержка MetaMask и WalletConnect (через Wagmi)
- Отображение статуса подключения
- Моментальное подключение/отключение кошелька

### 👤 Обзор аккаунта
- Отображение адреса кошелька (с поддержкой ENS)
- Показ баланса сети
- Информация о сетевом статусе

### 🎯 Yield Farming
- Интерфейс для стейкинга различных токенов
- Отображение APY для каждого актива
- Кнопки Approve и Deposit с имитацией подписей кошелька
- Отслеживание стейкованных количеств

### 📊 Лента транзакций
- Список недавних транзакций из mock данных
- Отображение статуса (успешно, в ожидании, ошибка)
- Типы операций (отправка, получение, стейкинг, анстейкинг)
- Форматирование времени (только что, часы назад, дни назад)

## 🛠 Технологический стек

- **React** 18.2 — UI framework
- **TypeScript** 5.2 — Type safety
- **Vite** 5.1 — Build tool
- **LESS** — Preprocessing for CSS
- **Wagmi** 2.x — Web3 hooks
- **Viem** 2.x — Ethereum client
- **TanStack React Query** 5.0 — Server state management
- **ESLint** & **Prettier** — Code quality

## 📁 Структура проекта

```
vibe_agent_web3_1/
├── public/
│   └── index.html          # HTML шаблон
├── src/
│   ├── components/         # React компоненты
│   │   ├── WalletConnect.tsx
│   │   ├── AccountOverview.tsx
│   │   ├── YieldFarming.tsx
│   │   ├── TransactionFeed.tsx
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   ├── mocks/              # Mock данные
│   │   └── index.ts
│   ├── styles/             # LESS стили
│   │   ├── App.less
│   │   ├── WalletConnect.less
│   │   ├── AccountOverview.less
│   │   ├── YieldFarming.less
│   │   └── TransactionFeed.less
│   ├── types/              # TypeScript типы
│   │   └── index.ts
│   ├── App.tsx             # Главный компонент
│   ├── main.tsx            # Entry point
│   └── index.less          # Глобальные стили
├── vite.config.ts          # Vite конфигурация
├── tsconfig.json           # TypeScript конфигурация
├── package.json            # Зависимости проекта
└── README.md               # Документация
```

## 🚀 Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Разработка
```bash
npm run dev
```
Приложение откроется на `http://localhost:5173`

### Сборка
```bash
npm run build
```

### Лinting
```bash
npm run lint
```

### Форматирование кода
```bash
npm run format
```

### Проверка типов
```bash
npm run typecheck
```

## 📝 Использование компонентов

### WalletConnect
```tsx
<WalletConnect 
  onConnect={handleConnect} 
  isConnected={account?.isConnected ?? false}
/>
```

### AccountOverview
```tsx
<AccountOverview account={account} />
```

### YieldFarming
```tsx
<YieldFarming assets={mockAssets} />
```

### TransactionFeed
```tsx
<TransactionFeed transactions={mockTransactions} />
```

## 📊 Mock данные

Проект использует статические mock данные для демонстрации:
- **mockAssets** — список токенов с балансами и APY
- **mockTransactions** — история транзакций

## 🎨 Стилизация

Проект использует LESS для стилизации с переменными цветов:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Success: `#48bb78`
- Warning: `#f6ad55`
- Danger: `#f56565`

## 🔄 Следующие шаги (для разработки)

1. **Интеграция Web3** — подключить реальные смарт-контракты
2. **Кастомные хуки** — создать `useContract`, `useBalance` и др.
3. **Улучшение UI** — добавить больше анимаций и интерактивности
4. **Тестирование** — добавить unit и integration тесты
5. **Аутентификация** — интегрировать SIWE (Sign In With Ethereum)
6. **Graph интеграция** — использовать The Graph для данных с блокчейна

## 📄 Лицензия

MIT

## 👨‍💻 Разработчик

Создано для изучения Web3 и DeFi интеграции с React.
