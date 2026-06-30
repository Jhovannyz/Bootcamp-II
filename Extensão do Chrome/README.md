# 🌙 Dark Mode Toggle

![Manifest V3](https://img.shields.io/badge/Manifest-V3-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma extensão leve e eficiente para o Google Chrome, desenvolvida com a moderna arquitetura **Manifest V3**. Este projeto foi criado durante o Bootcamp II e permite ativar e desativar o modo escuro em qualquer página da web com apenas um clique.

---

## ✨ Funcionalidades

* **Toggle Rápido:** Ative ou desative o modo escuro na aba ativa com um único clique no popup.
* **Inversão Inteligente:** Utiliza manipulação de CSS via Content Scripts para inverter as cores da página, simulando um ambiente noturno agradável aos olhos.
* **Interface Minimalista:** Popup direto ao ponto, garantindo uma experiência de usuário sem distrações.
* **Performance Otimizada:** Construída sob as diretrizes do Manifest V3, garantindo segurança e baixo consumo de memória usando Service Workers.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (Vanilla):** Lógica principal, manipulação do DOM e comunicação com a API do Chrome.
* **HTML5 & CSS3:** Estrutura e estilização da interface do popup.
* **Chrome Extensions API:** Gerenciamento de abas, injeção de scripts e permissões globais.

---

## ⚙️ Como Instalar e Testar Localmente (Modo Desenvolvedor)

1. Faça o clone deste repositório ou baixe o código-fonte em formato ZIP.
2. Abra o navegador Google Chrome e digite `chrome://extensions/` na barra de endereços.
3. Habilite o **Modo do desenvolvedor** na chave localizada no canto superior direito da tela.
4. Clique no botão **Carregar sem compactação** (ou *Load unpacked*).
5. Selecione a pasta raiz do projeto (onde o arquivo `manifest.json` está localizado).
6. Pronto! O ícone da extensão (🌙) aparecerá na sua barra de ferramentas do navegador.

---

## 📖 Como Usar

1. Navegue até qualquer site de sua preferência.
2. Clique no ícone da extensão fixado na barra do Chrome.
3. No menu popup, clique no botão **"Ativar/Desativar"**.
4. A página aplicará instantaneamente o tema escuro. Para reverter, basta clicar novamente!

---

## 📂 Estrutura do Projeto

```text
├── icons/                     # Ícones da extensão (16, 32, 48, 128px)
├── src/
│   ├── popup/
│   │   ├── popup.html         # Interface do popup
│   │   ├── popup.css          # Estilos da interface
│   │   └── popup.js           # Lógica do botão toggle
│   ├── content/
│   │   └── content.js         # Script injetado na página (DOM)
│   └── background/
│       └── service_worker.js  # Service Worker para eventos globais (MV3)
├── docs/                      # Documentação auxiliar
├── manifest.json              # Configurações e permissões da extensão
└── README.md                  # Apresentação do projeto
