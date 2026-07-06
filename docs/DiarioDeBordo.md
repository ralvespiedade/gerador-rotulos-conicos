# Diário de Bordo

## Dia 01 — 03/07/2026

### Objetivo

Preparar o ambiente de desenvolvimento do Gerador de Rótulos Cônicos da RKP3D.

### Concluído

- ✅ Visual Studio Code instalado
- ✅ Git instalado
- ✅ Git Bash funcionando
- ✅ Node.js instalado
- ✅ npm funcionando
- ✅ Primeiro problema de PATH resolvido

### Aprendizados

- O que é um terminal.
- O que é Git.
- O que é PATH.
- Diferença entre instalar um programa e disponibilizá-lo ao sistema.
- Como investigar um problema antes de tentar corrigi-lo.

## Vitória do dia

O comando `node --version` não funcionou na primeira tentativa.

Antes de pedir ajuda, lembrei que alterações nas variáveis de ambiente exigem que alguns programas sejam reiniciados.

Fechei o VS Code.

Abri novamente.

Funcionou.

Primeiro problema resolvido de forma autônoma.

### Próximo passo

Criar oficialmente o primeiro projeto.

### Frase do dia

"Programar não é decorar comandos. É aprender a conversar com o computador."

# 📅 Dia 02 — 04/07/2026

## 🎯 Objetivo

Dar início oficial ao desenvolvimento do **Gerador de Rótulos Cônicos da RKP3D**, estruturando o projeto e executando o primeiro programa em TypeScript.

---

## ✅ Conquistas

- Estrutura inicial do projeto organizada.
- Repositório Git inicializado.
- `package.json` criado.
- TypeScript instalado.
- `tsconfig.json` criado.
- `tsx` instalado e configurado.
- Primeiro arquivo `app.ts` criado.
- Primeiro programa executado com sucesso.
- Arquivo `.gitignore` criado.
- Primeiro commit realizado.
- Histórico do projeto iniciado no Git.

---

## 💻 Primeiro programa

```typescript
const mensagem: string = "Hello, world!";

console.log(mensagem);
```

Resultado:

```text
Hello, world!
```

---

## 🧠 Aprendizados

Hoje aprendi melhor como funciona a estrutura de um projeto moderno utilizando Node.js e TypeScript.

Também compreendi o papel dos principais arquivos do projeto:

- `package.json`
- `tsconfig.json`
- `.gitignore`

Além disso, ficou muito mais claro que:

- O Node.js executa JavaScript.
- O TypeScript precisa ser interpretado por uma ferramenta apropriada.
- O `tsx` simplifica o desenvolvimento executando arquivos `.ts` diretamente.
- O `npm` utiliza os scripts definidos no `package.json`.

Outro aprendizado importante foi entender que um bom software começa pela organização do projeto antes mesmo da implementação das funcionalidades.

---

## 🚀 Momento marcante

O primeiro `Hello, world!` foi executado com sucesso.

Em seguida, foi realizado o primeiro commit do projeto.

Foi emocionante visualizar o histórico através do `git log` e perceber que a história do software havia começado oficialmente.

---

## 💡 Descoberta do dia

Durante os testes, o comando `node --version` não funcionou na primeira tentativa.

Antes de pedir ajuda, lembrei que alterações nas variáveis de ambiente exigem que alguns programas sejam reiniciados.

Fechei o VS Code, abri novamente e tudo passou a funcionar.

Foi o primeiro problema resolvido de forma totalmente autônoma durante o projeto.

---

## ☕ Reflexão do dia

Hoje percebi que minha paixão por programação nunca desapareceu.

Ela apenas estava adormecida desde a época do desenvolvimento do BotDiscord.

Ao voltar a programar, muitos conceitos começaram a retornar naturalmente, trazendo novamente aquela satisfação de aprender, resolver problemas e construir algo do zero.

---

## 📝 Frase do dia

> "Tô com sede de aprender e fome de `console.log(':D')`."

---

## 🎯 Próxima Sprint

- Criar o módulo de geometria.
- Implementar os cálculos matemáticos da planificação do tronco de cone.
- Organizar o projeto em módulos.
- Substituir o `Hello, world!` pelos primeiros cálculos reais do Gerador de Rótulos Cônicos da RKP3D.

---

## 🏆 Status do Projeto

