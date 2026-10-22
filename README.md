# 🍕 Pizzalider · Cardápio e pedidos (Template)

Versão de **demonstração** do site da **Pizzalider** (Contagem, MG). Nome, cardápio, fotos, filiais e contatos publicados **com autorização** do cliente.

## O que tem

- Cardápio por categoria, busca e preços por tamanho (média, grande e gigante)
- Carrinho com forma de pagamento e pedido montado para o WhatsApp
- Páginas de filiais (endereço, telefone, mapa) e contato

> **Na demonstração:** o envio do pedido e os links de WhatsApp abrem um aviso, para nenhum pedido de teste chegar à pizzaria real.

## Tecnologias

React 18 · JavaScript (JSX) · CSS3 · esbuild · Vercel

O código fica em `src/app.jsx` e é compilado para `app.js` com `npm run build`. Na versão original, o JSX era convertido no navegador (Babel); aqui ele já vai pronto, o que deixa o site mais rápido e permite uma CSP sem `unsafe-eval`.

## Segurança e performance

- React servido pelo próprio site (sem depender de CDN de terceiros)
- Cabeçalhos de segurança em `vercel.json` (CSP, HSTS, X-Frame-Options, nosniff)
- Imagens otimizadas (de 62 MB para menos de 3 MB)
- `noindex` para não competir com o site oficial nos buscadores

---

Desenvolvido por **Paulo Henrique Guilhen Alves** · [Portfólio](https://paulohenrique-dev.vercel.app) · [LinkedIn](https://www.linkedin.com/in/paulo-henrique-guilhen)
