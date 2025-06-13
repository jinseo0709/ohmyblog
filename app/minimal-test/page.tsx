export default function MinimalTest() {
  return (
    <html>
      <head>
        <title>Minimal Test</title>
        <style dangerouslySetInnerHTML={{
          __html: `
            .test-red { background-color: red; color: white; padding: 20px; }
            .test-blue { background-color: blue; color: yellow; margin: 10px; }
          `
        }} />
      </head>
      <body>
        <div className="test-red">
          <h1>Direct CSS Test</h1>
          <p>This should have red background</p>
        </div>
        <div className="bg-green-500 text-white p-4 m-4">
          <h2>Tailwind Test</h2>
          <p>This should have Tailwind styles</p>
        </div>
        <div className="test-blue">
          <p>This should have blue background</p>
        </div>
      </body>
    </html>
  );
}
