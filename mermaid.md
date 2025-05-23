# 架構圖

```mermaid
flowchart LR
  Shared["shared 模組 </br>(pinia, i18n)"]
  Host["host 主應用 </br>(vite-plugin-federation)"]
  Menu["menu 子應用</br>(vue3)"]
  Remote["remote 子應用</br>(vue3)"]

  Shared <--> Host
  Shared <--> Menu
  Shared <--> Remote

  Menu --> Host
  Remote --> Host
