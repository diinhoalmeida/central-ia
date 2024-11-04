# Central IA - Teste Técnico para Desenvolvedor Full Stack

## Descrição do Projeto

Esta aplicação é o resultado do teste técnico para desenvolvedor full stack, que visa avaliar a criação de um site funcional integrando frontend e backend usando Express e um banco de dados SQL. A aplicação inclui autenticação de usuários e uma interface baseada em um protótipo fornecido.

### Funcionalidades Principais

1. **Tela Home**:

   - Exibição de uma lista de IAs disponíveis para interação.
   - Interface limpa e responsiva, seguindo o design do protótipo.
   - Cabeçalho com logotipo, barra de navegação com links e barra de pesquisa.
   - Botão de "Entrar" e "Cadastrar".
   - Seção principal destacando ferramentas de IA e categorias mais acessadas.
   - Rodapé com links de "Política de Privacidade", "Termos de Uso", "Contato" e "Suporte", além de ícones de redes sociais.

2. **Tela de Chat**:

   - Barra superior com logotipo e contador de créditos do usuário.
   - Coluna lateral com histórico de interações recentes.
   - Área principal com campos de busca para seleção de IA e categoria.
   - Campo de texto para envio de mensagens e botões com opções adicionais.

3. **Tela de Autenticação**:
   - Tela de login de usuários utilizando Firebase Auth.

### Funcionalidades de Backend

1. **Autenticação com Firebase Auth**:

   - Configuração de autenticação por e-mail e senha.

2. **Rotas com Express**:

   - Rotas conectadas a um banco de dados SQL para:
     - Obter informações sobre as IAs.
     - Obter dados do usuário.
     - Registrar prompts de interação.

3. **Banco de Dados SQL**:
   - Configuração de um banco de dados SQL para armazenar dados das IAs e histórico de interações.

### Requisitos Técnicos

1. **Frontend**:

   - Desenvolvido em React.js.
   - Interface responsiva e funcional para dispositivos móveis e desktops.

2. **Backend**:

   - APIs criadas com Express.
   - Integração segura com banco de dados SQL.

3. **Firebase**:
   - Configuração do Firebase Auth para autenticação de usuários.

## Como Executar o Projeto Localmente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/diinhoalmeida/central-ia.git
   cd central-ia-project
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configuração do Firebase**:

   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Configure a autenticação por e-mail e senha.

4. **Inicie a aplicação**:
   ```bash
   npm run dev
   ```

## Estrutura de Diretórios

```
central-ia-project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.tsx
├── public/
├── server/
│   ├── index.ts
├── .env
└── README.md
```

## Tecnologias Utilizadas

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express
- **Banco de Dados**: PlanetScale (ou Heroku Postgres)
- **Outras**: Firebase Auth, Axios

## Considerações Finais

Este projeto foi desenvolvido para demonstrar habilidades em desenvolvimento full stack, com ênfase na integração entre frontend e backend, uso de autenticação com Firebase, e manipulação de dados em um banco SQL. Siga as instruções acima para configurar e rodar a aplicação localmente. Para dúvidas, entre em contato.
