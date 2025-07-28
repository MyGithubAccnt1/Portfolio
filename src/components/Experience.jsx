function Experience() {

  const box = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 25px 45px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(5px)",
  };

  const experience = [
    {
      company: 'Journey Tech Inc.',
      role: 'Jr. Frontend Developer',
      duration: '6 months',
      date: '2025',
      responsibility: 'Update legacy codebase using VUE, PHP, EXPRESS, MYSQL and POSTGRESQL. Develop new system using REACT, EXPRESS and POSTGRESQL. Collaborate with qa`s, web devs and mobile devs to build a cross platform applications.'
    },
    {
      company: 'Elite Aces Trading Inc.',
      role: 'Full Stack Developer Intern',
      duration: '3 months',
      date: '2024',
      responsibility: 'Develop business-focused web application that solves major business problems using PHP, LARAVEL and MYSQL. Integrates manual workflows to automated paperless system.'
    },
    {
      company: '',
      role: 'NCII Computer System Servicing',
      duration: '2020 - 2024',
      date: '',
      responsibility: 'Install and configure server operating system.'
    },
    {
      company: 'Speedfox Computer World',
      role: 'Computer Technician Intern',
      duration: '3 months',
      date: '2018',
      responsibility: 'Computer reformatting, selling, marketing, software installation, unit troubleshooting and unit cleaning.'
    },
  ];

  return (
    <div className='w-[100dvw] md:w-[80dvw] lg:w-[75dvw] mx-auto!'>
      <b>Experience</b>
      <div className="flex flex-col gap-5">
        {experience.map((exp, index) => (
          <div style={box} className="flex flex-col !p-[30px]" key={index}>
            { exp.company && (
              <div className="flex items-center gap-2">
                <span className="text-sm">Company : {exp.company}</span>
              </div>
            )}
            
            { exp.role && (
              <div className="flex items-center gap-2">
                <span className="text-sm">Role : {exp.role}</span>
              </div>
            )}
            
            { exp.duration && (
              <div className="flex items-center gap-2">
                <span className="text-sm">Duration : {exp.duration}</span>
              </div>
            )}
            
            { exp.date && (
              <div className="flex items-center gap-2">
                <span className="text-sm">Date : {exp.date}</span>
              </div>
            )}

            {exp.responsibility && (
              <div className="flex items-center gap-2">
                  <span className="text-sm">Description : <br/> {exp.responsibility}</span>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
