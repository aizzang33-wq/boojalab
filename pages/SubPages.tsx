
import React, { useState } from 'react';
import { Page } from '../types';

interface SubPageProps {
  onNavigate?: (page: Page) => void;
}

// --- SUB 1: Philosophy ---
export const PhilosophyPage: React.FC<SubPageProps> = () => {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Wealth Philosophy</span>
        <h2 className="text-4xl font-serif font-bold text-primary mt-2 mb-6">부자학 개론</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>
      
      <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">1. 왜 강남인가?</h3>
          <p className="leading-relaxed">
            강남은 단순한 지명이 아닙니다. 대한민국 자본주의의 심장이자, 기회의 땅입니다. 
            많은 사람들이 "이미 늦었다"고 말할 때, 진짜 부자들은 다음 사이클을 준비합니다.
            강남 진입은 단순한 거주지 이동이 아니라, 당신의 사회적 자본과 네트워크를 
            업그레이드하는 가장 확실한 수단입니다.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 border-l-4 border-secondary">
          <h3 className="text-2xl font-bold text-primary mb-4">2. 부의 방정식 (The Equation of Wealth)</h3>
          <p className="font-serif text-xl italic text-gray-800 mb-4">
            "Wealth = (Income - Tax) × Investment Rate ^ Time"
          </p>
          <p>
            대부분의 사람들은 소득(Income)을 늘리는 데만 집중합니다. 
            하지만 전문직과 사업가에게 가장 큰 적은 세금(Tax)입니다. 
            강남부자연구소는 합법적인 절세 전략을 통해 '지키는 힘'을 길러드리고, 
            달러 투자를 통해 '불리는 속도'를 가속화합니다.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">3. 강남 진입 3단계 로드맵</h3>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</span>
              <div>
                <strong className="block text-primary text-lg">시드 머니 방어 (Tax Saving)</strong>
                법인 설립 및 비용 처리를 통해 세금 누수를 막고 투자 가능한 현금 흐름을 극대화합니다.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</span>
              <div>
                <strong className="block text-primary text-lg">자산 증식 (Dollar Allocation)</strong>
                원화 가치 하락에 대비하여 자산의 40% 이상을 달러 자산으로 구축, 위기 시 기회를 포착합니다.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</span>
              <div>
                <strong className="block text-primary text-lg">레버리지 활용 (Real Estate Entry)</strong>
                구축된 자산을 담보로 최적의 대출 전략을 수립하여 강남 핵심지 부동산을 매입합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- SUB 2: Services ---
export const ServicesPage: React.FC<SubPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">컨설팅 프로그램</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            고객님의 현재 자산 상황과 목표에 맞춘 1:1 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "절세 컨설팅",
              target: "개인사업자, 프리랜서",
              features: ["장애인 표준사업장", "경비 처리 최적화", "상속/증여 플랜"],
              color: "border-primary"
            },
            {
              title: "해외 달러 투자",
              target: "3040 직장인, 전문직",
              features: ["미국 ITA 달러저축", "Hong Kong 달러배당저축", "환차익 전략"],
              color: "border-secondary"
            },
            {
              title: "VIP 종합 자산관리",
              target: "자산 30억 이상 보유자",
              features: ["부동산 매매 타이밍", "사모펀드 접근", "전담 세무/법무팀 지원"],
              color: "border-gray-400"
            }
          ].map((item, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-lg shadow-md border-t-4 ${item.color} flex flex-col`}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">Target: {item.target}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigate && onNavigate(Page.CONTACT)}
                className="w-full py-3 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
              >
                상담 신청하기
              </button>
            </div>
          ))}
        </div>
       </div>
    </div>
  );
};

// --- SUB 3: About (Seminar Sponsorship) ---
export const AboutPage: React.FC<SubPageProps> = () => {
  const [isSeminarModalOpen, setIsSeminarModalOpen] = useState(false);

  const handleSeminarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const attendees = formData.get('attendees');
    const location = formData.get('location');
    const name = formData.get('name');
    const contact = formData.get('contact');

    const subject = `[세미나 후원 신청] ${name}`;
    const body = `
[세미나/후원 신청]

1. 참석 인원: ${attendees}명
2. 모임 장소(지역): ${location}
3. 신청자명(병원): ${name}
4. 연락처: ${contact}
    `.trim();

    const mailtoLink = `mailto:pytkorea@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    alert('이메일 발송 화면으로 이동합니다. 내용을 확인 후 전송 버튼을 눌러주세요.');
    setIsSeminarModalOpen(false);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Professional Network</span>
          <h2 className="text-4xl font-serif font-bold text-primary mt-2 mb-6">세미나 후원</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            강남부자연구소는 지난 수년간 의료계 학술대회 및 VIP 소모임을 꾸준히 후원하며 노블레스 오블리주를 실천하고 
            전문가 그룹과의 네트워크를 강화해왔습니다. 특히 타워팰리스 입주민 세미나와 서울대 AMP 과정, 
            그리고 2024년 서울시 남서 7개구 의사회 합동 학술대회 등에서 '해외금융의 비밀'을 주제로 
            심도 있는 인사이트를 제공하며, 단순한 후원을 넘어 성공적인 자산 관리를 위한 동반자로서 함께하고 있습니다.
          </p>
        </div>

        {/* Seminar Gallery & List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Seminar Photo */}
          <div className="space-y-4">
             <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video group">
                <img 
                  src="https://loremflickr.com/800/600/conference,seminar" 
                  alt="2024년 제22회 서울시 남서 7개구 의사회 합동 학술대회" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-secondary font-bold text-xs uppercase mb-1 block">Main Event</span>
                    <h3 className="text-white font-bold text-xl">2024 서울시 의사회 합동 학술대회</h3>
                    <p className="text-gray-300 text-sm mt-1">주제: 해외배당저축을 통한 자산 관리 전략</p>
                  </div>
                </div>
             </div>
             <p className="text-sm text-gray-500 text-center italic">
               "지금 여기에 계시는 원장님 중에는 해외배당저축을 이미 가입하고 계신 분도 계십니다."
             </p>
          </div>

          {/* Right: History List (Simulating the uploaded text image) */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-secondary mr-3 rounded-sm"></span>
              주요 후원 및 세미나 이력
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 h-96 overflow-y-auto pr-2 custom-scrollbar">
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 2024 제22회 서울시 남서 7개구 의사회 합동 학술대회</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 천안아산 이비인후과의사회 (2023.3)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 대한근골격계초음파학회 임원세미나 (2023.3)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 마취통증의학과 춘계학술대회 (2023.2)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 강남구의사회 임원대상세미나 (2022.9)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 북일동문의사회 소모임세미나 (2022.9)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 서울대AMP과정 소모임세미나 (2022.7)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 타워팰리스 G동 3,4차 세미나 (2022.6)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 타워팰리스 A동 1,2차 세미나 (2022.5)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 대명세무법인 상속증여세미나 (2021 매월)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 서울의대 여의사회 소모임세미나 (2021.7)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 강남구 성형외과의사 소모임세미나 (2021.5)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 은평구치과의사회 소모임세미나 (2019.7)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 강남구 변호사 소모임세미나 (2019.6)</li>
              <li className="flex items-start"><span className="text-secondary mr-2">•</span> 대한임상초음파학회 학술대회 (2018.12)</li>
            </ul>
          </div>
        </div>

        {/* Speaker Info Section */}
        <div className="bg-primary text-white rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative min-h-[300px]">
              <img 
                src="https://loremflickr.com/800/1000/man,suit,portrait" 
                alt="박부자 소장" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex flex-col h-full justify-between">
                <div>
                   <h3 className="text-secondary font-bold tracking-widest text-sm mb-2">SPEAKER PROFILE</h3>
                   <h2 className="text-3xl font-serif font-bold mb-1">박부자 소장</h2>
                   <p className="text-gray-400 text-sm mb-6">Gangnam Wealth Lab Director</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300 mb-8">
                     <div>(현재) 트랜스글로벌 이사</div>
                     <div>2018 강남부자연구소 설립</div>
                     <div>2006-2017 골든브릿지금융판매 IB 팀장</div>
                     <div>1992-2005 외자계 제약회사 ASM</div>
                   </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                   <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                     <div>
                       <h4 className="font-bold text-lg text-white">Special : 병의원장님 소모임 후원 세미나</h4>
                       <p className="text-sm text-gray-400">주제: 2026년 달러 투자 전략 (20분)</p>
                     </div>
                     <button 
                      onClick={() => setIsSeminarModalOpen(true)}
                      className="bg-secondary hover:bg-amber-600 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg hover:shadow-secondary/20"
                     >
                       후원/강연 신청하기
                     </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seminar Application Modal */}
      {isSeminarModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-primary p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">세미나/후원 신청</h3>
              <button onClick={() => setIsSeminarModalOpen(false)} className="text-gray-300 hover:text-white">
                ✕
              </button>
            </div>
            <form onSubmit={handleSeminarSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">참석 인원 수</label>
                <input name="attendees" required type="number" min="1" className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" placeholder="예: 5명" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">모임 장소(지역)</label>
                <input name="location" required type="text" className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" placeholder="예: 서울 강남구 청담동" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">신청자명(병원)</label>
                <input name="name" required type="text" className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" placeholder="예: 김원장 (강남피부과)" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">연락처 번호(HP)</label>
                <input name="contact" required type="tel" className="w-full border border-gray-300 px-3 py-2 rounded focus:border-secondary outline-none" placeholder="010-1234-5678" />
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsSeminarModalOpen(false)} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50">
                  취소
                </button>
                <button type="submit" className="flex-1 px-4 py-3 bg-secondary text-white font-bold rounded hover:bg-amber-600">
                  제출하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- SUB 4: Contact ---
export const ContactPage: React.FC<SubPageProps> = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const interest = formData.get('interest');
    const message = formData.get('message');

    const subject = `[무료 진단 신청] ${name}`;
    const body = `
[무료 진단 컨설팅 신청]

1. 이름: ${name}
2. 연락처: ${contact}
3. 관심 분야: ${interest}
4. 문의 내용:
${message}
    `.trim();

    const mailtoLink = `mailto:pytkorea@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    alert('이메일 발송 화면으로 이동합니다. 내용을 확인 후 전송 버튼을 눌러주세요.');
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">상담 및 문의</h2>
          <p className="text-gray-500">
            경제적 자유로 가는 첫 걸음, 지금 시작하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-6">무료 진단 신청</h3>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input name="name" required type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input name="contact" required type="tel" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">관심 분야</label>
                <select name="interest" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-secondary outline-none">
                  <option>절세 컨설팅</option>
                  <option>해외 달러 투자</option>
                  <option>부동산 진입 전략</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                <textarea name="message" required rows={4} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="현재 상황과 고민을 간단히 적어주세요."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 font-bold rounded-md hover:bg-gray-800 transition-colors">
                신청하기
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="flex flex-col h-full">
            <div className="bg-gray-200 w-full h-64 md:h-full rounded-lg mb-6 flex items-center justify-center text-gray-500 relative overflow-hidden">
                {/* Simulated Map */}
                 <img 
                  src="https://loremflickr.com/800/600/map,city" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  alt="Map Location"
                 />
                 <div className="relative z-10 bg-white p-4 shadow-lg rounded-lg text-center">
                   <p className="font-bold text-primary">강남부자연구소</p>
                   <p className="text-sm">서울 강남구 테헤란로</p>
                 </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">FAQ</h4>
              <div className="space-y-4">
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center font-medium list-none text-primary">
                    <span>상담 비용은 얼마인가요?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm group-open:animate-fadeIn">
                    최초 1회 진단 상담은 무료로 진행됩니다. 이후 심층 컨설팅은 자산 규모와 솔루션 범위에 따라 차등 적용됩니다.
                  </p>
                </details>
                <hr className="border-gray-100" />
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center font-medium list-none text-primary">
                    <span>지방 거주자도 상담 가능한가요?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm group-open:animate-fadeIn">
                    네, 줌(Zoom)을 통한 화상 상담이 가능합니다. 실제 많은 지방 고객분들이 온라인으로 관리받고 계십니다.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
