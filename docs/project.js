const JARVIS_PROJECT_HTML = String.raw`
<div class="page">
  <header class="page-heading">
    <div class="project-intro">
      <div class="eyebrow">PROYECTO INTEGRADOR · REALIDAD MIXTA</div>
      <h1>JARVIS: un taller de ingeniería en realidad mixta.</h1>
      <p>Una propuesta para inspeccionar piezas 3D en Meta Quest 3 y preparar su manipulación con asistencia de IA. Este primer avance aplica los fundamentos de las presentaciones: objetos, scripts, interfaz, escenas y física. La investigación define cómo podrían conectarse después el visor y una computadora Ubuntu.</p>
    </div>
    <span class="page-badge">PROPUESTA · ETAPA 01</span>
  </header>

  <figure class="practice-figure">
    <div class="figure-bar"><span class="figure-dot"></span><span class="figure-dot"></span><span class="figure-dot"></span><span>JARVIS / MR Workshop · Visualización propuesta</span></div>
    <button class="figure-button" type="button" data-zoom="assets/jarvis.webp" data-caption="Imagen generada: propuesta visual del taller JARVIS dentro de una interfaz tipo Unity. No es una captura de Unity ni una prueba realizada en Meta Quest 3." aria-label="Ampliar la propuesta visual de JARVIS">
      <img src="assets/jarvis.webp" alt="Recreación de una interfaz tipo Unity con una pieza mecánica y paneles virtuales dentro de un taller de realidad mixta" width="1672" height="941" loading="eager">
      <span class="zoom-label">Ampliar imagen ↗</span>
    </button>
    <figcaption><span class="caption-tag">IMAGEN GENERADA</span><span>Recreación del montaje de realidad mixta propuesto. No corresponde a una captura de Unity, una compilación funcional ni una prueba realizada con el visor.</span></figcaption>
  </figure>

  <nav class="project-nav" aria-label="Secciones del proyecto">
    <a href="#jarvis/alcance">01 · Alcance</a><a href="#jarvis/aplicacion">02 · Aplicación de prácticas</a><a href="#jarvis/arquitectura">03 · Arquitectura</a><a href="#jarvis/investigacion">04 · Investigación</a><a href="#jarvis/validacion">05 · Validación</a><a href="#jarvis/fuentes">06 · Fuentes</a>
  </nav>

  <section class="project-section" id="jarvis-alcance">
    <span class="small-label">01 / UN PRIMER CORTE CONCRETO</span>
    <h2>Del concepto al banco de trabajo.</h2>
    <p class="section-lead">La meta inicial es organizar un taller con una pieza de referencia y controles sencillos. Mostrar componentes, restablecer una posición y probar fuerzas permite construir una base antes de incorporar voz o edición geométrica. Esta entrega documenta esas adaptaciones y las representa con imágenes generadas.</p>
    <div class="scope-grid">
      <article class="scope-card accent"><h3>Documentado en esta etapa</h3><ul><li>Distribución de escenas, objetos y controles.</li><li>Adaptación de las seis presentaciones al taller.</li><li>Diseño del emisor, contador y pruebas físicas.</li><li>Investigación de modelos, passthrough y comunicación.</li></ul></article>
      <article class="scope-card"><h3>Etapas de implementación posteriores</h3><ul><li>Construir y verificar las escenas dentro de Unity.</li><li>Compilar y probar passthrough e interacción en Quest 3.</li><li>Cargar archivos desde Ubuntu y preparar ensamblajes.</li><li>Integrar voz, IA y herramientas de edición de geometría.</li></ul></article>
    </div>
    <p class="evidence-note"><strong>Estado del avance:</strong> propuesta técnica y recreaciones visuales. No se reportan pruebas de Unity, mediciones de red ni funciones de CAD implementadas.</p>
  </section>

  <section class="project-section" id="jarvis-aplicacion">
    <span class="small-label">02 / EL CURSO APLICADO AL PROYECTO</span>
    <h2>Una función para cada práctica.</h2>
    <p class="section-lead">Cada adaptación conserva el nivel de la presentación original. El resultado esperado y su configuración quedan definidos para poder construirlos y verificarlos después.</p>
    <div class="application-list">
      <article class="application"><div class="application-top"><span class="application-num">01</span><h3>Latencia y protocolos → ruta del comando</h3></div><p>Separar captura de entrada, transmisión, procesamiento y respuesta visible. Se propone registrar tiempos cuando exista una conexión real visor–Ubuntu. HTTP serviría para consultas puntuales; WebSocket, para comandos y estados bidireccionales. La elección debe probarse: ningún protocolo garantiza una latencia fija.</p><span class="source-ref">ESTADO · DISEÑO DE MEDICIÓN</span> <a href="#jarvis/fuentes" aria-label="Consultar fuentes 7 y 8">[7, 8]</a></article>

      <article class="application"><div class="application-top"><span class="application-num">02</span><h3>Objetos y scripts → emisor de calibración</h3></div><p>Reutilizar el cañón como emisor de esferas de prueba. Preparar un Prefab de escala 0.2 con Rigidbody y Sphere Collider; situar <code>PuntoDisparo</code> fuera del emisor. Un script instancia la esfera, aplica fuerza hacia delante y la elimina con <code>Destroy(objeto, 3f)</code>. La fuerza será ajustable en el Inspector; debe respetarse el modo usado, porque Force e Impulse tienen efectos y unidades diferentes.</p><span class="source-ref">ESTADO · ADAPTACIÓN PROPUESTA</span> <a href="#jarvis/fuentes" aria-label="Consultar fuente 4">[4]</a></article>

      <article class="application"><div class="application-top"><span class="application-num">03</span><h3>Interfaz gráfica → panel de pruebas</h3></div><p>Crear Canvas, EventSystem, texto de TextMeshPro y botón enlazado a <code>Disparar()</code> mediante On Click. El contador comienza en 10; un lanzamiento válido crea una esfera y resta una unidad. Al llegar a 0 se bloquean nuevos disparos. Un control de reinicio propuesto restauraría el contador y retiraría esferas pendientes. La entrada mediante mandos XR se integrará por separado.</p><span class="source-ref">ESTADO · DISEÑO DEL PANEL</span></article>

      <article class="application"><div class="application-top"><span class="application-num">04</span><h3>Conexión de escenas → recorrido del taller</h3></div><p>Organizar <code>Inicio</code>, <code>Taller</code> y <code>PruebasFisicas</code>. Cada escena tendría un Navegador y botones de ida y regreso conectados a métodos de C#. Registrar los nombres exactos en Build Settings o Build Profiles, según la versión. Para escenas más pesadas, considerar <code>LoadSceneAsync</code> y evitar pausas durante la carga.</p><span class="source-ref">ESTADO · FLUJO PROPUESTO</span> <a href="#jarvis/fuentes" aria-label="Consultar fuente 3">[3]</a></article>

      <article class="application"><div class="application-top"><span class="application-num">05</span><h3>Rigidbody y gravedad → banco de caída</h3></div><p>Colocar tres cubos iguales a la misma altura con masas 1, 10 y 100, manteniendo iguales los demás ajustes. La masa por sí sola no hace que un cubo caiga más rápido bajo la misma gravedad. Comparar después resistencia e Is Kinematic cambiando una propiedad a la vez. La pieza de referencia se mantendría cinemática para que las fuerzas del ensayo no la desplacen.</p><span class="source-ref">ESTADO · EXPERIMENTO PLANIFICADO</span></article>

      <article class="application"><div class="application-top"><span class="application-num">06</span><h3>Colliders y contactos → cubierta visible</h3></div><p>Recrear la rampa, paredes y obstáculos con colliders sencillos. Para el contacto, un pulsador con Rigidbody entra en un Box Collider marcado Is Trigger y alterna la visibilidad de una cubierta existente. Las flechas UI moverían el pulsador con <code>MovePosition</code> en FixedUpdate. Registrar entrada y salida evita repetir la acción mientras sigue dentro. Mostrar una cubierta preparada no equivale a desarmar un STL.</p><span class="source-ref">ESTADO · INTERACCIÓN PROPUESTA</span> <a href="#jarvis/fuentes" aria-label="Consultar fuente 5">[5]</a></article>
    </div>
  </section>

  <section class="project-section" id="jarvis-arquitectura">
    <span class="small-label">03 / ARQUITECTURA FUTURA</span>
    <h2>El visor presenta; la computadora procesa.</h2>
    <p class="section-lead">Se propone mantener renderizado e interacción básica en Quest y delegar archivos e IA a Ubuntu. Así, la respuesta de un servicio remoto no tendría que detener el movimiento de la escena. Esta distribución deberá validarse en una fase posterior.</p>
    <div class="workflow">
      <article><small>01 · CLIENTE PROPUESTO</small><h3>Meta Quest 3</h3><p>Escena local, posición del visor, visualización de piezas y controles. La aplicación se compilaría para el dispositivo.</p></article>
      <article><small>02 · ENLACE PROPUESTO</small><h3>Red local</h3><p>Solicitudes de archivos y mensajes de estado. Identificar cada comando, confirmar su recepción y medir la respuesta real.</p></article>
      <article><small>03 · SERVICIO PROPUESTO</small><h3>Computadora Ubuntu</h3><p>Catálogo de archivos, preparación de modelos y futura interpretación de instrucciones mediante IA. No se plantea como streaming PCVR.</p></article>
    </div>
    <h3>Jerarquía técnica inicial</h3>
    <div class="table-scroll"><table><thead><tr><th>ESCENA</th><th>OBJETOS PROPUESTOS</th><th>RESPONSABILIDAD</th></tr></thead><tbody>
      <tr><td>Inicio</td><td>CanvasInicio · EventSystem · Navegador</td><td>Abrir Taller o PruebasFisicas.</td></tr>
      <tr><td>Taller</td><td>MesaVirtual · ConjuntoReferencia · Cubierta · PanelPruebas · ZonaContacto · Pulsador</td><td>Inspección visual y controles básicos. Rig XR en una integración posterior.</td></tr>
      <tr><td>PruebasFisicas</td><td>Piso · Rampa · Obstaculos · CubosMasa · Emisor · PuntoDisparo</td><td>Comparar caída, lanzamiento y contactos con objetos de prueba.</td></tr>
    </tbody></table></div>
  </section>

  <section class="project-section" id="jarvis-investigacion">
    <span class="small-label">04 / DECISIONES RESPALDADAS</span>
    <h2>Qué requiere la visión de JARVIS.</h2>
    <div class="research-grid">
      <article class="research-card"><h3>Un STL es una superficie</h3><p>STL describe geometría de malla; no aporta por sí solo el historial paramétrico ni nombres de tornillos o tapas. Unity enumera FBX, DAE, DXF y OBJ entre sus formatos estándar. Se propone convertir inicialmente el STL a FBX u OBJ y revisar escala y orientación. La carga durante la ejecución necesitará un importador específico.</p><a href="#jarvis/fuentes">Unity y Blender · [1, 2]</a></article>
      <article class="research-card"><h3>Ensamblaje preparado por piezas</h3><p>Para una vista explotada se necesitan objetos separados, identificados y con posiciones guardadas. Una malla monolítica puede requerir segmentación previa. La primera adaptación solo alternaría la visibilidad de componentes preparados; modificar huecos, espesores o formas requiere herramientas adicionales de malla o CAD.</p><a href="#jarvis/fuentes">Inferencia de diseño a partir del formato · [1, 2]</a></article>
      <article class="research-card"><h3>Passthrough exige una prueba real</h3><p>El tutorial de Meta configura el rig, habilita passthrough, incorpora OVRPassthroughLayer y prepara el fondo transparente. Esto permite componer contenido virtual sobre el entorno real. Hay que elegir versiones compatibles y probar una compilación en Quest; la imagen generada de esta página no valida esa integración.</p><a href="#jarvis/fuentes">Meta Horizon Developers · [6]</a></article>
      <article class="research-card"><h3>La IA entraría sobre acciones definidas</h3><p>Primero deben existir métodos verificables: seleccionar, ocultar, restaurar y lanzar una prueba. Más adelante, una orden como “oculta la tapa” podría convertirse en una acción limitada sobre un componente identificado. Es una propuesta propia: voz, interpretación de IA y edición de geometría todavía no están implementadas.</p><span class="source-ref">HOJA DE RUTA · ETAPA POSTERIOR</span></article>
    </div>
  </section>

  <section class="project-section" id="jarvis-validacion">
    <span class="small-label">05 / CRITERIOS PARA LA SIGUIENTE ENTREGA</span>
    <h2>Cómo se comprobará el primer prototipo.</h2>
    <p class="section-lead">Estos son criterios de aceptación pendientes de ejecutar. Las evidencias deberán obtenerse del proyecto y del visor cuando exista la implementación.</p>
    <ol class="validation-list">
      <li><span><strong>Navegación.</strong> Abrir las tres escenas y regresar al inicio; capturar los nombres registrados y los eventos de los botones.</span></li>
      <li><span><strong>Emisor y contador.</strong> Comprobar diez lanzamientos, bloqueo al llegar a cero y desaparición de cada esfera a los tres segundos.</span></li>
      <li><span><strong>Caída controlada.</strong> Comparar masas 1, 10 y 100 con igual altura y demás ajustes; documentar el efecto de Is Kinematic.</span></li>
      <li><span><strong>Contacto.</strong> Verificar un cambio de visibilidad al entrar; salir y volver a entrar debe permitir el siguiente cambio.</span></li>
      <li><span><strong>Realidad mixta.</strong> Capturar desde Quest el entorno y los objetos virtuales. Esta prueba corresponde a la integración posterior.</span></li>
      <li><span><strong>Comunicación.</strong> En una fase posterior, registrar ida y vuelta, cómputo, variación y fallos; publicar solo valores medidos.</span></li>
    </ol>
  </section>

  <section class="project-section" id="jarvis-fuentes">
    <span class="small-label">06 / DOCUMENTACIÓN PRIMARIA</span>
    <h2>Fuentes de la investigación.</h2>
    <p class="section-lead">Documentación consultada el 19 de octubre de 2026. Las adaptaciones al taller son propuestas de diseño; las presentaciones proporcionadas fijan el alcance académico.</p>
    <ol class="sources-list">
      <li><span>[1]</span><div><a href="https://docs.unity3d.com/6000.0/Documentation/Manual/3D-formats.html" target="_blank" rel="noopener noreferrer">Unity · Model file formats reference</a><p>Formatos admitidos y preparación de recursos 3D.</p></div><span class="source-external">↗</span></li>
      <li><span>[2]</span><div><a href="https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/input/import/stl.html" target="_blank" rel="noopener noreferrer">Blender · Import STL Node</a><p>STL como geometría superficial de malla.</p></div><span class="source-external">↗</span></li>
      <li><span>[3]</span><div><a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/SceneManagement.SceneManager.LoadScene.html" target="_blank" rel="noopener noreferrer">Unity · SceneManager.LoadScene</a><p>Carga por nombre y alternativa asíncrona.</p></div><span class="source-external">↗</span></li>
      <li><span>[4]</span><div><a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html" target="_blank" rel="noopener noreferrer">Unity · Rigidbody.AddForce</a><p>Fuerzas, impulsos y requisitos del Rigidbody.</p></div><span class="source-external">↗</span></li>
      <li><span>[5]</span><div><a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Collider.OnTriggerEnter.html" target="_blank" rel="noopener noreferrer">Unity · Collider.OnTriggerEnter</a><p>Eventos de entrada en zonas de contacto.</p></div><span class="source-external">↗</span></li>
      <li><span>[6]</span><div><a href="https://developers.meta.com/vr/documentation/unity/unity-passthrough-tutorial/" target="_blank" rel="noopener noreferrer">Meta · Passthrough basic tutorial</a><p>Configuración de realidad mixta y prueba en dispositivo.</p></div><span class="source-external">↗</span></li>
      <li><span>[7]</span><div><a href="https://www.rfc-editor.org/rfc/rfc9110.html" target="_blank" rel="noopener noreferrer">IETF · RFC 9110: HTTP Semantics</a><p>Modelo de solicitudes y respuestas.</p></div><span class="source-external">↗</span></li>
      <li><span>[8]</span><div><a href="https://www.rfc-editor.org/info/rfc6455/" target="_blank" rel="noopener noreferrer">IETF · RFC 6455: The WebSocket Protocol</a><p>Intercambio bidireccional de mensajes sobre TCP.</p></div><span class="source-external">↗</span></li>
    </ol>
  </section>
</div>`;
