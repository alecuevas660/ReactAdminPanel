'use client'

export default function Home() {
  return (
    <div className="p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Panel de Confianza de Influencers</h1>
        <p className="text-gray-400">
          Clasificaciones en tiempo real de influencers basadas en precisión científica, credibilidad y transparencia.
          Actualizado diariamente usando análisis impulsado por IA.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Influencers Activos</span>
              <div className="h-4 w-4 bg-emerald-500 rounded-full" />
            </div>
            <div className="text-2xl font-bold">1,234</div>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Afirmaciones Verificadas</span>
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
            </div>
            <div className="text-2xl font-bold">25,431</div>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Puntuación Promedio</span>
              <div className="h-4 w-4 bg-yellow-500 rounded-full" />
            </div>
            <div className="text-2xl font-bold">85.7%</div>
          </div>
        </div>

        <div className="rounded-lg border bg-gray-900">
          <div className="p-4">
            <div className="flex items-center gap-4">
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700">
                Nutrición
              </button>
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700">
                Fitness
              </button>
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700">
                Medicina
              </button>
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700">
                Salud Mental
              </button>
            </div>
          </div>

          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-2 text-left text-gray-400">Rank</th>
                <th className="px-4 py-2 text-left text-gray-400">Influencer</th>
                <th className="px-4 py-2 text-left text-gray-400">Categoría</th>
                <th className="px-4 py-2 text-left text-gray-400">Índice de Confianza</th>
                <th className="px-4 py-2 text-left text-gray-400">Tendencia</th>
                <th className="px-4 py-2 text-left text-gray-400">Seguidores</th>
                <th className="px-4 py-2 text-left text-gray-400">Afirmaciones Verificadas</th>
              </tr>
            </thead>
            <tbody>
              {influencers.map((influencer) => (
                <tr key={influencer.id} className="border-b border-gray-800">
                  <td className="px-4 py-2 text-white">#{influencer.rank}</td>
                  <td className="px-4 py-2 text-white">{influencer.name}</td>
                  <td className="px-4 py-2">
                    <span className="text-white bg-gray-800 px-2 py-1 rounded-md">
                      {influencer.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-emerald-500 font-bold">{influencer.trustScore}%</td>
                  <td className="px-4 py-2">
                    {influencer.trend === 'up' ? (
                      <span className="text-emerald-500">&#9650;</span> // Flecha hacia arriba
                    ) : (
                      <span className="text-red-500">&#9660;</span> // Flecha hacia abajo
                    )}
                  </td>
                  <td className="px-4 py-2 text-white">{influencer.followers}</td>
                  <td className="px-4 py-2 text-white">{influencer.verifiedClaims}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const influencers = [
  {
    id: 1,
    rank: 1,
    name: "Dr. Pedro Alonso",
    category: "Medicina",
    trustScore: 96,
    trend: "up",
    followers: "1.2M",
    verifiedClaims: 320,
  },
  {
    id: 2,
    rank: 2,
    name: "Dra. Rhonda Fernández",
    category: "Nutrición",
    trustScore: 94,
    trend: "up",
    followers: "856K",
    verifiedClaims: 156,
  },
  {
    id: 3,
    rank: 3,
    name: "Dr. Carlos Palmer",
    category: "Salud Mental",
    trustScore: 92,
    trend: "up",
    followers: "165K",
    verifiedClaims: 75,
  },
  {
    id: 4,
    rank: 4,
    name: "Andrea Hernández",
    category: "Neurociencia",
    trustScore: 89,
    trend: "up",
    followers: "4.2M",
    verifiedClaims: 127,
  },
  {
    id: 5,
    rank: 5,
    name: "Dr. Gonzalo D'Agostino",
    category: "Nutrición",
    trustScore: 88,
    trend: "down",
    followers: "265K",
    verifiedClaims: 112,
  },
]
