import React from 'react';

const Lessons = () => {
  const lessons = [
    { id: 1, title: 'Hiragana & Katakana', description: 'Learn the two basic Japanese scripts.' },
    { id: 2, title: 'Basic Grammar', description: 'Understand sentence structure and particles.' },
    { id: 3, title: 'Essential Vocabulary', description: 'Build your core Japanese vocabulary.' }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Lessons</h1>
      <div className="mt-4">
        {lessons.map(lesson => (
          <div key={lesson.id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons; 