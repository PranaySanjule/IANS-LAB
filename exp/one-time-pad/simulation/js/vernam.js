var PLAIN_TEXT_LEN = 8;
var current_encryption = "";

function validKey() {
  key = document.getElementById("user_key").value;
  var i = 0;
  for (i = 0; i < key.length; i++) {
    if (key.charAt(i) != "0" && key.charAt(i) != "1") {
      break;
    }
  }
  if (i != key.length) {
    alert("Only binary keys allowed!");
  }
}

function XOR(a, b) {
  if (a == "0" && b == "0") return "0";
  else if (a == "0" && b == "1") return "1";
  else if (a == "1" && b == "0") return "1";
  else if (a == "1" && b == "1") return "0";
  return "0";
}

function Vernam_Encrypt() {
  plaintext = document.getElementById("p").value;
  key = document.getElementById("key").value;
  if (plaintext.length < 1) {
    alert("please enter some plaintext (binary only)");
    return;
  }
  if (key.length < plaintext.length) {
    alert("key must be atleast the length of plaintext");
    return;
  }
  ciphertext = "";
  for (i = 0; i < plaintext.length; i++) {
    ciphertext += XOR(plaintext.charAt(i), key.charAt(i));
  }
  document.getElementById("c").value = ciphertext;
}

function Vernam_Decrypt(f) {
  ciphertext = document.getElementById("c").value;
  key = document.getElementById("key").value;
  if (ciphertext.length < 1) {
    alert("please enter some ciphertext (binary only)");
    return;
  }
  if (key.length < ciphertext.length) {
    alert("key must be atleast the length of ciphertext");
    return;
  }
  plaintext = "";
  for (i = 0; i < ciphertext.length; i++) {
    plaintext += XOR(ciphertext.charAt(i), key.charAt(i));
  }
  document.getElementById("p").value = plaintext;
}