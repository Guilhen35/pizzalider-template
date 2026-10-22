'use strict';
// MODO DEMONSTRAÇÃO: pedidos e links de WhatsApp não chegam à pizzaria real.
(function () {
  const CONTATO = 'https://paulohenrique-dev.vercel.app/#contato';

  function abrirAviso() {
    if (document.getElementById('demo-aviso')) return;
    const fundo = document.createElement('div');
    fundo.id = 'demo-aviso';
    fundo.className = 'demo-aviso';
    fundo.innerHTML = `
      <div class="demo-aviso__caixa" role="dialog" aria-modal="true" aria-labelledby="demo-aviso-titulo">
        <p class="demo-aviso__sobre">Versão de demonstração</p>
        <h2 id="demo-aviso-titulo">Pedido não enviado</h2>
        <p>Este é um site real publicado como demonstração. Para não chegar um pedido de teste na pizzaria, o envio pelo WhatsApp está desativado aqui.</p>
        <p>Gostou? Fale com <strong>Paulo Henrique</strong>, desenvolvedor deste site, para criar um sob medida para o seu negócio!</p>
        <div class="demo-aviso__acoes">
          <a href="${CONTATO}" target="_blank" rel="noopener noreferrer">Falar com o desenvolvedor</a>
          <button type="button" data-fechar>Continuar navegando</button>
        </div>
      </div>`;
    const fechar = () => { fundo.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape') fechar(); };
    fundo.addEventListener('click', (e) => { if (e.target === fundo || e.target.hasAttribute('data-fechar')) fechar(); });
    document.addEventListener('keydown', onKey);
    document.body.append(fundo);
    fundo.querySelector('[data-fechar]').focus();
  }

  window.addEventListener('demo:pedido', abrirAviso);
  // Qualquer link para o WhatsApp abre o aviso em vez da conversa real
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href*="wa.me"]');
    if (!link) return;
    e.preventDefault();
    abrirAviso();
  }, true);
})();
