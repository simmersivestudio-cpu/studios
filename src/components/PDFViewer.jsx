import { useState } from 'react';

/**
 * PDF Viewer Modal Component
 * Displays PDFs in a full-screen modal viewer
 */
export default function PDFViewer({ pdfUrl, onClose }) {
  const [loading, setLoading] = useState(true);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 10001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ×
      </button>

      {/* Download Button */}
      <a
        href={pdfUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: '20px',
          right: '80px',
          background: 'white',
          border: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          fontSize: '14px',
          cursor: 'pointer',
          zIndex: 10001,
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold'
        }}
      >
        ⬇️ Download
      </a>

      {/* Loading Indicator */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '18px'
        }}>
          Loading PDF...
        </div>
      )}

      {/* PDF Viewer */}
      <iframe
        src={`${pdfUrl}#toolbar=1`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px'
        }}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
