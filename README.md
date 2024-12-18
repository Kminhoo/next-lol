# 📑 프로젝트 소개

리그 오브 레전드 데이터를 기반으로 챔피언, 아이템, 로테이션 챔피언 정보를 제공하는 웹 애플리케이션입니다. Next.js와 TypeScript를 사용하여 개발되었으며, Tailwind CSS를 활용하여 반응형 디자인, 다크모드를 구현했습니다.

---

## 🕹️ 프로젝트 기능

### 1. **페이지 구성**

- **챔피언 목록 페이지 (`/champions`)**: ISR(Incremental Static Regeneration) 방식으로 구현.
- **챔피언 상세 페이지 (`/champions/[id]`)**: 동적 렌더링 방식으로 구현하며, 동적 메타데이터 생성 기능 포함.
- **아이템 목록 페이지 (`/items`)**: SSG(Static Site Generation) 방식으로 구현.
- **아이템 목록 페이지 (`/items/[name]`)**: SSG(Static Site Generation) 방식으로 구현.
- **챔피언 로테이션 페이지 (`/rotation`)**: 클라이언트 사이드 렌더링(CSR) 방식으로 구현.

### 2. **로딩 및 에러 핸들링**

- **Skeleton UI**: 로딩 상태에서 사용자 경험을 향상시키기 위해 각 페이지에 Skeleton UI를 구현.
- **에러 처리**:
  - `error.tsx`를 통해 각 경로에서 발생하는 에러 처리.
  - `global-error.tsx`를 사용하여 전역 에러 처리.

### 3. **다크 모드 지원**

- 다크 모드와 라이트 모드 간 전환 가능.

### 4. **데이터 Fetching**

- **서버 컴포넌트**를 활용하여 데이터를 가져옵니다.
- Tanstack Query를 사용하여 클라이언트 컴포넌트에서 데이터 관리.

---

## ⚙️ 기술 스택

### **프레임워크 및 라이브러리**

- **React**
- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Tanstack Query**

### **기타 도구 및 설정**

- ESLint 및 Prettier로 코드 스타일 관리
- vercel을 통한 배포

---

## 🖥️ 구현 상세

### **구현한 기능**

1. **Skeleton UI**

   - 로딩 시각화를 통해 사용자 경험을 개선.
   - 각 페이지에 맞춘 커스텀 Skeleton 컴포넌트를 설계.

2. **다크 모드 지원**

   - Tailwind CSS의 다크 모드 지원.
   - 테마 전환을 위한 상태 관리 및 로컬 스토리지 활용.

3. **로딩 시뮬레이션**
   - `setTimeout`을 사용하여 비동기 호출 지연 시뮬레이션 구현.

---

## 📱 화면 구성

|            브라우저            |           브라우저           |               모바일               |               모바일               |
| :----------------------------: | :--------------------------: | :--------------------------------: | :--------------------------------: |
| ![GOMCAM20241218_2055230719-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/354d6a0b-c79d-4f28-9c91-563b35242fdb) | ![GOMCAM20241218_2054560458-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/339d10f3-3889-48b7-afbd-bbe1ba2c8bd4) | ![GOMCAM20241218_2056020172-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/5bbffa79-fc1d-4af5-960a-d4e8c3f19908) | ![GOMCAM20241218_2055470641-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e9e714a0-1af2-4670-9bad-04882b8d5b82) |

## 🛠️ 설치 및 실행

### **로컬에서 실행**

1. **프로젝트 클론**

   ```bash
   git clone https://github.com/Kminhoo/next-lol.git
   cd next-lol
   ```

2. **패키지 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   ```

   브라우저에서 `http://localhost:3000`에 접속하여 확인.

4. **빌드 및 프로덕션 실행**
   ```bash
   npm run build
   npm start
   ```

---
