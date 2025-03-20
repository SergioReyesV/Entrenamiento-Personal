import { Link } from 'solid-app-router';

export default function Dashboard() {
  return (
    <div class="min-h-screen bg-gray-100">
      <div class="flex">
        <div class="w-64 bg-blue-500 text-white p-6">
          <h2 class="text-2xl font-semibold mb-6">Panel de control</h2>
          <ul>
            <li class="mb-4">
              <Link href="/products" class="text-white hover:text-gray-200">
                Inicio
              </Link>
            </li>
            <li class="mb-4">
              <Link href="/users" class="text-white hover:text-gray-200">
                Usuarios
              </Link>
            </li>
            <li class="mb-4">
              <Link href="/settings" class="text-white hover:text-gray-200">
                Configuraciones
              </Link>
            </li>
            <li class="mb-4">
              <Link href="/logout" class="text-white hover:text-gray-200">
                Salir
              </Link>
            </li>
          </ul>
        </div>

        <div class="flex-1 p-8">
          <h1 class="text-3xl font-semibold mb-6">Bienvenido al Dashboard</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-2">Estadísticas generales</h3>
              <p class="text-gray-700">Visitas, ingresos, usuarios activos...</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-2">Informes recientes</h3>
              <p class="text-gray-700">Ver informes de actividades recientes</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-2">Usuarios activos</h3>
              <p class="text-gray-700">Ver usuarios actualmente en línea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
