# SSChat

Una app de mensajería en tiempo real que hice con React Native y Expo. Básicamente es como un WhatsApp pero mucho más simple jaja.

## Qué es esto?

Es una app de chat donde puedes:
- Crear una cuenta y loguearte
- Ver tus conversaciones
- Chatear con otras personas en tiempo real
- Los mensajes llegan al instante gracias a WebSockets

## Demo

<p align="center">
  <img src="src/assets/sschat.png" alt="Screenshot de SSChat" width="300"/>
</p>

<p align="center">
  <video src="src/assets/sschat.mp4" width="300" controls></video>
</p>

> Si el video no carga, puedes verlo directamente [aquí](src/assets/sschat.mp4)

## Tech Stack

Lo que usé para hacer esto:

- **React Native** - Para que funcione en Android y iOS
- **Expo** - Hace todo más fácil para buildear y probar
- **React Navigation** - Para navegar entre pantallas
- **WebSockets** - Para que los mensajes lleguen en tiempo real
- **AsyncStorage** - Para guardar datos localmente

## Cómo correrlo

1. Clona el repo
```bash
git clone https://github.com/alexwebdev05/SSChat.git
```

2. Instala las dependencias
```bash
npm install
```

3. Corre la app
```bash
npx expo start
```

4. Escanea el QR con Expo Go o usa un emulador

## Importante!

Esta app necesita el backend para funcionar. El repo de la API está acá:

👉 **https://github.com/alexdeveloper05/SSChat-Api.git**

Sin la API corriendo no vas a poder hacer login ni nada básicamente.

## Estructura del proyecto

```
src/
├── screens/        # Las pantallas (login, register, main, chat)
├── api/            # Todo lo de conexión con el servidor
│   └── websocket/  # Lógica de WebSocket
├── ui/             # Componentes de la interfaz
├── utils/          # Funciones útiles
└── styles/         # Colores y eso
```

## Features

- [x] Login y registro
- [x] Lista de chats
- [x] Crear nuevos chats
- [x] Mensajería en tiempo real
- [x] Tema oscuro
- [ ] Enviar imágenes (en progreso)
- [ ] Notificaciones push (pendiente)

## Cosas que aprendí haciendo esto

- Cómo funcionan los WebSockets
- Manejo de estado en React Native
- Navegación entre pantallas
- Almacenamiento local con AsyncStorage
- A no desesperarme cuando algo no funciona lol

## Contacto

Si tienes alguna duda o sugerencia, puedes encontrarme en GitHub como [@alexdeveloper05](https://github.com/alexdeveloper05)

---

Hecho con ☕ y muchas horas de debugging
