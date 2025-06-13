export default function DiagnosticTest() {
  return (
    <div>
      <h1>CSS Diagnostic Test</h1>
      
      {/* 인라인 스타일 테스트 */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', margin: '10px' }}>
        <h2>Inline Style Test</h2>
        <p>This should have red background and white text (inline styles)</p>
      </div>
      
      {/* Tailwind 클래스 테스트 */}
      <div className="bg-blue-500 text-white p-5 m-3">
        <h2>Tailwind Class Test</h2>
        <p>This should have blue background and white text (Tailwind classes)</p>
      </div>
      
      {/* CSS 모듈 또는 글로벌 CSS 테스트 */}
      <div className="test-green">
        <h2>Global CSS Test</h2>
        <p>This should have green background (if global CSS is working)</p>
      </div>
      
      <style jsx>{`
        .test-green {
          background-color: green;
          color: white;
          padding: 20px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
