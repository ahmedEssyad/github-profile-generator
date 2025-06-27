const badgeColors = {
  JavaScript: 'F7DF1E',
  Python: '3776AB',
  Java: 'ED8B00',
  'C++': '00599C',
  TypeScript: '3178C6',
  PHP: '777BB4',
  Go: '00ADD8',
  Rust: '000000',
  Swift: 'FA7343',
  Kotlin: '0095D5',
  React: '61DAFB',
  'Vue.js': '4FC08D',
  Angular: 'DD0031',
  HTML5: 'E34F26',
  CSS3: '1572B6',
  Sass: 'CC6699',
  Bootstrap: '563D7C',
  'Tailwind CSS': '38B2AC',
  'Next.js': '000000',
  'Node.js': '43853D',
  'Express.js': '404D59',
  Django: '092E20',
  Flask: '000000',
  MongoDB: '4EA94B',
  MySQL: '00000F',
  PostgreSQL: '316192',
  Redis: 'DC382D',
  Git: 'F05032',
  Docker: '2496ED',
  AWS: '232F3E',
  'VS Code': '007ACC'
};

const generateSkillBadges = (skills, category) => {
  if (!skills || skills.length === 0) return '';
  
  return skills.map(skill => {
    const color = badgeColors[skill] || '666666';
    const logoName = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `![${skill}](https://img.shields.io/badge/${encodeURIComponent(skill)}-${color}?style=for-the-badge&logo=${logoName}&logoColor=white)`;
  }).join('\n');
};

const templates = {
  professional: (data) => `# Hi there, I'm ${data.name || 'Your Name'} 👋

## 🚀 About Me

${data.description || 'Add your description here...'}

- 🌍 Based in **${data.location || 'Your Location'}**
${data.company ? `- 💼 Working at **${data.company}**` : ''}
${data.currentProject ? `- 🔭 Currently working on **${data.currentProject}**` : ''}
${data.learning ? `- 🌱 Currently learning **${data.learning}**` : ''}
${data.email ? `- 📫 Reach me at **${data.email}**` : ''}

## 🛠️ Tech Stack

${Object.entries(data.skills).map(([category, skills]) => {
  if (!skills || skills.length === 0) return '';
  return `### ${category.charAt(0).toUpperCase() + category.slice(1)}\n${generateSkillBadges(skills, category)}`;
}).filter(Boolean).join('\n\n')}

## 📈 GitHub Stats

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=${data.username || 'yourusername'}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username || 'yourusername'}&layout=compact&langs_count=8&theme=tokyonight"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.username || 'yourusername'}&theme=tokyonight" alt="GitHub Streak"/>
</div>

## 📫 Let's Connect

<div align="center">

${data.portfolio ? `[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](${data.portfolio})` : ''}
${data.linkedin ? `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${data.linkedin}/)` : ''}
${data.twitter ? `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/${data.twitter})` : ''}
${data.email ? `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})` : ''}

