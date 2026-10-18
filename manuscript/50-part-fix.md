# 고치고 검증하기

"컴파일된다"는 증거가 아닙니다. 이 부는 고친 것과 만든 것을 실제 산출물(artifact)로 확인하는 스킬을 다룹니다. `tdd`는 버그를 실행 가능한 테스트로 먼저 고정하고, `blast-radius`는 작아 보이는 변경이 다른 곳에서 무엇을 깨뜨릴 수 있는지 실행으로 증명합니다. `interrogate`는 여러 모델이 diff를 깨뜨리려 시도하고, `benchmark-checklist`는 측정한 숫자를 보고하기 전에 걸러 냅니다. `create-verification-skill`과 `maintain-verification-skill`은 앱을 사용자처럼 구동해 동작을 증명하는 방법을 프로젝트에 남기고, `create-formal-verification-skill`은 테스트가 잘 닿지 않는 속성 하나를 형식 검증(formal verification)하는 프로젝트 전용 스킬을 남깁니다.
