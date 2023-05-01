# AppTodo

Projeto de estudo do Angular, desenvolvido durante curso de Angular 2 (v15+). Consiste de um "to-do" simples, apenas para aprofundar os estudos em cima da teoria que foi passada durante o curso.

## Link de Exibição

O projeto está hospedado no meu github pages, podendo ser acessado no link ao lado: [To-Do List](https://jacsonrsasse.github.io/app-todo-angular/)

---

### Sobre o Deploy

Resolvi deixar por escrito o passo-a-passo que tentei e não funcionou, e o que eu fiz e funcionou. Se alguém achar isso e for útil, fico feliz em ajudar.

Bem, normalmente o passo-a-passo seria:

1. Criar um repositório para o _source_ do projeto no Girhub, e em seguida commitar todas as alterações.
2. Instalar a dependência do `angular-cli-ghpages`
    > npm i angular-cli-ghpages -D
3. Rodar o deploy:
    > ng deploy --base-href="https://%github_username%.github.io/%github_repo%/"
    - Lembre-se que deve ser colocado o seu usuário e o seu repositório.

<br>

Só que esse passo-a-passo não estava funcionando <s>para mim</s> por erro de privilégios no repositório. Desconfio que seja por conta da chave SSH com senha. Se a cada push você tiver que digitar uma senha, saiba que esse procedimento não é solicitado nessas etapas, e é por isso que desconfio que seja esse o problema.

Porém há uma solução mais simples, siga os passos abaixo:

1. Instale a dependência, conforme orientação acima.
2. Rode o deploy da seguinte forma:
    > ng deploy --repo="link_do_repositorio_do_source_do_seu_projeto" --base-href="https://%github_username%.github.io/%github_repo%/"
    - Novamente, lembre-se de trocar o username e repositório

Esse comando faz o deploy baseado no repositório, portanto você tem que ter ele atualizado com todas as suas alterações. No meu caso, na primeira vez que fiz esse procedimento, o meu plugin no VS Code solicitou que eu fizesse a autenticação no Github, resolvendo assim o problema de privilégio. Além disso, esse comando cria automaticamente no repositório remoto uma branch nova chamada `gh-pages` contendo o build da aplicação.
