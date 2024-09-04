//1) Function to introduce a name
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Alice"));
// Output: "Hi, my name is Alice."

  // 2) Function to introduce a name with a language
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("Bob", "Python"));
// Output : "Hi, my name is Bob and I am learning to program in Python."

  // 3) Function to introduce a name with a language, defaulting to JavaScript
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Charlie"));
  // Output: "Hi, my name is Charlie and I am learning to program in JavaScript."
