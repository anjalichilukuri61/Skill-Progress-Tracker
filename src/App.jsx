import React, { useState } from 'react';
import Header from './components/Header';
import SkillInput from './components/SkillInput';
import SkillList from './components/SkillList';
import './styles.css'; // Importing global styles here ensuring they are applied

function App() {
  const [skills, setSkills] = useState([]);

  const addSkill = (newSkill) => {
    setSkills([...skills, { ...newSkill, id: Date.now() }]);
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <SkillInput onAddSkill={addSkill} />
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
}

export default App;
