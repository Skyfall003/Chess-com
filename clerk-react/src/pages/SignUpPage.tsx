import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp path="/signup" routing="path" />
    </div>
  );
};

export default SignUpPage;