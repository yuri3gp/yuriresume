import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Grid, Typography, Link, Box, Icon, Menu, MenuItem, Switch, FormControlLabel, Paper, Button } from "@mui/material"
import './App.css'

const data = {
  "pt": {
    "menus": {
      "experiencia": "Experiência",
      "formacao": "Formação",
      "competencias": "Competências",
      "idiomas": "idiomas",
      "interesses": "Interesses",
      "ingles": "English",
      "português": "Portuguese",
      "darkMode": "Theme"
    },
    "nome": "Yuri Teixeira",
    "descricao": "Sou Yuri Teixeira, Analista e Desenvolvedor de Sistemas com mais de 10 anos de experiência no setor de tecnologia. Tive a oportunidade de trabalhar com grandes empresas, liderando equipes bilíngues e multidisciplinares em projetos de alto impacto. Minha experiência abrange desde o desenvolvimento web e mobile até soluções em cloud computing e gestão de dados. Estou em busca de novos desafios que me permitam aplicar meu conhecimento para transformar negócios, sempre com foco em inovação, eficiência e resultados.",
    "contato": {
      "endereco": "Sabará, Minas Gerais",
      "cidade": "Brasil",
      "telefone": "+55 31 99730-0623",
      "email": "yuri3gp@gmail.com",
      "link": "https://github.com/yuri3gp"
    },
    "experiencia": [
      {
        "empresa": "Datasmart - Serviços de Consultadoria Informática Lda.",
        "local": "Lisboa",
        "cargo": "Desenvolvedor Full Stack",
        "data": "Novembro de 2024 – Até o momento",
        "descricao": "Atuo no desenvolvimento de soluções inovadoras em uma empresa referência em consultoria de TI. Minha experiência envolve a implementação de arquiteturas modernas, utilizando tecnologias de ponta para resolver problemas complexos e garantir que a empresa esteja sempre à frente das tendências do setor."
      },
      {
        "empresa": "Mundomídia LTDA",
        "local": "Belo Horizonte",
        "cargo": "Desenvolvedor Full Stack",
        "data": "Abril de 2023 – Novembro de 2024",
        "descricao": "Fui responsável por otimizar sistemas complexos e implementar novas funcionalidades para um dos maiores players no setor de oficinas e imobiliárias, sempre buscando a melhoria contínua e o aumento de performance das soluções implementadas. Desenvolvi microsserviços que aumentaram a agilidade dos processos internos, integrando com APIs de terceiros e criando novas formas de automação."
      },
      {
        "empresa": "Sillion Serviços de Tecnologia LTDA",
        "local": "Belo Horizonte",
        "cargo": "Desenvolvedor Full Stack",
        "data": "Outubro de 2020 - Dezembro de 2022",
        "descricao": "Desenvolvimento e manutenção de sistemas de rastreamento de veículo e de todos os dados e tecnologias envolvidas. Trabalhei com Web, Mobile e a criação de microsserviços, focando na escalabilidade das soluções e garantindo alta disponibilidade dos sistemas para a empresa."
      },
      {
        "empresa": "Escola Técnica de Informática",
        "local": "Belo Horizonte",
        "cargo": "Professor de Informática",
        "data": "Novembro de 2014 - Dezembro de 2019",
        "descricao": "Ministração de aulas práticas e teóricas em desenvolvimento de software, redes de computadores e manutenção de hardware. Responsável por criar materiais didáticos, orientar projetos práticos e acompanhar o desempenho dos alunos em atividades técnicas, com foco em promover a excelência e inovação no ensino."
      },
      {
        "empresa": "Sidim Sistemas LTDA",
        "local": "Belo Horizonte",
        "cargo": "Desenvolvedor Full Stack",
        "data": "Março de 2013 - Março de 2014",
        "descricao": "Desenvolvimento e manutenção de sistemas de gestão pública municipal, nas áreas da saúde, educação e assistência social. Trabalhei em projetos de grande impacto social, focados em melhorar a gestão de serviços públicos e a qualidade de vida da população."
      }
    ],
    "formacao": [
      {
        "instituicao": "Ampli",
        "curso": "Tecnólogo",
        "data": "OUT DE 2020 - OUT DE 2022",
        "descricao": "Curso superior de tecnologia da informação, com ênfase em desenvolvimento de sistemas e soluções digitais, preparando-me para enfrentar os desafios do mercado de TI de forma inovadora e eficiente."
      },
      {
        "instituicao": "Colégio Augustus",
        "curso": "Técnico",
        "data": "ABRIL DE 2013 - ABRIL DE 2015",
        "descricao": "Curso técnico de informática com foco em desenvolvimento de software e infraestrutura de TI, formando a base para minha carreira no setor tecnológico."
      }
    ],
    "competencias": {
      "linguagens": [
        { "nome": "Node.js", "experiencia": "4 anos" },
        { "nome": "React/React Native", "experiencia": "4 anos" },
        { "nome": "PHP", "experiencia": "5 anos" },
        { "nome": "C#", "experiencia": "2 anos" },
        { "nome": "Java", "experiencia": "2 anos" }
      ],
      "frameworks": ".NET, Laravel, Express.js",
      "front_end": "jQuery, React",
      "banco_dados": "MySQL, SQL Server, PostgreSQL, MongoDB"
    },
    "idiomas": {
      "ingles": "Avançado",
      "espanhol": "Avançado"
    },
    "interesses": "Desenvolvimento de novas tecnologias e automação de processos, com o objetivo de promover a inovação contínua no mercado de tecnologia e transformar o modo como as empresas operam."
  },
  "en": {
    "nome": "Yuri Teixeira",
    "descricao": "I’m Yuri Teixeira, a Systems Analyst and Developer with over 10 years of experience in the tech industry. I’ve had the opportunity to work with large companies, leading bilingual, cross-functional teams on high-impact projects. My expertise spans web and mobile development, as well as cloud computing and data management solutions. I’m now looking for new challenges where I can leverage my skills to drive business transformation, always focused on innovation, efficiency, and results.",
    "contato": {
      "endereco": "Sabará, Minas Gerais",
      "cidade": "Brasil",
      "telefone": "+55 31 99730-0623",
      "email": "yuri3gp@gmail.com",
      "link": "https://github.com/yuri3gp"
    },
    "experiencia": [
      {
        "empresa": "Datasmart - Serviços de Consultadoria Informática Lda.",
        "local": "Lisbon",
        "cargo": "Full Stack Developer",
        "data": "November 2024 – Present",
        "descricao": "I work in projects developing innovative solutions at a leading IT consulting firm. My experience includes implementing modern architectures using cutting-edge technologies to solve complex problems and ensure the company stays ahead of industry trends."
      },
      {
        "empresa": "Mundomídia LTDA",
        "local": "Belo Horizonte",
        "cargo": "Full Stack Developer",
        "data": "April 2023 – November 2024",
        "descricao": "I was responsible for optimizing complex systems and implementing new features for one of the largest players in the workshop and real estate sectors, always aiming for continuous improvement and enhanced performance of the deployed solutions. I developed microservices that increased internal process agility, integrating with third-party APIs and creating new forms of automation."
      },
      {
        "empresa": "Sillion Serviços de Tecnologia LTDA",
        "local": "Belo Horizonte",
        "cargo": "Full Stack Developer",
        "data": "October 2020 - December 2022",
        "descricao": "Developed and maintained vehicle tracking systems, ensuring scalability and system uptime while also creating microservices for enhanced efficiency and integrating with other systems."
      },
      {
        "empresa": "Technical School of Informatics",
        "local": "Belo Horizonte",
        "cargo": "Computer Science Teacher",
        "data": "November 2014 - December 2019",
        "descricao": "Taught practical and theoretical classes in software development, computer networks, and hardware maintenance. Responsible for creating educational materials, guiding practical projects, and monitoring students' performance in technical activities, always focused on excellence and innovation in teaching."
      },
      {
        "empresa": "Sidim Sistemas LTDA",
        "local": "Belo Horizonte",
        "cargo": "Full Stack Developer",
        "data": "March 2013 - March 2014",
        "descricao": "Developed and maintained public sector management systems, focusing on improving the quality of life in health, education, and social assistance through efficient public management systems."
      }
    ],
    "formacao": [
      {
        "instituicao": "Ampli",
        "curso": "Technologist",
        "data": "OCT 2020 - OCT 2022",
        "descricao": "Higher education in Information Technology with an emphasis on system development and digital solutions, preparing me to face the challenges of the IT market with innovative and efficient approaches."
      },
      {
        "instituicao": "Colégio Augustus",
        "curso": "Technical",
        "data": "APRIL 2013 - APRIL 2015",
        "descricao": "Technical course in computer science with a focus on software development and IT infrastructure, laying the foundation for my career in the technology sector."
      }
    ],
    "competencias": {
      "linguagens": [
        { "nome": "Node.js", "experiencia": "4 years" },
        { "nome": "React/React Native", "experiencia": "4 years" },
        { "nome": "PHP", "experiencia": "5 years" },
        { "nome": "C#", "experiencia": "2 years" },
        { "nome": "Java", "experiencia": "2 years" }
      ],
      "frameworks": ".NET, Laravel, Express.js",
      "front_end": "jQuery, React",
      "banco_dados": "MySQL, SQL Server, PostgreSQL, MongoDB"
    },
    "idiomas": {
      "ingles": "Advanced",
      "espanhol": "Advanced"
    },
    "interesses": "Developing new technologies and automating processes to drive continuous innovation in the tech industry and transform the way businesses operate."
    ,
    "menus": {
      "experiencia": "Experience",
      "formacao": "Education",
      "competencias": "Skills",
      "idiomas": "Languages",
      "interesses": "Interests",
      "ingles": "English",
      "português": "Portuguese",
      "darkMode": "Theme"
    }
  }
}


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('pt');

  const toggleDarkMode = () => {
    setDarkMode(darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const content = data[language];

  return (
    <Container maxWidth="md" className={`p-8 shadow-md ${darkMode ? 'dark-mode' : 'bg-white'}`} style={{ margin: '50px auto' }}>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label={content.menus.darkMode}
        />
        <Button onClick={toggleLanguage} color="primary" variant="text" className="ml-4">
          {language === 'pt' ? 'English' : 'Português'}
        </Button>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom className="name">
            {content.nome}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {content.descricao}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" mb={1}>
            <Icon className="material-icons">phone</Icon>

            <Typography variant="body1" className="ml-2">
              {content.contato.telefone}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Icon className="material-icons">location_on</Icon>


            <Typography variant="body1" className="ml-2">
              {content.contato.endereco}<br />
              {content.contato.cidade}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Icon className="material-icons">email</Icon>
            <Typography variant="body1" className="ml-2">
              {content.contato.email}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Icon className="material-icons">link</Icon>
            <Link href={content.contato.link} color="primary" className="ml-2">
              {content.contato.link}
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} className="mt-8">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" component="h2" color="primary" className="title" gutterBottom>
              {content.menus.experiencia}
            </Typography>
            {content.experiencia.map((exp, index) => (
              <Box mb={4} key={index}>
                <Typography variant="subtitle1" component="h3">
                  <span className="font-bold">{exp.empresa}</span>, {exp.local} — {exp.cargo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.data}
                </Typography>
                <Typography variant="body1">
                  {exp.descricao}
                </Typography>
              </Box>
            ))}
          </Paper>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" component="h2" color="primary" className="title" gutterBottom>
              {content.menus.formacao}
            </Typography>
            {content.formacao.map((edu, index) => (
              <Box mb={4} key={index}>
                <Typography variant="subtitle1" component="h3" className="font-bold">
                  {edu.instituicao}, {edu.curso}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {edu.data}
                </Typography>
                <Typography variant="body1">
                  {edu.descricao}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" component="h2" color="primary" className="title" gutterBottom>
              {content.menus.competencias}
            </Typography>
            <Box mb={4}>
              {content.competencias.linguagens.map((linguagem, index) => (
                <Typography variant="body1" key={index}>
                  <span className="font-bold">{linguagem.nome}:</span> {linguagem.experiencia}
                </Typography>
              ))}
              <Typography variant="body1">
                <span className="font-bold">{language === 'pt' ? 'Frameworks:' : 'Frameworks:'}</span> {content.competencias.frameworks}
              </Typography>
              <Typography variant="body1">
                <span className="font-bold">{language === 'pt' ? 'Front-End:' : 'Front-End:'}</span> {content.competencias.front_end}
              </Typography>
              <Typography variant="body1">
                <span className="font-bold">{language === 'pt' ? 'Banco de dados:' : 'Databases:'}</span> {content.competencias.banco_dados}
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" component="h2" color="primary" className="title" gutterBottom>
              {content.menus.idiomas}
            </Typography>
            <Box mb={4}>
              <Typography variant="body1">
                <span className="font-bold">{language === 'pt' ? 'Inglês -' : 'English -'}</span> {content.idiomas.ingles}
              </Typography>
              <Typography variant="body1">
                <span className="font-bold">{language === 'pt' ? 'Espanhol -' : 'Spanish -'}</span> {content.idiomas.espanhol}
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" component="h2" color="primary" className="title" gutterBottom>
              {content.menus.interesses}
            </Typography>
            <Box mb={4}>
              <Typography variant="body1">
                {content.interesses}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App