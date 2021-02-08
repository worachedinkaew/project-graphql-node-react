import './App.css';

import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user(id: 2) {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <div>
        <p>
          {data.user.id} : {data.user.name}
        </p>
      </div>
    );
}

export default App;
