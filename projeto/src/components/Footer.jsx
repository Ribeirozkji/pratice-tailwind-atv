import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const sections = [
    {
      title: 'Produto',
      links: [
        'Gestão de Projetos',
        'Timeline Interativa',
        'Modo Foco',
        'Gamificação',
        'Dashboard de Produtividade'
      ],
    },
    {
      title: 'Suporte',
      links: [
        'Abrir Chamado',
        'Documentação',
        'Guias de Uso',
        'FAQ'
      ],
    },
    {
      title: 'Empresa',
      links: [
        'Sobre o ProjectFlow',
        'Blog',
        'Carreiras',
        'Contato'
      ],
    },
    {
      title: 'Legal',
      links: [
        'Termos de Uso',
        'Política de Privacidade',
        'Licença'
      ],
    },
  ];

  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        <div className="lg:col-span-1">
          <div className="flex items-center mb-6">
            <svg className="h-8 w-auto text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <p className="text-sm leading-6 mb-6 max-w-xs">
            Organize projetos, acompanhe tarefas e evolua sua produtividade com o ProjectFlow.
          </p>

          <div className="flex space-x-6">
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaXTwitter size={20} /></a>
            <a href="#"><FaGithub size={20} /></a>
            <a href="#"><FaYoutube size={20} /></a>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm">
          © 2026 ProjectFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;