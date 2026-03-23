export default function LoginForm() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-blue-500/10 bg-slate-900 p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Entrar</h1>
          <p className="mt-2 text-sm text-slate-400">
            Acesse sua conta para continuar no ProjectFlow
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-lg border border-blue-500/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-blue-500/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input
                type="checkbox"
                className="rounded border-blue-500/20 bg-slate-950 text-blue-600 focus:ring-blue-500/20"
              />
              Lembrar de mim
            </label>

            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Não tem uma conta?{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">
            Registrar-se
          </a>
        </p>
      </div>
    </div>
  )
}