function translate(string) {
	return string
	.split(" ")
	.map(word => {
		const index = firstVowelIndex(word);
		const beginnig = word.slice(0 ,index);
		const ending = word.slice(index);
		return `${ending}${beginnig}ay`;
	})
	.join(" ");
}

function firstVowelIndex(string) {
	const vowels = string.match(/[aeiou]/g);
	if (vowels[0] == "u" && string[string.indexOf(vowels[0]) -1] == "q") {
		return string.indexOf(vowels[1]);
	}
	return string.indexOf(vowels[0]);
}

module.exports = {
	translate
}

