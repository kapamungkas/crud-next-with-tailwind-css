import FormPost from "../components/FormPost";
import Header from "../components/Header";


export default function create_Post(props) {


    return (
        <div>
            <Header title="Create Post"></Header>
            <div className="container mx-auto px-4 max-w-screen-sm">
                <FormPost action='add'></FormPost>
            </div>
        </div>
    )
}