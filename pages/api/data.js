// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default axios.create({
  baseURL: 'https://swapi.dev/api',
  headers: {
    'Content-Type': 'application/json'
  }
})