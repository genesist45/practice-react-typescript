import { useState, useEffect, useRef } from 'react'

interface EventType extends React.ChangeEvent<HTMLInputElement> {}

const App = () => {
  const [task, setTask] = useState<string>('')
  const [TaskList, setTastList] = useState<string[]>([])
  const [error, setError] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [task])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    inputRef.current?.focus()

    if (task.trim()) {
      setTastList((prev) => [...prev, task.trim()])
      setTask('') 
      setError('')
    } else {
      setError('Task must not be empty')
    }
  }

  const handleRemoveTask = (indexTask: number) => {
    const filteredTask = TaskList.filter((_, index) => index !== indexTask)
    setTastList(filteredTask)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a Task..."
            value={task}
            onChange={(event: EventType) => setTask(event.target.value)}
          />
          <button type="submit">Add Task</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <div>
          <ul>
            {TaskList.map((task, index) => (
              <div key={index}>
                <li>{task}</li>
                <button onClick={() => handleRemoveTask(index)}>Remove Task</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
