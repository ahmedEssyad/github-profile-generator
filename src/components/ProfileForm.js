import React from 'react';

const availableSkills = {
  languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP', 'Go', 'Rust', 'Swift', 'Kotlin'],
  frontend: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS', 'Next.js', 'Nuxt.js'],
  backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET', 'FastAPI', 'Laravel', 'Ruby on Rails'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Firebase', 'Supabase', 'DynamoDB'],
  tools: ['Git', 'Docker', 'AWS', 'VS Code', 'GitHub Actions', 'Jenkins', 'Kubernetes', 'Figma', 'Postman']
};

const templates = [
  { id: 'professional', name: '👔 Professional', description: 'Clean and formal' },
  { id: 'creative', name: '🎨 Creative', description: 'Colorful and fun' },
  { id: 'minimal', name: '✨ Minimal', description: 'Simple and elegant' },
  { id: 'developer', name: '💻 Developer', description: 'Tech-focused' }
];

function ProfileForm({ data, onChange }) {
  const handleInputChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const handleSkillToggle = (category, skill) => {
    const currentSkills = data.skills[category] || [];
    const newSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    
    onChange({
      ...data,
      skills: { ...data.skills, [category]: newSkills }
    });
  };

  return (
    <div className="profile-form">
      <h2>📝 Profile Information</h2>
      
      <div className="form-group">
        <label>Template Style</label>
        <div className="template-selector">
          {templates.map(template => (
            <div
              key={template.id}
              className={`template-option ${data.template === template.id ? 'selected' : ''}`}
              onClick={() => handleInputChange('template', template.id)}
            >
              <div>{template.name}</div>
              <small>{template.description}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Mohamed Essyad"
        />
      </div>

      <div className="form-group">
        <label>GitHub Username</label>
        <input
          type="text"
          value={data.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          placeholder="ahmedEssyad"
        />
      </div>

      <div className="form-group">
        <label>Professional Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="Full-Stack Developer"
        />
      </div>

      <div className="form-group">
        <label>About Me Description</label>
        <textarea
          value={data.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Passionate developer building awesome web applications..."
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          placeholder="Nouakchott, Mauritania"
        />
      </div>

      <div className="form-group">
        <label>Company/Organization</label>
        <input
          type="text"
          value={data.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          placeholder="Elhilal"
        />
      </div>

      <div className="form-group">
        <label>Current Project</label>
        <input
          type="text"
          value={data.currentProject}
          onChange={(e) => handleInputChange('currentProject', e.target.value)}
          placeholder="Building an AI-powered email assistant"
        />
      </div>

      <div className="form-group">
        <label>Currently Learning</label>
        <input
          type="text"
          value={data.learning}
          onChange={(e) => handleInputChange('learning', e.target.value)}
          placeholder="AI integration and cloud architectures"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="form-group">
        <label>LinkedIn</label>
        <input
          type="text"
          value={data.linkedin}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
          placeholder="YourLinkedInProfile"
        />
      </div>

      <div className="form-group">
        <label>Twitter</label>
        <input
          type="text"
          value={data.twitter}
          onChange={(e) => handleInputChange('twitter', e.target.value)}
          placeholder="YourTwitterHandle"
        />
      </div>

      <div className="form-group">
        <label>Portfolio Website</label>
        <input
          type="url"
          value={data.portfolio}
          onChange={(e) => handleInputChange('portfolio', e.target.value)}
          placeholder="https://yourportfolio.com"
        />
      </div>

      <div className="form-group">
        <label>Skills & Technologies</label>
        <div className="skills-grid">
          {Object.entries(availableSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="skill-tags">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`skill-tag ${(data.skills[category] || []).includes(skill) ? 'selected' : ''}`}
                    onClick={() => handleSkillToggle(category, skill)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;