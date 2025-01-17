function encodeAndDecodeMessages() {
  const buttonsRef = document.querySelectorAll("#main button");
  const textAreaRef = document.querySelectorAll("#main textarea");

  const encodeTextAreaRef = textAreaRef[0];
  const decodeTextAreaRef = textAreaRef[1];

  const encodeBtn = buttonsRef[0];
  const decodeBtn = buttonsRef[1];

  encodeBtn.addEventListener("click", encodeAndSend);
  decodeBtn.addEventListener("click", decodeAndRead);

  function encodeAndSend(event) {
    const text = encodeTextAreaRef.value;
    let encodeMsg = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text[i];
      let charInt = ch.charCodeAt(0) + 1;
      let newChar = String.fromCharCode(charInt);
      encodeMsg += newChar;
    }
    decodeTextAreaRef.value = encodeMsg;
    encodeTextAreaRef.value = "";
  }

  function decodeAndRead(event) {
    const text = decodeTextAreaRef.value;
    let decodeMsg = "";

    for (let el of text) {
      let charInt = el.charCodeAt(0) - 1;
      let newChar = String.fromCharCode(charInt);
      decodeMsg += newChar;
    }
    encodeTextAreaRef.value = decodeMsg;
    
  }
}
