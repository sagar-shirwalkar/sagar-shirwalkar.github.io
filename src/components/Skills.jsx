import ReactLogo from '../assets/react.svg';
import JavaLogo from '../assets/java.svg';
import NodeLogo from '../assets/nodejs.svg';
import PythonLogo from '../assets/python.svg';
import GitLogo from '../assets/git.svg';
import DockerLogo from '../assets/docker.svg';
import JenkinsLogo from '../assets/jenkins.svg';
import KubernetesLogo from '../assets/kubernetes.svg';
import TerraformLogo from '../assets/terraform.svg';


const Skills = () => {
  const langs = [
    { logo: JavaLogo, text: 'Java' },
    { logo: ReactLogo, text: 'ReactJS' },
    { logo: NodeLogo, text: 'NodeJS' },
    { logo: PythonLogo, text: 'Python' },
  ];
  const deployment = [
    { logo: GitLogo, text: 'Git' },
    { logo: DockerLogo, text: 'Docker' },
    { logo: JenkinsLogo, text: 'Jenkins' },
    { logo: KubernetesLogo, text: 'Kubernetes' },
    { logo: TerraformLogo, text: 'Terraform' },
  ];

  return (
    <section id="skills" className="py-8 bg-gray-700">
      <div className="container mx-auto">
        <h2 className="text-2xl text-white font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 grid-rows-5 gap-4">
          <p className="col-start-1 row-start-1 text-xl text-white font-normal">Programming</p>
          <div className="col-start-2 row-start-1 grid grid-cols-2 md:grid-cols-4">
            {langs.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.logo}
                  alt={item.text}
                  className="h-16 w-16 object-contain mb-2"
                />
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="col-start-1 row-start-2 text-xl text-white font-normal ">Deployment</p>
          <div className="col-start-2 row-start-2 grid grid-cols-2 md:grid-cols-4">
            {deployment.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.logo}
                  alt={item.text}
                  className="h-16 w-16 object-contain mb-2"
                />
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;