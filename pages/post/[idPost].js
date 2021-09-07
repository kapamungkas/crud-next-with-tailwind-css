import FormPost from "../../components/FormPost";
import Header from "../../components/Header";

export default function EditPost(props) {

    return (
        <div>
            <Header title="Create Post"></Header>
            <div className="container mx-auto px-4 max-w-screen-sm">
                <FormPost action='update' dataPost={props.data}></FormPost>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    // const router = useRouter();
    const { idPost } = context.query
    if (idPost) {
        const res = await fetch('http://localhost:3000/posts/' + idPost)
        const data = await res.json()

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: { data }, // will be passed to the page component as props
        }
    }

}