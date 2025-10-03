# micro_frontends_demo

這是一個 Vue 3 微前端的概念驗證（POC）項目。該項目包含一個主應用和一個遠程應用，旨在展示如何使用微前端架構來構建可擴展的前端應用。

## 目錄結構

```
micro_frontends_demo
├── apps
│   ├── host          # 主應用
│   │   ├── src
│   │   │   ├── App.vue
│   │   │   ├── main.ts
│   │   │   └── components
│   │   │       └── Header.vue
│   │   ├── public
│   │   │   └── index.html
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── remote        # 遠程應用
│       ├── src
│       │   ├── App.vue
│       │   ├── main.ts
│       │   └── components
│       │       └── RemoteComponent.vue
│       ├── public
│       │   └── index.html
│       ├── package.json
│       └── tsconfig.json
├── shared
│   └── utils
│       └── helper.ts
├── package.json
└── README.md
```

## 使用指南

1. **安裝依賴**：在項目根目錄下運行 `npm install` 以安裝所有依賴項。
2. **啟動主應用**：進入 `apps/host` 目錄，運行 `npm run serve` 以啟動主應用。
3. **啟動遠程應用**：進入 `apps/remote` 目錄，運行 `npm run serve` 以啟動遠程應用。

## 功能

- 主應用負責渲染應用的主要界面，並包含一個標題或導航欄。
- 遠程應用提供特定的功能或界面，可以獨立於主應用進行開發和部署。
- 共享的工具函數可供主應用和遠程應用使用，促進代碼重用。

## 技術棧

- Vue 3
- TypeScript
- Vite (或其他構建工具)

## 貢獻

歡迎任何形式的貢獻！請提交問題或拉取請求以幫助改進該項目。