const FeatureCard = ({ title, desc, Icon, onClick }: any) => (
  <button className="feature-card" onClick={onClick}>
    <div className="icon-wrapper">
      <Icon size={32} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
    </div>
  </button>
);

function App() {
  const [step, setStep] = useState('subject');
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQs, setAnsweredQs] = useState<any>({});

  const handleSubjectSelect = (sub: any) => {
    setSelectedSubject(sub);
    if (sub.id !== 'therapeutics') {
      setStep('coming_soon_subject');
      return;
    }
    setStep('topic');
  };

  const handleTopicSelect = (topic: any) => {
    setSelectedTopic(topic);
    const questions = (MCQS as any)[topic.id] || [];
    setCurrentQuestions(questions);
    setAnsweredQs({});
    setCurrentQuestionIndex(0);
    setStep('mcq');
  };

  const handleAnswerSelect = (questionId: string, optionId: string, correctId: string) => {
    if ((answeredQs as any)[questionId]) return;
    setAnsweredQs((prev: any) => ({
      ...prev,
      [questionId]: {
        selected: optionId,
        isCorrect: optionId === correctId
      }
    }));
  };

  const nextQuestion = () => setCurrentQuestionIndex((i: number) => i + 1);
  const prevQuestion = () => setCurrentQuestionIndex((i: number) => i - 1);

  return (
    <div className="app-container">
      <div className="video-header-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-researcher-analyzing-samples-in-a-lab-4395-large.mp4" type="video/mp4" />
        </video>
        <div className="video-header-overlay">
          <h1 className="header-title">MCQ Panda Rx</h1>
          <p className="header-subtitle">Master Your Pharmacy Knowledge</p>
        </div>
      </div>

      <div className="promo-banner">
        <div className="promo-content">
          <p className="promo-text">Join us on Telegram</p>
          <a href="#" className="telegram-btn"><Send size={18} /> @mcqpandarx</a>
        </div>
        <div className="promo-video-wrapper">
          <video 
            className="promo-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-researcher-analyzing-samples-in-a-lab-4395-large.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <main className="main-content" style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
        <div className="nav-bar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <button 
            className="back-btn" 
            onClick={() => {
              if (step === 'topic' || step === 'coming_soon_subject') {
                setStep('subject');
                setSelectedSubject(null);
              } else if (step === 'mcq') {
                setStep('topic');
                setSelectedTopic(null);
              }
            }}
            disabled={step === 'subject'}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#333', padding: '0.5rem 1rem', borderRadius: '8px' }}
          >
            <ChevronLeft size={20} /> Back
          </button>
          <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Home</span>
            <span>
              {selectedSubject && ` / ${(selectedSubject as any).title}`}
              {selectedTopic && step === 'mcq' && ` / ${(selectedTopic as any).title}`}
            </span>
          </div>
        </div>

        {step === 'subject' && (
          <div className="grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            {SUBJECTS.map((sub: any) => (
              <FeatureCard key={sub.id} title={sub.title} desc={sub.desc} Icon={sub.icon} onClick={() => handleSubjectSelect(sub)} />
            ))}
          </div>
        )}

        {step === 'coming_soon_subject' && (
          <div className="coming-soon-container" style={{ textAlign: 'center', padding: '3rem' }}>
            <h2>Coming Soon!</h2>
            <p>Questions for this subject are currently being prepared.</p>
          </div>
        )}

        {step === 'topic' && (
          <div className="grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            {((TOPICS as any)[selectedSubject?.id || 'therapeutics'] || []).map((topic: any) => (
              <FeatureCard
                key={topic.id}
                title={topic.title}
                desc={topic.desc}
                Icon={topic.icon}
                onClick={() => handleTopicSelect(topic)}
              />
            ))}
          </div>
        )}

        {step === 'mcq' && (
          <div className="mcq-container" style={{ width: '100%' }}>
            {currentQuestions.length === 0 ? (
              <div className="coming-soon-container" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2>Coming Soon!</h2>
                <p>Questions for this topic are currently being prepared.</p>
              </div>
            ) : (() => {
              const q: any = currentQuestions[currentQuestionIndex];
              const answered: any = (answeredQs as any)[q.id];

              return (
                <div className="mcq-card" dir="ltr" style={{ textAlign: 'left', background: '#111', padding: '2rem', borderRadius: '12px' }}>
                  <div className="mcq-header" style={{ marginBottom: '1rem' }}>
                    <span className="question-count">Question {currentQuestionIndex + 1} of {currentQuestions.length}</span>
                  </div>
                  <h3 className="mcq-question" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{q.question}</h3>
                  <div className="options-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {q.options.map((opt: any) => {
                      const isSelected = answered?.selected === opt.id;
                      const isCorrect = opt.id === q.correctId;
                      let btnClass = 'option-button';
                      
                      if (answered) {
                        if (isCorrect) btnClass += ' correct';
                        else if (isSelected) btnClass += ' incorrect';
                        else btnClass += ' disabled';
                      } else if (isSelected) {
                        btnClass += ' selected';
                      }

                      return (
                        <button
                          key={opt.id}
                          className={btnClass}
                          onClick={() => handleAnswerSelect(q.id, opt.id, q.correctId)}
                          disabled={!!answered}
                          style={{
                            display: 'flex', justifyContent: 'space-between', padding: '1rem', 
                            background: '#222', borderRadius: '8px', border: '1px solid #444', 
                            textAlign: 'left'
                          }}
                        >
                          <span>{opt.text}</span>
                          {answered && opt.id === q.correctId && <Check size={18} color="#4caf50" />}
                          {answered && opt.id === answered.selected && opt.id !== q.correctId && <X size={18} color="#f44336" />}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div className={`feedback-msg ${answered.isCorrect ? 'success' : 'error'}`} dir="rtl" style={{ textAlign: 'right', marginTop: '1.5rem', padding: '1rem', background: '#222', borderRadius: '8px' }}>
                      <strong>{answered.isCorrect ? 'إجابة صحيحة! بطل 👏' : 'إجابة خاطئة! ❌'}</strong>
                      <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>
                        <strong>التفسير:</strong> {q.explanation}
                      </p>
                    </div>
                  )}

                  <div className="mcq-navigation" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <button 
                      className="nav-btn" 
                      onClick={prevQuestion} 
                      disabled={currentQuestionIndex === 0}
                      style={{ padding: '0.5rem 1rem', background: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
                    >
                      <ChevronLeft size={20} /> Previous
                    </button>
                    <button 
                      className="nav-btn next" 
                      onClick={nextQuestion} 
                      disabled={currentQuestionIndex === currentQuestions.length - 1}
                      style={{ padding: '0.5rem 1rem', background: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', opacity: currentQuestionIndex === currentQuestions.length - 1 ? 0.5 : 1 }}
                    >
                      Next <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
