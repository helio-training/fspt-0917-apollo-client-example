import ApolloClient, { HttpLink } from 'apollo-client-preset'

// const uri = 'https://api.graph.cool/simple/v1/cj9bi3ihz423e0132laol68zu'

// const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj9bi3ihz423e0132laol68zu' })

// console.log(createNetworkInterface)
//
// const networkInterface = createNetworkInterface({
//   uri: 'https://api.graph.cool/simple/v1/cj9bi3ihz423e0132laol68zu'
// });

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj9bi3ihz423e0132laol68zu'
  }),
});

export {
  client,
}