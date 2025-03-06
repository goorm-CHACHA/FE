'use client';
import QrScanner from 'qr-scanner';
import React, { useEffect, useRef, useState } from 'react';

const page = () => {
  // qr 스캔이 불가능한 상태 true
  const [qrError, setQrError] = useState(false);

  const isUrl = (text: string): boolean => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
  };

  const handleScan = (data: { data: string }) => {
    if (data) {
      if (isUrl(data.data)) {
        window.open(data.data);
      } else {
        // http 키워드 없는 경우 QR에 http:// 붙임
        window.open(`http://${data.data}`);
      }
    }
  };

  const QrOptions = {
    preferredCamera: 'environment',
    maxScanPerSecond: 5,
    highlightScanRegion: true,
  };

  const videoRef = useRef(null);

  //QrScanner 라이브러리 사용
  useEffect(() => {
    // QrScanner.hasCamera() 장치에 카메라 확인
    QrScanner.hasCamera().then((hasCamera) => {
      if (!hasCamera) {
        setQrError(true);
      }
      if (hasCamera) {
        const videoElem = videoRef.current;
        if (videoElem) {
          const qrScanner = new QrScanner(
            videoElem,
            (result) => {
              console.log('result : ', result);
              handleScan(result);
            },
            QrOptions,
          );
          // 카메라 사용 허가되었는지 확인
          qrScanner.start().catch((e) => setQrError(true));

          return () => qrScanner.destroy();
        }
      }
    });
  }, []);

  return (
    <div id="qr-code" className="h-screen">
      {!qrError && (
        <div className="w-full h-full relative">
          <h1>QR리더기</h1>
          <video className="w-full h-full object-contain" ref={videoRef} />
          <p className="p-2 bg-black w-36 rounded-xl text-center absolute text-xs top-1/2 left-1/2 -translate-x-1/2">
            나의 qr코드 바로 가기
          </p>
        </div>
      )}
      {/* qr 카메라가 작동이 안 될 경우 */}
      {qrError && (
        <div className="no-qr">
          <p>실행 불가</p>
          <small>
            카메라가 작동하지 않으면 휴대기기의 카메라를 직접 작동해주세요.
          </small>
        </div>
      )}
    </div>
  );
};

export default page;
