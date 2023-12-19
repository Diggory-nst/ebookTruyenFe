
const validate = (email: string, password: string, confirm_password: string) => {
    // Regular expression pattern for a valid email address
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let check_password
    password === confirm_password ? check_password = true : check_password = false
    // Use the test method to check if the email matches the pattern
    return {
        email: emailPattern.test(email),
        password: check_password
    }
}

export default validate