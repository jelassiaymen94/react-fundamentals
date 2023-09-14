// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  function addItem() {
    const itemIds = items.map(({id}) => id)
    const nextItem = allItems.find(({id}) => !itemIds.includes(id))

    if (nextItem) {
      const nextItemIndex = allItems.findIndex(({id}) => id === nextItem.id)
      setItems([
        ...items.slice(0, nextItemIndex),
        nextItem,
        ...items.slice(nextItemIndex),
      ])
    }
  }

  function removeItem(item) {
    setItems(items.filter(({id}) => id !== item.id))
  }

  const isAddButtonDisabled = items.length >= allItems.length

  return (
    <div className="keys">
      <button disabled={isAddButtonDisabled} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map(({id, value}) => (
          <li key={id}>
            <button onClick={() => removeItem({id, value})}>remove</button>{' '}
            <label htmlFor={`${id}-input`}>{value}</label>{' '}
            <input id={`${id}-input`} defaultValue={value} ref={inputRef} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
