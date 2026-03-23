
const stats = [
  { label: 'Tarefas totais', value: 24 },
  { label: 'Concluídas', value: 12 },
  { label: 'Em andamento', value: 8 },
  { label: 'Atrasadas', value: 4 },
]

const tasks = [
  {
    id: '#001',
    tarefa: 'Criar dashboard inicial',
    responsavel: 'Pedro',
    prazo: '25/03/2026',
    prioridade: 'Alta',
    status: 'Em andamento',
  },
  {
    id: '#002',
    tarefa: 'Implementar autenticação',
    responsavel: 'Maria',
    prazo: '27/03/2026',
    prioridade: 'Média',
    status: 'Revisão',
  },
  {
    id: '#003',
    tarefa: 'Criar tela de projetos',
    responsavel: 'Lucas',
    prazo: '29/03/2026',
    prioridade: 'Baixa',
    status: 'Concluído',
  },
  {
    id: '#004',
    tarefa: 'Ajustar responsividade',
    responsavel: 'Ana',
    prazo: '30/03/2026',
    prioridade: 'Alta',
    status: 'Pendente',
  },
]


const statusStyle = {
  'Concluído': 'bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/20',
  'Em andamento': 'bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/20',
  'Revisão': 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/20',
  'Pendente': 'bg-slate-500/15 text-slate-300 ring-1 ring-slate-500/20',
}

const priorityStyle = {
  'Alta': 'bg-blue-600/25 text-blue-200 ring-1 ring-blue-500/30',
  'Média': 'bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/20',
  'Baixa': 'bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20',
}

export default function Tables() {
  return (
    <main className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-blue-500/10 bg-slate-900 p-5 shadow-sm"
            >
              <p className="text-sm text-slate-400">{s.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{s.value}</p>
            </div>
          ))}
        </div>

      
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-6 py-4">
          <p className="text-sm text-blue-300">
            Foram encontrados <span className="font-semibold text-white">3</span> itens com prazo próximo.
          </p>
        </div>

       
        <div className="overflow-hidden rounded-2xl border border-blue-500/10 bg-slate-900 shadow-lg">
          <div className="border-b border-blue-500/10 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Tarefas Recentes</h2>
            <p className="mt-1 text-sm text-slate-400">
              Linha do tempo resumida das atividades do projeto
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-blue-500/10">
              <thead className="bg-slate-950/60">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">Tarefa</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">Responsável</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">Prazo</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">Prioridade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-500/10">
                {tasks.map((t) => (
                  <tr key={t.id} className="hover:bg-blue-500/5 transition">
                    <td className="px-6 py-4 text-sm text-slate-300">{t.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-white">{t.tarefa}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{t.responsavel}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{t.prazo}</td>

                    <td className="px-6 py-4 text-sm">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyle[t.prioridade]}`}>
                        {t.prioridade}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[t.status]}`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  )
}