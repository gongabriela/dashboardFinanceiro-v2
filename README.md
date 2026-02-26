# Dashboard Financeiro v2

## Sobre o Projeto

Esta é a versão 2.0 do Dashboard Financeiro, uma aplicação web desenvolvida para ajudar no controlo de gastos e receitas pessoais.

Nesta nova versão, o projeto passou por uma grande refatoração de arquitetura. O código fonte foi inteiramente migrado para **TypeScript**, garantindo maior segurança, prevenção de bugs e código fortemente tipado. Além disso, o fluxo de publicação foi profissionalizado com a implementação de uma pipeline de **CI/CD utilizando GitHub Actions**.

## Tecnologias e Ferramentas

* **HTML5 & CSS3:** Estrutura semântica e estilização responsiva.
* **TypeScript:** Tipagem estática, interfaces e inferência de tipos.
* **Arquitetura Modular (ES6 Modules):** Código dividido por responsabilidades (Manipulação de DOM, Serviços de Storage, Cálculos, Validações e Formatações).
* **GitHub Actions:** Automação de deploy (robô de CI/CD que compila o TS para JS automaticamente).
* **GitHub Pages:** Hospedagem da aplicação ao vivo.

## Como executar o projeto localmente

1. Clone este repositório para a sua máquina:

```bash
git clone https://github.com/SEU-USUARIO/dashboardFinanceiro-v2.git

```

2. Entre na pasta do projeto:

```bash
cd dashboardFinanceiro-v2

```

3. Instale as dependências (para o TypeScript):

```bash
npm install

```

4. Compile o código TypeScript para JavaScript:

```bash
npx tsc

```

5. Abra o ficheiro `index.html` utilizando a extensão **Live Server** (ou um servidor local da sua preferência) para que os módulos funcionem corretamente.

## Deploy Automatizado

O processo de publicação (deploy) deste projeto é 100% automatizado. Sempre que um novo *commit* é enviado para a ramificação `main`, um *workflow* do **GitHub Actions** é acionado. Este *workflow* instala o Node.js, compila os ficheiros `.ts` usando o `npx tsc`, e publica os ficheiros estáticos atualizados diretamente no **GitHub Pages**.