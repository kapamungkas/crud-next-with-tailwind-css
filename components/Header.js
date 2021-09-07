export default function Header(props) {
    return (
        <div className="bg-red-900 text-center text-white text-2xl py-4">
            <h1>{props.title}</h1>
        </div>
    )
}