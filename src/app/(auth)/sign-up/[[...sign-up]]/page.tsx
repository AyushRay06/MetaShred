import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const SignUpPage = () => {
  return (
    <div>
      <SignUp
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "green" },
        }}
      />
    </div>
  )
}

export default SignUpPage
