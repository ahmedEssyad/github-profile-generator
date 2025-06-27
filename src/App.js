import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Sparkles } from 'lucide-react';
import './App.css';
import './LandingPage.css';
import ProfileForm from './components/ProfileForm';
import ProfilePreview from './components/ProfilePreview';
import AnimatedBackground from './components/AnimatedBackground';
import LandingPage from './components/LandingPage';
import Toast from './components/Toast';
import { generateReadme } from './utils/readmeGenerator';

function App() {
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    title: '',
    description: '',
    location: '',
    company: '',
    currentProject: '',
    learning: '',
    email: '',
    linkedin: '',
    twitter: '',
    portfolio: '',
    skills: {
      languages: [],
      frontend: [],
      backend: [],
      databases: [],
      tools: []
    },
    template: 'professional'
  });

  const [readme, setReadme] = useState('');
  const [toast, setToast] = useState({ 
    isVisible: false, 
    message: '', 
    type: 'success' 
  });
  const [showLanding, setShowLanding] = useState(true);

  const handleDataChange = (newData) => {
    setProfileData(newData);
    const generatedReadme = generateReadme(newData);
    setReadme(generatedReadme);
  };

  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([readme], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(readme);
      showToast('README copied to clipboard! 🎉');
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy README. Please try again.', 'error');
    }
  };

  if (showLanding) {
    return (
      <div className="App">
        <AnimatedBackground />
        <LandingPage onGetStarted={() => setShowLanding(false)} />
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <AnimatedBackground />
      
      <motion.header 
        className="App-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles className="inline-icon" size={32} />
          GitHub Profile Generator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Create an awesome GitHub profile README in minutes!
        </motion.p>
      </motion.header>

      <motion.div 
        className="app-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div 
          className="form-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <ProfileForm data={profileData} onChange={handleDataChange} />
        </motion.div>
        
        <motion.div 
          className="preview-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <ProfilePreview readme={readme} />
          <motion.div 
            className="actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button 
              onClick={copyToClipboard} 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Copy size={20} /> Copy README
            </motion.button>
            <motion.button 
              onClick={downloadReadme} 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} /> Download README.md
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
}

export default App;