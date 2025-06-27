import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, X } from 'lucide-react';

const SkillSelector = ({ skills, onSkillsChange, availableSkills }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('languages');
  const [customSkill, setCustomSkill] = useState('');

  const filteredSkills = availableSkills[activeCategory]?.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleSkillToggle = (skill) => {
    const currentSkills = skills[activeCategory] || [];
    const newSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    
    onSkillsChange({
      ...skills,
      [activeCategory]: newSkills
    });
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !skills[activeCategory]?.includes(customSkill)) {
      onSkillsChange({
        ...skills,
        [activeCategory]: [...(skills[activeCategory] || []), customSkill.trim()]
      });
      setCustomSkill('');
    }
  };

  return (
    <div className="skill-selector">
      <div className="skill-categories">
        {Object.keys(availableSkills).map(category => (
          <motion.button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder={`Search ${activeCategory}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="custom-skill-input">
        <input
          type="text"
          placeholder="Add custom skill..."
          value={customSkill}
          onChange={(e) => setCustomSkill(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
          className="custom-input"
        />
        <motion.button
          onClick={addCustomSkill}
          className="add-skill-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Plus size={16} />
        </motion.button>
      </div>

      <motion.div className="skills-grid" layout>
        <AnimatePresence>
          {filteredSkills.map(skill => (
            <motion.span
              key={skill}
              className={`skill-tag ${(skills[activeCategory] || []).includes(skill) ? 'selected' : ''}`}
              onClick={() => handleSkillToggle(skill)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {skill}
              {(skills[activeCategory] || []).includes(skill) && (
                <motion.span
                  className="selected-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>

      {skills[activeCategory]?.length > 0 && (
        <motion.div
          className="selected-skills"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <h4>Selected {activeCategory}:</h4>
          <div className="selected-skills-list">
            {skills[activeCategory].map(skill => (
              <motion.span
                key={skill}
                className="selected-skill"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                layout
              >
                {skill}
                <button
                  onClick={() => handleSkillToggle(skill)}
                  className="remove-skill"
                >
                  <X size={14} />
                </button>
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillSelector;