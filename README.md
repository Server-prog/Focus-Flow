# FocusFlow – App de Pomodoro Personalizável

FocusFlow é uma aplicação web focada em produtividade, baseada na técnica Pomodoro.  
O objetivo é ajudar os usuários a manterem o foco total durante ciclos de trabalho, com pausas bem definidas e estatísticas de desempenho.

> A diferença? **Total personalização dos ciclos**, uma **UI moderna e fluida**, e **tudo isso rodando direto no navegador**, sem depender de backend.

---

##  Funcionalidades

-  Temporizador Pomodoro com tempos ajustáveis (foco, pausa curta, pausa longa)
-  Modo escuro para uma experiência mais confortável visualmente
-  Histórico de sessões com registro de ciclos completados
-  Notificações sonoras ao fim de cada ciclo (com Howler.js)
-  Toasts de notificação para feedback rápido ao usuário (ex: sessão iniciada, configurações salvas)
-  Persistência via `localStorage` – configurações e histórico salvos no navegador

---

## 🛠️ Tecnologias Utilizadas

-  **React + TypeScript** – Base da aplicação
-  **TailwindCSS** – Design clean, responsivo e bonito
-  **Framer Motion** – Animações suaves na UI
-  **Howler.js** – Sons e alertas personalizáveis
-  **React Toastify** – Notificações rápidas e elegantes
-  **localStorage** – Armazenamento de dados local, sem backend

---

## 💡 Diferenciais

-  Foco em produtividade com simplicidade
-  Design minimalista, pensado para **não distrair**
-  Expansível: facilmente adaptável para adicionar login, sincronização em nuvem, integração com tarefas, estatísticas avançadas e mais!

---

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/focusflow.git

# Acesse a pasta do projeto
cd focusflow

# Instale as dependências
npm install

# Rode a aplicação em ambiente de desenvolvimento
npm run dev
