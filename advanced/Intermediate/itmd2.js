function sanitizeInput(input) {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<img[^>]*>/gi, "")
    .replace(/<a[^>]*>[\s\S]*?<\/a>/gi, "");
}

console.log(sanitizeInput('<p>Hello</p><script>alert("XSS")</script>'));
// 출력: <p>Hello</p>

console.log(
  sanitizeInput('<a href="http://malicious.com">Click me</a><img src="x" />Hi')
);
// 출력: Hi

console.log(sanitizeInput("<div><b>Bold</b></div>"));
// 출력: <div><b>Bold</b></div>
