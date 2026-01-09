# Bun React Tailwind Template

A full-stack web application built with Bun, React, Elysia, Tailwind CSS, and Prisma ORM. This project provides a complete backend API with JWT authentication and a modern frontend interface.

## 📋 Project Overview

This is a modern, type-safe full-stack application combining:
- **Backend**: Elysia (fast web framework for Bun) with API routes and authentication
- **Frontend**: React 19 with Tailwind CSS for responsive UI
- **Database**: MySQL/MariaDB with Prisma ORM for data management
- **Security**: JWT authentication with bcryptjs for password hashing
- **Documentation**: Swagger/OpenAPI integration for API documentation

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Bun (v1.3.5+) |
| **Backend Framework** | Elysia v1.4.21 |
| **Frontend Framework** | React v19 |
| **Styling** | Tailwind CSS v4.1.11 |
| **Database ORM** | Prisma v7.2.0 |
| **Database** | MySQL/MariaDB |
| **Authentication** | JWT (jsonwebtoken) |
| **Encryption** | bcryptjs |
| **Validation** | Zod v4.3.5 |
| **API Documentation** | Swagger/OpenAPI |

## 📁 Project Structure

```
Bun_Project/
├── src/
│   ├── server.ts              # Main Elysia server setup
│   ├── App.tsx                # Main React component
│   ├── index.ts               # Bun HTTP server entry point
│   ├── index.html             # HTML template
│   ├── index.css              # Global styles
│   ├── APITester.tsx          # API testing component
│   ├── frontend.tsx           # Frontend entry point
│   ├── config/
│   │   ├── env.ts             # Environment configuration
│   │   └── prisma.ts          # Prisma client setup
│   ├── controllers/
│   │   ├── authController.ts  # Authentication logic
│   │   └── usersController.ts # User management logic
│   ├── dto/
│   │   ├── auth.dto.ts        # Authentication DTOs
│   │   └── user.dto.ts        # User DTOs
│   ├── middlewares/
│   │   ├── auth.ts            # JWT authentication middleware
│   │   ├── errorHandler.ts    # Error handling middleware
│   │   └── logger.ts          # Logging middleware
│   ├── routes/
│   │   ├── index.ts           # Route exports
│   │   ├── routes.ts          # Main routes configuration
│   │   ├── auth.ts            # Authentication routes
│   │   └── users.ts           # User routes
│   └── services/
│       ├── authService.ts     # Authentication business logic
│       └── usersService.ts    # User business logic
├── prisma/
│   ├── schema.prisma          # Database schema definition
│   ├── migrations/            # Database migrations
│   └── create_db.sql          # Database initialization script
├── build.ts                   # Build configuration
├── bunfig.toml               # Bun configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
├── prisma.config.ts          # Prisma configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) v1.3.5 or higher
- MySQL/MariaDB database

### Installation

1. **Clone/Setup the project:**
   ```bash
   cd Bun_Project
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"
   JWT_SECRET="your-secret-key-here"
   NODE_ENV="development"
   BUN_PUBLIC_API_URL="http://localhost:3000"
   ```

4. **Setup database:**
   ```bash
   bunx prisma migrate dev
   ```

5. **Start development server:**
   ```bash
   bun dev
   ```

   The application will be available at:
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:3000/api`
   - Swagger Docs: `http://localhost:3000/swagger`

## 📦 Available Scripts

### Development
```bash
bun dev
```
Starts the development server with hot module reloading (HMR) enabled for both frontend and backend.

### Production Build
```bash
bun build
```
Builds the project for production using the build configuration in `build.ts`.

### Production Start
```bash
bun start
```
Runs the application in production mode (NODE_ENV=production).

### Database
```bash
bunx prisma migrate dev
```
Creates a new database migration after schema changes.

```bash
bunx prisma studio
```
Opens the Prisma Studio interface for database management.

## 🔐 Authentication

The project implements JWT-based authentication:

### Features
- User registration with password hashing (bcryptjs)
- JWT token generation and validation
- Protected API routes with Bearer token authentication
- Token refresh mechanism

### API Endpoints

**Authentication Routes** (`/api/auth`):
- `POST /register` - Register new user
- `POST /login` - Login and get JWT token
- `POST /refresh` - Refresh access token
- `POST /logout` - Logout user

**User Routes** (`/api/users`):
- `GET /` - Get all users (protected)
- `GET /:id` - Get user by ID (protected)
- `PUT /:id` - Update user (protected)
- `DELETE /:id` - Delete user (protected)

## 📊 Database Schema

The project uses Prisma ORM with the following User model:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 Frontend Features

- **React 19**: Latest React features with hooks support
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Hot Module Reloading**: Instant updates during development
- **API Tester Component**: Built-in component for testing API endpoints
- **Type Safety**: Full TypeScript support throughout the project

## 🛡️ Security Features

- JWT authentication with secure token generation
- Password hashing using bcryptjs (bcrypt alternative)
- Error handling middleware to prevent information leakage
- Input validation using Zod schema validation
- CORS support for secure cross-origin requests

## 📝 API Documentation

Swagger/OpenAPI documentation is automatically generated and available at:
```
http://localhost:3000/swagger
```

The API follows REST conventions with proper HTTP status codes and error messages.

## 🔧 Configuration Files

- **bunfig.toml**: Bun runtime configuration and Tailwind plugin setup
- **tsconfig.json**: TypeScript compiler options
- **prisma.config.ts**: Prisma client configuration
- **prisma/schema.prisma**: Database schema definition

## 🌍 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | MySQL connection string | `mysql://user:pass@localhost:3306/db` |
| `JWT_SECRET` | Secret key for JWT signing | `your-secret-key` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `BUN_PUBLIC_API_URL` | API URL for frontend | `http://localhost:3000` |

## 💡 Development Tips

1. **Hot Reload**: Changes to both frontend and backend are automatically reloaded in development
2. **Type Checking**: The project is fully typed with TypeScript for better IDE support
3. **Validation**: Zod is used for runtime type validation
4. **Database Migrations**: Use Prisma to manage database schema changes
5. **Logging**: Built-in logging middleware for request/response tracking

## 🐛 Troubleshooting

### Port Already in Use
Change the port in `src/server.ts` or kill the process using port 3000.

### Database Connection Issues
- Verify DATABASE_URL in .env
- Ensure MySQL/MariaDB is running
- Check database user permissions

### Build Failures
```bash
bun clean      # Clear cache
bun install    # Reinstall dependencies
bun build      # Rebuild
```

## 📚 Resources

- [Bun Documentation](https://bun.sh/docs)
- [Elysia Documentation](https://elysiajs.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

**Created with Bun v1.3.5** - A fast all-in-one JavaScript runtime
