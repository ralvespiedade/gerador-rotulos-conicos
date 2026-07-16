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

## 08/07/2026 — Quando o código deu lugar à matemática

Hoje foi um dia diferente.

Nenhuma nova função foi implementada.
Nenhuma interface foi criada.
Nenhum commit foi realizado.

Mesmo assim, considero este um dos dias mais importantes desde o início do projeto.

Percebemos que o próximo desafio não era mais programar, mas compreender profundamente a geometria da planificação de um tronco de cone.

Ao invés de procurar fórmulas prontas, decidimos seguir um caminho diferente: descobrir a matemática por trás do problema.

Durante a conversa, utilizamos diversas analogias para construir esse entendimento:

- A gota d'água escorrendo pela parede do balde para representar a geratriz.
- Um barbante envolvendo a boca do balde para compreender por que o comprimento do arco permanece inalterado após a planificação.
- Um compasso desenhando um círculo para visualizar a geratriz como raio da planificação.
- Uma pizza para entender que a planificação corresponde apenas a uma fração de uma circunferência completa.

Foi nesse momento que compreendi uma ideia extremamente importante:

> A superfície do tronco de cone pode ser aberta sem esticar nem comprimir o material. As distâncias sobre essa superfície permanecem exatamente as mesmas.

Essa percepção explicou por que o comprimento da circunferência superior do balde transforma-se exatamente no comprimento do arco externo da planificação.

Ao final do dia, compreendi também que a circunferência construída pela geratriz não representa a peça final, mas apenas uma referência matemática para descobrir qual fração dela será utilizada.

Hoje não programei.

Hoje aprendi a enxergar o problema.

---

## Aprendizados

- Antes de programar, é preciso compreender o problema.
- Nem toda evolução de um projeto acontece escrevendo código.
- Uma boa analogia pode ensinar mais do que uma fórmula decorada.
- A matemática do projeto começou a deixar de ser um conjunto de fórmulas e passou a fazer sentido visualmente.

## 💡 Insight do Dia

"A matemática não é um conjunto de fórmulas; ela é uma forma de descrever aquilo que conseguimos enxergar."
---

## Próximos passos

- Descobrir matematicamente os raios interno e externo da planificação.
- Calcular o ângulo do setor circular.
- Transformar toda essa matemática em código TypeScript.

## 09/07/2026 — Quando comecei a descobrir as fórmulas

Hoje aconteceu algo que dificilmente esquecerei.

Ao invés de receber uma fórmula pronta, comecei a construir meus próprios caminhos para chegar até ela.

Enquanto refletia sobre a geometria do cone completo, surgiu uma ideia:

"Será que consigo descobrir a altura do cone utilizando uma regra de três?"

A proposta era simples.

Sabendo que:

- em 35 mm de altura o raio varia 1,5 mm;

seria possível descobrir qual altura seria necessária para que esse raio chegasse até zero.

Inicialmente imaginei tratar essa relação como inversamente proporcional, por estar raciocinando da base em direção ao vértice do cone.

Durante a discussão, compreendi que, matematicamente, trata-se de uma relação linear decrescente.

Apesar do ajuste na nomenclatura, o raciocínio geométrico estava correto.

A partir dessa altura reconstruída do cone completo, tornou-se possível calcular sua geratriz utilizando o Teorema de Pitágoras.

Foi extremamente gratificante perceber que havia encontrado um segundo caminho para chegar exatamente ao mesmo resultado obtido anteriormente utilizando semelhança de triângulos.

Mais importante do que encontrar a resposta foi perceber que eu mesmo era capaz de reconstruir a matemática do problema.

Essa foi uma das maiores vitórias desde o início do projeto.

---

## Aprendizados

- Existem diferentes caminhos matemáticos para resolver o mesmo problema.
- Entender a geometria vale mais do que decorar fórmulas.
- Um algoritmo sólido nasce de um raciocínio sólido.
- Questionar e propor soluções faz parte do desenvolvimento de software.

---
## 💡 Insight do Dia

"Uma boa solução nasce quando entendemos o problema tão bem que conseguimos reinventar o caminho até a resposta."

## Uma frase que marcou o dia

> "Hoje não aprendi apenas uma fórmula. Descobri que consigo construí-la."

---

## Próximos passos

- Determinar matematicamente os raios interno e externo da planificação.
- Implementar os cálculos em TypeScript.
- Criar o modelo que representará a planificação completa do rótulo.

## 11/07/2026 — Reconstruindo o Cone Completo

Hoje foi um daqueles dias em que o projeto amadureceu.

Ao invés de apenas fazer o código funcionar, o foco passou a ser tornar a implementação mais próxima da geometria real do problema.

Começamos revisando a função responsável por reconstruir o cone completo a partir das dimensões do tronco.

Durante essa revisão percebemos alguns pontos importantes:

- O algoritmo deveria funcionar independentemente da orientação do tronco de cone.
- A diferença entre os raios deveria ser sempre positiva.
- O raio utilizado no cálculo da geratriz do cone completo deveria ser sempre o maior raio do tronco.
- A função passou a retornar um objeto representando o cone completo, ao invés de apenas um número.

Essa mudança tornou o código muito mais expressivo.

Antes, a função retornava apenas a geratriz.

Agora ela devolve um novo objeto contendo:

- altura do cone completo;
- raio da base do cone completo;
- geratriz.

Durante esse processo compreendi um conceito muito importante de desenvolvimento de software:

> Uma função não precisa devolver apenas um valor. Ela pode devolver um objeto inteiro representando um novo conceito do domínio.

Essa ideia fez muito sentido utilizando a analogia da linha de produção.

Cada função recebe uma "caixa" de informações, realiza seu trabalho e entrega outra "caixa" organizada para a próxima etapa do algoritmo.

Também reorganizamos a nomenclatura do projeto.

A interface anteriormente chamada `ConeDimensions` passou a representar especificamente o cone completo, enquanto o objeto utilizado como entrada passou a representar explicitamente um tronco de cone.

Essa separação tornou o domínio muito mais claro e prepara o projeto para as próximas etapas.

Ao final do dia, a função já era capaz de reconstruir matematicamente o cone completo a partir de um tronco de cone utilizando:

- regra de três;
- Teorema de Pitágoras.

Mais do que implementar uma função, foi um exercício de transformar a matemática compreendida nos últimos dias em um algoritmo limpo, legível e preparado para crescer.

---

## Aprendizados

- Bons nomes tornam o código mais fácil de compreender.
- Um algoritmo robusto deve funcionar mesmo quando a entrada muda de orientação.
- Objetos permitem transportar várias informações relacionadas de maneira organizada.
- Programar é modelar conceitos do mundo real.

---

## Insight do Dia

> "Uma boa função não entrega apenas um resultado; ela entrega um novo conhecimento sobre o problema."

---

## Próximos passos

Agora que o cone completo pode ser reconstruído matematicamente, o próximo desafio será calcular a planificação.

Para isso precisaremos descobrir:

- o raio interno da planificação;
- o raio externo;
- o ângulo do setor circular.

Essas três informações representarão completamente a geometria do rótulo plano e abrirão caminho para a geração automática do SVG.

