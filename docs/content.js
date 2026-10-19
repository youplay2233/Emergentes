const PRACTICES = [
  {
    "id": "escenas",
    "number": "01",
    "title": "Conexión de escenas",
    "category": "NAVEGACIÓN",
    "summary": "Un menú enlaza Inicio, Actividad1 y Actividad2 mediante botones. Cada botón llama un método público que carga la escena correspondiente.",
    "shortSummary": "Tres escenas conectadas mediante botones y SceneManager.",
    "image": "assets/escenas.webp",
    "alt": "Recreación de Unity con menú de inicio, botones de navegación y escenas del proyecto.",
    "caption": "Recreación visual de Unity. La interfaz espacial es una adaptación propuesta para XR.",
    "tags": [
      "SceneManager",
      "LoadScene",
      "Button",
      "On Click()"
    ],
    "steps": [
      {
        "title": "Preparar las escenas",
        "text": "Guardar Inicio, Actividad1 y Actividad2. Añadirlas a la lista de escenas de compilación."
      },
      {
        "title": "Añadir el navegador",
        "text": "Crear un objeto vacío Navegador en cada escena y asignarle NavegacionEscenas."
      },
      {
        "title": "Conectar los botones",
        "text": "Vincular cada On Click() con IrAInicio(), IrAActividad1() o IrAActividad2(), según su destino."
      }
    ],
    "result": "Cada botón debería abrir la escena indicada. Los nombres del script deben coincidir exactamente con los archivos de escena.",
    "connection": "JARVIS podría usar este esquema para separar Inicio, Taller y Pruebas. La conservación del modelo entre escenas requeriría una implementación adicional.",
    "sourceTitle": "Conexión de escenas",
    "sourceSlides": "2–4"
  },
  {
    "id": "objetos",
    "number": "02",
    "title": "Objetos y scripts",
    "category": "SCRIPTING",
    "summary": "Un cañón crea esferas desde un prefab, les aplica fuerza y las elimina después de tres segundos. El disparo ocurre con clic izquierdo.",
    "shortSummary": "Prefabs, fuerza y autodestrucción en un cañón de esferas.",
    "image": "assets/objetos.webp",
    "alt": "Recreación de Unity con cañón de prueba, pequeñas esferas y panel Inspector.",
    "caption": "Recreación visual de Unity. El cañón de la presentación dispara con clic, aunque su título diga «Autónomo».",
    "tags": [
      "Prefab",
      "Instantiate()",
      "Rigidbody",
      "AddForce()",
      "Destroy()"
    ],
    "steps": [
      {
        "title": "Crear la esfera",
        "text": "Usar escala 0.2, material, Rigidbody y SphereCollider. Guardarla como prefab con Bala.cs y tiempoDeVida de 3 segundos."
      },
      {
        "title": "Montar el cañón",
        "text": "Rotar un cilindro 90° en X. Añadir un hijo PuntoDisparo fuera de la boca y comprobar que su eje forward apunte hacia la salida."
      },
      {
        "title": "Conectar y disparar",
        "text": "Asignar prefab y punto de salida en ControlCañon. Probar fuerza 1000 en Inspector y pulsar clic izquierdo en Play Mode."
      }
    ],
    "result": "Cada clic debería crear una esfera y aplicarle fuerza hacia delante. La esfera debería desaparecer tras tres segundos.",
    "connection": "JARVIS podría reutilizar este emisor para lanzar objetos de prueba contra una pieza. Se copiaría un prefab existente, sin generar geometría mediante IA.",
    "sourceTitle": "Objetos y Script",
    "sourceSlides": "11–15"
  },
  {
    "id": "interfaz",
    "number": "03",
    "title": "Interfaz gráfica",
    "category": "UI",
    "summary": "Un Canvas añade un botón de disparo y un contador inicial de diez balas. Cada pulsación descuenta una hasta bloquear nuevos disparos.",
    "shortSummary": "Un botón controla el cañón y actualiza diez municiones.",
    "image": "assets/interfaz.webp",
    "alt": "Recreación de Unity con cañón, contador de munición y botón de disparo en un panel espacial.",
    "caption": "Recreación de Unity. El panel World Space adapta la UI de pantalla del material a XR. La configuración exacta se describe abajo.",
    "tags": [
      "Canvas",
      "TextMeshProUGUI",
      "Button",
      "On Click()",
      "Disparar()"
    ],
    "steps": [
      {
        "title": "Preparar el Canvas",
        "text": "Conservar EventSystem. Configurar Canvas Scaler en Scale With Screen Size y referencia de 1920 × 1080."
      },
      {
        "title": "Añadir texto y botón",
        "text": "Crear TextoMunicion arriba a la izquierda con «Balas: 10», blanco y tamaño 60. Colocar BotonDisparar abajo a la derecha con «¡FUEGO!»."
      },
      {
        "title": "Conectar la acción",
        "text": "Asignar el texto al script. Vincular On Click() a ControlCañon.Disparar(), ahora público y sin el Update de clic."
      }
    ],
    "result": "El contador debería disminuir con cada disparo permitido. Al llegar a cero, el método debería impedir nuevas esferas y registrar «¡Sin munición!».",
    "connection": "JARVIS podría convertirlo en un panel «Lanzar prueba» con intentos disponibles. La interacción con mandos XR necesitaría configurar su sistema de entrada.",
    "sourceTitle": "Interfaz de Usuario (UI)",
    "sourceSlides": "3–10"
  },
  {
    "id": "rigidbody",
    "number": "04",
    "title": "Rigidbody y gravedad",
    "category": "FÍSICA I",
    "summary": "Tres cubos permiten explorar gravedad, masa y modo cinemático. La comparación de masas mantiene iguales las condiciones iniciales para interpretar la caída.",
    "shortSummary": "Comparación de caída, masas y propiedades de Rigidbody.",
    "image": "assets/rigidbody.webp",
    "alt": "Recreación de Unity con tres cubos de masas 1, 10 y 100 sobre un plano y parámetros Rigidbody.",
    "caption": "Recreación visual de Unity. La comparación de masa usa igual altura; la prueba de alturas distintas es un ensayo separado.",
    "tags": [
      "Rigidbody",
      "Collider",
      "Use Gravity",
      "Is Kinematic",
      "Constraints"
    ],
    "steps": [
      {
        "title": "Montar la comparación",
        "text": "Crear un plano con Collider y tres cubos iguales con Rigidbody. Colocarlos a la misma altura con masas 1, 10 y 100."
      },
      {
        "title": "Variar propiedades",
        "text": "En ensayos separados, modificar Drag, Use Gravity e Is Kinematic. Probar también los tres objetos a distintas alturas, como pide la práctica."
      },
      {
        "title": "Guardar y documentar",
        "text": "Guardar Fisica_Sesion1. Preparar una captura del Inspector y una explicación breve de cada cambio."
      }
    ],
    "result": "Con igual altura y demás condiciones, la masa no debería cambiar la aceleración gravitatoria. Un objeto cinemático no debería responder a gravedad ni fuerzas del motor físico.",
    "connection": "JARVIS podría alternar piezas fijas y piezas que caigan sobre una mesa de prueba. Este comportamiento básico no equivale a un análisis estructural.",
    "sourceTitle": "Físicas S1: Rigidbody y gravedad",
    "sourceSlides": "3–7"
  },
  {
    "id": "colliders",
    "number": "05",
    "title": "Colliders y colisiones",
    "category": "FÍSICA II",
    "summary": "Una pista permite explorar contactos físicos. Otra actividad usa una nave que cruza una zona trigger para mostrar u ocultar planetas y asteroides.",
    "shortSummary": "Pista física y activación de objetos por contacto.",
    "image": "assets/colliders.webp",
    "alt": "Recreación de Unity con pista de esfera y una nave atravesando una zona espacial que revela planetas.",
    "caption": "Recreación esquemática de Unity. El Inspector generado es orientativo: el script del material requiere BoxCollider con Is Trigger.",
    "tags": [
      "BoxCollider",
      "SphereCollider",
      "OnTriggerEnter()",
      "SetActive()",
      "MovePosition()"
    ],
    "steps": [
      {
        "title": "Construir la pista",
        "text": "Añadir piso, rampa, dos paredes, tres obstáculos y una esfera con Rigidbody y SphereCollider. Comparar Discrete y Continuous con mayor velocidad."
      },
      {
        "title": "Preparar el contacto",
        "text": "Usar BoxCollider y BotonPorContacto en la zona. Asignar un grupo de planetas como objetoObjetivo y desactivarlo inicialmente para mostrarlo al entrar."
      },
      {
        "title": "Mover el activador",
        "text": "Añadir ActivadorBoton, collider y Rigidbody a la nave. MoverPulsador conecta cuatro botones y desplaza 0.05 mediante MovePosition."
      }
    ],
    "result": "La esfera debería chocar con la pista y perder soporte al desactivar el Collider del piso. Al entrar el activador, el trigger debería alternar la visibilidad del grupo existente.",
    "connection": "JARVIS podría revelar piezas auxiliares al introducir una pieza en una zona de inspección. El grupo se prepararía previamente, sin desensamble automático de STL.",
    "sourceTitle": "Físicas S2: Colliders y colisiones",
    "sourceSlides": "3–9"
  },
  {
    "id": "latencia",
    "number": "06",
    "title": "Latencia y protocolos",
    "category": "TEORÍA XR",
    "summary": "El tema analiza el tiempo entre una entrada física y la respuesta del sistema. Distingue sensado, transmisión, cómputo y actuación, además de la variación llamada jitter.",
    "shortSummary": "Etapas de respuesta, jitter y comunicaciones para sistemas XR.",
    "image": "assets/latencia.webp",
    "alt": "Simulación conceptual de Unity con una pieza sobre mesa, control Quest y estado de latencia por medir.",
    "caption": "Simulación conceptual. La presentación no incluye un laboratorio de Unity ni mediciones propias de latencia.",
    "tags": [
      "Latencia",
      "Jitter",
      "Edge",
      "OpenXR",
      "WebRTC"
    ],
    "steps": [
      {
        "title": "Separar los tiempos",
        "text": "Identificar el retraso de sensado, red, cómputo y actuación. Distinguir la latencia total de su variación entre respuestas."
      },
      {
        "title": "Relacionar tecnologías",
        "text": "Revisar procesamiento local y las funciones de UDP, WebRTC y MQTT. OpenXR aporta una interfaz para aplicaciones y dispositivos XR."
      },
      {
        "title": "Plantear una medición",
        "text": "Definir qué eventos marcarían el inicio y el final de cada etapa. Mostrar «Sin medir» hasta disponer de pruebas reales."
      }
    ],
    "result": "El aprendizaje esperado es reconocer dónde se acumula el retraso y cómo afecta una interacción. Los valores de una recreación no demostrarían el rendimiento de Quest ni de la red.",
    "connection": "JARVIS podría mantener la interacción visual inmediata en el visor y estudiar un enlace local al servidor. La elección de comunicación debería apoyarse en mediciones reales.",
    "sourceTitle": "Latencia y protocolos en CPS",
    "sourceSlides": "2–18"
  }
];
