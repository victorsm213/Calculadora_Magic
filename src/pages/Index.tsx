
import Calculator from "../components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Calc Magic</h1>
      <Calculator />
    </div>
  );
};

export default Index;
