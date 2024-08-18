import { UserButton } from "@clerk/clerk-react";

const Home = () => {
    return (
        <>
            <UserButton />
            <h1>This is Home Page</h1>
            <h3>You are logged in</h3>
        </>
    )
}

export default Home;