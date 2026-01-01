import React, { useState } from 'react';

const SkillInput = ({ onAddSkill }) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('Beginner');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Please enter a skill name.');
            return;
        }

        onAddSkill({ name, level });

        // Reset form
        setName('');
        setLevel('Beginner');
        setError('');
    };

    return (
        <form className="input-group" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="skill-name">Skill Name:</label>
                <input
                    id="skill-name"
                    type="text"
                    placeholder="e.g. React"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                    }}
                />
            </div>

            <div>
                <label htmlFor="skill-level">Proficiency Level:</label>
                <select
                    id="skill-level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            {error && <div className="error-msg">{error}</div>}

            <button type="submit" className="add-btn">Add Skill</button>
        </form>
    );
};

export default SkillInput;
