import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Loader2, Mail } from 'lucide-react'

export const Homeauth=()=>{
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would typically call your signup API
    console.log('Signing up with email:', email)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    // Here you would typically initiate Google OAuth flow
    console.log('Signing up with Google')
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400 text-white">Choose your preferred signup method</p>
      </div>
      <form onSubmit={handleEmailSignup} className="space-y-4">
        <div className="space-y-2 text-white">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required 
            />
        </div>
        <Button type="submit" className="w-full text-white border border-color-white" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
              Signing up...
            </>
          ) : (
            'Sign Up with Email'
          )}
        </Button>
      </form>
      <Button variant="outline" className="w-full text-white" onClick={handleGoogleSignup} disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Sign Up with Google
      </Button>
    </div>
  )
}