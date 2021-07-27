const sentence = "hello there from lighthouse labs\n";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    // print the char here
  }, time);
  time += 50;
}
