import React from 'react';

const SkillList = ({ skills, onDeleteSkill }) => {
    if (skills.length === 0) {
        return <div className="empty-state">No skills added yet. Start tracking!</div>;
    }

    const getBadgeClass = (level) => {
        switch (level) {
            case 'Beginner': return 'badge-beginner';
            case 'Intermediate': return 'badge-intermediate';
            case 'Advanced': return 'badge-advanced';
            default: return '';
        }
    };

    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <div key={skill.id} className="skill-card">
                    <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level ${getBadgeClass(skill.level)}`}>
                            {skill.level}
                        </span>
                    </div>
                    <button
                        className="delete-btn"
                        onClick={() => onDeleteSkill(skill.id)}
                        aria-label="Delete skill"
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SkillList;
