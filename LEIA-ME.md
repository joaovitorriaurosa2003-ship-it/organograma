# Organograma — E.C. Meia Noite SAF

Página do organograma e do dashboard de equipes, com login pelo Firebase.

## Arquivos

| Arquivo | Vai para o GitHub? | Para que serve |
|---|---|---|
| `index.html` | Sim | A página inteira (já tem o brasão embutido) |
| `manifest.webmanifest` | Sim | Permite instalar a página como aplicativo |
| `sw.js` | Sim | Necessário para a instalação; nunca guarda dados do Firebase |
| pasta `icones/` | Sim | Ícones do aplicativo (computador, Android e iPhone) |
| `logo.png` | Opcional | Brasão em PNG, caso queira usar em outro lugar |
| `firestore.rules` | Opcional | Regras de segurança, para colar no Firebase |
| `LEIA-ME.md` | Opcional | Este guia |
| `dados-iniciais.json` | **Não** | Dados dos funcionários. Use só para importar uma vez pela página |

O `dados-iniciais.json` tem nomes, cargos e datas de admissão. Se ele for para o GitHub, qualquer pessoa pode ler. Depois de importado, os dados ficam guardados só no Firebase.

## 1. Firebase: login

1. No console do projeto **organograma-10d4c**, abra **Authentication** → **Começar**.
2. Em **Método de login**, ative **E-mail/senha**.
3. Em **Usuários** → **Adicionar usuário**:
   - E-mail: `lucineia@ecmeianoitesaf.com.br`
   - Senha: a senha escolhida (mínimo 6 caracteres)
4. Em **Configurações** → **Domínios autorizados**, adicione:
   `joaovitorriaurosa2003-ship-it.github.io`

Na tela de entrada basta digitar **Lucineia** no usuário: a página completa o e-mail sozinha. Esse e-mail não precisa existir de verdade; o Firebase só usa como identificação.

## 2. Firebase: banco de dados

1. Abra **Firestore Database** → **Criar banco de dados**.
2. Escolha **modo de produção** e a região **southamerica-east1 (São Paulo)**.
3. Na aba **Regras**, apague o conteúdo, cole o arquivo `firestore.rules` inteiro e clique em **Publicar**.

O Storage não é usado; as fotos ficam dentro do próprio organograma.

## 3. Ligar a página ao Firebase

1. Engrenagem ⚙️ → **Configurações do projeto** → **Seus apps** → app **Web** (ícone `</>`; se não existir, crie um, sem Hosting).
2. Copie os valores de `apiKey`, `messagingSenderId` e `appId`.
3. No `index.html`, procure `CONFIGURAÇÃO DO FIREBASE` e troque cada `COLE_AQUI` pelo valor correspondente.

Enquanto houver `COLE_AQUI` no arquivo, a página abre em **modo de teste**: sem senha e salvando só no navegador.

## 4. Publicar no GitHub Pages

1. Envie para o repositório `organograma`: `index.html`, `manifest.webmanifest`, `sw.js` e a pasta `icones` inteira (todos na raiz, mantendo a pasta `icones`).
2. **Settings** → **Pages** → **Deploy from a branch** → branch `main`, pasta `/ (root)` → **Save**.
3. Em 1 ou 2 minutos a página fica em:
   https://joaovitorriaurosa2003-ship-it.github.io/organograma/

## 5. Primeira entrada

1. Entre com o usuário e a senha.
2. A página mostra "Organograma ainda vazio". Clique em **Importar dados** e escolha o `dados-iniciais.json`.
3. Clique em **Salvar**. Pronto: a partir daí tudo fica no Firebase.

## Instalar como aplicativo

- **Computador (Chrome ou Edge):** clique no ícone de instalar na barra de endereço, ou em **⋯ → Instalar o aplicativo** dentro da página.
- **Android (Chrome):** menu ⋮ → **Instalar aplicativo** (ou **Adicionar à tela inicial**).
- **iPhone (Safari):** botão **Compartilhar** → **Adicionar à Tela de Início**.

O ícone aparece com o nome "Meia Noite" e abre em tela cheia, sem a barra do navegador. A instalação só funciona no endereço do GitHub Pages (https), não abrindo o arquivo direto do computador.

## Uso no dia a dia

- **Editar:** clique em qualquer ficha, cartão de setor, observação ou linha da tabela.
- **Reorganizar:** arraste uma ficha para o centro de outra para mudar a quem ela responde, ou até a borda para colocar ao lado. No celular, use o campo **Responde a**.
- **Navegar:** arraste o fundo do organograma; use **Ctrl + rolagem** ou os botões para o zoom e **Ajustar** para ver tudo.
- **Salvar:** botão **Salvar** (ou Ctrl + S). Nada é gravado até salvar.
- **Backup:** menu **⋯** → **Baixar backup (JSON)**. Vale fazer de vez em quando.
- **Novas pessoas com acesso:** crie o usuário no Authentication e acrescente o e-mail na lista do `firestore.rules`.

Limite: o organograma inteiro, com as fotos, precisa caber em 1 MB (cerca de 50 fotos). A página avisa se passar disso.
