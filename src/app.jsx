
    const { useState } = React;

    /* ===== DADOS ===== */
    const PIZZAS = {
      classicas: [
        { name: 'À Moda',    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, calabresa, milho, tomate, pimentão, cebola e bacon',    prices: { media:34, grande:39, gigante:53 } },
        { name: 'Calabresa', image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, calabresa, tomate e cebola',                                       prices: { media:34, grande:39, gigante:53 } },
        { name: 'Presunto',  image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, milho e cebola',                                         prices: { media:34, grande:39, gigante:53 } },
        { name: 'Legal',     image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, calabresa, azeitona, pimentão, cebola e bacon',          prices: { media:34, grande:39, gigante:53 } },
        { name: 'Milho',     image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, milho e tomate',                                                   prices: { media:34, grande:39, gigante:53 } },
      ],
      especiais: [
        { name: 'Mussarela',         image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela e tomate',                                                           prices: { media:36, grande:42, gigante:54 } },
        { name: 'Marguerita',        image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, tomate e manjericão',                                               prices: { media:36, grande:42, gigante:54 } },
        { name: 'Napolitana',        image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, cebola, azeitona verde e tomate',                         prices: { media:36, grande:42, gigante:54 } },
        { name: 'Mixta',             image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, calabresa, frango, tomate, pimentão, cebola e bacon',     prices: { media:36, grande:42, gigante:54 } },
        { name: 'Presunto Especial', image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, milho e bacon',                                           prices: { media:36, grande:42, gigante:54 } },
        { name: 'Lombinho',          image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, lombo canadense, milho e catupiri',                                 prices: { media:36, grande:42, gigante:54 } },
        { name: 'Portuguesa',        image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, calabresa, azeitona preta, ovo, cebola e bacon',          prices: { media:36, grande:42, gigante:54 } },
        { name: 'Vegetariana',       image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, palmito, milho, tomate, azeitona preta, pimentão e cebola',         prices: { media:36, grande:42, gigante:54 } },
      ],
      frango: [
        { name: 'Frango à Bolonhesa', image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, frango, milho e molho à bolonhesa',                               prices: { media:39, grande:45, gigante:55 } },
        { name: 'Frango Catupiri',    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, frango e catupiri',                                                prices: { media:39, grande:45, gigante:55 } },
        { name: 'Brasileira',         image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, presunto, palmito, azeitona verde, milho, tomate, cebola e bacon', prices: { media:39, grande:45, gigante:55 } },
        { name: 'Calábria',           image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, calabresa, frango, cebola e molho à bolonhesa',                   prices: { media:39, grande:45, gigante:55 } },
      ],
      premium: [
        { name: 'Bacon',      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, bacon, tomate e milho',                                                    prices: { media:41, grande:47, gigante:57 } },
        { name: 'Atum',       image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, atum, cebola e azeitona preta',                                            prices: { media:41, grande:47, gigante:57 } },
        { name: 'Champignon', image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, champignon, palmito e catupiri',                                           prices: { media:41, grande:47, gigante:57 } },
        { name: 'Pepperoni',  image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela e pepperoni',                                                               prices: { media:41, grande:47, gigante:57 } },
        { name: 'Master',     image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, calabresa, lombo, milho, palmito, frango, azeitona preta e bacon',         prices: { media:41, grande:47, gigante:57 } },
        { name: 'Suprema',    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', ingredients: 'Muçarela, frango, palmito, milho, catupiri e bacon',                                 prices: { media:41, grande:47, gigante:57 } },
      ],
    };

    const FILIAIS = [
      { id:1, nome:'Água Branca', endereco:'Rua Cardeal Arco Verde, 386 — Loja A', cidade:'Contagem, MG', tel:'(31) 3393-1850', telNum:'3133931850', whats:'5531993567726', whatsLabel:'(31) 99356-7726', mapa:'https://www.google.com.br/maps/place/PIZZA+L%C3%8DDER/@-19.9299494,-44.0365744,17z', icone:'🍕' },
      { id:2, nome:'Industrial',  endereco:'Av. Benjamin Guimarães, 332 — Loja B', cidade:'Contagem, MG', tel:'(31) 3046-5165', telNum:'3130465165', whats:'5531989070316', whatsLabel:'(31) 98907-0316', mapa:'https://www.google.com.br/maps/place/Pizza+Lider/@-19.9780449,-44.0405839,17z', icone:'🔥' },
    ];

    const CATS = [
      { key:'all',       label:'Todas',     emoji:'🍕' },
      { key:'classicas', label:'Clássicas', emoji:'⭐' },
      { key:'especiais', label:'Especiais', emoji:'🌟' },
      { key:'frango',    label:'Frango',    emoji:'🐔' },
      { key:'premium',   label:'Premium',   emoji:'👑' },
    ];

    const TAMANHOS = [
      { key:'media',   label:'Média · 25cm' },
      { key:'grande',  label:'Grande · 30cm' },
      { key:'gigante', label:'Gigante · 35cm' },
    ];

    const fmt = (v) => `R$ ${v.toFixed(2).replace('.',',')}`;

    // Função para normalizar nome e procurar imagem
    const getNomeImagem = (nome) => {
      return nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/\s+/g, '') // Remove espaços
        + '.jpg';
    };
    function App() {
      const [pagina,    setPagina]    = useState('home');
      const [carrinho,  setCarrinho]  = useState([]);
      const [tamanho,   setTamanho]   = useState('grande');
      const [cat,       setCat]       = useState('all');
      const [busca,     setBusca]     = useState('');
      const [modalOpen, setModalOpen] = useState(false);
      const [menuOpen,  setMenuOpen]  = useState(false);
      const [toast,     setToast]     = useState(null);
      const [pagamento, setPagamento] = useState('pix');

      const ir = (p) => { setPagina(p); setMenuOpen(false); window.scrollTo(0,0); };

      const addCarrinho = (pizza) => {
        setCarrinho(prev => [...prev, {
          id: `${pizza.name}-${tamanho}-${Date.now()}`,
          name: pizza.name, tamanho, preco: pizza.prices[tamanho]
        }]);
        setToast(`✓ ${pizza.name} adicionado!`);
        setTimeout(() => setToast(null), 2200);
      };

      const remItem = (id) => setCarrinho(prev => prev.filter(i => i.id !== id));
      const total   = () => carrinho.reduce((s,i) => s + i.preco, 0);

      const enviarWhats = () => {
        if (!carrinho.length) return;
        const itens = carrinho.map(i => `• ${i.name} (${i.tamanho})`).join('\n');
        const pagamentoLabel = {
          'pix': '💳 PIX',
          'dinheiro': '💵 Dinheiro',
          'debito': '🏧 Débito',
          'credito': '💳 Crédito'
        }[pagamento];
        const msg = `Olá! Gostaria de fazer um pedido:\n\n${itens}\n\n💰 Total: ${fmt(total())}\n📱 Forma de Pagamento: ${pagamentoLabel}`;
        // Demonstração: não envia o pedido para o WhatsApp real da pizzaria
        window.dispatchEvent(new CustomEvent('demo:pedido', { detail: msg }));
        setCarrinho([]); setModalOpen(false); setPagamento('pix');
      };

      const allPizzas = Object.entries(PIZZAS).flatMap(([c,items]) => items.map(p => ({...p, cat:c})));
      let pizzas = cat === 'all' ? allPizzas : PIZZAS[cat].map(p => ({...p, cat}));
      if (busca.trim()) pizzas = pizzas.filter(p => p.name.toLowerCase().includes(busca.toLowerCase()));

      /* ===== NAVBAR ===== */
      const Navbar = () => (
        <>
          <nav className="navbar">
            <div className="navbar-inner">
              <button className="logo" onClick={() => ir('home')}>
                <img src="assets/logo.png" alt="Logo Pizzalider" style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px'}} />
                <span>PIZZALIDER</span>
              </button>

              <div className="nav-links">
                {['home','cardapio','filiais','contato'].map(p => (
                  <button key={p} onClick={() => ir(p)} className={`nav-btn ${pagina===p?'ativo':''}`}>
                    {p==='home'?'Início':p.charAt(0).toUpperCase()+p.slice(1)}
                  </button>
                ))}
              </div>

              <div className="nav-right">
                {pagina==='cardapio' && (
                  <button className={`btn-carrinho ${carrinho.length>0?'cheio':''}`} onClick={() => setModalOpen(true)}>
                    🛒
                    {carrinho.length > 0 && <span className="badge-num">{carrinho.length}</span>}
                  </button>
                )}
                <button className="btn-menu" onClick={() => setMenuOpen(o => !o)}>
                  {menuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
          </nav>
          {menuOpen && (
            <div className="nav-mobile">
              {['home','cardapio','filiais','contato'].map(p => (
                <button key={p} onClick={() => ir(p)} className={`nav-mobile-btn ${pagina===p?'ativo':''}`}>
                  {p==='home'?'Início':p.charAt(0).toUpperCase()+p.slice(1)}
                </button>
              ))}
            </div>
          )}
        </>
      );

      /* ===== HOME ===== */
      const Home = () => (
        <>
          {/* Hero */}
          <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-tag">⭐ Desde 2007 · Contagem, MG</div>
              <h1 className="hero-titulo">A NÚMERO 1<br/><span>DO PEDAÇO!</span></h1>
              <p className="hero-sub">Empresa familiar que faz as melhores pizzas da região com amor, dedicação e ingredientes selecionados.</p>
              <div className="hero-btns">
                <button className="btn btn-primary" onClick={() => ir('cardapio')}>Ver Cardápio 🍕</button>
                <button className="btn btn-secondary" onClick={() => ir('filiais')}>Nossas Filiais 📍</button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="stats-section">
            <div className="stats-grid">
              {[['🏆','+17','Anos de história'],['🍕','+30','Sabores incríveis'],['📍','2','Filiais em Contagem'],['❤️','100%','Feito com amor']].map(([ic,v,d],i) => (
                <div key={i} className="stat-item">
                  <div className="stat-icone">{ic}</div>
                  <div className="stat-numero">{v}</div>
                  <div className="stat-desc">{d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Sobre */}
          <section className="sobre-section">
            <div className="sobre-inner">
              <div>
                <p className="sobre-label">Nossa História</p>
                <h2 className="sobre-titulo">A Paixão por <span>Pizza</span></h2>
                <p className="sobre-texto">Empresa familiar desde <strong>2007</strong>, fazemos a melhor pizza da região com amor, dedicação e ingredientes selecionados.</p>
                <p className="sobre-texto">Sempre visando agradar nossos clientes, mantemos o compromisso de entregar excelência em cada pedido — da massa ao recheio.</p>
                <button className="btn btn-primary btn-sm" onClick={() => ir('cardapio')} style={{marginTop:'1rem'}}>
                  Peça já a sua →
                </button>
              </div>
              <div className="sobre-foto">
                <div className="sobre-foto-placeholder"></div>
              </div>
            </div>
          </section>

          {/* Promoções */}
          <section className="promo-section">
            <div className="promo-inner">
              <p className="secao-tag claro">🔥 Promoções</p>
              <h2 className="secao-titulo claro" style={{marginBottom:'2rem'}}>Ofertas Especiais</h2>

              <div className="promo-destaque" style={{marginBottom:'3rem', cursor:'pointer'}} onClick={() => {ir('cardapio'); setTamanho('gigante');}}>
                <span className="promo-badge">Oferta do Dia</span>
                <h3>🎉 MEGA PROMOÇÃO</h3>
                <p>1 Pizza Gigante + Guaraná Antártica 2L</p>
                <div className="promo-preco">R$ 65,00</div>
              </div>

              <div className="promo-cards">
                <div className="promo-card vermelho" style={{cursor:'pointer'}} onClick={() => {ir('cardapio'); setTamanho('grande');}}>
                  <div>
                    <h4>2 Pizzas Grandes</h4>
                    <p>Sabores selecionados</p>
                  </div>
                  <span className="promo-card-preco">R$ 60,00</span>
                </div>
                <div className="promo-card escuro" style={{cursor:'pointer'}} onClick={() => {ir('cardapio'); setTamanho('grande');}}>
                  <div>
                    <h4>2 Pizzas Grandes</h4>
                    <p>Sabores premium + Refri</p>
                  </div>
                  <span className="promo-card-preco">R$ 70,00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Horário */}
          <section className="horario-section">
            <div className="horario-inner">
              <p className="secao-tag escuro">⏰ Funcionamento</p>
              <h2 className="secao-titulo escuro" style={{marginBottom:'2rem'}}>Horário de Atendimento</h2>
              <div className="horario-grid">
                {[['Domingo','FECHADO'],['Segunda a Quinta','18:00 – 23:30'],['Sexta e Sábado','18:00 – 00:00']].map(([d,h],i) => (
                  <div key={i} className="horario-card">
                    <div className="horario-dia">{d}</div>
                    <div className="horario-hora">{h}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );

      /* ===== CARDÁPIO ===== */
      const Cardapio = () => (
        <section className="cardapio-section">
          <div className="cardapio-inner">
            <div className="page-hero" style={{margin:'-5rem -1.5rem 3rem', padding:'4rem 1.5rem 3.5rem'}}>
              <div className="page-hero-inner">
                <h1 className="page-hero-titulo">Nosso <span>Cardápio</span></h1>
                <p className="page-hero-sub">Todas as pizzas acompanham molho ao sugo e orégano</p>
              </div>
            </div>

            {/* Filtros */}
            <div className="filtros-wrap">
              <div className="busca-input-wrap">
                <span className="busca-icone">🔍</span>
                <input className="busca-input" type="text" placeholder="Buscar pizza... ex: Calabresa, Frango, Bacon" value={busca} onChange={e => setBusca(e.target.value)} />
              </div>
              <div className="filtros-row">
                {CATS.map(c => (
                  <button key={c.key} className={`filtro-btn ${cat===c.key?'ativo':''}`} onClick={() => setCat(c.key)}>
                    {c.emoji} {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tamanhos */}
            <div className="tamanhos-row">
              {TAMANHOS.map(t => (
                <button key={t.key} className={`tamanho-btn ${tamanho===t.key?'ativo':''}`} onClick={() => setTamanho(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            {pizzas.length > 0 ? (
              <div className="pizzas-grid">
                {pizzas.map((p,i) => (
                  <div key={i} className="pizza-card" style={{animationDelay:`${i*0.04}s`}}>
                    <img src={`assets/${getNomeImagem(p.name)}`} alt={p.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem 1rem 0 0'}} />
                    <div className="pizza-card-topo">
                      <h3 className="pizza-nome">{p.name}</h3>
                      <span className="pizza-cat-badge">{p.cat}</span>
                    </div>
                    <div className="pizza-body">
                      <p className="pizza-ingredientes">{p.ingredients}</p>
                    </div>
                    <div className="pizza-rodape">
                      <div className="pizza-preco">
                        <span>Preço</span>
                        <span className="pizza-valor">{fmt(p.prices[tamanho])}</span>
                      </div>
                      <button className="btn-add" onClick={() => addCarrinho(p)}>
                        + Adicionar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pizza-vazio">
                <span>🍕</span>
                <p>Nenhuma pizza encontrada</p>
              </div>
            )}
          </div>
        </section>
      );

      /* ===== FILIAIS ===== */
      const Filiais = () => (
        <section className="filiais-section">
          <div className="filiais-inner">
            <div className="page-hero" style={{margin:'-5rem -1.5rem 3rem', padding:'4rem 1.5rem 3.5rem', background:'var(--preto)'}}>
              <div className="page-hero-inner">
                <h1 className="page-hero-titulo">Nossas <span>Filiais</span></h1>
                <p className="page-hero-sub">Duas unidades em Contagem para melhor atendê-lo</p>
              </div>
            </div>

            <div className="filiais-grid">
              {FILIAIS.map((f,i) => (
                <div key={f.id} className="filial-card" style={{animationDelay:`${i*0.1}s`}}>
                  <div className="filial-topo">
                    <div className="filial-icone">
                      <img src="assets/logo.png" alt="Logo Pizzalider" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                    </div>
                    <div>
                      <h3 className="filial-nome">Filial {f.nome}</h3>
                      <p className="filial-cidade">{f.cidade}</p>
                    </div>
                  </div>
                  <div className="filial-body">
                    <div className="filial-info-item">
                      <p className="filial-info-label">Endereço</p>
                      <p className="filial-info-val">{f.endereco}</p>
                    </div>
                    <div className="filial-contatos">
                      <a href={`https://wa.me/${f.whats}`} target="_blank" rel="noopener noreferrer" className="filial-link whats">
                        💬 {f.whatsLabel}
                      </a>
                      <a href={`tel:${f.telNum}`} className="filial-link tel">
                        📞 {f.tel}
                      </a>
                      <a href={f.mapa} target="_blank" rel="noopener noreferrer" className="filial-link mapa">
                        🗺️ Abrir GPS
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

      /* ===== CONTATO ===== */
      const Contato = () => (
        <section className="contato-section">
          <div className="contato-inner">
            <div className="page-hero" style={{margin:'-5rem -1.5rem 3rem', padding:'4rem 1.5rem 3.5rem', background:'var(--preto)'}}>
              <div className="page-hero-inner">
                <h1 className="page-hero-titulo">Entre em <span>Contato</span></h1>
                <p className="page-hero-sub">Estamos prontos para atendê-lo!</p>
              </div>
            </div>

            <div className="contato-grid">
              <div className="contato-card">
                <h3>💬 WhatsApp</h3>
                <div className="contato-links">
                  {FILIAIS.map(f => (
                    <a key={f.id} href={`https://wa.me/${f.whats}?text=Olá! Gostaria de fazer um pedido.`} target="_blank" rel="noopener noreferrer" className="contato-link whats">
                      <span style={{fontSize:'1.4rem'}}>🟢</span>
                      <div className="contato-link-texto">
                        <span className="contato-link-titulo">{f.nome}</span>
                        <span className="contato-link-sub">{f.whatsLabel}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contato-card">
                <h3>📞 Telefone</h3>
                <div className="contato-links">
                  {FILIAIS.map(f => (
                    <a key={f.id} href={`tel:${f.telNum}`} className="contato-link tel">
                      <span style={{fontSize:'1.4rem'}}>📞</span>
                      <div className="contato-link-texto">
                        <span className="contato-link-titulo">{f.nome}</span>
                        <span className="contato-link-sub">{f.tel}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );

      /* ===== MODAL CARRINHO ===== */
      const Modal = () => {
        if (!modalOpen || pagina !== 'cardapio') return null;
        return (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>🛒 Seu Carrinho {carrinho.length > 0 && <span style={{fontSize:'0.9rem',color:'var(--cinza-400)',fontFamily:'Nunito',fontWeight:400}}>({carrinho.length} {carrinho.length===1?'item':'itens'})</span>}</h2>
                <button className="modal-fechar" onClick={() => setModalOpen(false)}>✕</button>
              </div>
              <div className="modal-body">
                {carrinho.length > 0 ? (
                  <>
                    {carrinho.map(item => (
                      <div key={item.id} className="carrinho-item">
                        <div className="carrinho-item-info">
                          <h4>{item.name}</h4>
                          <span className="carrinho-item-tamanho">Pizza {item.tamanho}</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
                          <span className="carrinho-item-preco">{fmt(item.preco)}</span>
                          <button className="btn-remover-item" onClick={() => remItem(item.id)}>✕</button>
                        </div>
                      </div>
                    ))}
                    <div className="carrinho-total">
                      <span>Total</span>
                      <span className="carrinho-total-valor">{fmt(total())}</span>
                    </div>

                    <div style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
                      <p style={{fontSize:'0.9rem', fontWeight:'600', marginBottom:'0.8rem', color:'rgba(255,255,255,0.8)'}}>Forma de Pagamento:</p>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.8rem'}}>
                        <button onClick={() => setPagamento('pix')} style={{
                          padding:'0.8rem',
                          border: pagamento === 'pix' ? '3px solid #c41e3a' : '2px solid #444',
                          borderRadius:'0.6rem',
                          backgroundColor: '#2a2a2a',
                          color: '#fff',
                          cursor:'pointer',
                          fontWeight: pagamento === 'pix' ? '600' : '500',
                          transition:'all 0.2s ease'
                        }}>
                          💳 PIX
                        </button>
                        <button onClick={() => setPagamento('dinheiro')} style={{
                          padding:'0.8rem',
                          border: pagamento === 'dinheiro' ? '3px solid #c41e3a' : '2px solid #444',
                          borderRadius:'0.6rem',
                          backgroundColor: '#2a2a2a',
                          color: '#fff',
                          cursor:'pointer',
                          fontWeight: pagamento === 'dinheiro' ? '600' : '500',
                          transition:'all 0.2s ease'
                        }}>
                          💵 Dinheiro
                        </button>
                        <button onClick={() => setPagamento('debito')} style={{
                          padding:'0.8rem',
                          border: pagamento === 'debito' ? '3px solid #c41e3a' : '2px solid #444',
                          borderRadius:'0.6rem',
                          backgroundColor: '#2a2a2a',
                          color: '#fff',
                          cursor:'pointer',
                          fontWeight: pagamento === 'debito' ? '600' : '500',
                          transition:'all 0.2s ease'
                        }}>
                          🏧 Débito
                        </button>
                        <button onClick={() => setPagamento('credito')} style={{
                          padding:'0.8rem',
                          border: pagamento === 'credito' ? '3px solid #c41e3a' : '2px solid #444',
                          borderRadius:'0.6rem',
                          backgroundColor: '#2a2a2a',
                          color: '#fff',
                          cursor:'pointer',
                          fontWeight: pagamento === 'credito' ? '600' : '500',
                          transition:'all 0.2s ease'
                        }}>
                          💳 Crédito
                        </button>
                      </div>
                    </div>

                    <button className="btn btn-verde btn-block" style={{marginTop:'0.5rem'}} onClick={enviarWhats}>
                      📱 Enviar pedido por WhatsApp
                    </button>
                  </>
                ) : (
                  <div className="carrinho-vazio">
                    <span>🛒</span>
                    <p>Seu carrinho está vazio</p>
                    <p style={{fontSize:'0.82rem',marginTop:'0.4rem'}}>Adicione pizzas para fazer seu pedido!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      };

      /* ===== FOOTER ===== */
      const Footer = () => (
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">
                <span className="logo-emoji">🍕</span>
                <span className="footer-logo-nome">PIZZALIDER</span>
              </div>
              <p className="footer-desc">A número 1 do pedaço! Empresa familiar desde 2007 fazendo as melhores pizzas de Contagem, MG.</p>
            </div>
            <div>
              <p className="footer-titulo">Navegação</p>
              <ul className="footer-lista">
                {[['home','Início'],['cardapio','Cardápio'],['filiais','Filiais'],['contato','Contato']].map(([k,l]) => (
                  <li key={k}><button className="footer-link-btn" onClick={() => ir(k)}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-titulo">Horários</p>
              <ul className="footer-lista">
                <li>Domingo: 18h – 23h</li>
                <li>Seg – Qui: 18h – 23h30</li>
                <li>Sex – Sáb: 18h – 00h</li>
              </ul>
            </div>
            <div>
              <p className="footer-titulo">Contato</p>
              <ul className="footer-lista">
                {FILIAIS.map(f => (
                  <li key={f.id} style={{marginBottom:'0.5rem'}}>
                    <strong style={{color:'rgba(255,255,255,0.5)',display:'block',fontSize:'0.75rem'}}>{f.nome}</strong>
                    {f.tel}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2024 Pizzalider · Contagem, MG · Todos os direitos reservados.</span>
            <span className="footer-copy" style={{display:"block",marginTop:"0.4rem",opacity:.75}}>Projeto desenvolvido para demonstração · Paulo Henrique · Desenvolvedor de Software</span>
          </div>
        </footer>
      );

      /* ===== RENDER ===== */
      return (
        <>
          <Navbar />
          <main>
            {pagina === 'home'     && <Home />}
            {pagina === 'cardapio' && <Cardapio />}
            {pagina === 'filiais'  && <Filiais />}
            {pagina === 'contato'  && <Contato />}
          </main>
          <Footer />
          <Modal />
          {toast && <div className="toast">{toast}</div>}
          <a href="https://wa.me/5531993567726?text=Olá! Quero fazer um pedido." target="_blank" rel="noopener noreferrer" className="whats-float" title="WhatsApp">💬</a>
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  