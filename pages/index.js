import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import getAPI from '@/libs/getAPI'
import { useCounter } from '@/utils/counter'


export default function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  async function getCharacters() {
    try {
      setLoading(true)
      const { results } = await getAPI('people/')
      setCharacters(results)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const { count, setCount, increment, decrement, reset } = useCounter(0)

  const multiplyBy2 = () => setCount(x => x* 2);

  return (
    <>
      <main className={`${styles.main}`}>
        <div>
          <ul>
            {loading && <p>Searching...</p>}
            {
              characters &&
              characters.map((character) => (
                <li key={character.name}>{character.name}</li>
              ))
            }
          </ul>
        </div>
       
        <p>Count is: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={multiplyBy2}>Multiply by 2</button>
  
      </main>
    </>
  )
}
