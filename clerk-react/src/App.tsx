import './App.css'
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Home />
        </SignedIn>
      </header>
    </>
  )
}

export default App