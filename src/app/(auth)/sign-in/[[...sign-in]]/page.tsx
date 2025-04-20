import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
const SignInPage = () => {
  return (
    <div>
      <SignIn
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "green" },
        }}
      />
    </div>
  )
}

export default SignInPage
