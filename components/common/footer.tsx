/**
 * 블로그 푸터 컴포넌트
 * 사이트 정보 및 부가 링크 제공
 * 반응형 디자인으로 모든 화면 크기에서 최적화
 */

'use client';

import Link from 'next/link';
import { Github, Mail, Heart, ArrowUp } from 'lucide-react';

// 푸터 네비게이션 링크 타입 정의
interface FooterLink {
  name: string;
  href: string;
  description: string;
}

// 푸터 네비게이션 링크들
const footerLinks: FooterLink[] = [
  { name: '소개', href: '/about', description: '블로그 소개 보기' },
  { name: '블로그', href: '/posts', description: '모든 게시물 보기' },
  { name: '카테고리', href: '/categories', description: '카테고리별 글 보기' },

];

export default function Footer() {
  // 현재 연도 자동 계산
  const currentYear = new Date().getFullYear();

  // 페이지 상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (    <footer className="relative w-full bg-gradient-to-t from-purple-50/80 via-pink-50/60 to-transparent backdrop-blur-sm">
      {/* 장식적 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-pink-100/20 to-blue-100/20"></div>
        <div className="relative container mx-auto max-w-7xl px-4 py-4">
        
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid md:grid-cols-3 gap-4 mb-3">
            {/* 브랜드 섹션 */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xs">진</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-800">진서의 Archive.</h3>
                <p className="text-xs text-gray-600">기술과 감성을 잇다</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-xs">
              매일 한 걸음 더 성장해 나가는 디지털 크리에이터의 여정을 기록합니다.
            </p>
            
            {/* 소셜 링크 */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://github.com/jinseo027083" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 bg-white/60 hover:bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                title="GitHub"
              >
                <Github className="w-3 h-3 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </a>
              <a 
                href="mailto:jinseo027083@naver.com"
                className="p-1.5 bg-white/60 hover:bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                title="이메일"
              >
                <Mail className="w-3 h-3 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </a>
            </div>
          </div>          {/* 네비게이션 링크 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-800">빠른 링크</h4>
            <nav className="space-y-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 text-xs group"
                  title={link.description}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>          {/* 기술 스택 & 정보 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-800">기술 스택</h4>
            <div className="space-y-1">
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Next.js</span>
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">TypeScript</span>
                <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">Supabase</span>
                <span className="px-1.5 py-0.5 bg-cyan-100 text-cyan-800 rounded-full text-xs font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>        {/* 구분선 */}
        <div className="border-t border-gray-200/60 pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0">
            
            {/* 저작권 정보 */}
            <div className="flex items-center space-x-1.5 text-xs text-gray-600">
              <span>© {currentYear} 진서의 Archive.</span>
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>in Korea</span>
            </div>

            {/* 페이지 상단으로 버튼 */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 px-2 py-1 bg-white/60 hover:bg-white/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group text-xs text-gray-600 hover:text-gray-800"
              title="페이지 상단으로"
            >
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              <span>위로</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}