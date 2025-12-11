# Optimaece 웹사이트 프로젝트

## 프로젝트 개요
Optimaece는 SQL 튜닝 전문 서비스를 제공하는 웹사이트입니다. 기존 유지보수 계약이나 장기 계약 없이 단건으로 SQL 튜닝 서비스를 제공하는 혁신적인 비즈니스 모델을 소개합니다.

**도메인**: optimaece.com

## 주요 기능 및 섹션

### 1. Hero Section (메인 히어로)
- 강렬한 타이틀과 서브타이틀
- 3가지 핵심 가치 제안:
  - 24시간 내 결과 제공
  - 건당 과금 (유지보수 계약 불필요)
  - 성능 개선 없으면 100% 환불
- CTA 버튼 (무료 베타 신청)
- 페이드 인 애니메이션

### 2. Problems Section (문제 제기)
- 고객이 겪는 5가지 주요 문제점 제시
- 체크리스트 형식의 UI
- 카드 슬라이드 인 애니메이션

### 3. Story Section (스토리텔링)
- 서비스 창업자의 경험담
- 고객의 실제 문제를 공감하는 내러티브
- 그라디언트 배경 (보라색 계열)
- 인용구 형식의 디자인

### 4. Solution Section (솔루션 제시)
- 전문가 소개 (12년 경력 DBA, 통계학과 출신 컨설턴트)
- 가격 안내 (건당 20만원)
- 3가지 핵심 하이라이트
- 줌 인 애니메이션

### 5. Comparison Section (비교표)
- 유지보수 계약 vs 프리랜서 DBA vs Optimaece
- 5가지 비교 항목 (계약기간, 비용, 처리속도, 계약절차, 방문여부)
- 하이라이트 컬럼 (Optimaece)
- 테이블 호버 효과

### 6. Process Section (서비스 프로세스)
- 4단계 프로세스:
  1. 의뢰서 작성 (5분)
  2. 1차 분석 (4시간 이내)
  3. 튜닝 작업 (24시간 이내)
  4. 결과 전달
- 좌우 교차 슬라이드 애니메이션
- 단계별 아이콘과 상세 설명

### 7. Cases Section (개선 사례)
- Swiper 캐러셀 슬라이더
- 6개 업종별 개선 사례:
  - 국내 최상위 대학교
  - 대형서점
  - 대형병원
  - 화장품대기업
  - 이커머스대기업
  - 자동차대기업
- Before/After 비교
- 성능 개선 퍼센트 표시
- 자동 슬라이드 (5초 간격)

### 8. Team Section (전문가 소개)
- 2명의 전문가 프로필
- 경력 및 전문 분야 상세 설명
- 카드 호버 효과

### 9. Beta Section (베타 테스터 모집)
- 무료 베타 테스터 모집 (선착순 10명)
- 혜택 및 조건 안내
- 주황색 그라디언트 배경
- Google Form 링크 연결

### 10. Pricing Section (가격 안내)
- 4가지 가격 플랜:
  - 기본 튜닝 (20만원)
  - 고난이도 튜닝 (40만원)
  - 긴급 튜닝 (50% 할증)
  - 월간 구독 (75만원) - 추천 배지
- 가격 카드 호버 효과

### 11. FAQ Section (자주 묻는 질문)
- 8개의 FAQ 아코디언
- 클릭 시 확장/축소 애니메이션
- 토글 아이콘 회전 효과

### 12. Final CTA Section (마지막 CTA)
- 강력한 행동 유도 메시지
- 보라색 그라디언트 배경
- CTA 버튼

### 13. Footer (푸터)
- 회사 정보
- 연락처 (이메일, 도메인)
- 저작권 표시

## 사용 기술 스택

### 1. HTML5
- 시맨틱 HTML 구조
- SEO 최적화 메타 태그
- 접근성 고려 마크업

### 2. CSS3
- CSS Custom Properties (CSS Variables)
- Flexbox 및 Grid Layout
- 반응형 디자인 (Mobile-first)
- Gradient 배경
- Box Shadow 및 Border Radius
- Transition 및 Animation
- Media Queries (768px, 480px 브레이크포인트)

### 3. JavaScript (ES6+)
- Intersection Observer API (스크롤 애니메이션)
- Event Listeners
- DOM Manipulation
- Smooth Scroll
- Mobile Menu Toggle
- FAQ Accordion
- Parallax Effect
- Scroll Progress Indicator
- Back to Top Button

### 4. 외부 라이브러리

#### AOS (Animate On Scroll)
- 버전: 2.3.1
- 용도: 스크롤 시 요소 애니메이션
- 설정:
  - duration: 800ms
  - offset: 100px
  - once: true (한 번만 실행)
  - easing: ease-in-out