</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=${data.username || 'yourusername'}&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile views"/>
  
  **💡 "Building the future, one commit at a time"**
  
  ⭐ From [${data.username || 'yourusername'}](https://github.com/${data.username || 'yourusername'})
</div>`,

  creative: (data) => `<div align="center">

# 🎨 Hey there! I'm ${data.name || 'Your Name'} 

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FF6B6B&center=true&vCenter=true&width=435&lines=${encodeURIComponent(data.title || 'Amazing Developer')};Creative+Problem+Solver;Building+Cool+Stuff!)](https://git.io/typing-svg)

</div>

---

## 🌟 About Me

${data.description || 'I love creating amazing things with code!'}

🎯 **Quick Facts:**
- 📍 ${data.location || 'Somewhere awesome'}
${data.company ? `- 🏢 ${data.company}` : ''}
${data.currentProject ? `- 🚀 Working on: ${data.currentProject}` : ''}
${data.learning ? `- 📚 Learning: ${data.learning}` : ''}

---

## 🔥 My Tech Arsenal

${Object.entries(data.skills).map(([category, skills]) => {
  if (!skills || skills.length === 0) return '';
  return `<details>\n<summary>📌 ${category.toUpperCase()}</summary>\n<br>\n\n${generateSkillBadges(skills, category)}\n\n</details>`;
}).filter(Boolean).join('\n\n')}

---

## 📊 GitHub Magic

<div align="center">
  
![${data.name || 'Your'} GitHub stats](https://github-readme-stats.vercel.app/api?username=${data.username || 'yourusername'}&show_icons=true&theme=radical&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username || 'yourusername'}&layout=compact&theme=radical)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${data.username || 'yourusername'}&theme=radical)

</div>

---

## 🤝 Let's Connect & Build Something Amazing!

<div align="center">

${[
  data.portfolio ? `[🌐 Portfolio](${data.portfolio})` : '',
  data.linkedin ? `[💼 LinkedIn](https://www.linkedin.com/in/${data.linkedin}/)` : '',
  data.twitter ? `[🐦 Twitter](https://x.com/${data.twitter})` : '',
  data.email ? `[📧 Email](mailto:${data.email})` : ''
].filter(Boolean).join(' • ')}

</div>

<div align="center">
  
![Profile Views](https://komarev.com/ghpvc/?username=${data.username || 'yourusername'}&color=brightgreen&style=for-the-badge)

### 🎨 *"Creativity is intelligence having fun!"* 

</div>`,

  minimal: (data) => `# ${data.name || 'Your Name'}

> ${data.title || 'Developer'} ${data.location ? `from ${data.location}` : ''}

${data.description || 'Simple. Clean. Effective.'}

## Currently

${data.currentProject ? `- Working: ${data.currentProject}` : ''}
${data.learning ? `- Learning: ${data.learning}` : ''}
${data.company ? `- At: ${data.company}` : ''}

## Skills

${Object.entries(data.skills).map(([category, skills]) => {
  if (!skills || skills.length === 0) return '';
  return `**${category}:** ${skills.join(', ')}`;
}).filter(Boolean).join('\n')}

## Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.username || 'yourusername'}&show_icons=true&theme=minimal)

## Contact

${[
  data.email ? `Email: ${data.email}` : '',
  data.linkedin ? `LinkedIn: [${data.linkedin}](https://www.linkedin.com/in/${data.linkedin}/)` : '',
  data.portfolio ? `Portfolio: ${data.portfolio}` : ''
].filter(Boolean).join(' | ')}`,

  developer: (data) => `<div align="center">

\`\`\`ascii
╔══════════════════════════════════════╗
║  ${(data.name || 'DEVELOPER').padEnd(34)} ║
║  ${(data.title || 'Full-Stack Developer').padEnd(34)} ║
╚══════════════════════════════════════╝
\`\`\`

</div>

## \`$ whoami\`

\`\`\`json
{
  "name": "${data.name || 'Your Name'}",
  "location": "${data.location || 'Earth'}",
  "company": "${data.company || 'Independent'}",
  "currentFocus": "${data.currentProject || 'Building awesome stuff'}",
  "learning": "${data.learning || 'Always something new'}",
  "contact": "${data.email || 'your.email@example.com'}"
}
\`\`\`

## \`$ cat skills.json\`

\`\`\`json
{
${Object.entries(data.skills).map(([category, skills]) => {
  if (!skills || skills.length === 0) return '';
  return `  "${category}": [${skills.map(skill => `"${skill}"`).join(', ')}]`;
}).filter(Boolean).join(',\n')}
}
\`\`\`

## \`$ git stats\`

<div align="center">

\`\`\`diff
+ ${data.username || 'yourusername'} GitHub Statistics
\`\`\`

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.username || 'yourusername'}&show_icons=true&theme=dark&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username || 'yourusername'}&layout=compact&theme=dark)

</div>

## \`$ connect --social\`

\`\`\`bash
# Social links
${data.portfolio ? `portfolio=${data.portfolio}` : ''}
${data.linkedin ? `linkedin=https://www.linkedin.com/in/${data.linkedin}/` : ''}
${data.twitter ? `twitter=https://x.com/${data.twitter}` : ''}
${data.email ? `email=${data.email}` : ''}
\`\`\`

---

<div align="center">

\`\`\`
Happy coding! 🚀
\`\`\`

![Profile Views](https://komarev.com/ghpvc/?username=${data.username || 'yourusername'}&color=green&style=flat)

</div>`
};

export const generateReadme = (data) => {
  const template = templates[data.template] || templates.professional;
  return template(data);
};