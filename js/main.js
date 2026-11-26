/* Keven Souza — V4 Sistemas em Camadas. Sem JS, todo conteúdo permanece visível. */
(function () {
  'use strict';

  var raiz = document.documentElement;
  var idioma = new URLSearchParams(window.location.search).get('lang') || 'pt';
  if (idioma !== 'en' && idioma !== 'es') idioma = 'pt';

  var traducoes = {
    en: {
      'Ir para o conteúdo':'Skip to content','Menu':'Menu','Evolução':'Journey','Projetos':'Projects','Método':'Method','Stack':'Stack','Experiência':'Experience','Contato':'Contact','Idioma':'Language','Português, idioma atual':'Portuguese, current language','Desenvolvimento Web em formação':'Web Development in progress','Testes':'Testing','Ver projetos':'View projects','Baixar currículo':'Download resume','Ficha profissional':'Professional profile','Local':'Location','Formação':'Education','Foco':'Focus','Idiomas':'Languages','São Paulo, SP':'São Paulo, Brazil','ADS · 4º semestre':'Systems Analysis and Development · 4th semester','Front-end · Web · Aplicações':'Front-end · Web · Applications','Português nativo · Inglês intermediário':'Native Portuguese · Intermediate English','atuação em tecnologia e sistemas':'experience in technology and systems','4º semestre':'4th semester','3 projetos próprios':'3 personal projects','em desenvolvimento':'in development','Minha evolução':'My journey','O primeiro laboratório':'The first lab','O salto técnico':'The technical leap','O problema deixou de ser gerar código':'The problem stopped being writing code','O percurso, em ordem':'The path, in order','Como eu desenvolvo':'How I build','A base que eu consulto':'The knowledge base I consult','Uso atual':'Current use','Qualidade':'Quality','Explorando nos projetos':'Exploring in projects','Experiência e formação':'Experience and education','Vamos conversar?':'Let’s talk','Site estático em HTML, CSS e JavaScript.':'Static HTML, CSS and JavaScript site.','Financeiro':'Finance','Buscar':'Search','Visão geral de recebimentos fictícios.':'Overview of illustrative receivables.','Falta receber':'Outstanding','Recebido':'Received','Combinado':'Agreed','Panorama':'Overview','Progresso':'Progress','Prioridade':'Priority','DADOS DEMONSTRATIVOS':'ILLUSTRATIVE DATA','DADOS DE EXEMPLO':'EXAMPLE DATA','Início':'Home','Reproduzir demonstração':'Replay demonstration','Pronto para reproduzir a operação demonstrativa.':'Ready to replay the illustrative operation.','Demonstração concluída.':'Demonstration complete.','Beta fechado · dados fictícios':'Closed beta · fictional data','Projeto privado em evolução · dados demonstrativos':'Private project in progress · illustrative data','JavaScript: prática de programação':'JavaScript: programming practice','em andamento, conteúdo em inglês':'in progress, content in English','Lógica de Programação e JavaScript':'Programming Logic and JavaScript','Nativo':'Native','Intermediário':'Intermediate','E-mail':'Email','Currículo':'Resume','Baixar em PDF':'Download PDF','Ver case técnico':'View technical case','Dez/2021 a Set/2026':'Dec 2021 to Sep 2026','Out/2020 a Nov/2021':'Oct 2020 to Nov 2021','Set/2019 a Set/2020':'Sep 2019 to Sep 2020','Fev/2014 a Set/2019':'Feb 2014 to Sep 2019','Customer Success Specialist':'Customer Success Specialist','Analista Pleno de Customer Experience':'Mid-level Customer Experience Analyst','Analista de Controldesk Jr.':'Junior Controldesk Analyst','Analista de Controldesk':'Controldesk Analyst','· Soluções Técnicas e Pré-vendas · Olos Tecnologia':'· Technical Solutions and Pre-sales · Olos Tecnologia','Pré-vendas técnicas, análise de requisitos e desenho de soluções':'Technical pre-sales, requirements analysis and solution design','Formação, cursos e idiomas':'Education, courses and languages','Cursos':'Courses','Vivência de seis meses em Dublin, Irlanda, e estudo contínuo de inglês técnico.':'Six months living in Dublin, Ireland, and ongoing study of technical English.','O assunto aqui é construir e manter software. Nada disso veio de metodologia: cada hábito abaixo nasceu de alguma coisa que deu errado enquanto eu construía esses projetos.':'This is about building and maintaining software. None of these habits came from a methodology: each one was born from something that went wrong while I was building these projects.','Comecei pedindo alterações no chat e conferindo o resultado na tela. Funcionou enquanto os projetos eram pequenos.':'I started by asking for changes in chat and checking the result on screen. It worked while the projects were small.','Testar rodando':'Test by running it','Escopo pequeno por vez':'Small scope at a time','Revisão de escopo estreito':'Narrow-scope review','Contexto escrito':'Written context','Travas para o que é irreversível':'Guardrails for irreversible actions','A aprovação é minha':'Approval stays with me','O que eu leio, altero e reviso no dia a dia dos projetos.':'What I read, change and review in the projects every day.','O que eu uso para verificar comportamento antes de dizer que está pronto.':'What I use to verify behaviour before calling it ready.','Em uso real, com apoio de documentação. Ainda consolidando.':'Used in real projects with documentation support. Still consolidating.'
    },
    es: {
      'Ir para o conteúdo':'Ir al contenido','Menu':'Menú','Evolução':'Trayectoria','Projetos':'Proyectos','Método':'Método','Stack':'Stack','Experiência':'Experiencia','Contato':'Contacto','Idioma':'Idioma','Português, idioma atual':'Portugués, idioma actual','Desenvolvimento Web em formação':'Desarrollo Web en formación','Testes':'Pruebas','Ver projetos':'Ver proyectos','Baixar currículo':'Descargar currículum','Ficha profissional':'Perfil profesional','Local':'Ubicación','Formação':'Formación','Foco':'Enfoque','Idiomas':'Idiomas','São Paulo, SP':'São Paulo, Brasil','ADS · 4º semestre':'Análisis y Desarrollo de Sistemas · 4.º semestre','Front-end · Web · Aplicações':'Front-end · Web · Aplicaciones','Português nativo · Inglês intermediário':'Portugués nativo · Inglés intermedio','atuação em tecnologia e sistemas':'experiencia en tecnología y sistemas','4º semestre':'4.º semestre','3 projetos próprios':'3 proyectos propios','em desenvolvimento':'en desarrollo','Minha evolução':'Mi trayectoria','O primeiro laboratório':'El primer laboratorio','O salto técnico':'El salto técnico','O problema deixou de ser gerar código':'El problema dejó de ser escribir código','O percurso, em ordem':'El recorrido, en orden','Como eu desenvolvo':'Cómo desarrollo','A base que eu consulto':'La base que consulto','Uso atual':'Uso actual','Qualidade':'Calidad','Explorando nos projetos':'Explorando en los proyectos','Experiência e formação':'Experiencia y formación','Vamos conversar?':'¿Hablamos?','Site estático em HTML, CSS e JavaScript.':'Sitio estático en HTML, CSS y JavaScript.','Financeiro':'Finanzas','Buscar':'Buscar','Visão geral de recebimentos fictícios.':'Resumen de cobros ficticios.','Falta receber':'Pendiente de recibir','Recebido':'Recibido','Combinado':'Acordado','Panorama':'Resumen','Progresso':'Progreso','Prioridade':'Prioridad','DADOS DEMONSTRATIVOS':'DATOS ILUSTRATIVOS','DADOS DE EXEMPLO':'DATOS DE EJEMPLO','Início':'Inicio','Reproduzir demonstração':'Reproducir demostración','Pronto para reproduzir a operação demonstrativa.':'Listo para reproducir la operación ilustrativa.','Demonstração concluída.':'Demostración completada.','Beta fechado · dados fictícios':'Beta cerrado · datos ficticios','Projeto privado em evolução · dados demonstrativos':'Proyecto privado en evolución · datos ilustrativos','JavaScript: prática de programação':'JavaScript: práctica de programación','em andamento, conteúdo em inglês':'en curso, contenido en inglés','Lógica de Programação e JavaScript':'Lógica de Programación y JavaScript','Nativo':'Nativo','Intermediário':'Intermedio','E-mail':'Correo','Currículo':'Currículum','Baixar em PDF':'Descargar PDF','Ver case técnico':'Ver caso técnico','Dez/2021 a Set/2026':'Dic 2021 a Sep 2026','Out/2020 a Nov/2021':'Oct 2020 a Nov 2021','Set/2019 a Set/2020':'Sep 2019 a Sep 2020','Fev/2014 a Set/2019':'Feb 2014 a Sep 2019','Customer Success Specialist':'Especialista de Customer Success','Analista Pleno de Customer Experience':'Analista de Customer Experience','Analista de Controldesk Jr.':'Analista Jr. de Controldesk','Analista de Controldesk':'Analista de Controldesk','· Soluções Técnicas e Pré-vendas · Olos Tecnologia':'· Soluciones Técnicas y Preventa · Olos Tecnologia','Pré-vendas técnicas, análise de requisitos e desenho de soluções':'Preventa técnica, análisis de requisitos y diseño de soluciones','Formação, cursos e idiomas':'Formación, cursos e idiomas','Cursos':'Cursos','Vivência de seis meses em Dublin, Irlanda, e estudo contínuo de inglês técnico.':'Seis meses viviendo en Dublín, Irlanda, y estudio continuo de inglés técnico.','O assunto aqui é construir e manter software. Nada disso veio de metodologia: cada hábito abaixo nasceu de alguma coisa que deu errado enquanto eu construía esses projetos.':'Esto trata de construir y mantener software. Ninguno de estos hábitos nació de una metodología: cada uno surgió de algo que salió mal mientras construía estos proyectos.','Comecei pedindo alterações no chat e conferindo o resultado na tela. Funcionou enquanto os projetos eram pequenos.':'Empecé pidiendo cambios en el chat y comprobando el resultado en pantalla. Funcionó mientras los proyectos eran pequeños.','Testar rodando':'Probar ejecutando','Escopo pequeno por vez':'Alcance pequeño cada vez','Revisão de escopo estreito':'Revisión de alcance reducido','Contexto escrito':'Contexto escrito','Travas para o que é irreversível':'Controles para acciones irreversibles','A aprovação é minha':'La aprobación es mía','O que eu leio, altero e reviso no dia a dia dos projetos.':'Lo que leo, cambio y reviso cada día en los proyectos.','O que eu uso para verificar comportamento antes de dizer que está pronto.':'Lo que uso para verificar el comportamiento antes de considerarlo listo.','Em uso real, com apoio de documentação. Ainda consolidando.':'En uso real, con apoyo de documentación. Todavía consolidando.'
    }
  };

  function aplicarIdioma() {
    if (idioma === 'pt') return;
    var mapa = traducoes[idioma];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var no;
    while ((no = walker.nextNode())) {
      var original = no.nodeValue;
      var normalizado = original.replace(/\s+/g, ' ').trim();
      if (!normalizado || !mapa[normalizado]) continue;
      var inicio = original.search(/\S|$/);
      var fim = original.search(/\s*$/);
      no.nodeValue = original.slice(0, inicio) + mapa[normalizado] + original.slice(fim < inicio ? original.length : fim);
    }
    raiz.lang = idioma === 'en' ? 'en' : 'es';
    document.title = idioma === 'en' ? 'Keven Souza | Web Development' : 'Keven Souza | Desarrollo Web';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', idioma === 'en' ? 'Keven Souza, web development in progress. Technology and systems experience with personal projects in JavaScript, React and TypeScript, testing and APIs.' : 'Keven Souza, desarrollo web en formación. Experiencia en tecnología y sistemas con proyectos propios en JavaScript, React y TypeScript, pruebas y APIs.');
    var locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute('content', idioma === 'en' ? 'en_US' : 'es_ES');
    var urlBase = window.location.origin + window.location.pathname;
    var idiomaUrl = urlBase + '?lang=' + idioma;
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', idiomaUrl);
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', idiomaUrl);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && meta) ogDescription.setAttribute('content', meta.getAttribute('content'));
    var navPrincipal = document.getElementById('nav-principal');
    if (navPrincipal) navPrincipal.setAttribute('aria-label', idioma === 'en' ? 'Main navigation' : 'Navegación principal');
    var seletorIdioma = document.querySelector('.language-switcher');
    if (seletorIdioma) seletorIdioma.setAttribute('aria-label', idioma === 'en' ? 'Portfolio language' : 'Idioma del portafolio');
    document.querySelectorAll('[data-language]').forEach(function (link) {
      var ativo = link.getAttribute('data-language') === idioma;
      link.classList.toggle('is-active', ativo);
      if (ativo) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });

    var blocos = {
      en: {
        '.hero-text p': [
          'A professional with more than 12 years of experience in technology and systems. I started in technical roles: platform configuration, testing, operational support, training and operations planning.',
          'In recent years, my work has included technical pre-sales, requirements discovery, solution design, APIs, testing and acceptance in SaaS environments. I am now studying Systems Analysis and Development and deepening that experience through practice: defining logic and rules, guiding implementation with AI support, testing and reviewing the result in personal projects.'
        ],
        '#evolucao .section-intro': ['I did not learn development in a straight line. I learned by solving the problems my own projects created. Each phase began when the previous one was no longer enough.'],
        '#projetos .section-intro': ['Three personal projects in active development. They drive what I study: every new feature brings a technical problem I had not faced before.'],
        '#metodo .section-intro': ['This is about building and maintaining software. None of these habits came from a methodology: each one was born from something that went wrong while I was building these projects.'],
        '#stack .section-intro': ['Separated by level of real use. I do not have the same depth in everything, and that distinction feels more honest to anyone evaluating me.'],
        '#experiencia .section-intro': ['I do not come from outside technology, but I did not come from development either. I started by configuring platforms, testing, providing technical support and analysing operations. In recent years I moved into requirements discovery, solution design and delivery acceptance.', 'Over twelve years I learned dialers, IVR, CRM and entire SaaS platforms from scratch, inside live projects, with deadlines and a client on the other side. Stepping into a stack I do not know yet and starting to deliver is the part of my career that repeats the most. That is what I bring to development, along with the reading of requirements and business rules.'],
        '.phase-jump': ['<span class="mono">The technical leap</span> Interface, state and the first calculation rules I had to define and verify.','<span class="mono">The technical leap</span> Business rules separated from the interface, tests, persistence, database and security.','<span class="mono">The technical leap</span> Persistent context, recorded decisions, guardrails and human gates.','<span class="mono">The technical leap</span> Components, typing, end-to-end tests, accessibility, CI and preparation for future integrations.'],
        '.phase-body > p:not(.phase-jump)': ['A panel to organise debts, instalments and payments. The flow was simple: an idea, a file change, then checking the screen. That was where I first encountered interface, state, local persistence and calculation rules.','A workspace for independent lawyers and small firms. Cases, deadlines, fees, instalments, receipts, reversals and transfers no longer fit inside interface functions. I separated what decides from what draws: the rule became a pure, testable Node.js module, and the database began validating and isolating data.','As the project grew, generating code stopped being the bottleneck. The cost became re-explaining context every session, revisiting decisions and trusting a green test that did not exercise the real path. I started recording decisions and learnings in a personal base consulted before work begins.','A web application for the discovery, ordering and in-person pickup journey in a motorcycle-parts operation. Not everything I had learned applied, so each lesson entered with a reason or stayed out. Here, types became part of the design: order contracts and states are described in TypeScript before any real integration exists.'],
        '.project-feature .project-lead': ['A demonstrative web application for discovering parts, placing orders and arranging in-person pickup.','A legal workspace in progress, currently a closed beta with fictional data, for organising cases, deadlines, clients, collaboration and financial routines.','The Phase 01 project, which never stopped. A demonstrative web application for organising debts, instalments and payments while following the path to payoff, today with the rules separated from the presentation and browser tests.'],
        '.method-text > p': ['I started by asking for changes in chat and checking the result on screen. It worked while the projects were small.','As they grew, the problems moved elsewhere. I had to re-explain context every session. Decisions that had already been made came back for discussion. Documentation could drift from the code without anyone noticing. And a green test did not always mean the right behaviour had been exercised.','So I started writing down what had been decided, what had gone wrong and why. Then I organised it so AI tools could consult it before starting work.','Today the cycle is: understand the problem, review what has already been decided, define the expected behaviour, guide implementation with AI support, change only what is needed, test by running it, review the result sceptically and keep the final decision with me.'],
        '.mechanisms dt': ['Small scope at a time','Test by running it','Narrow-scope review','Written context','Guardrails for irreversible actions','Approval stays with me'],
        '.mechanisms dd': ['An area that already works only comes back to the table for a reason: a change affecting it, a test pointing to a problem or a new requirement. A large diff hides errors.','Previous results are not proof. If behaviour changes, I run it again. I distrust a test that passes without exercising the real path.','I ask for a second reading of one specific piece: this diff, this screen or this access policy. A generic review misses things.','A personal base with the decisions I have made, the mistakes I have already paid for and the concepts that repeat across projects. It is what I read before returning to code.','Publishing, writing to a remote environment and deleting data only happen with my explicit authorisation for that request. Without it, the command does not run.','I created a visual-critique routine after realising that a screen can be technically correct and still look wrong. AI can reject; only I approve.'],
        '.brain-cols p': ['A personal Markdown base where I record decisions, learnings and reusable concepts from my projects. It exists for a practical reason: every session and every AI tool starts without knowing what came before, and only what is written survives.','General knowledge and reusable learning move across projects. A specific decision, architecture and current state stay where they were born. What does not apply is recorded too, with the reason. That is what stopped me from taking a legal-system design into an e-commerce project just because it had worked before.'],
        '.contact-head p.lead': ['I am looking for opportunities to grow my software career, especially in junior web and front-end development roles. I am interested in environments where I can keep building, testing and learning through practice.'],
        '.contact-sub': ['I can present my projects and explain how I turn an idea into a solution by defining logic, rules and tests, and guiding implementation with AI support.']
      },
      es: {
        '.hero-text p': ['Profesional con más de 12 años de experiencia en tecnología y sistemas. Empecé en funciones técnicas: configuración de plataformas, pruebas, soporte operativo, formación y planificación de operaciones.','En los últimos años trabajé con preventa técnica, levantamiento de requisitos, diseño de soluciones, APIs, pruebas y homologación en entornos SaaS. Ahora estudio Análisis y Desarrollo de Sistemas y profundizo esa experiencia en la práctica: defino la lógica y las reglas, conduzco la implementación con apoyo de IA, pruebo y reviso el resultado en proyectos propios.'],
        '#evolucao .section-intro': ['No aprendí desarrollo de forma lineal. Aprendí resolviendo los problemas que crearon mis propios proyectos. Cada fase comenzó cuando la anterior dejó de ser suficiente.'],
        '#projetos .section-intro': ['Tres proyectos propios en desarrollo activo. Ellos guían lo que estudio: cada funcionalidad nueva trae un problema técnico que todavía no había enfrentado.'],
        '#metodo .section-intro': ['Esto trata de construir y mantener software. Ninguno de estos hábitos nació de una metodología: cada uno surgió de algo que salió mal mientras construía estos proyectos.'],
        '#stack .section-intro': ['Separada por nivel de uso real. No tengo la misma profundidad en todo, y esa distinción me parece más honesta para quien me evalúe.'],
        '#experiencia .section-intro': ['No vengo de fuera de la tecnología, pero tampoco vengo del desarrollo. Empecé configurando plataformas, probando, dando soporte técnico y analizando operaciones. En los últimos años pasé a levantar requisitos, diseñar soluciones y homologar entregas.', 'En doce años aprendí marcadores predictivos, IVR, CRM y plataformas SaaS enteras desde cero, dentro de proyectos reales, con plazos y un cliente del otro lado. Entrar en una stack que todavía no conozco y empezar a producir es la parte de mi carrera que más se repite. Eso es lo que llevo al desarrollo, junto con la lectura de requisitos y reglas de negocio.'],
        '.phase-jump': ['<span class="mono">El salto técnico</span> Interfaz, estado y las primeras reglas de cálculo que tuve que definir y comprobar.','<span class="mono">El salto técnico</span> Reglas de negocio separadas de la interfaz, pruebas, persistencia, base de datos y seguridad.','<span class="mono">El salto técnico</span> Contexto persistente, decisiones registradas, guardrails y controles humanos.','<span class="mono">El salto técnico</span> Componentes, tipado, pruebas end-to-end, accesibilidad, CI y preparación para futuras integraciones.'],
        '.phase-body > p:not(.phase-jump)': ['Un panel para organizar deudas, cuotas y pagos. El flujo era simple: una idea, un cambio en los archivos y la comprobación en pantalla. Allí conocí por primera vez la interfaz, el estado, la persistencia local y las reglas de cálculo.','Un espacio de trabajo para abogados independientes y pequeños despachos. Casos, plazos, honorarios, cuotas, cobros, reversiones y repartos ya no cabían en las funciones de la interfaz. Separé lo que decide de lo que dibuja: la regla se convirtió en un módulo puro y comprobable en Node.js, y la base de datos empezó a validar y aislar los datos.','Cuando el proyecto creció, generar código dejó de ser el cuello de botella. El coste pasó a ser repetir el contexto en cada sesión, rediscutir decisiones y confiar en una prueba verde que no ejercitaba el camino real. Empecé a registrar decisiones y aprendizajes en una base personal que consulto antes de trabajar.','Aplicación web para el recorrido de descubrimiento, pedido y retiro presencial en una operación de repuestos de moto. No todo lo aprendido antes se aplicó, así que cada aprendizaje entró con una razón o quedó fuera. Aquí el tipado pasó a formar parte del diseño: los contratos y estados del pedido se describen en TypeScript antes de cualquier integración real.'],
        '.project-feature .project-lead': ['Aplicación web demostrativa para descubrir piezas, hacer pedidos y coordinar el retiro presencial.','Espacio jurídico en evolución, actualmente en beta cerrada con datos ficticios, para organizar casos, plazos, clientes, colaboración y rutinas financieras.','El proyecto de la Fase 01, que nunca se detuvo. Aplicación web demostrativa para organizar deudas, cuotas y pagos y acompañar el camino hasta liquidarlas, hoy con las reglas separadas de la presentación y pruebas de navegador.'],
        '.method-text > p': ['Empecé pidiendo cambios en el chat y comprobando el resultado en pantalla. Funcionó mientras los proyectos eran pequeños.','Cuando crecieron, los problemas cambiaron de lugar. Tenía que repetir el contexto en cada sesión. Las decisiones ya tomadas volvían a discutirse. La documentación podía divergir del código sin que nadie lo notara. Y una prueba verde no siempre significaba que se hubiera ejercitado el comportamiento correcto.','Entonces empecé a escribir lo que ya se había decidido, lo que había salido mal y por qué. Después lo organicé para que las herramientas de IA pudieran consultarlo antes de empezar a trabajar.','Hoy el ciclo es: entender el problema, revisar lo ya decidido, definir el comportamiento esperado, conducir la implementación con apoyo de IA, cambiar solo lo necesario, probar ejecutando, revisar el resultado con desconfianza y mantener conmigo la decisión final.'],
        '.mechanisms dt': ['Alcance pequeño cada vez','Probar ejecutando','Revisión de alcance reducido','Contexto escrito','Controles para acciones irreversibles','La aprobación es mía'],
        '.mechanisms dd': ['Un área que ya funciona solo vuelve a la mesa por un motivo: un cambio que la afecte, una prueba que señale un problema o un requisito nuevo. Un diff grande oculta errores.','El resultado anterior no es una prueba. Si cambia el comportamiento, vuelvo a ejecutarlo. Desconfío de una prueba que pasa sin ejercitar el camino real.','Pido una segunda lectura de una parte concreta: este diff, esta pantalla o esta política de acceso. Una revisión genérica no encuentra nada.','Una base personal con las decisiones que he tomado, los errores que ya he pagado y los conceptos que se repiten entre proyectos. Es lo que leo antes de volver al código.','Publicar, escribir en un entorno remoto y borrar datos solo ocurren con mi autorización explícita para esa solicitud. Sin ella, el comando no se ejecuta.','Creé una rutina de crítica visual después de entender que una pantalla puede ser técnicamente correcta y aun así verse mal. La IA puede reprobar; aprobar, solo yo.'],
        '.brain-cols p': ['Una base personal en Markdown donde registro decisiones, aprendizajes y conceptos reutilizables de mis proyectos. Existe por una razón práctica: cada sesión y cada herramienta de IA empieza sin saber lo anterior, y solo sobrevive lo que queda escrito.','El conocimiento general y los aprendizajes reutilizables circulan entre proyectos. Una decisión específica, la arquitectura y el estado actual se quedan donde nacieron. También registro lo que no aplica y el motivo. Eso me impidió llevar el diseño de un sistema jurídico a un e-commerce solo porque había funcionado antes.'],
        '.contact-head p.lead': ['Busco oportunidades para desarrollar mi carrera en software, especialmente en puestos júnior de desarrollo web y front-end. Me interesan entornos donde pueda seguir construyendo, probando y aprendiendo en la práctica.'],
        '.contact-sub': ['Puedo presentar mis proyectos y explicar cómo transformo una idea en una solución, definiendo lógica, reglas y pruebas, y conduciendo la implementación con apoyo de IA.']
      }
    }[idioma];
    Object.keys(blocos).forEach(function (seletor) {
      var elementos = document.querySelectorAll(seletor);
      var valores = blocos[seletor];
      elementos.forEach(function (elemento, indice) {
        if (valores[indice] === undefined) return;
        if (valores[indice].indexOf('<') >= 0) elemento.innerHTML = valores[indice];
        else elemento.textContent = valores[indice];
      });
    });
  }
  aplicarIdioma();

  function atualizarDownloadsCurriculo() {
    var arquivos = {
      pt: 'assets/Keven-Souza-CV.pdf',
      en: 'assets/Keven-Souza-CV-EN.pdf',
      es: 'assets/Keven-Souza-CV-ES.pdf'
    };
    var arquivo = arquivos[idioma] || arquivos.pt;
    document.querySelectorAll('[data-cv-download]').forEach(function (link) {
      link.setAttribute('href', arquivo);
      link.setAttribute('download', arquivo.split('/').pop());
    });
  }
  atualizarDownloadsCurriculo();

  /* A troca de idioma recarrega a página para partir sempre do conteúdo-base em
     português. Guardamos a seção e o deslocamento antes disso para não devolver
     quem está lendo ao topo. */
  var chavePosicaoIdioma = 'keven-portfolio-language-position-' + idioma;
  function lerPosicaoDeLeitura() {
    var secoes = Array.prototype.slice.call(document.querySelectorAll('main > section[id]'));
    var primeiraSecao = secoes[0] || null;
    if (!primeiraSecao || window.scrollY < primeiraSecao.offsetTop - 8) {
      return { secao: '', deslocamento: 0, y: window.scrollY };
    }
    var secaoAtual = primeiraSecao;
    secoes.forEach(function (secao) {
      if (secao.offsetTop <= window.scrollY + 8) secaoAtual = secao;
    });
    return {
      secao: secaoAtual ? secaoAtual.id : '',
      deslocamento: secaoAtual ? Math.max(0, window.scrollY - secaoAtual.offsetTop) : window.scrollY,
      y: window.scrollY
    };
  }
  function restaurarPosicaoDeLeitura() {
    var item;
    try { item = window.sessionStorage.getItem(chavePosicaoIdioma); } catch (erro) { return; }
    if (!item) return;
    try { item = JSON.parse(item); } catch (erro) { return; }
    var destino = item.y || 0;
    if (item.secao) {
      var secao = document.getElementById(item.secao);
      if (secao) destino = secao.offsetTop + (item.deslocamento || 0);
    }
    /* scroll-behavior:smooth é bom para a navegação da página, mas não para
       restaurar leitura após trocar o idioma. Aqui a posição precisa ser exata. */
    var comportamentoAnterior = raiz.style.scrollBehavior;
    raiz.style.scrollBehavior = 'auto';
    window.scrollTo(0, destino);
    window.requestAnimationFrame(function () { raiz.style.scrollBehavior = comportamentoAnterior; });
    try { window.sessionStorage.removeItem(chavePosicaoIdioma); } catch (erro) {}
    return item;
  }
  function animarTextoDeIdioma(posicao) {
    if (reduzido) return;
    var alvo = posicao && posicao.secao
      ? document.querySelector('#' + posicao.secao + ' h2')
      : document.querySelector('.hero-role');
    if (!alvo) return;
    var textoFinal = alvo.textContent.trim();
    if (!textoFinal) return;
    var glifos = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@$?/';
    var inicio = performance.now();
    var duracao = Math.min(720, Math.max(400, textoFinal.length * 27));
    var ultimoQuadro = 0;
    function desenhar(agora) {
      if (agora - ultimoQuadro >= 40) {
        ultimoQuadro = agora;
        var progresso = Math.min(1, (agora - inicio) / duracao);
        var resolvidos = Math.floor(progresso * textoFinal.length);
        alvo.textContent = Array.prototype.map.call(textoFinal, function (caractere, indice) {
          if (indice < resolvidos || /\s/.test(caractere)) return caractere;
          return glifos.charAt(Math.floor(Math.random() * glifos.length));
        }).join('');
      }
      if (agora - inicio < duracao) window.requestAnimationFrame(desenhar);
      else alvo.textContent = textoFinal;
    }
    window.requestAnimationFrame(desenhar);
  }
  document.querySelectorAll('[data-language]').forEach(function (link) {
    link.addEventListener('click', function (evento) {
      if (evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
      var proximoIdioma = link.getAttribute('data-language');
      if (!proximoIdioma || proximoIdioma === idioma) return;
      try {
        window.sessionStorage.setItem(
          'keven-portfolio-language-position-' + proximoIdioma,
          JSON.stringify(lerPosicaoDeLeitura())
        );
        window.sessionStorage.setItem('keven-portfolio-language-animation', proximoIdioma);
      } catch (erro) {}
    });
  });
  window.addEventListener('load', function () {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        var posicao = restaurarPosicaoDeLeitura();
        var trocaDeIdioma;
        try {
          trocaDeIdioma = window.sessionStorage.getItem('keven-portfolio-language-animation');
          window.sessionStorage.removeItem('keven-portfolio-language-animation');
        } catch (erro) {}
        if (trocaDeIdioma) animarTextoDeIdioma(posicao);
      });
    });
  }, { once: true });

  var linkTopo = document.querySelector('[data-scroll-top]');
  if (linkTopo) {
    linkTopo.addEventListener('click', function (evento) {
      if (evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
      evento.preventDefault();
      window.scrollTo({ top: 0, behavior: reduzido ? 'auto' : 'smooth' });
    });
  }

  /* tema: a troca começa no próprio botão e revela o novo ambiente a partir do clique. */
  var botaoTema = document.querySelector('[data-theme-toggle]');
  var temaAtual = raiz.dataset.theme === 'dark' ? 'dark' : 'light';
  function atualizarBotaoTema() {
    if (!botaoTema) return;
    var escuro = temaAtual === 'dark';
    botaoTema.setAttribute('aria-pressed', String(escuro));
    var rotuloClaro = idioma === 'en' ? 'Enable light mode' : idioma === 'es' ? 'Activar modo claro' : 'Ativar modo claro';
    var rotuloEscuro = idioma === 'en' ? 'Enable space theme' : idioma === 'es' ? 'Activar tema espacial' : 'Ativar tema espacial';
    botaoTema.setAttribute('aria-label', escuro ? rotuloClaro : rotuloEscuro);
  }
  function aplicarTema(tema) {
    temaAtual = tema === 'dark' ? 'dark' : 'light';
    raiz.dataset.theme = temaAtual;
    atualizarBotaoTema();
    atualizarCampoEspacial();
    try { localStorage.setItem('keven-portfolio-theme', temaAtual); } catch (erro) {}
  }
  atualizarBotaoTema();
  if (botaoTema) {
    botaoTema.addEventListener('click', function () {
      var caixa = botaoTema.getBoundingClientRect();
      var proximo = temaAtual === 'dark' ? 'light' : 'dark';
      raiz.style.setProperty('--theme-x', (caixa.left + caixa.width / 2) + 'px');
      raiz.style.setProperty('--theme-y', (caixa.top + caixa.height / 2) + 'px');
      if (!reduzido && typeof document.startViewTransition === 'function') {
        raiz.classList.add('theme-transition');
        document.startViewTransition(function () { aplicarTema(proximo); }).finished.finally(function () {
          raiz.classList.remove('theme-transition');
        });
      } else {
        aplicarTema(proximo);
      }
    });
  }

  var reduzido = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var observadorDisponivel = typeof window.IntersectionObserver === 'function';
  var ano = document.querySelector('[data-ano]');
  if (ano) ano.textContent = String(new Date().getFullYear());

  /* campo espacial global: discreto, responsivo ao ponteiro e ativo apenas no tema escuro. */
  var campoEspacial = document.querySelector('[data-space-field]');
  var frameEspacial = 0, larguraEspacial = 0, alturaEspacial = 0, ultimoEspacial = 0;
  var ponteiroEspacial = { x:.5, y:.5 };
  var estrelas = Array.from({ length: 74 }, function (_, indice) {
    return { x:(indice * 47 % 101) / 100, y:(indice * 71 % 103) / 102, r:indice % 9 === 0 ? 1.45 : .65 + (indice % 3) * .18, p:(indice % 11) / 11 };
  });
  function redimensionarCampoEspacial() {
    if (!campoEspacial) return;
    var proporcao = Math.min(window.devicePixelRatio || 1, 2);
    larguraEspacial = window.innerWidth;
    alturaEspacial = window.innerHeight;
    campoEspacial.width = Math.max(1, Math.round(larguraEspacial * proporcao));
    campoEspacial.height = Math.max(1, Math.round(alturaEspacial * proporcao));
    campoEspacial.getContext('2d').setTransform(proporcao, 0, 0, proporcao, 0, 0);
  }
  function desenharCampoEspacial(agora) {
    frameEspacial = 0;
    if (!campoEspacial || document.hidden || reduzido) return;
    if (agora - ultimoEspacial < 45) { frameEspacial = requestAnimationFrame(desenharCampoEspacial); return; }
    ultimoEspacial = agora;
    var contextoEspacial = campoEspacial.getContext('2d');
    contextoEspacial.clearRect(0, 0, larguraEspacial, alturaEspacial);
    var escuroEspacial = raiz.dataset.theme === 'dark';
    var raioLuz = Math.min(190, Math.max(140, Math.min(larguraEspacial, alturaEspacial) * .24));
    var brilho = contextoEspacial.createRadialGradient(ponteiroEspacial.x * larguraEspacial, ponteiroEspacial.y * alturaEspacial, 0, ponteiroEspacial.x * larguraEspacial, ponteiroEspacial.y * alturaEspacial, raioLuz);
    brilho.addColorStop(0, escuroEspacial ? 'rgba(66,190,233,.055)' : 'rgba(24,119,160,.15)');
    brilho.addColorStop(1, escuroEspacial ? 'rgba(7,21,33,0)' : 'rgba(238,248,252,0)');
    contextoEspacial.fillStyle = brilho; contextoEspacial.fillRect(0, 0, larguraEspacial, alturaEspacial);
    estrelas.forEach(function (estrela, indice) {
      var deslocamentoX = (ponteiroEspacial.x - .5) * (10 + estrela.r * 8);
      var deslocamentoY = (ponteiroEspacial.y - .5) * (10 + estrela.r * 8);
      var pulso = .45 + .35 * Math.sin(agora / 1500 + estrela.p * 8);
      contextoEspacial.beginPath();
      contextoEspacial.arc(estrela.x * larguraEspacial - deslocamentoX, estrela.y * alturaEspacial - deslocamentoY, estrela.r, 0, Math.PI * 2);
      contextoEspacial.fillStyle = escuroEspacial ? 'rgba(156,231,255,' + pulso.toFixed(2) + ')' : 'rgba(20,111,151,' + (pulso * .52).toFixed(2) + ')';
      contextoEspacial.fill();
      if (indice % 12 === 0) {
        contextoEspacial.strokeStyle = escuroEspacial ? 'rgba(95,178,208,.08)' : 'rgba(24,119,160,.14)';
        contextoEspacial.beginPath();
        contextoEspacial.moveTo(estrela.x * larguraEspacial - deslocamentoX, estrela.y * alturaEspacial - deslocamentoY);
        contextoEspacial.lineTo(((estrela.x + .16) % 1) * larguraEspacial - deslocamentoX, ((estrela.y + .1) % 1) * alturaEspacial - deslocamentoY);
        contextoEspacial.stroke();
      }
    });
    frameEspacial = requestAnimationFrame(desenharCampoEspacial);
  }
  function atualizarCampoEspacial() {
    if (!campoEspacial) return;
    var deveAnimar = !document.hidden && !reduzido;
    if (deveAnimar && !frameEspacial) frameEspacial = requestAnimationFrame(desenharCampoEspacial);
    if (!deveAnimar && frameEspacial) { cancelAnimationFrame(frameEspacial); frameEspacial = 0; }
  }
  if (campoEspacial) {
    redimensionarCampoEspacial();
    atualizarCampoEspacial();
    window.addEventListener('resize', redimensionarCampoEspacial);
    window.addEventListener('pointermove', function (evento) {
      ponteiroEspacial.x = evento.clientX / Math.max(1, window.innerWidth);
      ponteiroEspacial.y = evento.clientY / Math.max(1, window.innerHeight);
    }, { passive:true });
    document.addEventListener('visibilitychange', atualizarCampoEspacial);
  }

  /* navegação */
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
      toggle.setAttribute('aria-expanded', String(aberto));
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

  var cabecalho = document.querySelector('.site-header');
  var scrollPendente = false;
  function atualizarCabecalho() {
    if (cabecalho) cabecalho.classList.toggle('is-scrolled', window.scrollY > 18);
    if (cabecalho) {
      var maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      cabecalho.style.setProperty('--scroll-progress', (window.scrollY / maxScroll).toFixed(4));
    }
    scrollPendente = false;
  }
  if (cabecalho) {
    atualizarCabecalho();
    window.addEventListener('scroll', function () {
      if (scrollPendente) return;
      scrollPendente = true;
      window.requestAnimationFrame(atualizarCabecalho);
    }, { passive: true });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if (links.length && observadorDisponivel) {
    var mapaLinks = {};
    var secoes = [];
    var heroNav = document.querySelector('.hero');
    function limparLinkAtual() {
      links.forEach(function (link) { link.removeAttribute('aria-current'); });
    }
    function dentroDoHero() {
      return heroNav && window.scrollY < heroNav.offsetHeight - 66;
    }
    function atualizarExtremosNav() {
      if (dentroDoHero()) {
        limparLinkAtual();
        return;
      }
      if (window.scrollY + window.innerHeight >= raiz.scrollHeight - 2) {
        limparLinkAtual();
        if (mapaLinks.contato) mapaLinks.contato.setAttribute('aria-current', 'true');
      }
    }
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var secao = document.getElementById(id);
      if (!secao) return;
      mapaLinks[id] = link;
      secoes.push(secao);
    });
    var navObserver = new IntersectionObserver(function (entradas) {
      if (dentroDoHero()) {
        limparLinkAtual();
        return;
      }
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        limparLinkAtual();
        if (mapaLinks[entrada.target.id]) {
          mapaLinks[entrada.target.id].setAttribute('aria-current', 'true');
        }
      });
      atualizarExtremosNav();
    }, { rootMargin: '-66px 0px -66% 0px', threshold: 0 });
    secoes.forEach(function (secao) { navObserver.observe(secao); });
    window.addEventListener('scroll', atualizarExtremosNav, { passive: true });
    atualizarExtremosNav();
  }

  /* retrato com fallback */
  var retrato = document.querySelector('[data-portrait]');
  if (retrato) {
    var foto = retrato.querySelector('img');
    function mostrarFoto() { retrato.classList.add('has-photo'); }
    if (foto && foto.complete && foto.naturalWidth > 0) mostrarFoto();
    else if (foto) foto.addEventListener('load', mostrarFoto, { once: true });
  }

  /* cenas progressivas */
  if (!reduzido && observadorDisponivel && !document.hidden) {
    raiz.classList.add('systems-ready');
    var cenas = Array.prototype.slice.call(document.querySelectorAll(
      '.section-head,.phase,.phase-link,.path,.project-feature,.method-grid,.brain,.stack-grid,.role,.xp-side,.contact-links'
    ));
    cenas.forEach(function (cena) { cena.classList.add('v4-scene'); });
    var sceneObserver = new IntersectionObserver(function (entradas, observador) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.04 });
    cenas.forEach(function (cena) { sceneObserver.observe(cena); });
    function liberarFim() {
      if (window.scrollY + window.innerHeight < raiz.scrollHeight - 2) return;
      cenas.forEach(function (cena) { cena.classList.add('is-visible'); });
      window.removeEventListener('scroll', liberarFim);
    }
    window.addEventListener('scroll', liberarFim, { passive: true });
    liberarFim();
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) return;
      sceneObserver.disconnect();
      window.removeEventListener('scroll', liberarFim);
      raiz.classList.remove('systems-ready');
    }, { once: true });
  }

  /* profundidade por pointer, limitada ao palco e nunca aplicada ao texto */
  var pointerPreciso = window.matchMedia &&
    window.matchMedia('(hover:hover) and (pointer:fine)').matches && window.innerWidth > 900;
  function ativarProfundidade(palco) {
    if (reduzido || !pointerPreciso) return;
    var alvoX = 0, alvoY = 0, atualX = 0, atualY = 0, frame = 0;
    var planos = palco.querySelectorAll('.hero-plane');
    function render() {
      atualX += (alvoX - atualX) * .08;
      atualY += (alvoY - atualY) * .08;
      palco.style.setProperty('--stage-rx', (-atualY * 3).toFixed(2) + 'deg');
      palco.style.setProperty('--stage-ry', (atualX * 5).toFixed(2) + 'deg');
      planos.forEach(function (plano, indice) {
        var intensidade = (.35 + indice * .18) * 10;
        plano.style.setProperty('--plane-x', (atualX * intensidade).toFixed(2) + 'px');
        plano.style.setProperty('--plane-y', (atualY * intensidade).toFixed(2) + 'px');
      });
      if (Math.abs(alvoX - atualX) > .002 || Math.abs(alvoY - atualY) > .002) {
        frame = requestAnimationFrame(render);
      } else frame = 0;
    }
    function pedirFrame() { if (!frame) frame = requestAnimationFrame(render); }
    palco.addEventListener('pointermove', function (evento) {
      var caixa = palco.getBoundingClientRect();
      alvoX = Math.max(-1, Math.min(1, ((evento.clientX - caixa.left) / caixa.width) * 2 - 1));
      alvoY = Math.max(-1, Math.min(1, ((evento.clientY - caixa.top) / caixa.height) * 2 - 1));
      pedirFrame();
    });
    palco.addEventListener('pointerleave', function () {
      alvoX = 0; alvoY = 0; palco.style.transitionDuration = '700ms'; pedirFrame();
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-depth-stage]'), ativarProfundidade);

  /* luz de cursor no hero: reação espacial sutil, apenas com ponteiro preciso. */
  if (!reduzido && pointerPreciso) {
    var heroAlvo = document.querySelector('.hero');
    if (heroAlvo) {
      var luzCursor = document.createElement('span');
      luzCursor.className = 'hero-cursor-light';
      luzCursor.setAttribute('aria-hidden', 'true');
      heroAlvo.appendChild(luzCursor);
      heroAlvo.addEventListener('pointermove', function (evento) {
        var caixa = heroAlvo.getBoundingClientRect();
        luzCursor.style.left = (evento.clientX - caixa.left) + 'px';
        luzCursor.style.top = (evento.clientY - caixa.top) + 'px';
        heroAlvo.classList.add('has-cursor-light');
      });
      heroAlvo.addEventListener('pointerleave', function () {
        heroAlvo.classList.remove('has-cursor-light');
      });
    }
  }

  /* inclinação dos palcos de projeto: transforma hover em leitura de profundidade. */
  if (!reduzido && pointerPreciso) {
    Array.prototype.forEach.call(document.querySelectorAll('.project-stage'), function (palco) {
      var alvoX = 0, alvoY = 0, atualX = 0, atualY = 0, frame = 0;
      function renderizar() {
        frame = 0;
        atualX += (alvoX - atualX) * .1;
        atualY += (alvoY - atualY) * .1;
        palco.style.setProperty('--stage-rx', (-atualY * 2.4).toFixed(2) + 'deg');
        palco.style.setProperty('--stage-ry', (atualX * 3.2).toFixed(2) + 'deg');
        if (Math.abs(alvoX - atualX) > .002 || Math.abs(alvoY - atualY) > .002) frame = requestAnimationFrame(renderizar);
      }
      palco.addEventListener('pointermove', function (evento) {
        var caixa = palco.getBoundingClientRect();
        alvoX = Math.max(-1, Math.min(1, ((evento.clientX - caixa.left) / caixa.width) * 2 - 1));
        alvoY = Math.max(-1, Math.min(1, ((evento.clientY - caixa.top) / caixa.height) * 2 - 1));
        if (!frame) frame = requestAnimationFrame(renderizar);
      });
      palco.addEventListener('pointerleave', function () {
        alvoX = 0; alvoY = 0;
        if (!frame) frame = requestAnimationFrame(renderizar);
      });
    });
  }

  /* deslocamento local do hero; não altera o scroll da página */
  var hero = document.querySelector('.hero');
  var heroStage = document.querySelector('.hero-stage');
  var heroMain = document.querySelector('.hero-main');
  var heroVisivel = true;
  if (!reduzido && observadorDisponivel && hero && heroStage && heroMain) {
    new IntersectionObserver(function (entradas) {
      heroVisivel = entradas[0].isIntersecting;
    }, { threshold: 0 }).observe(hero);
    var heroFrame = 0;
    function atualizarHero() {
      heroFrame = 0;
      if (!heroVisivel) return;
      var caixa = hero.getBoundingClientRect();
      var progresso = Math.max(0, Math.min(1, -caixa.top / Math.max(1, caixa.height)));
      var maximoY = window.innerWidth <= 600 ? 18 : 34;
      heroStage.style.setProperty('--stage-y', (progresso * maximoY).toFixed(1) + 'px');
      heroStage.style.setProperty('--stage-z', (-progresso * 90).toFixed(1) + 'px');
      heroMain.style.setProperty('--hero-copy-y', (progresso * 18).toFixed(1) + 'px');
    }
    window.addEventListener('scroll', function () {
      if (!heroFrame) heroFrame = requestAnimationFrame(atualizarHero);
    }, { passive: true });
    atualizarHero();
  }

  /* Canvas 2D decorativo: orçamento fixo, tempo limitado e pausa real. */
  var canvas = document.querySelector('[data-hero-canvas]');
  if (!reduzido && observadorDisponivel && canvas && canvas.getContext) {
    var contexto = canvas.getContext('2d');
    var canvasAtivo = true;
    var canvasInicio = performance.now();
    var canvasUltimo = 0;
    var canvasFrame = 0;
    var mobile = window.innerWidth <= 600;
    var pontos = [];
    var totalPontos = mobile ? 12 : 28;
    var intervalo = 1000 / (mobile ? 24 : 30);
    for (var p = 0; p < totalPontos; p += 1) {
      pontos.push({ x: (p * 47 % 101) / 100, y: (p * 67 % 97) / 96, r: 1 + (p % 3) * .45 });
    }
    function redimensionarCanvas() {
      var proporcao = mobile ? 1 : Math.min(1.5, window.devicePixelRatio || 1);
      var caixa = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(caixa.width * proporcao));
      canvas.height = Math.max(1, Math.round(caixa.height * proporcao));
      contexto.setTransform(proporcao, 0, 0, proporcao, 0, 0);
    }
    function desenharCanvas(agora) {
      canvasFrame = 0;
      if (!canvasAtivo || document.hidden || agora - canvasInicio > 10000) return;
      if (agora - canvasUltimo < intervalo) { canvasFrame = requestAnimationFrame(desenharCanvas); return; }
      canvasUltimo = agora;
      var largura = canvas.clientWidth, altura = canvas.clientHeight;
      contexto.clearRect(0, 0, largura, altura);
      var luz = contexto.createRadialGradient(largura * .78, altura * .3, 0, largura * .78, altura * .3, largura * .34);
      luz.addColorStop(0, 'rgba(95,178,208,.12)'); luz.addColorStop(1, 'rgba(95,178,208,0)');
      contexto.fillStyle = luz; contexto.fillRect(0, 0, largura, altura);
      contexto.strokeStyle = 'rgba(142,212,236,.15)'; contexto.lineWidth = 1;
      for (var c = 0; c < (mobile ? 3 : 5); c += 1) {
        var deslocamento = Math.sin(agora / 1400 + c) * 8;
        contexto.beginPath(); contexto.moveTo(-20, altura * (.18 + c * .16));
        contexto.bezierCurveTo(largura * .28, altura * (.04 + c * .18) + deslocamento, largura * .62, altura * (.34 + c * .09), largura + 20, altura * (.12 + c * .16));
        contexto.stroke();
      }
      contexto.fillStyle = 'rgba(142,212,236,.48)';
      pontos.forEach(function (ponto) {
        contexto.beginPath(); contexto.arc(ponto.x * largura, ponto.y * altura, ponto.r, 0, Math.PI * 2); contexto.fill();
      });
      canvasFrame = requestAnimationFrame(desenharCanvas);
    }
    redimensionarCanvas();
    new IntersectionObserver(function (entradas) {
      canvasAtivo = entradas[0].isIntersecting;
      if (canvasAtivo && !canvasFrame && performance.now() - canvasInicio < 10000) canvasFrame = requestAnimationFrame(desenharCanvas);
      if (!canvasAtivo && canvasFrame) { cancelAnimationFrame(canvasFrame); canvasFrame = 0; }
    }, { threshold: 0 }).observe(canvas);
    window.addEventListener('resize', redimensionarCanvas);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && canvasAtivo && !canvasFrame && performance.now() - canvasInicio < 10000) canvasFrame = requestAnimationFrame(desenharCanvas);
    });
    canvasFrame = requestAnimationFrame(desenharCanvas);
  }

  /* miniaplicações: troca direta de estado, sem contagem simulada. */
  var controladoresDemo = [];
  function criarDemo(palco) {
    var tipo = palco.getAttribute('data-demo');
    var estado = palco.querySelector('[data-demo-state]');
    var live = palco.querySelector('[data-demo-live]');
    var escalaTempo = window.innerWidth <= 600 ? .8 : 1;
    var tempos = [250, 650, 1000, 2200, 2500, 3500, 4400].map(function (tempo) {
      return tempo * escalaTempo;
    });
    var timers = [], decorrido = 0, inicio = 0, ativo = false, pausado = false, emVista = false, autoplay = false, frameValores = 0;
    var inicial = tipo === 'legal' ?
      { remaining:'5.000,00', received:'5.000,00', 'received-short':'5.000', 'remaining-short':'5.000' } :
      { balance:'12.000,00', paid:'8.000,00', progress:'40' };
    var final = tipo === 'legal' ?
      { remaining:'3.500,00', received:'6.500,00', 'received-short':'6.500', 'remaining-short':'3.500' } :
      { balance:'11.000,00', paid:'9.000,00', progress:'45' };
    var operando = tipo === 'legal' ? 'Aplicando recebimento demonstrativo' : 'Registrando pagamento demonstrativo';
    var concluido = tipo === 'legal' ? 'Recebimento demonstrativo registrado' : 'Pagamento demonstrativo registrado';
    var textoCiclo = idioma === 'en' ? 'Automatic demonstration loop.' : idioma === 'es' ? 'Demostración automática en ciclo.' : 'Demonstração automática em ciclo.';
    function valores(dados) {
      Object.keys(dados).forEach(function (chave) {
        var alvo = palco.querySelector('[data-demo-value="' + chave + '"]');
        if (alvo) alvo.textContent = dados[chave];
      });
    }
    function numeroBr(valor) { return Number(String(valor).replace(/\./g, '').replace(',', '.')); }
    function formatarValor(chave, valor) {
      if (chave === 'progress') return String(Math.round(valor));
      if (chave.indexOf('short') >= 0) return String(Math.round(valor)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return valor.toLocaleString('pt-BR', { minimumFractionDigits:2, maximumFractionDigits:2 });
    }
    function animarValores() {
      if (frameValores) cancelAnimationFrame(frameValores);
      var inicioAnimacao = performance.now();
      var duracao = 1120;
      function desenhar(agora) {
        var progresso = Math.min(1, (agora - inicioAnimacao) / duracao);
        var suave = 1 - Math.pow(1 - progresso, 3);
        var quadro = {};
        Object.keys(final).forEach(function (chave) {
          var de = numeroBr(inicial[chave]);
          var para = numeroBr(final[chave]);
          quadro[chave] = formatarValor(chave, de + (para - de) * suave);
        });
        valores(quadro);
        if (progresso < 1) frameValores = requestAnimationFrame(desenhar);
        else { frameValores = 0; valores(final); }
      }
      frameValores = requestAnimationFrame(desenhar);
    }
    function limparTimers() { timers.forEach(clearTimeout); timers = []; if (frameValores) { cancelAnimationFrame(frameValores); frameValores = 0; } }
    function iniciarVisual() {
      if (!reduzido) {
        palco.classList.add('is-live');
      }
    }
    function pararVisual() {
      palco.classList.remove('is-live');
    }
    function resetar() {
      limparTimers(); decorrido = 0; ativo = false; pausado = false; valores(inicial);
      palco.classList.remove('is-focus','is-operating','is-final','is-toast');
      estado.textContent = textoCiclo;
      live.textContent = '';
    }
    function passo(indice) {
      if (indice === 0) palco.classList.add('is-focus');
      if (indice === 1) { palco.classList.add('is-operating'); estado.textContent = operando; }
      if (indice === 2) animarValores();
      if (indice === 3) palco.classList.add('is-final');
      if (indice === 4) { palco.classList.add('is-toast'); live.textContent = concluido; }
      if (indice === 5) palco.classList.remove('is-focus','is-operating');
      if (indice === 6) {
        palco.classList.remove('is-toast');
        estado.textContent = textoCiclo;
        ativo = false;
        if (emVista) timers.push(setTimeout(executar, 1400));
      }
    }
    function agendar() {
      limparTimers(); inicio = performance.now();
      tempos.forEach(function (tempo, indice) {
        if (tempo <= decorrido) return;
        timers.push(setTimeout(function () { passo(indice); }, tempo - decorrido));
      });
    }
    function executar() {
      resetar();
      if (reduzido) {
        valores(final); palco.classList.add('is-final','is-toast');
        estado.textContent = 'Demonstração concluída.'; live.textContent = concluido; return;
      }
      ativo = true; pausado = false; agendar();
    }
    function pausar() {
      if (!ativo || pausado) return;
      decorrido += performance.now() - inicio; limparTimers();
      pausado = true;
    }
    function retomar() {
      if (!ativo || !pausado) return;
      pausado = false;
      agendar();
    }
    resetar();
    var controlador = { pausar:pausar, retomar:retomar };
    controladoresDemo.push(controlador);
    if (!reduzido && observadorDisponivel) {
      new IntersectionObserver(function (entradas) {
        var entrada = entradas[0];
        emVista = entrada.intersectionRatio >= .05;
        if (emVista) iniciarVisual(); else pararVisual();
        if (entrada.intersectionRatio >= .35 && !autoplay) { autoplay = true; executar(); }
        else if (!emVista) pausar();
        else retomar();
      }, { threshold:[0,.05,.35] }).observe(palco);
    }
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-demo]'), criarDemo);

  /* carrossel automático do projeto de motopeças: troca de telas sem controle extra. */
  function criarCarousel(carrossel) {
    var imagens = Array.prototype.slice.call(carrossel.querySelectorAll('.project-carousel-image'));
    if (imagens.length < 2) return;
    var indice = 0;
    var emVista = false;
    var timer = 0;
    function trocar() {
      if (!emVista || reduzido) return;
      imagens[indice].classList.remove('is-active');
      indice = (indice + 1) % imagens.length;
      imagens[indice].classList.add('is-active');
      timer = window.setTimeout(trocar, 4200);
    }
    function iniciar() {
      if (timer || reduzido) return;
      carrossel.classList.add('is-playing');
      timer = window.setTimeout(trocar, 4200);
    }
    function parar() {
      if (timer) { window.clearTimeout(timer); timer = 0; }
      carrossel.classList.remove('is-playing');
    }
    if (!reduzido && observadorDisponivel) {
      new IntersectionObserver(function (entradas) {
        emVista = entradas[0].isIntersecting;
        if (emVista) iniciar(); else parar();
      }, { threshold:.25 }).observe(carrossel);
    }
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), criarCarousel);
  document.addEventListener('visibilitychange', function () {
    controladoresDemo.forEach(function (controle) {
      if (document.hidden) controle.pausar(); else controle.retomar();
    });
  });
})();
