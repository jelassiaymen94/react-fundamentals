// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import React, {useRef, useEffect} from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    console.dir(inputRef.current)
  }, [])

  function addItem() {
    const itemIds = items.map(i => i.id)
    const nextItem = allItems.find(i => !itemIds.includes(i.id))

    if (nextItem) {
      const nextItemIndex = allItems.findIndex(i => i.id === nextItem.id)
      setItems([
        ...items.slice(0, nextItemIndex),
        nextItem,
        ...items.slice(nextItemIndex),
      ])
    }
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input
              id={`${item.id}-input`}
              defaultValue={item.value}
              ref={inputRef}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
