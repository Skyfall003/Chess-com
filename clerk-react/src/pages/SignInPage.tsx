import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <SignIn path="/signin" routing="path" />
            <p>
                Don't have an account? 
                <a href='/signup'>Sign Up Here</a>
            </p>
        </div>
    )
}

export default SignInPage;