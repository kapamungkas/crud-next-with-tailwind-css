import { useRouter } from 'next/router'
import { useState } from "react";

export default function FormPost(props) {
    const router = useRouter()
    const [data, setData] = useState({
        title: props.dataPost ? props.dataPost.title : '',
        author: props.dataPost ? props.dataPost.author : ''
    })

    const handleChange = (e) => {
        setData(prevState => (
            {
                ...prevState, [e.target.name]: e.target.value
            }
        ))
    }
    const storeData = async (e) => {
        await fetch('http://localhost:3000/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))

        router.push('/')

    }

    const updateData = async (e) => {
        await fetch('http://localhost:3000/posts/' + props.dataPost.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))

        router.push('/')

    }

    const handleButton = (action) => {
        if (action == 'add') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={storeData}>Submit</a>
        } else if (action == 'update') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={updateData}>Update</a>
        }
    }

    return (
        <div className="my-10">
            <form>
                <div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Title *</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="idTitle"
                            name="title"
                            value={data.title}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>

                <div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Author *</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" className="form-control"
                            name="author"
                            value={data.author}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
                {handleButton(props.action)}
            </form>
        </div>
    )
}

