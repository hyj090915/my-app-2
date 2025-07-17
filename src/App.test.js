import { render, screen } from '@testing-library/react';
import App from './App';

// App 컴포넌트가 제대로 렌더링되는지 테스트
// 1. 메인 헤딩이 보이는지
// 2. CI/CD 텍스트가 보이는지
// 3. 성공 메시지가 보이는지

test('renders hello github actions heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/🚀 Hello, GitHub Actions!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders CI/CD text', () => {
  render(<App />);
  const ciCdElement = screen.getByText(/CI\/CD/i);
  expect(ciCdElement).toBeInTheDocument();
});

test('renders success message', () => {
  render(<App />);
  const successElement = screen.getByText(/이 페이지가 자동으로 배포된다면 성공!/i);
  expect(successElement).toBeInTheDocument();
}); 