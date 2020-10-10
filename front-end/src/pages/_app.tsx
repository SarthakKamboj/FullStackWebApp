import { Component } from "react"
import { Provider, createClient} from "urql"

const client = createClient({url: "http://localhost:5000/graphql", fetchOptions: {
    credentials: "include",
}});

const MyApp = ({Component, pageProps}) => {
    return (
        <Provider value={client}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;