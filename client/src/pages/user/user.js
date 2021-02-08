import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
// import { useQuery } from 'graphql-hooks';

import { RouteComponentProps } from '@reach/router';

const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      name
    }
  }
`;

function User(props) {
	
	const{ id } = props;

	console.log(id);

	const {error, data } = useQuery(GET_USER, {
	    variables: { id : id }
	});

	console.log(data);


	if (error) return <p>ERROR: {error.message}</p>;
	if (!data) return <p>Not found</p>;

	return(

		<div>
			<p>Ttest</p>
			<p>
	          {data.user.name}
	        </p>
		</div>
	);
}

// const User = ({id} ) => {

// 	console.log("test : " + id);

// 	const {error, data } = useQuery(GET_USER, {
// 	    variables: { id: id }
// 	});

// 		console.log(data);


// 	if (error) return <p>ERROR: {error.message}</p>;
// 	if (!data) return <p>Not found</p>;

// 	return (
// 	    <Fragment>
// 		    <div>
// 		        <p>
// 		          {data.user.name}
// 		        </p>
// 		    </div>
// 	    </Fragment>
//     ); 
// }

export default User;