Perfeito 👌 Aqui está o **README.md** completo e atualizado do seu aplicativo **Focus Blocker**, agora com a seção **“Instalação no Google Chrome”**, explicando passo a passo como adicionar a extensão manualmente no navegador:

---

```markdown
# 🧘‍♀️ Focus Blocker — Extensão para Google Chrome

O **Focus Blocker** é uma extensão do Chrome (Manifest V3) desenvolvida para ajudar você a manter o foco e aumentar sua produtividade, **bloqueando sites distrativos** durante períodos de trabalho ou estudo.  

---

## 🚀 Funcionalidades

- ⛔ **Bloqueio de sites distrativos** (YouTube, Twitter, Instagram, etc.)  
- 🕒 **Timer de foco personalizável**  
- 📋 **Lista personalizada** de sites bloqueados  
- 🔔 **Notificações** ao iniciar e encerrar sessões de foco  
- 🌙 **Modo silencioso** para não exibir alertas durante o foco  

---

## 🧩 Estrutura do Projeto

```

focus-blocker/
│
├── manifest.json
├── background.js
├── content.js
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── assets/
│   └── icons/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
└── README.md

````

---

## ⚙️ Tecnologias Utilizadas

- **Manifest V3** (API oficial do Chrome)
- **HTML5**, **CSS3**, **JavaScript**
- **Chrome Storage API**
- **Chrome Alarms API**
- **Chrome Notifications API**

---

## 🧭 Instalação no Google Chrome

Siga os passos abaixo para instalar manualmente a extensão **Focus Blocker** no seu navegador:

1. Baixe o projeto ou clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/focus-blocker.git
````

ou baixe o arquivo `.zip` e extraia o conteúdo em uma pasta local.

2. Abra o Google Chrome e acesse:

   ```
   chrome://extensions/
   ```

3. Ative o **Modo do desenvolvedor** (no canto superior direito).

4. Clique em **“Carregar sem compactação”** ou **“Load unpacked”**.

5. Selecione a pasta onde estão os arquivos do **Focus Blocker** (a pasta raiz com o `manifest.json`).

6. A extensão será adicionada ao navegador e o ícone aparecerá na barra de extensões. 🎉

---

## 🧪 Executar Testes Automatizados (opcional)

Se desejar testar o comportamento da extensão via **Playwright** (E2E):

```bash
npm install
npx playwright test
```

> 💡 Requer Node.js 18+ e Docker para rodar em ambiente isolado.

---

## 🔄 CI/CD

O projeto pode ser integrado com o **GitHub Actions** para:

* Executar os testes automaticamente;
* Gerar relatórios (`playwright-report`);
* Publicar artefatos (`focus-blocker.zip`) para submissão na Chrome Web Store.

Arquivo principal de pipeline:
`.github/workflows/tests.yml`

---

## 👥 Contribuição

Sinta-se à vontade para contribuir!
Basta abrir uma **issue** ou enviar um **pull request** com melhorias e correções.

---

## 📜 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 💡 Créditos

Desenvolvido por Kamila Gomes da Silva
Inspirado em ferramentas de produtividade como *StayFocusd* e *LeechBlock*.

```

---

Quer que eu adicione também uma **seção de publicação na Chrome Web Store** (ensinando como empacotar e enviar o `.zip`)? Isso completaria o guia para quem quiser disponibilizar o Focus Blocker publicamente.
```







# My Chrome Extension — E2E + CI

## Como rodar localmente (sem Docker)
1. `npm ci`
2. `npm run build`
3. `npx playwright test --reporter=list,html`
4. Relatório em `playwright-report/`. Abra com `npx playwright show-report`.

## Rodar com Docker Compose
1. `docker compose build`
2. `docker compose run --rm e2e`
O container executa `npm run test:e2e` por padrão.

## O que a pipeline faz (GitHub Actions)
- Instala dependências e Playwright
- Roda `npm run build` (gera `dist/extension.zip`)
- Roda testes E2E com Playwright (HTML report em `playwright-report`)
- Publica artefatos: `playwright-report` e `dist/extension.zip`
- Se você criar uma tag `vX.Y.Z`, a workflow cria uma GitHub Release com o zip.

## Observações
- Ajuste `tests/extension.spec.ts` para refletir como sua extensão funciona (content script, opções, popup).
- Em ambientes CI rodamos headless. Localmente pode trocar `headless: false`.
>>>>>>> f35746d (Entrega II - Extensão + Docker + CI)
