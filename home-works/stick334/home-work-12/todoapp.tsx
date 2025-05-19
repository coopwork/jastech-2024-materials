'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Todo = {
  id: number
  title: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => setTodos(res.data))
  }, [])

  const handleAddTodo = () => {
    if (!newTodo.trim()) return

    const newItem: Todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    }

    setTodos((prev) => [newItem, ...prev])
    setNewTodo('')
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold">TODO List</h1>

      <div className="flex items-center gap-2">
        <Input
          placeholder="Добавьте новую задачу"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={handleAddTodo}>Добавить</Button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <Card key={todo.id} className="border border-muted">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p>{todo.title}</p>
                <span className="text-sm text-muted-foreground">
                  {todo.completed ? '✔️' : '❌'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
