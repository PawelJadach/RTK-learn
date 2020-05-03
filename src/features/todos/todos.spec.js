import todos, { addTodo, toggleTodo } from './todosSlice'
import { deleteTodo } from '../../actions'

describe('todos reducer', () => {

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: addTodo.type,
        payload: {
          text: 'Run the tests',
          id: 0
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])
  })

  describe('addTodo', () => {
    it('should generate incrementing todo IDs', () => {
      const action1 = addTodo('a')
      const action2 = addTodo('b')
  
      expect(action1.payload).toEqual({ id: 0, text: 'a' })
      expect(action2.payload).toEqual({ id: 1, text: 'b' })
    })
  })
})
