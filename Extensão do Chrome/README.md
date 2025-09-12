# Dark Mode Toggle (Exemplo MV3)

Extensão simples para o Google Chrome, criada como parte do Bootcamp, que permite ativar e desativar rapidamente o modo escuro em qualquer página da web.

## Funcionalidades

Ativar/Desativar Modo Escuro: Um clique inverte as cores da página atual simulando um dark mode.

Função de Toggle: Clicar novamente remove o efeito, retornando ao modo original.

Popup Simples: Interface leve com botão único no popup.

## Instalação Local (Modo Desenvolvedor)

Para testar esta extensão localmente:

Faça o download ou clone este repositório para a sua máquina.

Abra o Google Chrome e acesse: chrome://extensions/.

Ative o "Modo de desenvolvedor" no canto superior direito.

Clique em "Carregar sem compactação".

Selecione a pasta do projeto (onde está o manifest.json).

O ícone da extensão aparecerá na barra de ferramentas!

## Como Usar

Abra qualquer página da web.

Clique no ícone da extensão na barra de ferramentas do Chrome.

Na janelinha (popup), pressione o botão "Ativar/Desativar".

A página ficará em modo escuro.

Para voltar ao normal, basta clicar novamente.

## Estrutura do Projeto

├── icons/                     # Ícones da extensão (16, 32, 48, 128px)
├── src/
│   ├── popup/
│   │   ├── popup.html         # Interface do popup
│   │   ├── popup.css          # Estilos do popup
│   │   └── popup.js           # Lógica do popup (toggle Dark Mode)
│   ├── content/
│   │   └── content.js         # Script injetado na página (ainda simples)
│   └── background/
│       └── service_worker.js  # Service Worker para eventos globais
├── docs/                      # Pasta para documentação ou GitHub Pages
├── manifest.json              # Configuração principal da extensão
└── README.md                  # Este arquivo
