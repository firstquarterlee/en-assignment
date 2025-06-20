# 250619_ENTEST

## 프로젝트 설명

이엔테스트입니다.

### 주요 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 경험
- **이미지 슬라이더**: Swiper.js를 활용한 메인 배너 슬라이더
- **카드 레이아웃**: 그리드 기반의 카드 컴포넌트
- **커스텀 섹션**: 아이콘과 함께하는 서비스 소개 섹션
- **모던 UI/UX**: Tailwind CSS를 활용

## 기술 스택

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.3.3
- **Slider**: Swiper.js 11.2.8
- **Font**: Pretendard
- **Linting**: ESLint 9.25.0

## 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone [your-repository-url]
cd 250619_ENTEST
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 `http://localhost:5173`에서 웹사이트를 확인할 수 있습니다.

### 4. 빌드

```bash
npm run build
```

### 5. 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.jsx      # 헤더 컴포넌트
│   ├── Intro.jsx       # 메인 슬라이더 섹션
│   ├── Card.jsx        # 카드 그리드 섹션
│   ├── Custom.jsx      # 커스텀 서비스 섹션
│   └── Footer.jsx      # 푸터 컴포넌트
├── assets/             # 정적 자산
│   ├── fonts/          # Pretendard 폰트 파일
│   └── images/         # 이미지 파일들
├── App.jsx             # 메인 앱 컴포넌트
├── main.jsx            # 앱 진입점
└── index.css           # 전역 스타일
```

## 컴포넌트 설명

### Header
- 네비게이션 메뉴와 로고를 포함한 헤더 섹션

### Intro (메인 슬라이더)
- Swiper.js를 활용한 이미지 슬라이더
- 네비게이션 버튼으로 좌우 이동 가능
- 반응형 이미지 크기 조정

### Card
- 4개의 카드로 구성된 그리드 레이아웃
- 각 카드는 이미지, 제목, 설명을 포함

### Custom
- 4개의 서비스 아이콘과 설명
- 그라데이션 배경 효과
- 반응형 그리드 레이아웃

### Footer
- 웹사이트 하단 정보 섹션

## 반응형 디자인

프로젝트는 다음과 같은 브레이크포인트를 사용합니다:

- **Mobile**: 375px
- **Tablet**: 810px  
- **Desktop**: 1920px
- **Tailwind 기본**: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

## 폰트

Pretendard 폰트를 사용하여 한국어 텍스트에 최적화된 가독성을 제공합니다:
- 다양한 굵기 지원 (Thin, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black)
- WOFF2, WOFF 포맷 지원으로 빠른 로딩

## 개발 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드된 파일 미리보기
- `npm run lint`: ESLint를 통한 코드 검사

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
