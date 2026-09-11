/* ============================================================
   KEVEN SOUZA — PORTFÓLIO
   JavaScript mínimo. O conteúdo é HTML: sem JS, tudo continua
   legível, navegável e visível. Aqui só existem quatro coisas:
   1. ano do rodapé
   2. menu do celular
   3. seção ativa na navegação
   4. foto: mostrar o retrato só quando o arquivo existir
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. ANO DO RODAPÉ ---------- */
  var ano = document.querySelector('[data-ano]');
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }

  /* ---------- 2. MENU DO CELULAR ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-principal');

  function fecharMenu() {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    nav.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) fecharMenu();
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') fecharMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) fecharMenu();
    });
  }

  /* ---------- 3. SEÇÃO ATIVA NA NAVEGAÇÃO ---------- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]')
  );

  if (links.length && 'IntersectionObserver' in window) {
    var porId = {};
    var secoes = [];
    var ordem = [];

    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var secao = document.getElementById(id);
      if (secao) {
        porId[id] = link;
        secoes.push(secao);
        ordem.push(id);
      }
    });

    var visiveis = [];

    var observadorSecoes = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          var id = entrada.target.id;
          var indice = visiveis.indexOf(id);
          if (entrada.isIntersecting && indice === -1) visiveis.push(id);
          if (!entrada.isIntersecting && indice > -1) visiveis.splice(indice, 1);
        });

        links.forEach(function (link) {
          link.removeAttribute('aria-current');
        });

        /* entre as seções visíveis, a ativa é a mais abaixo na página */
        var atual = null;
        var maiorIndice = -1;
        visiveis.forEach(function (id) {
          var indice = ordem.indexOf(id);
          if (indice > maiorIndice) {
            maiorIndice = indice;
            atual = id;
          }
        });

        if (atual && porId[atual]) {
          porId[atual].setAttribute('aria-current', 'true');
        }
      },
      { rootMargin: '-66px 0px -70% 0px', threshold: 0 }
    );

    secoes.forEach(function (secao) {
      observadorSecoes.observe(secao);
    });
  }

  /* ---------- 4. REVELAÇÃO DISCRETA NO SCROLL ---------- */
  var movimentoOk =
    window.matchMedia &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (movimentoOk && !document.hidden && 'IntersectionObserver' in window) {
    var alvos = Array.prototype.slice.call(
      document.querySelectorAll(
        '.phase, .phase-link, .project-feature, .path, .mechanisms > div, .brain, .stack-col, .role, .xp-block, .contact-links li'
      )
    );

    alvos.forEach(function (alvo) {
      alvo.classList.add('reveal');
    });

    var observadorReveal = new IntersectionObserver(
      function (entradas, observador) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    alvos.forEach(function (alvo) {
      observadorReveal.observe(alvo);
    });

    /* Aba em segundo plano congela transição: um conteúdo a meio caminho
       ficaria invisível. Se a aba for escondida, o efeito é descartado e o
       conteúdo volta ao estado normal.                                     */
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) return;
      alvos.forEach(function (alvo) {
        alvo.classList.remove('reveal');
      });
    });
  }

  /* ---------- 5. FOTO DO HERO ----------
     O monograma "KS" é o estado padrão. O retrato só aparece se o
     arquivo assets/images/keven-souza.jpg existir e carregar — assim
     nunca aparece ícone de imagem quebrada.                        */
  var retrato = document.querySelector('[data-portrait]');
  if (retrato) {
    var imagem = retrato.querySelector('img');

    function mostrarFoto() {
      retrato.classList.add('has-photo');
    }

    if (imagem) {
      if (imagem.complete && imagem.naturalWidth > 0) {
        mostrarFoto();
      } else {
        imagem.addEventListener('load', function () {
          if (imagem.naturalWidth > 0) mostrarFoto();
        });
      }
    }
  }
})();