```
🏁 Gerador de Rótulos Cônicos RKP3D

✅ Estrutura do projeto criada
✅ Git configurado
✅ Primeiro commit realizado
✅ TypeScript funcionando
✅ Primeiro programa executado

🚀 Próximo passo:
Transformar matemática em software.

# Diário de Bordo — 05/07/2026

## Objetivo do dia

Dar início à implementação da parte matemática do Gerador de Rótulos Cônicos, estruturando o projeto para realizar o primeiro cálculo geométrico: a geratriz do tronco de cone.

---

## O que foi desenvolvido

### Estrutura do projeto

Organizei melhor as pastas do projeto e criei a estrutura inicial para separar as responsabilidades:

- `geometry/`
- `models/`
- `utils/`

Também foi criada a interface `ConeDimensions`, responsável por representar as dimensões de um tronco de cone.

---

### Primeira Interface do projeto

Foi criada a interface:

```ts
ConeDimensions
```

Ela define que qualquer objeto que represente um tronco de cone deve possuir:

- diâmetro superior;
- diâmetro inferior;
- altura.

Foi muito interessante compreender que uma interface funciona como um contrato entre o código e o TypeScript.

---

### Primeiro cálculo geométrico

Implementei a função responsável por calcular a geratriz utilizando o Teorema de Pitágoras.

Inicialmente, a função recebia como parâmetros:

- altura;
- diferença entre os raios.

Essa foi a primeira função matemática do projeto.

Também foi muito legal relembrar conceitos estudados há muitos anos, principalmente o Teorema de Pitágoras.

---

## Conceitos aprendidos

Durante a implementação da geratriz, revisitei um conceito clássico da matemática:

> A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.

Foi muito gratificante perceber que aquele conteúdo estudado na escola possui aplicação direta em um problema real da RKP3D.

---

## Sensação do dia

Hoje foi o dia em que o projeto deixou de ser apenas um "Hello, World!" e realizou seu primeiro cálculo geométrico.

Foi uma sensação muito boa perceber que programação e matemática começam a caminhar juntas para resolver um problema real.
```
# Diário de Bordo — 06/07/2026

## Objetivo do dia

Refatorar a função de cálculo da geratriz para deixá-la mais intuitiva, compreender melhor conceitos do TypeScript e evoluir a arquitetura do projeto.

---

## O que foi desenvolvido

### Refatoração da função `calculateGeratriz`

A função passou por uma importante evolução.

Antes, ela recebia dois parâmetros:

```ts
calculateGeratriz(altura, diferencaRaios)
```

Após a refatoração, ela passou a receber diretamente um objeto do tipo:

```ts
ConeDimensions
```

Agora a própria função é responsável por:

- calcular o raio superior;
- calcular o raio inferior;
- calcular a diferença entre os raios;
- aplicar o Teorema de Pitágoras;
- retornar a geratriz.

Essa alteração tornou a função muito mais elegante e fácil de utilizar.

---

### Refatoração do `app.ts`

O código da aplicação ficou mais simples.

Agora basta criar um objeto representando o balde e passá-lo para a função:

```ts
calculateGeratriz(meuBalde)
```

Percebi como esconder detalhes internos da implementação deixa o código muito mais legível.

---

## Conceitos aprendidos

### `import type`

Hoje finalmente compreendi um conceito que estava bastante abstrato.

Entendi que interfaces existem apenas durante o desenvolvimento.

Elas funcionam como uma ficha técnica que o TypeScript utiliza para conferir se tudo está correto.

Quando o código é transformado em JavaScript, essa ficha desaparece.

Por isso utilizamos:

```ts
import type { ConeDimensions } from "./models/ConeDimensions.js"
```

Já funções realmente existem quando o programa está sendo executado, portanto continuam sendo importadas normalmente.

Foi um dos conceitos mais interessantes aprendidos até agora.

---

### Separação de responsabilidades

Também compreendi um princípio importante de arquitetura.

Uma função deve possuir apenas uma responsabilidade.

Percebi que `calculateGeratriz()` deve apenas calcular e retornar um valor.

A responsabilidade de exibir o resultado pertence ao `app.ts`.

Esse pequeno detalhe tornou muito clara a importância de separar responsabilidades dentro do projeto.

---

## Sensação do dia

Hoje tive uma das melhores sensações desde que retomamos os estudos.

Consegui realizar praticamente toda a refatoração sozinho.

Foi muito gratificante perceber que vários conceitos começaram a fazer sentido ao mesmo tempo.

Também fiquei muito feliz em perceber que estou aprendendo não apenas a escrever código, mas principalmente a entender o motivo pelo qual ele é escrito dessa forma.