import axios from 'axios'

export default function Api(value) {

    return (axios.get(value))
}