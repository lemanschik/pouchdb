export { a as atob, b as binaryStringToBlobOrBuffer, t as btoa } from './binaryStringToBlobOrBuffer-85a41a32.js';
export { b as base64StringToBlobOrBuffer } from './base64StringToBlobOrBuffer-3fd03be6.js';
export { c as blob } from './blob-50c92a34.js';
export { b as blobOrBufferToBase64 } from './blobOrBufferToBase64-e67e02aa.js';
export { b as blobOrBufferToBinaryString } from './blobOrBufferToBinaryString-bf2d29ad.js';
export { r as readAsBinaryString } from './readAsBinaryString-06e911ba.js';
export { t as typedBuffer } from './typedBuffer-a8220a49.js';

// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  return buf;
}

// simplified API. universal browser support is assumed
function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();
  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };
  reader.readAsArrayBuffer(blob);
}

export { binaryStringToArrayBuffer, readAsArrayBuffer };
