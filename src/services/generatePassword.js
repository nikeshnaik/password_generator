function generatePassword(params) {
    //  Strength Calculation 
    //  one filter -> 1 point
    //  character len < 8 -> -1 point 

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "-[_]{}()<>!\"#$%&'*+,./:;=?@\\^`|~";

    const filter_mapping_chars = {

        "Include Uppercase Letters": upperCase,
        "Include Lowercase Letters": lowerCase,
        "Include Numbers": numbers,
        "Include Symbols": symbols

    }

    const strength_class = {
        0: "TOO WEAK!",
        1: "WEAK",
        2: "WEAK",
        3: "MEDIUM",
        4: "STRONG"
    }

    let acceptedChars = ""
    let strength = 0

    for (let filter in params) {
        if (filter != "characterLen" & params[filter]) {
            acceptedChars = acceptedChars + filter_mapping_chars[filter]
            strength = strength + 1

        }
    }

    let secret = "";
    for (let index = 1; index <= params["characterLen"]; index++) {
        secret = secret + acceptedChars.charAt(Math.floor(Math.random() * acceptedChars.length));
    }

    if (params.characterLen <= 8 && strength > 0) {
        strength = strength - 1
    }


    return [secret, strength_class[strength]]
}


export default generatePassword;