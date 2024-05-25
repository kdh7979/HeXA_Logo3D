# HeXA_Logo3D

## 작품 소개
Three.js를 활용해 웹사이트 상에 3D 가상 공간에 3D 오브젝트, 빛, 카메라를 활용해 3D 장면을 렌더링합니다.

## 기획 의도
웹 상에 3D 오브젝트를 렌더링 할 수 있는 three.js에 대해 공부하고, HeXA의 로고를 3D 오브젝트로 만들어 360도 드래그로 회전하여 감상할 수 있게 하기 위해 기획하였습니다
## 구현 전략
1. Discover three.js online 책의 내용과 예제를 하나하나 공부해보며 기본적인 개발 환경 설정, 빛, 카메라 등 기본 구성 요소 및 관련 기초 지식 학습, animation loop, 텍스쳐, 반응형 웹 구조 등을 학습 및 구현
2. 예제와 three.js documentation 등 외부 자료를 활용해 육각 기둥 3D object 생성
3. freepbr.com의 Worn Shiny Metal PBR Material 텍스쳐를 TextureLoader를 이용해 Object에 적용
4. 헥사 로고를 다운받아 적용시켜 금속 질감의 헥사 로고 텍스쳐 적용
5. 텍스쳐 맵핑이 완벽하지 않아 rotation, center 등을 조정하여 보완
6. OrbitControls.js를 활용해 마우스 드래그를 통한 카메라 조작 기능 구현
## 자랑하고 싶은 점
밋밋한 매트한 질감의 오브젝트가 아니라 빛이 반사되는 금속 텍스쳐를 입히기 위해서 열심히 찾아보고 여러 파라미터들을 조정하면서 헥사 로고와 잘 어우러지게 만들었습니다.
