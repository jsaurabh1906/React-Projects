import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  const generateQRCode = () => {
    if (!text || text.trim() === "") {
      setError("Please enter some text or URL");
      return;
    }
    setQrCode(text);
    setText("");
    setError(null);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-teal-600 via-emerald-500 to-teal-800 flex justify-center items-center">
      <div className="bg-teal-900/20 backdrop-blur-md w-md mx-auto flex flex-col shadow-2xl rounded-2xl h-auto p-6 border border-teal-500">
        <h1 className="text-2xl font-bold text-emerald-50 mb-4 text-center">
          QR Code Generator
        </h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-emerald-300 bg-emerald-200/70 text-teal-900 p-2 rounded mb-2 placeholder-teal-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Enter text or an URL"
        />
        {error && <p className="text-emerald-100 text-sm">{error}</p>}
        <button
          onClick={generateQRCode}
          className="bg-emerald-500 text-teal-50 font-bold px-4 py-2 rounded mt-2 hover:bg-emerald-600 transition-all duration-200"
        >
          Generate QR Code
        </button>
        <div className="my-4 flex justify-center">
          {qrCode && (
            <QRCodeCanvas
              value={qrCode}
              className="w-32 h-32 border-2 border-emerald-400 p-1 bg-emerald-100 rounded-lg shadow-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
