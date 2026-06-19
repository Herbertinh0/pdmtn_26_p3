# Guia de entrega

Estes passos devem ser executados na sua máquina, pois aqui não há acesso à
internet/GitHub para criar o repositório por você.

## 1. Editar o README.md
Abra `README.md` e substitua a lista de integrantes pelo nome completo (em
ordem alfabética) e o RA de cada um.

## 2. Instalar dependências e testar
```bash
npm install
npx expo start
```
Teste no Expo Go (Android/iOS) ou em um emulador. Confirme que:
- O botão carrega 5 fotos por clique.
- As fotos aparecem empilhadas, com rolagem vertical.

## 3. Criar o repositório no GitHub
Crie um repositório novo (ex.: `cat-app`) no GitHub, vazio (sem README).

## 4. Inicializar o git e fazer os commits (Conventional Commits)

Sugestão de sequência de pelo menos 5 commits:

```bash
cd cat-app
git init
git add package.json app.json babel.config.js .gitignore
git commit -m "chore: configura projeto react native com expo"

git add App.js
git commit -m "feat: adiciona busca de fotos de gatos via thecatapi"

git add App.js
git commit -m "feat: exibe fotos empilhadas em scroll vertical"

git add App.js
git commit -m "feat: adiciona botao para carregar cinco novas fotos por clique"

git add README.md
git commit -m "docs: inclui nomes e ras"
```

(Ajuste as mensagens/arquivos conforme você for de fato desenvolvendo e
commitando incrementalmente — o importante é seguir o padrão
`tipo: descrição` do Conventional Commits.)

## 5. Criar a tag de versão
```bash
git tag -a v1.0.0 -m "Versao 1.0.0"
```

## 6. Subir para o GitHub
```bash
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
git push origin v1.0.0
```

## 7. Entregar o link
Envie o link do repositório no formulário:
https://bit.ly/bossini_fatec_entregas_provas

⚠️ Prazo: 19/06/2026, às 23h59 (hoje!).
