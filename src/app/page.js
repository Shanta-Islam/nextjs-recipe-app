
import AllRecipe from './components/AllRecipe'
import Input from './components/Input'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Recipe app</h1>
      <Input></Input>
      <AllRecipe></AllRecipe>
    </main>
  )
}
