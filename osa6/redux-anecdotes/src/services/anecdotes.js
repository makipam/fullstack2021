import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (content) => {
    const newObject = { ...content, votes: content.votes + 1 }
    const response = await axios.put(`${baseUrl}/${content.id}`, newObject)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update }