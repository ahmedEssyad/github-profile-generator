import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Sparkles, 
  Zap, 
  Star, 
  Users, 
  Download,
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Rocket
} from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Templates",
      description: "Choose from 4 stunning templates designed for different developer personas"
    },
    {
      icon: Zap,
      title: "Instant Preview",
      description: "See your README come to life in real-time as you customize your profile"
    },
    {
      icon: Code,
      title: "Skill Showcase",
      description: "Easily add and organize your technical skills with our interactive selector"
    },
    {
      icon: Rocket,
      title: "Export Ready",
      description: "Copy or download your README in one click, ready for your GitHub profile"
    }
  ];

  const stats = [
    { number: "1000+", label: "Developers" },
    { number: "4", label: "Templates" },
    { number: "100+", label: "Skills" },
    { number: "5 min", label: "Setup Time" }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="hero-title">
              <Sparkles className="hero-icon" />
              Create Stunning GitHub Profiles
              <span className="gradient-text"> in Minutes</span>
            </h1>
            <p className="hero-description">
              Stand out from the crowd with a professional GitHub profile README. 
              Choose from beautiful templates, showcase your skills, and make your 
              first impression count.
            </p>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="btn btn-primary btn-large"
              onClick={onGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} />
              Start Creating
              <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="https://github.com/ahmedEssyad/github-profile-generator"
              className="btn btn-outline btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View on GitHub
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="mockup-window">
            <div className="mockup-header">
              <div className="mockup-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mockup-title">GitHub Profile</span>
            </div>
            <div className="mockup-content">
              <div className="mockup-line mockup-title-line"></div>
              <div className="mockup-line mockup-text-line"></div>
              <div className="mockup-line mockup-text-line short"></div>
              <div className="mockup-badges">
                <span className="mockup-badge">JavaScript</span>
                <span className="mockup-badge">React</span>
                <span className="mockup-badge">Node.js</span>
              </div>
              <div className="mockup-stats">
                <div className="mockup-stat"></div>
                <div className="mockup-stat"></div>
                <div className="mockup-stat"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-content">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Everything You Need to Shine</h2>
            <p>Powerful features to create the perfect GitHub profile</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Templates Preview */}
      <motion.section 
        className="templates-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-content">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Choose Your Style</h2>
            <p>Professional templates for every developer personality</p>
          </motion.div>

          <div className="templates-showcase">
            {['Professional', 'Creative', 'Minimal', 'Developer'].map((template, index) => (
              <motion.div
                key={index}
                className="template-preview"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="template-card">
                  <div className="template-header">
                    <Star size={16} />
                    <span>{template}</span>
                  </div>
                  <div className="template-content">
                    <div className="template-line"></div>
                    <div className="template-line short"></div>
                    <div className="template-badges">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Stand Out?</h2>
            <p>Join thousands of developers who've elevated their GitHub presence</p>
            <motion.button
              className="btn btn-primary btn-large"
              onClick={onGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              Create Your Profile Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;