#### Swiper
- 버전: 11
- 용도: 개선 사례 캐러셀 슬라이더
- 기능:
  - 자동 재생 (5초 간격)
  - 무한 루프
  - 페이지네이션
  - 네비게이션 버튼
  - 반응형 슬라이드 개수 (모바일 1개, 태블릿 2개, 데스크톱 3개)

#### Google Fonts
- Noto Sans KR (한글 웹폰트)
- 폰트 두께: 300, 400, 500, 700, 900

## 디자인 특징

### 색상 팔레트
- **Primary Color**: #2563eb (파란색) - 신뢰감
- **Secondary Color**: #1e40af (진한 파란색)
- **Accent Color**: #f59e0b (주황색) - 강조
- **Text Dark**: #1f2937 (거의 검은색)
- **Text Light**: #6b7280 (회색)
- **Success Color**: #10b981 (녹색)
- **Background**: #f9fafb (연한 회색), #ffffff (흰색)

### 타이포그래피
- 기본 폰트 크기: 16px
- 라인 높이: 1.6
- 폰트 패밀리: Noto Sans KR, 시스템 폰트 폴백

### 간격 시스템
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

### 그림자 시스템
- SM: 0 1px 2px (아주 작은 그림자)
- MD: 0 4px 6px (중간 그림자)
- LG: 0 10px 15px (큰 그림자)
- XL: 0 20px 25px (매우 큰 그림자)

## 애니메이션 효과

### 1. 스크롤 애니메이션 (AOS)
- Fade up
- Fade left/right
- Zoom in
- 지연 시간 설정 (100ms~1000ms)

### 2. 호버 효과
- Transform: translateY, scale, rotate
- Box Shadow 변화
- 색상 변화

### 3. 인터랙티브 효과
- FAQ 아코디언 (슬라이드 다운/업)
- Mobile 메뉴 토글 (햄버거 아이콘 애니메이션)
- Swiper 슬라이드 (슬라이드 전환)

### 4. 스크롤 효과
- Header 고정 및 그림자 변화
- Parallax 배경 (Hero Section)
- Scroll Progress Bar (상단 진행 표시줄)
- Back to Top 버튼 (500px 스크롤 후 표시)

### 5. 로딩 애니메이션
- 페이지 페이드 인
- CTA 버튼 펄스 애니메이션 (5초마다)

## 반응형 디자인

### 데스크톱 (1200px+)
- 전체 레이아웃 표시
- 3단 그리드 (개선 사례)
- 전체 네비게이션 메뉴

### 태블릿 (768px~1199px)
- 2단 그리드
- 적절한 여백 조정

### 모바일 (~767px)
- 1단 레이아웃
- 햄버거 메뉴
- 터치 친화적 버튼 크기
- 축소된 타이포그래피

## 성능 최적화

### 1. 이미지 최적화
- Lazy Loading 준비 (data-src 속성)
- Intersection Observer 활용

### 2. 폰트 로딩
- Google Fonts Preconnect
- Font Display: swap

### 3. JavaScript 최적화
- Intersection Observer로 불필요한 애니메이션 방지
- 이벤트 디바운싱 가능 (필요 시)

### 4. CSS 최적화
- CSS Variables 사용
- 효율적인 선택자
- Transition 최적화

## SEO 최적화

- 시맨틱 HTML 태그 사용
- Meta Description
- Title Tag
- Heading 계층 구조 (H1~H3)
- Alt 속성 (이미지 추가 시)

## 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 참조한 웹사이트 디자인 요소

### wrapstudio.co.kr
- AOS 스크롤 애니메이션 (700ms duration)
- Swiper 캐러셀
- 모던한 섹션 레이아웃
- 팝업 모달 패턴

### woori-it.co.kr
- AOS 라이브러리 활용 (800ms duration)
- 수직 스크롤 기반 단일 페이지
- 섹션별 명확한 구분
- 폼 검증 패턴
- 탭 토글 인터랙션

## 향후 개선 가능 사항

1. Google Analytics 연동
2. Google Form 실제 링크 연결
3. 이미지 및 아이콘 추가
4. 실제 로고 디자인 삽입
5. 챗봇/문의하기 위젯
6. 블로그 섹션 추가
7. 다국어 지원 (영어)
8. 다크 모드 지원
9. Cookie 동의 배너
10. 성능 모니터링 도구 연동

## 파일 구조

```
optimaece/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 파일
├── optimaece.txt       # 원본 콘텐츠 텍스트
└── CLAUDE.md          # 프로젝트 문서 (이 파일)
```

## 연락처

- 이메일: optimaece@gmail.com
- 도메인: optimaece.com

## 라이선스

© 2025 Optimaece. All rights reserved.

---

**제작 일자**: 2025-11-30
**제작 도구**: Claude Code (AI Assistant)
**버전**: 1.0.0
