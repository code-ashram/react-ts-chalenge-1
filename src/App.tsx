import './App.css'
import Form from './components/Form'
import List from './components/List'
import usersList from './constants/usersList.ts'

function App() {
  const handleAddUser = () => console.log('User added!')

  return (
    <section>
        <Form onAddUser={handleAddUser}></Form>
        <List listSource={usersList} />
    </section>
  )
}

export default App
