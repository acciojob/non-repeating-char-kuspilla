function firstNonRepeatedChar(str) {
 // Write your code here
	 if (str === "") return null;
            else {
                for (let i = 0; i < str.length; i++) {
                    let ans = 0;
                    for (let j = i + 1; j < str.length; j++) {
                        if (str[i] === str[j]) {
                            ans++;
                        }
                    }
                    if (ans === 0) return str[i];
                }
                return null;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
