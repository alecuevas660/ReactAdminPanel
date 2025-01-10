import React, { useState } from 'react';

function ResearchTask() {
  const [timeFrame, setTimeFrame] = useState('last-month');
  const [journals, setJournals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [clientCount, setClientCount] = useState(50);
  const [includeRevenue, setIncludeRevenue] = useState(false);
  const [verifyJournals, setVerifyJournals] = useState(false);
  const [notes, setNotes] = useState('');

  const availableJournals = [
    'PubMed Central',
    'Science',
    'The Lancet',
    'JAMA Network',
    'Nature',
    'Cell',
    'New England Journal of Medicine'
  ];

  const toggleJournal = (journal) => {
    if (journals.includes(journal)) {
      setJournals(journals.filter(j => j !== journal));
    } else {
      setJournals([...journals, journal]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 p-6">
      {/* Header */}
      <nav className="flex items-center mb-8">
        <button className="text-teal-400 hover:text-teal-300 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Dashboard
        </button>
        <h1 className="text-xl font-semibold ml-4">Tareas de Investigación</h1>
      </nav>

      <div className="space-y-6">
        {/* Configuración de Investigación */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configuración de Investigación
          </h2>

          {/* Búsqueda de Influencer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Influencer Específico</h3>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:border-teal-400"
                  placeholder="Buscar influencer por nombre"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Descubrir Nuevos</h3>
              <p className="text-sm text-gray-400">Encuentra y analiza nuevos influencers</p>
            </div>
          </div>

          {/* Período de Tiempo */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Período de Tiempo</h3>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'last-week', label: 'Última Semana' },
                { id: 'last-month', label: 'Último Mes' },
                { id: 'last-year', label: 'Último Año' },
                { id: 'all-time', label: 'Todo' }
              ].map(period => (
                <button
                  key={period.id}
                  className={`p-2 rounded text-sm ${
                    timeFrame === period.id
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                  onClick={() => setTimeFrame(period.id)}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cantidad de Clientes */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Clientes a Analizar</h3>
            <input
              type="number"
              className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:border-teal-400"
              value={clientCount}
              onChange={(e) => setClientCount(e.target.value)}
            />
            <p className="text-xs text-gray-400 mt-1">Recomendado: 50-100 clientes para un análisis completo</p>
          </div>

          {/* Revistas Científicas */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Revistas Científicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableJournals.map(journal => (
                <button
                  key={journal}
                  className={`flex items-center justify-between p-3 rounded ${
                    journals.includes(journal)
                      ? 'bg-teal-500/20 border-teal-500'
                      : 'bg-slate-700 border-transparent'
                  } border hover:border-teal-500 transition-colors`}
                  onClick={() => toggleJournal(journal)}
                >
                  <span>{journal}</span>
                  {journals.includes(journal) && (
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Opciones Adicionales */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Incluir Análisis de Ingresos</h3>
                <p className="text-sm text-gray-400">Analizar métricas de monetización y estimación de ganancias</p>
              </div>
              <button
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  includeRevenue ? 'bg-teal-500' : 'bg-slate-700'
                }`}
                onClick={() => setIncludeRevenue(!includeRevenue)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    includeRevenue ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Verificar con Revistas Científicas</h3>
                <p className="text-sm text-gray-400">Verificación cruzada de citas y validación científica</p>
              </div>
              <button
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  verifyJournals ? 'bg-teal-500' : 'bg-slate-700'
                }`}
                onClick={() => setVerifyJournals(!verifyJournals)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    verifyJournals ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Notas */}
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Notas para Asistentes de Investigación</h3>
            <textarea
              className="w-full h-32 bg-slate-800 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:border-teal-400"
              placeholder="Agregar instrucciones específicas o áreas de enfoque..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Botón de Inicio */}
          <div className="mt-6 flex justify-end">
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Iniciar Investigación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchTask;

