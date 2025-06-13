export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Test Page</h1>
      <p className="text-white">If you can see red background and white text, Tailwind is working.</p>
      <div className="mt-4 p-4 bg-blue-500 rounded-lg">
        <p className="text-yellow-300">This should be yellow text on blue background</p>
      </div>
    </div>
  );
}
