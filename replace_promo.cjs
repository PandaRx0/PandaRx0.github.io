const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const search = `{step === 'subject' && (
        <div className="summaries-promo" onClick={() => setStep('summaries_subject')} style={{ cursor: 'pointer', margin: '0 auto 2rem auto', width: '90%', maxWidth: '1000px', background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.2s' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={24} /> ملخصات</h2>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>اضغط هنا للوصول إلى ملخصات المواد الدراسية بصيغة PDF</p>
        </div>
      )}`;

const replace = `{step === 'subject' && (
        <div 
          className="summaries-promo" 
          onClick={() => setStep('summaries_subject')} 
          style={{ 
            cursor: 'pointer', 
            margin: '0 auto 2rem auto', 
            width: 'calc(100% - 2rem)', 
            maxWidth: '1000px', 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px', 
            padding: '2.5rem 1.5rem', 
            textAlign: 'center', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)', 
            border: '1px solid #333',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
            e.currentTarget.style.borderColor = '#d4af37';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.3) blur(2px)',
              zIndex: 1
            }}
          >
            <source src="/promo_video.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            <h2 style={{ margin: 0, fontFamily: "'Cairo', sans-serif", fontSize: '2.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#d4af37' }}>
              <Database size={32} /> ملخصات
            </h2>
            <p style={{ margin: 0, fontFamily: "'Cairo', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: '#f0f0f0' }}>اضغط هنا للوصول إلى ملخصات المواد الدراسية بصيغة PDF</p>
          </div>
        </div>
      )}`;

content = content.replace(search, replace);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('Summaries box styling updated successfully!');
