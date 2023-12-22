function firstNonRepeatedChar(str) {
 // Write your code here
	 if (str === "") return null;

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }

    return null;

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
