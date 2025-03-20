import { useNavigate } from 'solid-app-router';

export default function LoginPage() {
  const navigate = useNavigate(); // Accede a la función de navegación

  const handleLogin = (e: SubmitEvent) => {
    e.preventDefault(); // Prevenir la acción predeterminada del formulario
    navigate("/dashboard"); // Navegar al dashboard
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <img
          src="./src/images/logo-Reconext-small.jpg"
          alt="Logo"
          class="mb-6 mx-auto"
        />

        <h2 class="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="Introduce tu usuario"
              required
              class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Introduce tu contraseña"
              required
              class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
