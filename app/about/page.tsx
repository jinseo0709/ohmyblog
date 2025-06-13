/**
 * 소개 페이지
 * 진서의 상세한 프로필과 이력을 소개하는 페이지
 */

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Code, Palette, MapPin, Calendar, Mail, Github, Linkedin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 to-pink-50/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            안녕하세요! 기술과 감성으로 새로운 이야기를 만들어 나갑니다.
          </p>
        </div>

        {/* 메인 프로필 카드 */}
        <Card className="glass-card-enhanced mb-8">
          <CardContent className="p-10">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* 프로필 이미지 */}
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                <Avatar className="w-40 h-40 profile-image ring-4 ring-purple-200/60 mb-6">
                  <AvatarImage 
                    src="/default-avatar.png" 
                    alt="진서 프로필" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 text-white">
                    진서
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-800">
                    진서 <span className="text-xl text-gray-600 font-medium">JinSeo</span>
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">IT영상콘텐츠 전공 • 3학년</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">한신대학교</span>
                  </div>
                </div>
              </div>
              
              {/* 기본 정보 */}
              <div className="lg:col-span-2 space-y-8">
                {/* 비전 */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <blockquote className="text-xl text-gray-700 italic leading-relaxed pl-6">
                    "기술과 감성의 조화를 통해 사람들에게 <br className="hidden sm:block"/>
                    <span className="font-semibold text-purple-600">의미 있는 경험</span>을 선사하고 싶습니다."
                  </blockquote>
                </div>
                
                {/* 연락처 정보 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500">이메일</div>
                      <div className="font-medium text-gray-700">jinseo027083@naver.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="text-sm text-gray-500">생년월일</div>
                      <div className="font-medium text-gray-700">2003.07.09</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 전문 분야 */}
        <Card className="glass-card-enhanced mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-red-400" />
              전문 분야
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Palette className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">UI/UX 디자인</h4>
                <p className="text-sm text-gray-600">사용자 중심의 직관적인 인터페이스 설계</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">웹 개발</h4>
                <p className="text-sm text-gray-600">React, Next.js를 활용한 모던 웹 애플리케이션</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">IT 기획</h4>
                <p className="text-sm text-gray-600">혁신적인 디지털 서비스 기획 및 전략</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card className="glass-card-enhanced mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">기술 스택</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">React</Badge>
                  <Badge className="bg-gray-100 text-gray-800 px-4 py-2">Next.js</Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">TypeScript</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 px-4 py-2">Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Backend & Database</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">Node.js</Badge>
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">Supabase</Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">MYSQL</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Design & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Figma</Badge>
                  <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Photoshop</Badge>
                  <Badge className="bg-gray-100 text-gray-800 px-4 py-2">Git</Badge>
                  <Badge className="bg-gray-100 text-gray-800 px-4 py-2">VS Code</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 학습 및 성장 */}
        <Card className="glass-card-enhanced">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">학습 & 성장</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-400 pl-6 py-2">
                <h4 className="font-semibold text-gray-800">지속적인 학습</h4>
                <p className="text-gray-600 text-sm">새로운 기술과 트렌드를 적극적으로 학습하며 성장하고 있습니다.</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-6 py-2">
                <h4 className="font-semibold text-gray-800">실무 경험</h4>
                <p className="text-gray-600 text-sm">개인 프로젝트와 팀 협업을 통해 실전 경험을 쌓고 있습니다.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-6 py-2">
                <h4 className="font-semibold text-gray-800">창의적 사고</h4>
                <p className="text-gray-600 text-sm">기술적 역량과 창의적 아이디어를 결합한 혁신적 솔루션을 추구합니다.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
