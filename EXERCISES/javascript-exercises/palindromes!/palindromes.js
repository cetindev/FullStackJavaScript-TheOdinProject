const palindromes = function (string) {
  processedSting = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    processedSting
      .split("")
      .reverse()
      .join("") == processedSting
  );
};

module.exports = palindromes
