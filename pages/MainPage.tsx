
import React, { useState } from 'react';
import { Page, Testimonial } from '../types';

interface MainPageProps {
  onNavigate: (page: Page) => void;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "김OO 원장", role: "피부과 전문의", content: "개원 후 세금 문제로 골머리를 앓던 중 소장님을 만났습니다. 장애인 표준사업장으로 연 3억원 절세 플랜 덕분에 자산이 눈에 띄게 안정되었습니다." },
  { id: 2, name: "이OO 대표", role: "IT 스타트업 CEO", content: "달러 투자에 대한 확신이 없었는데, 데이터 기반의 컨설팅을 통해 포트폴리오를 다각화할 수 있었습니다. 이제 시장 변동성이 두렵지 않습니다." },
  { id: 3, name: "강남OO치과 병원장", role: "치과 전문의", content: "자녀들에게 증여와 상속에 대한 세금으로 고민했는데 컨설팅을 통해 자산 이전에 대한 고민이 해결되었습니다." },
];

export const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      alert("개인정보 수집 및 이용에 동의해야 신청이 가능합니다.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const attendees = formData.get('attendees');
    const location = formData.get('location');

    const subject = `[세미나 후원 신청] ${name}`;
    const body = `
[병원장 세미나 후원 신청]

1. 이름(병원명): ${name}
2. 연락처: ${contact}
3. 참석 인원 수: ${attendees}명
4. 장소(지역): ${location}

* 개인정보 수집 및 이용에 동의함
    `.trim();

    const mailtoLink = `mailto:pytkorea@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    alert("이메일 발송 화면으로 이동합니다. 내용을 확인 후 전송 버튼을 눌러주세요.");
    setIsModalOpen(false);
    setAgreedToPrivacy(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://loremflickr.com/1600/900/skyscraper,luxury")' }}
        >
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-secondary font-bold tracking-widest mb-4 animate-fade-in-up">PREMIUM WEALTH MANAGEMENT</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
            전문직의 성공 방정식,<br/>
            <span className="gold-text">절세</span>와 <span className="gold-text">달러 자산</span>으로 완성하다
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            병원장 및 사업가를 위한 장애인 표준사업장 절세 플랜과<br/>
            위기에 강한 2026 글로벌 달러 투자 전략을 제시합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-secondary hover:bg-amber-600 text-white font-bold text-lg rounded-none transition-all hover:shadow-lg hover:-translate-y-1"
            >
              병원장 세미나 후원 신청
            </button>
            <button 
              onClick={() => onNavigate(Page.PHILOSOPHY)}
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-primary font-bold text-lg rounded-none transition-all"
            >
              부자학 개론 보기
            </button>
          </div>
        </div>
      </section>

      {/* Authority / Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://loremflickr.com/800/600/businessman,suit" 
                alt="강남부자연구소장" 
                className="w-full h-auto rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                숫자로 증명하는<br/>
                <span className="text-secondary">자산 관리 멘토</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  지난 10년간 수많은 전문직, 사업가 분들의 자산을 관리하며 깨달은 사실이 있습니다. 
                  진정한 부는 '얼마를 버느냐'가 아니라 '얼마를 지키느냐'에서 시작됩니다.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">VIP Consulting</div>
                  </div>
                  <div className="text-center border-l border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-1">100억+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">절세 규모</div>
                  </div>
                  <div className="text-center border-l border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-1">15년</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">금융 경력</div>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate(Page.ABOUT)}
                  className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2"
                >
                  연구소장 프로필 더보기 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Core Solutions</h2>
          <p className="text-gray-500">강남부자연구소만의 독보적인 자산 증식 솔루션</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Tax Planning", desc: "법인 전환 및 상속/증여 플랜으로 자산 누수 완벽 차단", icon: "⚖️" },
            { title: "Dollar Investment", desc: "위기에 강한 달러 자산 확보로 포트폴리오 안정성 극대화", icon: "💵" },
            { title: "Real Estate Strategy", desc: "강남권 진입을 위한 시기별 매수/매도 타이밍 전략", icon: "apt" } // apt emoji replacement
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-secondary group cursor-pointer" onClick={() => onNavigate(Page.SERVICES)}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon === 'apt' ? '🏢' : service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Success Stories</h2>
             <p className="text-gray-400 mt-4 md:mt-0">이미 많은 분들이 경제적 자유를 향해 나아가고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gray-800 p-8 rounded-sm relative">
                <div className="text-secondary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-secondary text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            지금이 당신의 자산을 점검할 골든타임입니다.
          </h2>
          <p className="text-white/90 text-lg mb-10">
            망설이는 시간에도 세금은 나가고, 물가는 오릅니다.<br/>
            전문가와 함께 가장 빠른 길을 찾으세요.
          </p>
          <button 
             onClick={() => onNavigate(Page.CONTACT)}
             className="bg-primary text-white px-10 py-4 font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl"
          >
            지금 바로 무료 상담 신청하기
          </button>
        </div>
      </section>

      {/* Main Page Modal: Seminar Sponsorship */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-primary p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">병원장 세미나 후원 신청</h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">이름 (병원명)</label>
                <input 
                  name="name"
                  required 
                  type="text" 
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" 
                  placeholder="예: 홍길동 (강남메디컬)" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
                <input 
                  name="contact"
                  required 
                  type="tel" 
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" 
                  placeholder="010-1234-5678" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">세미나 참석 인원 수</label>
                <input 
                  name="attendees"
                  required 
                  type="number" 
                  min="1" 
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" 
                  placeholder="예: 5명" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">장소 (지역)</label>
                <input 
                  name="location"
                  required 
                  type="text" 
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" 
                  placeholder="예: 서울 강남구" 
                />
              </div>
              
              <div className="p-3 bg-gray-50 text-sm text-gray-600 rounded border border-gray-200">
                <span className="font-bold text-primary">안내:</span> 세미나 진행 시간은 담당자와 상호 협의 하에 결정됩니다.
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="mt-1 w-4 h-4 text-secondary focus:ring-secondary border-gray-300 rounded" 
                />
                <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight cursor-pointer select-none">
                  (필수) 개인정보 수집 및 이용에 동의합니다. 입력하신 정보는 세미나 상담 및 후원 관련 목적으로만 사용됩니다.
                </label>
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50"
                >
                  취소
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-3 bg-secondary text-white font-bold rounded hover:bg-amber-600 shadow-md"
                >
                  신청하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
