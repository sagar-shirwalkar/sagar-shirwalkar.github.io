const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind'];

  return (
    <section id="skills" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;