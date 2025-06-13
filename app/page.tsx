/**
 * 진서의 개인 블로그 홈페이지
 * Hero 섹션과 Introduction Card로 구성된 현대적인 디자인
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BookOpen, FolderOpen, Sparkles, Heart, Code, Palette, CalendarDays, Eye, User } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { Database } from '@/types/database.types';
import { AboutButton } from '@/components/ui/scroll-button';

// 타입 정의
type Post = Database['public']['Tables']['posts']['Row'];
type Category = Database['public']['Tables']['categories']['Row'];

type PostWithCategory = Post & {
  categories?: Category | null;
};

// 날짜 포맷팅 함수
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 최신 게시물 조회
async function getLatestPosts(): Promise<PostWithCategory[]> {
  try {
    const supabase = await createServerSupabaseClient();

    const { data: posts, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        slug,
        excerpt,
        cover_image_url,
        view_count,
        created_at,
        content,
        status,
        author_id,
        category_id,
        updated_at,
        categories (
          id,
          name,
          slug,
          color,
          description,
          created_at,
          updated_at
        )
      `)
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      console.error('최신 게시물 조회 오류:', error);
      return [];
    }

    return (posts || []).map(post => ({
      ...post,
      categories: Array.isArray(post.categories)
        ? (post.categories[0] || null)
        : post.categories ?? null,
    }));
  } catch (error) {
    console.error('최신 게시물 조회 중 오류:', error);
    return [];
  }
}

// Hero Section 컴포넌트
function HeroSection() {
  return (
    <section className="hero-gradient py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 메인 헤더 - 한 줄 완전 배치 */}
        <div className="text-center mb-16">          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 mb-6">            <h1 className="text-5xl lg:text-6xl font-black text-white leading-none tracking-wider">
              진서의 Archive.
            </h1>
            <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
              <div className="w-px h-12 bg-white/40 mr-6 hidden lg:block"></div>
              <div className="text-xl lg:text-2xl text-white/90 font-light italic tracking-wide">
                기술과 감성을 잇다
              </div>
            </div>
          </div>
          
          {/* 부제목 */}
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            매일 한 걸음 더 성장해 나가는 저의 여정을 기록합니다
          </p>
        </div>
        
        {/* 핵심 정보 카드 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-card p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-2">
                <div className="text-3xl">🎨</div>
                <h3 className="font-medium text-gray-800">UI/UX 디자인</h3>
                <p className="text-sm text-gray-600">사용자 중심의 경험 설계</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">💻</div>
                <h3 className="font-medium text-gray-800">웹 개발</h3>
                <p className="text-sm text-gray-600">React & Next.js 전문</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">✨</div>
                <h3 className="font-medium text-gray-800">IT 기획</h3>
                <p className="text-sm text-gray-600">혁신적인 서비스 구상</p>
              </div>
            </div>
          </div>
        </div>        {/* CTA 버튼들 - 모던한 디자인 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <AboutButton />
          <Link href="/posts">
            <Button className="modern-btn bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-800 border-blue-200/30 hover:border-blue-300/50 px-8 py-3 text-sm rounded-xl font-semibold min-w-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
              <BookOpen className="w-4 h-4 mr-2" />
              블로그 탐험하기
            </Button>
          </Link>
          <Link href="/categories">
            <Button className="modern-btn bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-800 border-green-200/30 hover:border-green-300/50 px-8 py-3 text-sm rounded-xl font-semibold min-w-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
              <FolderOpen className="w-4 h-4 mr-2" />
              프로젝트 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Introduction Card Section 컴포넌트
function IntroductionSection() {
  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        <Card className="glass-card-enhanced overflow-hidden">
          <CardContent className="p-10">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* 프로필 이미지 */}
              <div className="lg:col-span-2 flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 profile-image ring-4 ring-white/60 mb-6">
                  <AvatarImage 
                    src="/default-avatar.png" 
                    alt="진서 프로필" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 text-white">
                    진서
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    진서 <span className="text-lg text-gray-600 font-medium">JinSeo</span>
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">한신대학교 IT영상콘텐츠 전공 • 3학년</span>
                  </div>
                </div>
              </div>
              
              {/* 정보 섹션 */}
              <div className="lg:col-span-3 space-y-8">                {/* 소개글 */}
                <div className="bg-gradient-to-r from-white/60 to-white/40 rounded-xl p-6 border border-gray-200/40 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-16 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-500" />
                        About Me
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        저는 현재 <span className="font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-md">프론트엔드 개발</span>과 
                        <span className="font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md ml-1">UI/UX 분야</span>에 관심을 갖고 
                        진로를 준비 중인 학생입니다. 
                      </p>                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-medium text-green-600">사용자 경험</span>에 대한 이해를 바탕으로, 
                        사람들이 더 쉽게 기술을 사용할 수 있도록 돕는 일을 하고 싶습니다!
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 관심 분야 - 칩 스타일 개선 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    전문 분야
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="interest-chip bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 px-4 py-2 rounded-full text-sm font-medium border-0 shadow-sm">
                      <Palette className="w-4 h-4 mr-2" />
                      UI/UX 디자인
                    </Badge>
                    <Badge className="interest-chip bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 px-4 py-2 rounded-full text-sm font-medium border-0 shadow-sm">
                      <Code className="w-4 h-4 mr-2" />
                      개인화 서비스
                    </Badge>
                    <Badge className="interest-chip bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300 px-4 py-2 rounded-full text-sm font-medium border-0 shadow-sm">
                      <Sparkles className="w-4 h-4 mr-2" />
                      IT 기획
                    </Badge>
                  </div>
                </div>                {/* 기술 스택 - 현대적 스타일 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    기술 스택
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="tech-stack-item flex items-center justify-center p-3 bg-white/60 rounded-lg border border-gray-200/50 hover:bg-white/80 hover:border-gray-300/60 transition-all cursor-pointer">
                      <span className="font-medium text-gray-700">React</span>
                    </div>
                    <div className="tech-stack-item flex items-center justify-center p-3 bg-white/60 rounded-lg border border-gray-200/50 hover:bg-white/80 hover:border-gray-300/60 transition-all cursor-pointer">
                      <span className="font-medium text-gray-700">Next.js</span>
                    </div>
                    <div className="tech-stack-item flex items-center justify-center p-3 bg-white/60 rounded-lg border border-gray-200/50 hover:bg-white/80 hover:border-gray-300/60 transition-all cursor-pointer">
                      <span className="font-medium text-gray-700">TypeScript</span>
                    </div>
                    <div className="tech-stack-item flex items-center justify-center p-3 bg-white/60 rounded-lg border border-gray-200/50 hover:bg-white/80 hover:border-gray-300/60 transition-all cursor-pointer">
                      <span className="font-medium text-gray-700">Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Recent Posts Section 컴포넌트
function RecentPostsSection({ posts }: { posts: PostWithCategory[] }) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent to-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-light text-gray-800">
              최근 포스트
            </h2>
            <div className="text-2xl">📝</div>
          </div>
          <Link 
            href="/posts"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium px-4 py-2 rounded-full hover:bg-white/50"
          >
            전체 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="post-card overflow-hidden group">
                {post.cover_image_url && (
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img 
                      src={post.cover_image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories && (
                      <Badge 
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ 
                          backgroundColor: `${post.categories.color}15`,
                          color: post.categories.color,
                          border: `1px solid ${post.categories.color}30`
                        }}
                      >
                        {post.categories.name}
                      </Badge>
                    )}
                  </div>
                  <Link href={`/posts/${post.slug}`} className="group">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span className="font-medium">{formatDate(post.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="font-medium">{post.view_count || 0}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="glass-card-enhanced p-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">아직 게시물이 없습니다</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                첫 번째 블로그 글을 작성해보세요!<br />
                여러분의 이야기를 기다리고 있습니다.
              </p>
              <Link href="/posts">
                <Button className="btn-glass-primary px-8 py-3 rounded-full">
                  <BookOpen className="w-5 h-5 mr-2" />
                  게시물 보러가기
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

// 메인 홈페이지 컴포넌트
export default async function HomePage() {
  // 최신 게시물 조회
  const posts = await getLatestPosts();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <RecentPostsSection posts={posts} />
    </div>
  );
}
