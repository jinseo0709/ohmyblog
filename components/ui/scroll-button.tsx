'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';

// 소개 버튼 컴포넌트
export function AboutButton() {
  return (
    <Link href="/about">
      <Button 
        className="modern-btn bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-800 border-purple-200/30 hover:border-purple-300/50 px-8 py-3 text-sm rounded-xl font-semibold min-w-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group"
      >
        <User className="w-4 h-4 mr-2" />
        소개 보기
      </Button>
    </Link>
  );
}
