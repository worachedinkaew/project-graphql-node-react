import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';


import { RouteComponentProps } from '@reach/router';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

// interface UserProps extends RouteComponentProps {
//   id?: any;
// }

// const User: React.FC<UserProps> = ({ id }) => {
const User = ({ id }) => {

	const {error, data } = useQuery(GET_USER, {
	    variables: { id }
	});

	// console.log(id);

	// const {
	// 	    data,
	// 	    error,
	// 	  } = useQuery

	// 	 (GET_USER,
	//     { variables: { id } }
	//   );

	if (error) return <p>ERROR: {error.message}</p>;
	if (!data) return <p>Not found</p>;

	return (
	    <Fragment>
		    <div>
		        <p>
		          {data.user.name}
		        </p>
		    </div>
	    </Fragment>
    ); 
}

export default User;