import { useState, useEffect } from 'react'

const Home = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    async function getGifs() {
      try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=eBvM0ae1JyipWlQQlUgGicoef4O8bfn5&q=${query}&limit=10&offset=0&rating=g&lang=en`)
        const json = await res.json()
        console.log(json)
        setResults(
          json.data.map(item => {
            return item.images.preview.mp4
          })
        )
      } catch (error) {
        console.error(error)
      }
    }

    if (query != '') {
      getGifs()
    }

  }, [query])

  return (
    <div>
      <h1>Async React Hooks</h1>
      <form onSubmit={e => {
        e.preventDefault()
        setQuery(search)
      }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search Gifs"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {results.map((item, index) => {
        return <video src={item} autoPlay loop key={index} />
      })}
    </div>
  )
}

export default Home