# Dance Learning Platform (SaaS de clases de baile)
Aplicación móvil tipo SaaS que permite a instructores de baile monetizar sus clases mediante contenido grabado y feedback personalizado, mientras que los alumnos pueden aprender a su ritmo y mejorar con retroalimentación directa.

2. ##Descripción corta
Actualmente, muchos instructores de baile dependen únicamente de clases presenciales, limitando sus ingresos. 
Por otro lado, los alumnos no siempre pueden asistir a estas clases o pierden la oportunidad por falta de cupo.

3. ##Problema que resuelve

Esta plataforma busca solucionar estos problemas ofreciendo acceso a clases grabadas y feedback personalizado.

4. ##Solución

La aplicación permite:

- A instructores:
  - Subir clases grabadas
  - Monetizar su contenido
  - Ofrecer feedback personalizado

- A alumnos:
  - Comprar clases online
  - Aprender a su ritmo
  - Recibir retroalimentación personalizada

5. ##Funcionalidades principales

### Instructor
- Registro e inicio de sesión
- Creación de clases
- Subida de videos
- Gestión de feedback

### Alumno
- Registro e inicio de sesión
- Exploración de clases
- Compra de clases
- Solicitud de feedback

6. ##Arquitectura del sistema
- Frontend: Flutter
- Backend: Node.js + Express
- Base de datos: MongoDB
- Almacenamiento: Cloudinary
- Pagos: MercadoPago

7. ##Estructura del proyecto

## 📁 Estructura del proyecto

src/
│
├── config/         # Configuración general (DB, variables, etc.)
├── controllers/    # Lógica de negocio
├── middlewares/    # Middlewares personalizados
├── models/         # Modelos de MongoDB
├── routes/         # Rutas de la API
├── services/       # Servicios reutilizables
└── utils/          # Funciones auxiliares

8. ## Instalación

git clone https://github.com/tuusuario/dance-app-backend.git
cd backend
npm install

Ejecutar servidor 

node server.js

9. ##Estado del proyecto

Proyecto en desarrollo (MVP)

- [x] Estructura inicial del backend
- [x] Configuración de Express
- [x] Conexión a MongoDB Atlas
- [x] Modelo User
- [ ] Sistema de autenticación
- [ ] Gestión de clases
- [ ] Sistema de pagos

10. ##Futuras mejoras
    
- Integración de pagos internacionales
- Sistema de ratings
- Clases en vivo
- Análisis de movimiento con IA

11. ##Autor
Desarrollado por: [Tu nombre]
Estudiante de Ingeniería de Software
